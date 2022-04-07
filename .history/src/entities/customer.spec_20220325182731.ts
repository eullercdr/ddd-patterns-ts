describe('Customer Unit Tests', () => {
  it('Throw error if id is empty', () => {
    expect(() => new Customer('')).toThrowError('Customer id is empty');
  });
});