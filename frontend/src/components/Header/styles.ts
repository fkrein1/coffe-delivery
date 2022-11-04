import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 32px;
  padding-inline: 160px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${(props) => props.theme.background};

  > img {
    width: 90px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding-inline: 80px;
    padding-block: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LocationIcon = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  svg {
    color: ${(props) => props.theme.purple};
    width: 20px;
    height: 20px;
  }
`;

export const CheckoutIcon = styled.button`
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 6px;
  padding: 6px;
  background: ${(props) => props.theme['yellow-light']};

  div {
    position: absolute;
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -10px;
    z-index: 1;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    color: ${(props) => props.theme['yellow-dark']};
    width: 20px;
    height: 20px;
  }
`;
