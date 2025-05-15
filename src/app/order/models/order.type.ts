import { OrderItem } from "./order-item.type";

export type Order = {
  clientName: string,
  clientCpf: string,
  orderDate: Date,
  totalPrice: number,
  itemsList: OrderItem[],
}