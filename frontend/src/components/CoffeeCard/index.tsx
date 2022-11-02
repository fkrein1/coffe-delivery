import { ShoppingCart } from 'phosphor-react';
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
  const types = props.type.split(',');
  return (
    <CoffeeCardContainer>
      <img src={props.image} alt={props.name} />
      <TypesContainer>
        {types.map((type) => (
          <span>{type}</span>
        ))}
      </TypesContainer>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <Price>
        R$ <strong>{props.price.toFixed(2).replace('.', ',')}</strong>
      </Price>
      <AddToCartContainer>
        <QtySelectors>
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </QtySelectors>
        <AddtoCartButton>
          <ShoppingCart weight="fill" />
        </AddtoCartButton>
      </AddToCartContainer>
    </CoffeeCardContainer>
  );
}
