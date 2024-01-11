import { Stack, Typography } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <Stack alignItems="center" gap={2} p={4} justifyContent="center">
      <FeedbackIcon fontSize="large" />
      <Typography fontWeight="bold">{message}</Typography>
    </Stack>
  )
}
