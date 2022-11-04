import axios from 'axios';

interface Order {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

interface CoffeeOnOrder {
  id: string;
  quantity: number;
}

interface CreateOrderRequest extends Order {
  coffees: CoffeeOnOrder[];
}

interface CreateOrderResponse extends Order {
  id: string;
}

const SERVER_URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL_PROD
  : import.meta.env.VITE_SERVER_URL_DEV;

export async function createOrder(
  order: CreateOrderRequest,
): Promise<CreateOrderResponse> {
  const { data } = await axios.post(`${SERVER_URL}/orders`, order);
  return data;
}
