import { useQuery } from '@tanstack/react-query';
import { getCoffee } from '../../services/getCoffee';
import { CoffeeCard } from '../CoffeeCard';
import { ShelfContainer, ShelfGrid } from './styles';

export function CoffeeShelf() {
  const { data } = useQuery(['coffees'], getCoffee);

  return (
    <ShelfContainer>
      <h2>Nossos cafés</h2>

      <ShelfGrid>
        {data?.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            type={coffee.type}
            price={coffee.price}
            description={coffee.description}
            image={coffee.image}
          />
        ))}
      </ShelfGrid>
    </ShelfContainer>
  );
}
