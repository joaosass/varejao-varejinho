import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

import type { Fruit } from '../../store';
import useStore from '../../store';

export default function useFruitActions({ id }: Pick<Fruit, 'id'>) {
  const { buckets, putFruitInBucket, removeFruit } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

  const handleDeleteErrorMessage = () =>
    enqueueSnackbar('Não é possível excluir uma fruta que está em um balde!', { variant: 'warning' });

  const handlePuInBucketErrorMessage = () =>
    enqueueSnackbar('Esse balde já atingiu sua capacidade máxima!', { variant: 'warning' });

  const handlePutInBucketSuccess = () =>
    enqueueSnackbar('Fruta adicionada com sucesso!', { variant: 'success' });

  const handleDelete = () => {
    const shouldntDeleteFruit = buckets.some(({ fruits }) => fruits.includes(id));

    if (shouldntDeleteFruit) {
      return handleDeleteErrorMessage();
    }

    removeFruit(id);
  }

  const handleClosePopover = () => setAnchorElement(null);

  const handleOpenPopover = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => setAnchorElement(currentTarget);

  const handlePutFruitInBucket = (bucketId: string) => {
    const currentBucket = buckets.find((bucket) => bucket.id === bucketId);
    if ((currentBucket?.fruits?.length || 0) >= (currentBucket?.maxSize || 0)) {
      return handlePuInBucketErrorMessage();
    }

    putFruitInBucket(id, bucketId);
    handlePutInBucketSuccess();
  }

  return  {
    anchorElement,
    handleClosePopover,
    handleOpenPopover,
    removeFruit: handleDelete,
    putFruitInBucket: handlePutFruitInBucket,
  }
}
