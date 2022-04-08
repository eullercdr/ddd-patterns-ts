import { Address } from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean;
  private _rewardsPoints: number = 0;

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
    if(!this.id) {
      throw new Error('Id is required');
    }
    if(!this.name) {
      throw new Error('Name is required');
    }
  }

  activate(): void {
    if(!this.address ) {
      throw new Error('Address is mandatory for activate customer');
    }
    this._active = true;
  }

  get rewardsPoints(): number {
    return this._rewardsPoints;
  }

  deactivate(): void {
    this._active = false;
  }

  addRewardPoints(points: number): void {
    this._rewardsPoints += points;
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