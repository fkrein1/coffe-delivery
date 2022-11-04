import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { formatNumberTwoDecimals } from '../../utils/formatNumberTwoDecimals';
import {
  AddtoCartButton,
  AddToCartContainer,
  CoffeeCardContainer,
  Description,
  Price,
  QtySelectors,
  Title,
  TypesContainer,
} from './styles';

interface CoffeeCardProps {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const coffeeOnCart = cart.find((coffee) => coffee.id === props.id);

  function handleAddQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function handleSubtractQuantity() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handleAddToCart() {
    if (!coffeeOnCart) {
      const newCart = [...cart, { ...props, quantity }];
      localStorage.setItem(
        `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
        JSON.stringify(newCart),
      );
      return setCart((prev) => newCart);
    }
    if (coffeeOnCart) {
      const newCart = cart.map((coffee) => {
        if (coffee.id === props.id) {
          return { ...coffee, quantity: quantity + coffee.quantity };
        }
        return coffee;
      });
      localStorage.setItem(
        `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
        JSON.stringify(newCart),
      );
      return setCart((prev) => newCart);
    }
  }

  const types = props.type.split(',');

  return (
    <CoffeeCardContainer>
      <img src={props.image} alt={props.name} />
      <TypesContainer>
        {types.map((type) => (
          <span key={type}>{type.trim()}</span>
        ))}
      </TypesContainer>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <Price>
        R$ <strong>{formatNumberTwoDecimals(props.price)}</strong>
      </Price>
      <AddToCartContainer>
        <QtySelectors>
          <button onClick={handleSubtractQuantity}>-</button>
          <div>{quantity}</div>
          <button onClick={handleAddQuantity}>+</button>
        </QtySelectors>
        <AddtoCartButton onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </AddtoCartButton>
      </AddToCartContainer>
    </CoffeeCardContainer>
  );
}
