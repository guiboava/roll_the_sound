import { OrderItem } from "./order-item.type";

export type Order = {
  id: number,
  clientName: string,
  clientCpf: string,
  orderDate: Date,
  status: string,
  itemsList: OrderItem[],
}