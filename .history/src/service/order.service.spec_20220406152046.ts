import Product from "../entities/product";

describe('Product service unit test', () => {
  it('Should change the prices of all products',()=>{
    const product1 = new Product("product1", "Product 1", 10);
    const product2 = new Product("product2", "Product 2", 30);
    const products = [product1, product2];
    ProductService.increasePrices(products, 100);
  })
});