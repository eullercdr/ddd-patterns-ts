import Product from "../entities/product";

export default class ProductService {
  static increasePrices(products: Product[], percentage: number): void {
    products.forEach(product => {
      product.changePrice(product.price * (1 + percentage / 100));
    });
  }
}