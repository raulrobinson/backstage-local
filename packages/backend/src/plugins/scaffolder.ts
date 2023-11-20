import { CatalogClient } from '@backstage/catalog-client';
import { TemplateAction, createBuiltinActions, createRouter } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import { UrlReader, ContainerRunner, DockerContainerRunner } from '@backstage/backend-common';
import { DiscoveryApi } from '@backstage/plugin-permission-common';
import { Config } from '@backstage/config';
import { createHttpBackstageAction } from '@roadiehq/scaffolder-backend-module-http-request';

import { ScmIntegrations } from '@backstage/integration';
import Docker from 'dockerode';

export const createActions = (options: {
  reader: UrlReader;
  integrations: ScmIntegrations;
  config: Config;
  containerRunner: ContainerRunner;
  catalogClient: CatalogClient;
  discovery: DiscoveryApi;
}): TemplateAction<any>[] => {
  const { reader, integrations, config, catalogClient, discovery } = options;
  const defaultActions = createBuiltinActions({
    reader,
    integrations,
    catalogClient,
    config,
  });

  return [
    createHttpBackstageAction({ discovery }),
    ...defaultActions,
  ];
};


export default async function createPlugin({
  logger,
  config,
  database,
  reader,
  discovery,
}: PluginEnvironment): Promise<Router> {
  const dockerClient = new Docker();
  const containerRunner = new DockerContainerRunner({ dockerClient });

  const catalogClient = new CatalogClient({ discoveryApi: discovery });

  return await createRouter({
    logger,
    config,
    database,
    catalogClient,
    reader,
    actions: createActions({
      reader,
      integrations: ScmIntegrations.fromConfig(config),
      config,
      discovery,
      catalogClient: catalogClient,
      containerRunner: containerRunner,
    }),
  });
}
