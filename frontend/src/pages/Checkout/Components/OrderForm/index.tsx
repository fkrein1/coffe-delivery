import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  AddressContainer,
  AddressSummary,
  City,
  Number,
  OrderFormContainer,
  PaymentContainer,
  PaymentSummary,
  PaymentTypes,
  Street,
  Zip,
} from './styles';

export function OrderForm() {
  return (
    <OrderFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressContainer>
        <AddressSummary>
          <MapPinLine />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressSummary>
        <Zip>
          <input type="text" placeholder="CEP" />
        </Zip>
        <Street>
          <input type="text" placeholder="Rua" />
        </Street>
        <Number>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <span>Opcional</span>
        </Number>
        <City>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </City>
      </AddressContainer>

      <PaymentContainer>
        <PaymentSummary>
          <CurrencyDollar />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentSummary>
        <PaymentTypes>
          <label htmlFor="credit">
            <input type="radio" id="credit" name="payment" />
            <CreditCard />
            <span>Crédito</span>
          </label>
          <label htmlFor="debit">
            <input type="radio" id="debit" name="payment" />
            <Bank />
            <span>Débito</span>
          </label>
          <label htmlFor="cash">
            <input type="radio" id="cash" name="payment" />
            <Money />
            <span>Dinheiro</span>
          </label>
        </PaymentTypes>
      </PaymentContainer>
    </OrderFormContainer>
  );
}
