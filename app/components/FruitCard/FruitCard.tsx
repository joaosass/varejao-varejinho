import { Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Fruit } from '../../store';
import { convertNumberToCurrencyString } from '../../utils/currency';
import useFruitActions from './useFruitActions';
import BucketSelect from '../BucketSelect';

export default function FruitCard({ id, isInBucket, name, price }: Fruit & { isInBucket: boolean }) {
  const {
    anchorElement,
    handleClosePopover,
    handleOpenPopover,
    putFruitInBucket,
    removeFruit
  } = useFruitActions({ id });

  return (
    <Stack width={isInBucket ? '100%' : 250}>
      <Card sx={(theme) => ({
        background: isInBucket? theme.palette.common.white : theme.palette.primary.main,
        color: isInBucket ? theme.palette.common.black : theme.palette.common.white
      })}>
        <Stack alignItems="center" direction="row" gap={1} p={2} pr={1}>
          <Stack flexGrow={1}>
            <Typography>{name}</Typography>
            <Typography>{convertNumberToCurrencyString(price)}</Typography>
          </Stack>
          <Divider flexItem orientation="vertical" variant="middle" />
          <Stack direction="row">
            {isInBucket ? null : <IconButton onClick={handleOpenPopover} sx={(theme) => ({ color: theme.palette.common.white })}>
              <AddBoxIcon color="inherit" />
            </IconButton>}
            <IconButton sx={(theme) => ({ color: isInBucket ? theme.palette.common.black : theme.palette.common.white })} onClick={removeFruit}>
              <DeleteIcon color="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
      <BucketSelect anchorElement={anchorElement} handleClose={handleClosePopover} handleSelect={putFruitInBucket} />
    </Stack>
  )
}
