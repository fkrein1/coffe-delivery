import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { formatNumberTwoDecimals } from '../../../../utils/formatNumberTwoDecimals';
import {
  CoffeCard,
  CoffeeContainer,
  Delivery,
  Name,
  OrderSummaryContainer,
  Price,
  PriceSummary,
  QtySelectors,
  RemoveButton,
  SelectorsContainer,
  Subtotal,
  Total,
} from './styles';

export function OrderSummary() {
  const { cart, setCart } = useContext(CartContext);

  const isCartEmpty = cart.length === 0;

  const shipping = isCartEmpty ? 0 : 4.9;
  const subTotal = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const totalOrder = shipping + subTotal;

  function handleAddCoffeeQty(id: string) {
    const newCart = cart.map((coffee) => {
      if (coffee.id === id) return { ...coffee, quantity: coffee.quantity + 1 };
      return coffee;
    });
    localStorage.setItem(
      `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
      JSON.stringify(newCart),
    );
    setCart(newCart);
  }

  function handleSubtractCoffeeQty(id: string) {
    const newCart = cart.map((coffee) => {
      if (coffee.id === id)
        return { ...coffee, quantity: Math.max(coffee.quantity - 1, 1) };
      return coffee;
    });
    localStorage.setItem(
      `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
      JSON.stringify(newCart),
    );
    setCart(newCart);
  }

  function handleRemoveCoffee(id: string) {
    const newCart = cart.filter((coffee) => coffee.id !== id);
    localStorage.setItem(
      `${import.meta.env.VITE_LOCAL_STORAGE_KEY}-cart`,
      JSON.stringify(newCart),
    );
    setCart(newCart);
  }

  return (
    <OrderSummaryContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeContainer>
        {cart.map((coffee) => (
          <CoffeCard key={coffee.id}>
            <img src={coffee.image} alt={coffee.name} />
            <div>
              <Name>{coffee.name}</Name>
              <SelectorsContainer>
                <QtySelectors>
                  <button
                    type="button"
                    onClick={() => handleSubtractCoffeeQty(coffee.id)}
                  >
                    -
                  </button>
                  <div>{coffee.quantity}</div>
                  <button
                    type="button"
                    onClick={() => handleAddCoffeeQty(coffee.id)}
                  >
                    +
                  </button>
                </QtySelectors>
                <RemoveButton
                  type="button"
                  onClick={() => handleRemoveCoffee(coffee.id)}
                >
                  <Trash />
                  <span>Remover</span>
                </RemoveButton>
              </SelectorsContainer>
            </div>
            <Price>{`R$${formatNumberTwoDecimals(
              coffee.price * coffee.quantity,
            )}`}</Price>
          </CoffeCard>
        ))}
        <PriceSummary>
          <Subtotal>
            <span>Total de itens</span>
            <p>{`R$${formatNumberTwoDecimals(subTotal)}`}</p>
          </Subtotal>
          <Delivery>
            <span>Entrega</span>
            <p>{`R$${formatNumberTwoDecimals(shipping)}`}</p>
          </Delivery>
          <Total>
            <span>Total</span>
            <p>{`R$${formatNumberTwoDecimals(totalOrder)}`}</p>
          </Total>
          <button type="submit" disabled={isCartEmpty}>
            Confirmar pedido
          </button>
        </PriceSummary>
      </CoffeeContainer>
    </OrderSummaryContainer>
  );
}
