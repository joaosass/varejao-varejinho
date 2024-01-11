import { Card, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Bucket } from '../../store';
import useBucketActions from './useBucketActions';

export default function BucketCard({ id, fruits, maxSize }: Bucket) {
  const { currentFruits, fruitsTotalValue, removeBucket, usedCapacityPercentage } = useBucketActions({ id, fruits, maxSize});

  return (
    <Stack width={250}>
      <Card sx={(theme) => ({ background: theme.palette.primary.main, color: theme.palette.common.white })}>
        <Stack p={2} gap={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Total: {fruitsTotalValue}</Typography>
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={removeBucket}>
              <DeleteIcon />
            </IconButton>
          </Stack>
          <Stack minHeight={250}>
            {currentFruits.map((fruit) => <span key={fruit?.name}>{fruit?.name}</span>)}
          </Stack>
        </Stack>
      </Card>
      <Typography>Capacidade: {usedCapacityPercentage}</Typography>
    </Stack>
  )
}
