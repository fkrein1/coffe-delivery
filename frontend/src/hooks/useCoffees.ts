import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Coffees {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

export function useCoffees() {
  return useQuery({
    queryKey: ['coffees'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3008/coffees');
      return data as Coffees[];
    },
  });
}
