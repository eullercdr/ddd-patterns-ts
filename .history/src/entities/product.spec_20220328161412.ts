import Product from "./product";

describe('Product Unit test', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Product('','Produto',10)).toThrowError('Id is required');
  });

  it('Throw error if name is empty', () => {
    expect(() => new Product('1','',10)).toThrowError('Name is required');
  });

  it('Throw error if price is less than zero', () => {
    expect(() => new Product('1','Produto',-1)).toThrowError('Price must be greater than zero');
  });
});