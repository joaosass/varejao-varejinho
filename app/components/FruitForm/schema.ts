import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .required('O campo "Nome" é obrigatório!'),
    price: yup
      .string()
      .required('O campo "Preço" é obrigatório!'),
  })
  .required()

export interface FruitFormSchema {
  name: string;
  price: string;
}

export default schema;