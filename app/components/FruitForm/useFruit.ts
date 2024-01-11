import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import useStore from '../../store';

import schema, { FruitFormSchema } from './schema';
import { convertCurrencyStringToNumber } from '@/app/utils/currency';

export default function useFruit() {
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

  return {
    control,
    errors,
    isValid,
    handleSubmit: handleSubmit(saveFruit)
  }
}
