import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const kubernetesDashboardPlugin = createPlugin({
  id: 'kubernetes-dashboard',
  routes: {
    root: rootRouteRef,
  },
});

export const KubernetesDashboardPage = kubernetesDashboardPlugin.provide(
  createRoutableExtension({
    name: 'KubernetesDashboardPage',
    component: () =>
      import('./components/KubernetesDashboard').then(m => m.KubernetesDashboard),
    mountPoint: rootRouteRef,
  }),
);
