import Order from "../entities/order";
import OrderItem from "../entities/order-item";

describe('Order Service Unit Test', () => {
   it('should get total of orders', () => {
     const item1 = new OrderItem("i1", "Item1", 100, "p1",1);
     const item2 = new OrderItem("i2", "Item1", 100, "p1",5);
     const order = new Order("o1", "c1", [item1]);
     const order2 = new Order("o2", "c1", [item2]);
     const total = OrderService.total([order, order2]);
      expect(total).toBe(600);
   });
});