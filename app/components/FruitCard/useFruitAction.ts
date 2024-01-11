import { useSnackbar } from 'notistack';

import type { Fruit } from '../../store';
import useStore from '../../store';

export default function useFruitActions({ id }: Pick<Fruit, 'id'>) {
  const { buckets, removeFruit } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const handleErrorCallback = () => 
    enqueueSnackbar('Não é possível excluir uma fruta que está em um balde!', { variant: 'warning' });

  const handleDelete = () => {
    const shouldDeleteFruit = buckets.some(({ fruits }) => fruits.includes(id));

    if (shouldDeleteFruit) {
      return handleErrorCallback();
    }

    removeFruit(id);
  }

  return  {
    removeFruit: handleDelete,
  }
}
