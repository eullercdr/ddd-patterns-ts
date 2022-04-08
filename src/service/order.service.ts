import { v4 as uuid } from "uuid";
import Customer from "../domain/entities/customer";
import Order from "../domain/entities/order";
import OrderItem from "../domain/entities/order-item";

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }
    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total()/2);
    return order;
  }
}
