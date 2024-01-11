import { MenuItem, Popover,  } from '@mui/material';
import useStore from '../../store';

interface BucketSelectProps {
  anchorElement: HTMLButtonElement | null;
  handleClose: () => void;
  handleSelect: (bucketId: string) => void;
}

export default function BucketSelect({ anchorElement, handleClose, handleSelect }: BucketSelectProps) {
  const { buckets } = useStore();

  return (
    <Popover
      open={Boolean(anchorElement)}
      anchorEl={anchorElement}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {buckets.map(({ id }, index) =>
        <MenuItem key={`bucket-option-${id}-${index}`} onClick={() => {
          handleSelect(id);
          handleClose();
        }}>Balde {index}</MenuItem>
      )}
    </Popover>
  )
}
