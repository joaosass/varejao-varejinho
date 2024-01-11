import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import Form from '../Form';

import useBucket from './useBucket';

export default function BucketForm() {
  const { control, errors, handleSubmit, isValid } = useBucket();

  return (
    <Form isValid={isValid} title="Criar Balde" onClick={handleSubmit}>
      <Controller
        control={control}
        name="maxSize"
        render={({ field }) =>
          <TextField error={Boolean(errors.maxSize?.message)} helperText={errors.maxSize?.message} label="Capacidade" {...field} />
        }
      />
    </Form>
  )
}
