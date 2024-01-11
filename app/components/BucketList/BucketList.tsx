import { Card, Stack } from '@mui/material';

import useStore from '../../store';
import EmptyState from '../EmptyState';
import BucketCard from '../BucketCard';

export default function BucketList() {
  const { buckets } = useStore();

  if (!buckets.length) {
    return <EmptyState message="Sem baldes no momento" />
  }

  return (
    <Card>
      <Stack direction="row" gap={2} flexWrap="wrap" p={3}>
        {buckets.map(({ id, ...bucket }, index) => <BucketCard key={id} bucketIndex={index} id={id} {...bucket} />)}
      </Stack>
    </Card>
  )
}
