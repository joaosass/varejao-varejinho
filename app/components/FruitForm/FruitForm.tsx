import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { convertCurrencyStringToNumber, convertNumberToCurrencyString } from '../../utils/currency';
import Form from '../Form';

import useFruit from './useFruit';

export default function BucketForm() {
  const { control, errors, handleSubmit, isValid } = useFruit();

  return (
    <Form isValid={isValid} title="Criar Fruta" onClick={handleSubmit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) =>
          <TextField
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            label="Nome"
            {...field}
          />
        }
      />
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, ...field } }) =>
          <TextField
            error={Boolean(errors.price?.message)}
            helperText={errors.price?.message}
            label="Preço"
            {...field}
            onChange={({ target: { value } }) =>
              onChange(convertNumberToCurrencyString(
                convertCurrencyStringToNumber(value)
              ))
            }
          />
        }
      />
    </Form>
  )
}
