import { kubernetesDashboardPlugin } from './plugin';

describe('kubernetes-dashboard', () => {
  it('should export plugin', () => {
    expect(kubernetesDashboardPlugin).toBeDefined();
  });
});
