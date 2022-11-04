import {
  AddressInfo,
  DeliveryInfo,
  OrderContainer,
  OrderDetails,
  OrderImage,
  OrderInfo,
  OrderSumary,
  PaymentInfo,
} from './styles';

import { useQuery } from '@tanstack/react-query';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import orderImage from '../../assets/order-image.svg';
import { getOrder } from '../../services/getOrder';

export function Order() {
  const { id } = useParams();

  const { data } = useQuery(['order', id], () => getOrder(id as string));

  return (
    <OrderContainer>
      <OrderInfo>
        <OrderSumary>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </OrderSumary>
        <OrderDetails>
          <AddressInfo>
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>{`${data?.street}, ${data?.number}`}</strong>
              </span>
              <span>{`${data?.neighborhood} - ${data?.city}, ${data?.uf}`}</span>
            </div>
          </AddressInfo>
          <DeliveryInfo>
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </DeliveryInfo>
          <PaymentInfo>
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{data?.paymentMethod}</strong>
              </span>
            </div>
          </PaymentInfo>
        </OrderDetails>
      </OrderInfo>
      <OrderImage>
        <img
          src={orderImage}
          alt="Ilustração de homem dirigindo scooter roxa com pacote na garupa"
        />
      </OrderImage>
    </OrderContainer>
  );
}
