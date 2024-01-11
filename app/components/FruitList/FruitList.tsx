import { Stack } from '@mui/material';

import useStore from '../../store';
import FruitCard from '../FruitCard';
import EmptyState from '../EmptyState';

export default function FruitList() {
  const { fruits } = useStore();

  if (!fruits.length) {
    return <EmptyState message="Sem frutas no momento" />
  }

  return (
    <Stack direction="row" gap={2}>
      {fruits.map(({id, ...fruit}) => <FruitCard key={id} id={id} {...fruit} />)}
    </Stack>
  )
}
