import axios from "axios";

interface ZIP {
  bairro: string;
  cep: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

export async function getAddress(zip: string): Promise<ZIP> {
  const { data } = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
  if (data.erro) throw new Error();
  return data;
}