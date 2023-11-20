import React, { useMemo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const CelulasYTrenes = (
  props: FieldExtensionComponentProps<string[]>,
) => {
  const { formData } = props.formContext;
  const { required, onChange, rawErrors } = props;
  const catalogApi = useApi(catalogApiRef);

  const {
    value = { items: [] },
    loading,
    error= false,
  } = useAsync(() =>
    catalogApi.getEntities({
      filter: {
        kind: 'Group',
      },
    }),
  );  

  const allCells = useMemo(
    () =>
      value.items.filter(
        item =>
          item?.spec?.type !== 'tren' &&
          item?.spec?.type !== 'coe'
      ),
    [value],
  );

  const parseCellData = useMemo(
    () =>
      allCells.map(cell => {
        const parentTrain =  cell?.spec?.parent;
        return {
          id: cell.metadata.uid,
          value: cell.metadata.name,
          train: parentTrain,
        };
      }),
    [allCells],
  );

  const handleChange = (event: any) => {
    const filterTrain = parseCellData.filter(
      item => item.value === event.target.value,
    );
    onChange({
      celula: event.target.value,
      tren: filterTrain[0].train
    });
  };

  return (
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0 && !formData}
    >
      <InputLabel htmlFor="validateName">Organización *</InputLabel>
      <Select
        disabled={loading}
        labelId="validateName"
        id="validateName"
        value={formData?.organizationAndTrain?.celula}
        onChange={handleChange}
      >
        {parseCellData.map(celula => (
          <MenuItem key={celula.id} value={celula.value}>
            {celula.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id="entityName" error={error ? true : undefined}>
        {error ? 'Error al obtener los grupos' : 'Organización propietaria del repositorio'}
      </FormHelperText>
    </FormControl>
  );
};
