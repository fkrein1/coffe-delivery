import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <IconsContainer>
        <LocationIcon>
          <MapPin weight="fill" />
          <p>Brasil</p>
        </LocationIcon>

        <Link to="/checkout">
          <CheckoutIcon>
            <ShoppingCart weight="fill" />
            {itemsOnCart !== 0 && <div>{itemsOnCart}</div>}
          </CheckoutIcon>
        </Link>
      </IconsContainer>
    </HeaderContainer>
  );
}
