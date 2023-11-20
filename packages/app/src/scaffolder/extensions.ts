import { createScaffolderFieldExtension, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { CelulasYTrenes } from './CelulasYTrenesExtension';

export const CellsAndTrainsFieldExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension({
    name: 'CelulasYTrenes',
    component: CelulasYTrenes,
  }),
);
