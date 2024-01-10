'use client'

import { Stack } from '@mui/material'
import BucketForm from './components/BucketForm'
import FruitForm from './components/FruitForm'

export default function Home() {
  return (
    <Stack gap={3} px={5} py={4}>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        <Stack flexGrow={1} minWidth={350}>
          <BucketForm />
        </Stack>
        <Stack flexGrow={1} minWidth={350}>
          <FruitForm />
        </Stack>
      </Stack>
      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  )
}
