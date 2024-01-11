import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

import type { Fruit } from '../../store';
import useStore from '../../store';
import { FruitCardProps } from './FruitCard';

export default function useFruitActions({
  bucketId,
  fruitIndex,
  id,
  isInBucket
}: Pick<Fruit, 'id'> & FruitCardProps) {
  const { buckets, putFruitInBucket, removeFruit, removeFruitFromBucket } = useStore();
  const { enqueueSnackbar } = useSnackbar();

  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

  const handleDeleteErrorMessage = () =>
    enqueueSnackbar('Não é possível excluir uma fruta que está em um balde!', { variant: 'warning' });

  const handlePuInBucketErrorMessage = () =>
    enqueueSnackbar('Esse balde já atingiu sua capacidade máxima!', { variant: 'warning' });

  const handlePutInBucketSuccess = () =>
    enqueueSnackbar('Fruta adicionada com sucesso!', { variant: 'success' });

  const handleRemoveFromBucketSuccess = () =>
    enqueueSnackbar('Fruta removida com sucesso!', { variant: 'success' });

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

  const handleRemoveFruitFromBucket = () => {
    removeFruitFromBucket(fruitIndex || 0, bucketId || '');
    handleRemoveFromBucketSuccess();
  }

  return  {
    anchorElement,
    handleClosePopover,
    handleOpenPopover,
    removeFruit: isInBucket ? handleRemoveFruitFromBucket : handleDelete,
    putFruitInBucket: handlePutFruitInBucket,
  }
}
