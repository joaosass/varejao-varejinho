import { Card } from '@mui/material';

import useStore from '../../store';
import { nanoid } from 'nanoid';
import EmptyState from '../EmptyState';

export default function BucketList() {
  const { buckets } = useStore();

  if (!buckets.length) {
    return <EmptyState message="Sem baldes no momento" />
  }

  return (
    <Card>
      {buckets.map((_, index) => <div key={nanoid()}>{index}</div>)}
    </Card>
  )
}
