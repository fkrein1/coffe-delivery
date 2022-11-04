import * as z from 'zod';

const Coffee = z.object({
  id: z.string().uuid(),
  quantity: z.number(),
});

export const CreateOrderSchema = z.object({
  zip: z.string().length(8),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.string(),
  coffees: z.array(Coffee),
});

export type ICreateOrderDTO = z.infer<typeof CreateOrderSchema>;
