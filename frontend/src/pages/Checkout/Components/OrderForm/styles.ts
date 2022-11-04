import styled from 'styled-components';

export const OrderFormContainer = styled.div`
  flex-basis: 60%;
`;

export const AddressContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    padding: 12px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }
`;

export const AddressSummary = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    p:nth-child(1) {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p:nth-child(2) {
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const Zip = styled.div`
  display: flex;
  input {
    flex-basis: 35%;
  }
`;
export const Street = styled.div`
  input {
    width: 100%;
  }
`;
export const Number = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  input:nth-child(1) {
    flex-basis: 35%;
  }

  input:nth-child(2) {
    flex-basis: 65%;
  }
  span {
    position: absolute;
    font-size: 12px;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    left: calc(100% - 60px);
    bottom: 13px;
  }
`;
export const City = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  input:nth-child(1) {
    flex-basis: 40%;
  }

  input:nth-child(2) {
    flex-basis: 60%;
  }

  input:nth-child(3) {
    max-width: 60px;
  }
`;

export const PaymentContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;

export const PaymentSummary = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.purple};
  }

  div {
    p:nth-child(1) {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p:nth-child(2) {
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const PaymentTypes = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    flex-basis: 33%;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  label:has(input:checked) {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

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

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }
`;
