import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { getAddress } from '../../../../services/getAddress';
import {
  AddressContainer,
  AddressSummary,
  City,
  FormError,
  Number,
  OrderFormContainer,
  PaymentContainer,
  PaymentSummary,
  PaymentTypes,
  Street,
  Zip,
} from './styles';

export function OrderInputs() {
  const {
    register,
    watch,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useFormContext();
  const zipInput = watch('zip');
  const zipRegex = /^[0-9]{8}$/g;
  const validZipInput = zipRegex.test(zipInput);
  const filledStreetInputValue = getValues('street');

  useEffect(() => {
    const findZipCode = async () => {
      try {
        const data = await getAddress(zipInput);
        setValue('street', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      } catch (err) {
        alert('CEP inválido');
        reset();
      }
    };
    if (validZipInput) {
      findZipCode();
    }
    if (!validZipInput && filledStreetInputValue) {
      setValue('street', '');
      setValue('neighborhood', '');
      setValue('city', '');
      setValue('state', '');
    }
  }, [zipInput]);

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
          <input
            type="text"
            placeholder="CEP"
            maxLength={8}
            {...register('zip')}
          />
          <FormError>{errors.zip?.message as string}</FormError>
        </Zip>
        <Street>
          <input type="text" placeholder="Rua" {...register('street')} />
          <FormError>{errors.street?.message as string}</FormError>
        </Street>
        <Number>
          <div>
            <input type="text" placeholder="Número" {...register('number')} />
            <FormError>{errors.number?.message as string}</FormError>
          </div>

          <div>
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <span>Opcional</span>
          </div>
        </Number>
        <City>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <FormError>{errors.neighborhood?.message as string}</FormError>
          </div>
          <div>
            <input type="text" placeholder="Cidade" {...register('city')} />
            <FormError>{errors.city?.message as string}</FormError>
          </div>
          <div>
            <input
              type="text"
              placeholder="UF"
              maxLength={2}
              {...register('state')}
            />
            <FormError>{errors.state?.message as string}</FormError>
          </div>
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
            <input type="radio" id="credit" {...register('payment')} />
            <CreditCard />
            <span>Crédito</span>
          </label>
          <label htmlFor="debit">
            <input type="radio" id="debit" {...register('payment')} />
            <Bank />
            <span>Débito</span>
          </label>
          <label htmlFor="cash">
            <input type="radio" id="cash" {...register('payment')} />
            <Money />
            <span>Dinheiro</span>
          </label>
        </PaymentTypes>
        <FormError>{errors.payment?.message as string}</FormError>
      </PaymentContainer>
    </OrderFormContainer>
  );
}
