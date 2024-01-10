'use client'

import { Stack } from '@mui/material';
import { useEffect } from 'react';

import BucketList from './components/BucketList';
import BucketForm from './components/BucketForm';
import FruitForm from './components/FruitForm';
import useStore from './store';

export default function Home() {
    useEffect(() => {
      useStore.persist.rehydrate();
    }, []);

  return (
    <Stack bgcolor="#E5E5E5" minHeight="100vh" gap={3} px={5} py={4}>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        <Stack flexGrow={1} minWidth={350}>
          <BucketForm />
        </Stack>
        <Stack flexGrow={1} minWidth={350}>
          <FruitForm />
        </Stack>
      </Stack>
      <Stack></Stack>
      <BucketList />
    </Stack>
  )
}
