import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { OrderInputs } from './Components/OrderInputs';
import { OrderSummary } from './Components/OrderSummary';
import { CheckoutForm } from './styles';

export enum PaymentOptions {
  Credit = 'Credit',
  Debit = 'Debit',
  Cash = 'Cash',
}

const checkoutFormValidationSchema = zod.object({
  zip: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o UF'),
  payment: zod.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  });

  const { handleSubmit } = checkoutForm;

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => console.log(data);

  function handleSubmitOrder(data: CheckoutFormData) {
    // console.log(data);
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...checkoutForm}>
        <OrderInputs />
        <OrderSummary />
      </FormProvider>
    </CheckoutForm>
  );
}
