import { createRouter } from '@backstage/plugin-permission-backend';
import {
    AuthorizeResult,
    PolicyDecision,
} from '@backstage/plugin-permission-common';

//import { PermissionPolicy } from '@backstage/plugin-permission-node';

import {
    PermissionPolicy,
    PolicyQuery,
} from '@backstage/plugin-permission-node';

import { Router } from 'express';
import { PluginEnvironment } from '../types';

class TestPermissionPolicy implements PermissionPolicy {
    //async handle(): Promise<PolicyDecision> {
    async handle(request: PolicyQuery): Promise<PolicyDecision> {
        if (request.permission.name === 'catalog.entity.delete') {
            return {
                result: AuthorizeResult.DENY,
            };
        }
        return { result: AuthorizeResult.ALLOW };
    }
}

export default async function createPlugin(
    env: PluginEnvironment,
): Promise<Router> {
    return await createRouter({
        config: env.config,
        logger: env.logger,
        discovery: env.discovery,
        policy: new TestPermissionPolicy(),
        identity: env.identity,
    });
}
