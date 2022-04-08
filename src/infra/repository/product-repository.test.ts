import { Sequelize } from "sequelize-typescript";
import Product from "../../domain/entities/product";
import ProductRepository from "../../domain/repository/product.repository";
import ProductModel from "../db/sequelize/model/product.model";

describe('Product repository test', () => {
   let sequelize: Sequelize;
    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true }
        });
        sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a product', async () => {
      const productRepository = new ProductRepository();
      const product = new Product("1","Product 1",100);
      await productRepository.create(product);
      const productModel = await ProductModel.findOne({ where: { id: "1" } });
      expect(productModel).toBeDefined();
      expect(productModel.id).toBe("1");
      expect(productModel.name).toBe("Product 1");
      expect(productModel.price).toBe(100);
    });

    it('should update a product', async () => {
      await ProductModel.create({
        id: "1",
        name: "Product 1",
        price: 100,
      });
      const productRepository = new ProductRepository();
      const product = new Product("1","Product 1",100);
      product.changeName("Product 2");
      product.changePrice(200);
      await productRepository.update(product);
      const productModel = await ProductModel.findOne({ where: { id: "1" } });
      expect(productModel).toBeDefined();
      expect(productModel.id).toBe("1");
      expect(productModel.name).toBe("Product 2");
      expect(productModel.price).toBe(200);
    });

    it('should find a product', async () => {
      await ProductModel.create({
        id: "1",
        name: "Product 1",
        price: 100,
      });
      const productRepository = new ProductRepository();
      const product = await productRepository.find("1");
      expect(product).toBeDefined();
      expect(product.id).toBe("1");
      expect(product.name).toBe("Product 1");
      expect(product.price).toBe(100);
    });

    it('should find all products', async () => {
      await ProductModel.create({
        id: "1",
        name: "Product 1",
        price: 100,
      });
      await ProductModel.create({
        id: "2",
        name: "Product 2",
        price: 200,
      });
      const productRepository = new ProductRepository();
      const products = await productRepository.findAll();
      expect(products).toBeDefined();
      expect(products.length).toBe(2);
      expect(products[0].id).toBe("1");
      expect(products[0].name).toBe("Product 1");
      expect(products[0].price).toBe(100);
      expect(products[1].id).toBe("2");
      expect(products[1].name).toBe("Product 2");
      expect(products[1].price).toBe(200);
    });
});

