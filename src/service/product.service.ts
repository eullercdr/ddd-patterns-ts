import Product from "../domain/entities/product";

export default class ProductService {
  static increasePrices(products: Product[], percentage: number): Product[] {
    products.forEach(product => {
      product.changePrice((product.price * percentage) / 100 + product.price);
    });
    return products;
  }
}