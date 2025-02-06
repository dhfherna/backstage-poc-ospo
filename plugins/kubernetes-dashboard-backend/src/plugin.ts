import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './router';
import { catalogServiceRef } from '@backstage/plugin-catalog-node/alpha';
import { DashboardParams } from './services/DashboardLoginService/types';

/**
 * kubernetesDashboardPlugin backend plugin
 *
 * @public
 */
export const kubernetesDashboardPlugin = createBackendPlugin({
  pluginId: 'kubernetes-dashboard',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        auth: coreServices.auth,
        httpAuth: coreServices.httpAuth,
        httpRouter: coreServices.httpRouter,
        catalog: catalogServiceRef,
        config: coreServices.rootConfig,  // 📌 Se agrega para leer las variables del config
      },
      async init({ logger, auth, httpAuth, httpRouter, catalog, config }) {

        const k8sDashboardUrl = config.getOptionalString('kubernetesDashboard.url');
        const k8sDashboardToken = config.getOptionalString('kubernetesDashboard.token');

        logger.info(`🔹 Kubernetes Dashboard Config Loaded:`);
        logger.info(`   - URL: ${k8sDashboardUrl || 'Not defined'}`);
        logger.info(`   - Token: ${k8sDashboardToken ? '✔ Token Loaded' : '❌ No Token Found'}`);

        const options = {k8sDashboardUrl,k8sDashboardToken};

        httpRouter.use(
          await createRouter({
            options,
          }),
        );
      },
    });
  },
});
