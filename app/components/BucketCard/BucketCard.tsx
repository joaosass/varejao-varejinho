import { Card, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Bucket } from '../../store';
import useBucketActions from './useBucketActions';
import FruitCard from '../FruitCard';

export default function BucketCard({ bucketIndex, id, fruits, maxSize }: Bucket & { bucketIndex: number }) {
  const { currentFruits, fruitsTotalValue, removeBucket, usedCapacityPercentage } = useBucketActions({ id, fruits, maxSize});

  return (
    <Stack width={250} gap={1}>
      <Card sx={(theme) => ({ background: theme.palette.primary.main, color: theme.palette.common.white })}>
        <Stack p={2} gap={1}>
          <Typography fontWeight="bold">Balde {bucketIndex}</Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Total: {fruitsTotalValue}</Typography>
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={removeBucket}>
              <DeleteIcon />
            </IconButton>
          </Stack>
          <Stack minHeight={250} gap={1}>
            {currentFruits.map((fruit, fruitIndex) =>
              <FruitCard
                id={fruit?.id || ''}
                fruitIndex={fruitIndex}
                key={`fruit-option-${fruit?.id}-${fruitIndex}`}
                isInBucket
                name={fruit?.name || ''}
                price={fruit?.price || 0}
                bucketId={id}
              />
            )}
          </Stack>
        </Stack>
      </Card>
      <Typography fontWeight="bold">Capacidade: {usedCapacityPercentage}</Typography>
    </Stack>
  )
}
