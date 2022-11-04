import axios from 'axios';

interface Order {
  id: string;
  zip: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

const SERVER_URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL_PROD
  : import.meta.env.VITE_SERVER_URL_DEV;

export async function getOrder(id: string): Promise<Order> {
  const { data } = await axios.get(`${SERVER_URL}/orders/${id}`);
  return data;
}
