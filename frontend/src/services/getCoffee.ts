import axios from 'axios';

interface Coffees {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

export async function getCoffee(): Promise<Coffees[]> {
  const { data } = await axios.get('http://localhost:3008/coffees');
  return data;
}
