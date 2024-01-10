import { Button, Card, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  isValid: boolean;
  onClick: () => void;
  title: string;
}

export default function Form({ children, isValid, onClick, title }: FormProps) {
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <Stack py={3} px={4} gap={3}>
        <Typography variant="h5" fontWeight="bold">{title}</Typography>
        <Stack gap={2}>{children}</Stack>
        <Button disabled={!isValid} onClick={onClick} variant="contained">Salvar</Button>
      </Stack>
    </Card>
  )
}
