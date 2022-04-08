import Customer from "../domain/entities/customer";
import Order from "../domain/entities/order";
import OrderItem from "../domain/entities/order-item";
import OrderService from "./order.service";

describe("Order Service Unit Test", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "Customer");
    const item1 = new OrderItem("i1", "Item 1", 10, "p1", 10);
    const order = OrderService.placeOrder(customer, [item1]);
    expect(customer.rewardsPoints).toBe(50);
    expect(order.total()).toBe(100);
  });

  it("should get total of orders", () => {
    const item1 = new OrderItem("i1", "Item1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "Item1", 100, "p1", 5);
    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c1", [item2]);
    const total = OrderService.total([order, order2]);
    expect(total).toBe(600);
  });
});
