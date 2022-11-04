import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
  flex-basis: 40%;
`;

export const CoffeeContainer = styled.div`
  border-radius: 6px 44px;
  padding: 40px;
  max-width: 500px;
  background: ${(props) => props.theme['base-card']};
`;

export const CoffeCard = styled.div`
  :first-child {
    padding-top: 0px;
  }

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-block: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SelectorsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const QtySelectors = styled.div`
  display: flex;

  button,
  div {
    background: ${(props) => props.theme['base-button']};
    border: none;
    color: ${(props) => props.theme.purple};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 20px;
  }

  button {
    height: 32px;
    width: 24px;
    cursor: pointer;
  }

  button:nth-child(1) {
    border-radius: 6px 0 0 6px;
    z-index: 1;
  }

  button:nth-child(3) {
    border-radius: 0 6px 6px 0;
  }
`;

export const Price = styled.p`
  text-align: right;
  font-weight: 700;
  font-size: 16px;
  min-width: 60px;
  line-height: 130%;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 0px 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: none;
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.purple};
  }
`;

export const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    margin-top: 12px;
    padding: 12px 8px;
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`;
export const Subtotal = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    line-height: 130%;
  }

  p {
    font-size: 16px;
    line-height: 130%;
  }
`;
export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 14px;
    line-height: 130%;
  }

  p {
    font-size: 16px;
    line-height: 130%;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  span,
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
`;
