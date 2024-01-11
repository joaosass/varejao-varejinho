import { useMemo } from 'react';
import { useSnackbar } from 'notistack';

import type { Bucket } from '../../store';
import useStore from '../../store';
import { convertNumberToCurrencyString } from '../../utils/currency';

export default function useBucketActions({ fruits, id, maxSize }: Bucket) {
  const { fruits: fruitList, removeBucket } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const usedCapacityPercentage = fruits.length ? `${((fruits.length * 100) / maxSize).toFixed(1)}%`: '0%';
  const currentFruits = useMemo(() =>
    fruits.map((fruitId) => fruitList.find(({ id }) => id === fruitId)),
  [fruits, fruitList]);
  const fruitsTotalValue = convertNumberToCurrencyString(currentFruits.reduce((acc, currentValue) => (currentValue?.price || 0) + acc, 0))

  const handleErrorCallback = () => 
    enqueueSnackbar('Não é possível excluir um balde com frutas!', { variant: 'warning' });

  const handleDelete = () => {
    const shouldntDeleteBucket = fruits.length;

    if (shouldntDeleteBucket) {
      return handleErrorCallback();
    }

    removeBucket(id);
  }

  return  {
    currentFruits,
    fruitsTotalValue,
    usedCapacityPercentage,
    removeBucket: handleDelete,
  }
}
