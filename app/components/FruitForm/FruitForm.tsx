import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import useStore from '../../store';
import Form from '../Form';

import schema, { FruitFormSchema } from './schema';
import { convertCurrencyStringToNumber, convertNumberToCurrencyString } from '@/app/utils/currency';

export default function BucketForm() {
  const { addFruit } = useStore();
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<FruitFormSchema>({
    defaultValues: {
      name: '',
      price: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const saveFruit = ({ name, price }: FruitFormSchema) => {
    addFruit(name, convertCurrencyStringToNumber(price));
    reset({ name: '', price: '' });
  }

  return (
    <Form isValid={isValid} title="Criar Fruta" onClick={handleSubmit(saveFruit)}>
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
