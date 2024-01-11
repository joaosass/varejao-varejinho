import { Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Fruit } from '../../store';
import { convertNumberToCurrencyString } from '../../utils/currency';
import useFruitActions from './useFruitAction';

export default function FruitCard({ id, name, price }: Fruit) {
  const { removeFruit } = useFruitActions({ id });

  return (
    <Stack width={250}>
      <Card sx={(theme) => ({ background: theme.palette.primary.main, color: theme.palette.common.white })}>
        <Stack alignItems="center" direction="row" gap={1} p={2} pr={1}>
          <Stack flexGrow={1}>
            <Typography>{name}</Typography>
            <Typography>{convertNumberToCurrencyString(price)}</Typography>
          </Stack>
          <Divider flexItem orientation="vertical" variant="middle" />
          <Stack direction="row">
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })}>
              <AddBoxIcon color="inherit" />
            </IconButton>
            <IconButton sx={(theme) => ({ color: theme.palette.common.white })} onClick={removeFruit}>
              <DeleteIcon color="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
