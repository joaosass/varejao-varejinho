import { Card } from '@mui/material';

import useStore from '../../store';
import { nanoid } from 'nanoid';

export default function BucketForm() {
  const { buckets } = useStore();

  return (
    <Card variant="outlined">
      {buckets.map((_, index) => <div key={nanoid()}>{index}</div>)}
    </Card>
  )
}
