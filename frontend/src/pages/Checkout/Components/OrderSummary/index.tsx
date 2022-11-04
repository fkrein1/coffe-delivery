import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
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
    localStorage.setItem('coffee-delivery-1.0.0-cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function handleSubtractCoffeeQty(id: string) {
    const newCart = cart.map((coffee) => {
      if (coffee.id === id)
        return { ...coffee, quantity: Math.max(coffee.quantity - 1, 1) };
      return coffee;
    });
    localStorage.setItem('coffee-delivery-1.0.0-cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function handleRemoveCoffee(id: string) {
    const newCart = cart.filter((coffee) => coffee.id !== id);
    localStorage.setItem('coffee-delivery-1.0.0-cart', JSON.stringify(newCart));
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
                  <button onClick={() => handleSubtractCoffeeQty(coffee.id)}>
                    -
                  </button>
                  <div>{coffee.quantity}</div>
                  <button onClick={() => handleAddCoffeeQty(coffee.id)}>
                    +
                  </button>
                </QtySelectors>
                <RemoveButton onClick={() => handleRemoveCoffee(coffee.id)}>
                  <Trash />
                  <span>Remover</span>
                </RemoveButton>
              </SelectorsContainer>
            </div>
            <Price>{`R$${(coffee.price * coffee.quantity)
              .toFixed(2)
              .replace('.', ',')}`}</Price>
          </CoffeCard>
        ))}
        <PriceSummary>
          <Subtotal>
            <span>Total de itens</span>
            <p>{`R$${subTotal.toFixed(2).replace('.', ',')}`}</p>
          </Subtotal>
          <Delivery>
            <span>Entrega</span>
            <p>{`R$${shipping.toFixed(2).replace('.', ',')}`}</p>
          </Delivery>
          <Total>
            <span>Total</span>
            <p>{`R$${totalOrder.toFixed(2).replace('.', ',')}`}</p>
          </Total>
          <button type="submit" disabled={isCartEmpty}>Confirmar pedido</button>
        </PriceSummary>
      </CoffeeContainer>
    </OrderSummaryContainer>
  );
}
