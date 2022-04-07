import Customer from "./customer";

describe('Customer Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Id is required');
  });

  it('Throw error if name is empty', () => {
    expect(() => new Customer('123','')).toThrowError('Name is required');
  });

  it('Should change name', () => {
    const customer = new Customer('123','Name');
    customer.changeName('New Name');
    expect(customer.name).toBe('New Name');
  });

});