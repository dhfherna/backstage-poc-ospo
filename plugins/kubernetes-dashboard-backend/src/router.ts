import express from 'express';
import Router from 'express-promise-router';
import { DashboardParams } from './services/DashboardLoginService/types';

export async function createRouter({
  options,
}: {
  options: DashboardParams,
}): Promise<express.Router> {
  const router = Router();
  router.use(express.json());

  // TEMPLATE NOTE:
  // Zod is a powerful library for data validation and recommended in particular
  // for user-defined schemas. In this case we use it for input validation too.
  //
  // If you want to define a schema for your API we recommend using Backstage's
  // OpenAPI tooling: https://backstage.io/docs/next/openapi/01-getting-started
  router.get('/health', (_, res) => {
    res.json({ status: 'ok' });
  });

  router.get('/config', (_, res) => {
    res.json({
      k8sDashboardUrl: options.k8sDashboardUrl || 'Not defined',
      k8sDashboardToken: options.k8sDashboardToken ? 'Token is set' : 'No token found',
    });
  });

  return router;
}
