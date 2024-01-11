import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import schema, { BucketFormSchema } from './schema';

import useStore from '../../store';

export default function useBucket() {
  const { addBucket } = useStore();
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<BucketFormSchema>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const saveBucket = ({ maxSize }: BucketFormSchema) => {
    addBucket(maxSize);
    reset({ maxSize: 0 })
  }

  return {
    control,
    errors,
    isValid,
    handleSubmit: handleSubmit(saveBucket),
  }
}
