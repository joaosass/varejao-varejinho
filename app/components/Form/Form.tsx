import type { ReactNode } from 'react';
import { Button, Card, Stack, Typography } from '@mui/material';

interface FormProps {
  title: string;
  children: ReactNode
}

export default function Form({ children, title }: FormProps) {
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <Stack py={3} px={4} gap={3}>
        <Typography variant="h5">{title}</Typography>
        <Stack gap={2}>{children}</Stack>
        <Button variant="contained">Salvar</Button>
      </Stack>
    </Card>
  )
}
