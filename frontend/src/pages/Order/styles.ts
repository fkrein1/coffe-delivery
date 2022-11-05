import styled from 'styled-components';

export const OrderContainer = styled.div`
  display: flex;
  margin-block: 80px;
  margin-inline: 160px;
  gap: 100px;
  @media (max-width: 1248px) {
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
      margin-inline: 40px;
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const OrderSumary = styled.div`
  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`;

const OrderItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  div:nth-child(1) {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    svg {
      color: ${(props) => props.theme.white};
      height: 15px;
      width: 15px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const AddressInfo = styled(OrderItems)`
  div:nth-child(1) {
    background: ${(props) => props.theme.purple};
  }
`;
export const DeliveryInfo = styled(OrderItems)`
  div:nth-child(1) {
    background: ${(props) => props.theme.yellow};
  }
`;
export const PaymentInfo = styled(OrderItems)`
  div:nth-child(1) {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

export const OrderImage = styled.div`
  align-self: flex-end;
  img {
    width: 100%;
  }
`;
