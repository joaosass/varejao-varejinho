import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import schema, { BucketFormSchema } from './schema';

import useStore from '../../store';
import Form from '../Form';

export default function BucketForm() {
  const { addBucket } = useStore();
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<BucketFormSchema>({
    defaultValues: {
      maxSize: undefined,
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const saveBucket = ({ maxSize }: BucketFormSchema) => {
    addBucket(maxSize);
  }

  return (
    <Form isValid={isValid} title="Criar Balde" onClick={handleSubmit(saveBucket)}>
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
