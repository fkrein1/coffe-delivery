import styled from 'styled-components';

export const CheckoutForm = styled.form`
  display: flex;
  gap: 32px;
  margin-inline: 160px;
  margin-block: 40px;
  @media (max-width: 1248px) {
    flex-direction: column;
    @media (max-width: 768px) {
      margin-inline: 40px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
  }
`;
