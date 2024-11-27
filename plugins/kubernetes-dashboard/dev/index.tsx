import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { kubernetesDashboardPlugin, KubernetesDashboardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(kubernetesDashboardPlugin)
  .addPage({
    element: <KubernetesDashboardPage />,
    title: 'Root Page',
    path: '/kubernetes-dashboard',
  })
  .render();
