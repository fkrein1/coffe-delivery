import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../services/createOrder';
import { OrderInputs } from './Components/OrderInputs';
import { OrderSummary } from './Components/OrderSummary';
import { CheckoutForm } from './styles';

export enum PaymentOptions {
  Credit = 'Cartão de Crédito',
  Debit = 'Cartão de Débito',
  Cash = 'Dinheiro',
}

const checkoutFormValidationSchema = zod.object({
  zip: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o UF'),
  paymentMethod: zod.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
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

  async function submitOrder(data: CheckoutFormData) {
    const itemsPayload = cart.map((coffee) => {
      return { id: coffee.id, quantity: coffee.quantity };
    });
    const newOrder = await createOrder({ ...data, coffees: itemsPayload });
    setCart([]);
    localStorage.setItem(
      `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
      JSON.stringify([]),
    );
    navigate(`/order/${newOrder.id}`);
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(submitOrder)}>
      <FormProvider {...checkoutForm}>
        <OrderInputs />
        <OrderSummary />
      </FormProvider>
    </CheckoutForm>
  );
}
