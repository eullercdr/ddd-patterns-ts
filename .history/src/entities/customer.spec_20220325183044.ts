import Customer from "./customer";

describe('Customer Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Id is required');
  });

  it('Throw error if name is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Name is required');
  });
});