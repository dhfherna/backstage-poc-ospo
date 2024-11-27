import React from 'react';
import { render } from '@testing-library/react';
import { useApi } from '@backstage/core-plugin-api';
import KubernetesDashboard from './KubernetesDashboard';

jest.mock('@backstage/core-plugin-api', () => ({
  useApi: jest.fn(),
}));

describe('KubernetesDashboard', () => {
  it('redirecciona correctamente con token y URL válidos', () => {
    const mockUseApi = useApi as jest.Mock;

    // Mock de window.location.href
    const originalLocation = window.location;
    delete (window as any).location;
    window.location = { href: '' } as any;

    // Simula valores válidos de configuración
    mockUseApi.mockReturnValue({
      getOptionalString: (key: string) => {
        if (key === 'kubernetesDashboard.url') return 'https://example-dashboard-url';
        if (key === 'kubernetesDashboard.token') return 'fake-token';
        return null;
      },
    });

    render(<KubernetesDashboard />);
    expect(window.location.href).toBe(
      'https://example-dashboard-url?auth_token=fake-token'
    );

    // Restaura el comportamiento original de location
    window.location = originalLocation;
  });

  it('no redirige si no hay token o URL configurados', () => {
    const mockUseApi = useApi as jest.Mock;
    const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Simula valores faltantes en la configuración
    mockUseApi.mockReturnValue({
      getOptionalString: () => null,
    });

    render(<KubernetesDashboard />);
    expect(mockError).toHaveBeenCalledWith(
      'La configuración de Kubernetes Dashboard no está completa.'
    );

    // Limpia el mock del error
    mockError.mockRestore();
  });

  it('muestra el mensaje de redirección mientras se procesa', () => {
    const mockUseApi = useApi as jest.Mock;

    // Simula valores válidos para configuración
    mockUseApi.mockReturnValue({
      getOptionalString: () => null,
    });

    const { getByText } = render(<KubernetesDashboard />);
    expect(getByText('Redirigiendo al Kubernetes Dashboard...')).toBeInTheDocument();
  });
});
