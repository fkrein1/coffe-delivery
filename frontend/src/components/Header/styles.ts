import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 32px;
  margin-inline: 160px;

  > img {
    width: 90px;
    height: 40px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 4px;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CheckoutIcon = styled.div`
  border-radius: 6px;
  padding: 6px;
  background: ${(props) => props.theme['yellow-light']};
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`;
