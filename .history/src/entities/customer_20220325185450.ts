import { Address } from "./address";

export default class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this._active= true;
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get active(): boolean {
    return this._active;
  }

  get address(): Address {
    return this._address;
  }

  validate(): void {
    if(!this._id) {
      throw new Error('Id is required');
    }
    if(!this._name) {
      throw new Error('Name is required');
    }
  }

  activate(): void {
    if(!this._address ) {
      throw new Error('Address is mandatory for activate customer');
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  changeName(name: string): void {
    this._name = name;
  }

  isActive(): boolean {
    return this._active;
  }

  set address(address: Address) {
    this._address = address;
  }
}