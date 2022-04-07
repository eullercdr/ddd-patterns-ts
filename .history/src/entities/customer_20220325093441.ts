import { Address } from "./address";

class Customer {
  _id: string;
  _name: string;
  _address: Address;
  _active: boolean;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._active= true;
    this.validate();
  }

  validate(): void {
    if (this._name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  activate(): void {
    if(this._address.length ===0) {
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
}