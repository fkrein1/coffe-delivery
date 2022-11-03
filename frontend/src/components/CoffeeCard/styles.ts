import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  align-items: center;
  position: relative;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -20px;
  }
`;

export const TypesContainer = styled.div`
  margin-top: 112px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-inline: 20px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
  }
`;

export const Title = styled.h3`
  margin-top: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  margin-inline: 20px;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Description = styled.p`
  margin-top: 8px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-inline: 20px;
`;

export const Price = styled.p`
  margin-top: auto;
  margin-bottom: 10px;
  text-align: right;
  font-size: 14px;

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
  }
`;

export const AddToCartContainer = styled.div`
  margin-inline: 24px;
  gap: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QtySelectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  button,
  div {
    background: ${(props) => props.theme['base-button']};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
  }

  button {
    color: ${(props) => props.theme.purple};
    border: none;
    cursor: pointer;
  }

  button:nth-child(1) {
    border-radius: 6px 0 0 6px;
  }

  button:nth-child(3) {
    border-radius: 0 6px 6px 0;
  }
`;

export const AddtoCartButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  cursor: pointer;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.white};
  }
`;
