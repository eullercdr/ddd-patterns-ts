import Order from "./order";
import OrderItem from "./order-item";

describe('Order Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Order('','123',[])).toThrowError('Id is required');
  });

  it('Throw error if customer id is empty', () => {
    expect(() => new Order('1','',[])).toThrowError('CustomerId is required');
  });

  it('Throw error if ', () => {
    expect(() => new Order('1','123',[])).toThrowError('Items are required');
  });

  it('Should calculate item', () => {
    const item1 = new OrderItem('1','item',10, 'p1', 2);
    const item2 = new OrderItem('2','item',20, 'p2', 2);
    const item3 = new OrderItem('2','item',50, 'p3', 2);
    expect(new Order('1','123',[item1,item2,item3]).total()).toBe(160);
  });

  it('Should check if the qtde is greter than 0', () => {
    const item1 = new OrderItem('1','item',10, 'p1', 0);
    const item2 = new OrderItem('2','item',20, 'p2', -1);
    const item3 = new OrderItem('2','item',50, 'p3', 0);
    expect(new Order('1','123',[item1,item2,item3]).total()).toBe(160);
  });

 
});