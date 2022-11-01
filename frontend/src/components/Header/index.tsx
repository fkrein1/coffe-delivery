import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../assets/logo.svg';
import { CheckoutIcon, HeaderContainer, IconsContainer, LocationIcon } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <IconsContainer>
        <LocationIcon>
          <MapPin size={20} weight="fill" />
          <p>Brasil</p>
        </LocationIcon>

        <CheckoutIcon>
          <ShoppingCart size={20} weight="fill" />
        </CheckoutIcon>
      </IconsContainer>
    </HeaderContainer>
  );
}
