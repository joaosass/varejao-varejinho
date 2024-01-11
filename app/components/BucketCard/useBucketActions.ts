import { useSnackbar } from 'notistack';

import type { Bucket } from '../../store';
import useStore from '../../store';
import { convertNumberToCurrencyString } from '../../utils/currency';

export default function useBucketActions({ fruits, id, maxSize }: Bucket) {
  const { fruits: fruitList, removeBucket } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const usedCapacityPercentage = fruits.length ? `${(maxSize / (fruits.length * 100)).toFixed(1)}%`: '0%';
  console.log(fruits);
  console.log(fruitList);
  const currentFruits = fruits.map((fruitId) => fruitList.find(({ id }) => id === fruitId));
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
