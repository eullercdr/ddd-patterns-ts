describe('Product Unit test', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Product('','123',10)).toThrowError('Id is required');
  }
});