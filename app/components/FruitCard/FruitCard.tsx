import { Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Fruit } from '../../store';
import { convertNumberToCurrencyString } from '../../utils/currency';
import useFruitActions from './useFruitActions';

export default function FruitCard({ id, isInBucket, name, price }: Fruit & { isInBucket: boolean}) {
  const { removeFruit } = useFruitActions({ id });

  return (
    <Stack width={250}>
      <Card sx={(theme) => ({
        background: isInBucket? theme.palette.common.white : theme.palette.primary.main,
        color: isInBucket ? 'inherit' : theme.palette.common.white
      })}>
        <Stack alignItems="center" direction="row" gap={1} p={2} pr={1}>
          <Stack flexGrow={1}>
            <Typography>{name}</Typography>
            <Typography>{convertNumberToCurrencyString(price)}</Typography>
          </Stack>
          <Divider flexItem orientation="vertical" variant="middle" />
          <Stack direction="row">
            {isInBucket ? null : <IconButton sx={(theme) => ({ color: theme.palette.common.white })}>
              <AddBoxIcon color="inherit" />
            </IconButton>}
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={removeFruit}>
              <DeleteIcon color="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
