import React, { useEffect } from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { configApiRef } from '@backstage/core-plugin-api';

const KubernetesDashboard = () => {
  const configApi = useApi(configApiRef);

  useEffect(() => {
    // Leer la URL y el token del Dashboard desde la configuración
    const dashboardUrl = configApi.getOptionalString('kubernetesDashboard.url');
    const token = configApi.getOptionalString('kubernetesDashboard.token');

    if (dashboardUrl && token) {
      // Construir la URL con el token y redirigir
      const urlWithToken = `${dashboardUrl}?auth_token=${encodeURIComponent(token)}`;
      window.location.href = urlWithToken;
    } else {
      console.error('La configuración de Kubernetes Dashboard no está completa.');
    }
  }, [configApi]);

  return (
    <div>
      <h1>Redirigiendo al Kubernetes Dashboard...</h1>
    </div>
  );
};

export default KubernetesDashboard;
