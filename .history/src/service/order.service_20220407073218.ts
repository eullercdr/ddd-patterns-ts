import Order from "../entities/order";

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((total, order) => {
      return total + order.total;
    }, 0);
  }
}