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
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  get id(): string {
    return this._id;
  }

  get total () {
    return this._total;
  }
}
