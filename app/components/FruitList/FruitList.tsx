import { Stack } from '@mui/material';

import useStore from '../../store';
import FruitCard from '../FruitCard';

export default function FruitList() {
  const { fruits } = useStore();

  return (
    <Stack direction="row" gap={2}>
      {fruits.map(({id, ...fruit}) => <FruitCard key={id} id={id} {...fruit} />)}
    </Stack>
  )
}
