import Customer from "./customer";

describe('Order Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Id is required');
  });

 
});