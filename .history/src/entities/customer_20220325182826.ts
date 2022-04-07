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

  validate(): void {
    if(!this._id) {
      throw new Error('Customer id is empty');
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

  set address(address: Address) {
    this._address = address;
  }
}