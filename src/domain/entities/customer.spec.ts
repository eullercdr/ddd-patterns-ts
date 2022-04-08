import { Address } from "./address";
import Customer from "./customer";

describe('Customer Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('','Name')).toThrowError('Id is required');
  });

  it('Throw error if name is empty', () => {
    expect(() => new Customer('123','')).toThrowError('Name is required');
  });

  it('Should change name', () => {
    //arrange act assert
    const customer = new Customer('123','Name');
    customer.changeName('New Name');
    expect(customer.name).toBe('New Name');
  });

  
  it('Should change name', () => {
    //arrange act assert
    const customer = new Customer('123','Name');
    customer.changeName('New Name');
    expect(customer.name).toBe('New Name');
  });

  it('Should activate number', () => {
    const customer = new Customer('123','Name');
    const address = new Address('Street','City','State','Zip');
    customer.address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it('Should deactivate number', () => {
    const customer = new Customer('123','Name');
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it('Should throw error if address is not set', () => {
    const customer = new Customer('123','Name');
    expect(() => customer.activate()).toThrowError('Address is mandatory for activate customer');
  });

});