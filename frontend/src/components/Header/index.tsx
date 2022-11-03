import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { CartContext } from '../../context/CartContext';
import {
  CheckoutIcon,
  HeaderContainer,
  IconsContainer,
  LocationIcon,
} from './styles';

export function Header() {
  const { cart } = useContext(CartContext);

  const itemsOnCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <IconsContainer>
        <LocationIcon>
          <MapPin weight="fill" />
          <p>Brasil</p>
        </LocationIcon>

        <CheckoutIcon>
          <ShoppingCart weight="fill" />
          {itemsOnCart !== 0 && <div>{itemsOnCart}</div>}
        </CheckoutIcon>
      </IconsContainer>
    </HeaderContainer>
  );
}
