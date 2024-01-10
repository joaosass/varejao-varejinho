import { Button, TextField } from '@mui/material'
import Form from '../Form'

export default function BucketForm() {
  return (
    <Form title="Criar Fruta">
      <TextField label="Nome" />
      <TextField label="Preço" />
    </Form>
  )
}
