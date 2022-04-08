import OrderItem from "./order-item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  private validate(): boolean {
    if(!this.id) {
      throw new Error('Id is required');
    }
    if(!this.customerId) {
      throw new Error('CustomerId is required');
    }
    if(this.items.length === 0) {
      throw new Error('Items are required');
    }
    if(this.items.some(item => item.quantity <= 0)) {
      throw new Error('Quantity must be greater than 0');
    }
    return true;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }
  
  get items(): OrderItem[] {
    return this._items;
  }

  get price(): number {
    return this._total;
  }
  
}
