import { OrderForm } from './Components/OrderForm';
import { OrderSummary } from './Components/OrderSummary';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm />
      <OrderSummary />
    </CheckoutContainer>
  );
}
