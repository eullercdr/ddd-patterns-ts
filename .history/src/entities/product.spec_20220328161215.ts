import Product from "./product";

describe('Product Unit test', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Product('','Produto',10)).toThrowError('Id is required');
  });

  it('Throw error if id is empty', () => {
    expect(() => new Product('','Produto',10)).toThrowError('Id is required');
  });
});