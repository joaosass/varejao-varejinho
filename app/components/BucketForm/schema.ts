import * as yup from 'yup';

const schema = yup
  .object({
    maxSize: yup
      .number()
      .typeError('O Campo "Capacidade" deve ser um número!')
      .positive('O campo "Capacidade" deve ser um número positivo!')
      .integer('O campo "Capacidade" deve ser um número inteiro!')
      .required('O campo "Capacidade" é obrigatório!'),
  })
  .required()

export interface BucketFormSchema {
  maxSize: number;
}

export default schema;