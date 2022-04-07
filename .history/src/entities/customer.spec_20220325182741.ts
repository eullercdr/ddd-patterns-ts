import Customer from "./customer";

describe('Customer Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Customer id is empty');
  });
});