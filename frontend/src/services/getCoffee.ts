import axios from 'axios';

interface Coffees {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

const SERVER_URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL_PROD
  : import.meta.env.VITE_SERVER_URL_DEV;

export async function getCoffee(): Promise<Coffees[]> {
  const { data } = await axios.get(`${SERVER_URL}/coffees`);
  return data;
}
