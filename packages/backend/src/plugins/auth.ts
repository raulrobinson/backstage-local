import {
  createRouter,
  providers,
  defaultAuthProviderFactories,
} from '@backstage/plugin-auth-backend';
//import { DEFAULT_NAMESPACE, stringifyEntityRef, } from '@backstage/catalog-model';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import {DEFAULT_NAMESPACE, stringifyEntityRef} from "@backstage/catalog-model";

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    providerFactories: {
      ...defaultAuthProviderFactories,
      github: providers.github.create({
        signIn: {
          async resolver({ result: { fullProfile } }, ctx) {
            const userId = fullProfile.username;
            if (!userId) {
              throw new Error(
                  `GitHub user profile does not contain a username`,
              );
            }

            const userEntityRef = stringifyEntityRef({
              kind: 'User',
              name: userId,
              namespace: DEFAULT_NAMESPACE,
            });

            return ctx.issueToken({
              claims: {
                sub: userEntityRef,
                ent: [userEntityRef],
              },
            });
          },
        },
      }),
      //microsoft: providers.microsoft.create({
      //  signIn: {
      //    resolver: async ({ profile }, ctx) => {
      //        if (!profile.email) {
      //          throw new Error(
      //            'Login failed, user profile does not contain an email',
      //          );
      //        }
      //        // We again use the local part of the email as the username.
      //        const [localPart] = profile.email.split('@');
      //
      //        // By using `stringifyEntityRef` we ensure that the reference is formatted correctly
      //        const userEntityRef = stringifyEntityRef({
      //          kind: 'User',
      //          name: localPart,
      //          namespace: DEFAULT_NAMESPACE,
      //        });
      //
      //        return ctx.issueToken({
      //          claims: {
      //            sub: userEntityRef,
      //            ent: [userEntityRef],
      //          },
      //        });
      //      },
      //  },
      //}),
      },
    });
}
