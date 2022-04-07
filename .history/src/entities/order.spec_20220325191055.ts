import Order from "./order";

describe('Order Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Order('','123',[])).toThrowError('Id is required');
  });

  it('Throw error if customer id is empty', () => {
    expect(() => new Order('1','',[])).toThrowError('CustomerId is required');
  });


 
});