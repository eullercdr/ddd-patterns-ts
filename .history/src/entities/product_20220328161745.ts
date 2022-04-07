export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
  }

  private validate(): void {
    if (!this.id) {
      throw new Error('Id is required');
    }
    if(!this.name) {
      throw new Error('Name is required');
    }
    if(this.price < 0) {
      throw new Error('Price must be greater than zero');
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  changeName(name: string): void {
    this._name = name;
  }

  changePrice(price: number): void {
    this._price = price;
  }
}