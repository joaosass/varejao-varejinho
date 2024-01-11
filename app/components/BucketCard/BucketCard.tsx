import { Card, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Bucket } from '../../store';
import useBucketActions from './useBucketActions';
import FruitCard from '../FruitCard';

export default function BucketCard({ bucketIndex, id, fruits, maxSize }: Bucket & { bucketIndex: number }) {
  const { currentFruits, fruitsTotalValue, removeBucket, usedCapacityPercentage } = useBucketActions({ id, fruits, maxSize});

  return (
    <Stack width={250}>
      <Card sx={(theme) => ({ background: theme.palette.primary.main, color: theme.palette.common.white })}>
        <Stack p={2} gap={1}>
          <Typography>Balde {bucketIndex}</Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Total: {fruitsTotalValue}</Typography>
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={removeBucket}>
              <DeleteIcon />
            </IconButton>
          </Stack>
          <Stack minHeight={250} gap={1}>
            {currentFruits.map((fruit) =>
              <FruitCard
                key={fruit?.id}
                id={fruit?.id || ''}
                isInBucket
                name={fruit?.name || ''}
                price={fruit?.price || 0}
              />
            )}
          </Stack>
        </Stack>
      </Card>
      <Typography>Capacidade: {usedCapacityPercentage}</Typography>
    </Stack>
  )
}
