export class Address {
  _street: string;
  _city: string;
  _state: string;
  _zip: string;
 _number:number=0;

  constructor(id: string, street: string, city: string, state: string, zip: string, country: string) {
    this._id = id;
    this._street = street;
    this._city = city;
    this._state = state;
    this._zip = zip;
    this._country = country;
    this._active = true;
    this.validate();
  }

  validate(): void {
    if (this._street.length < 3) {
      throw new Error('Street must be at least 3 characters long');
    }
  }

  activate(): void {
    if(this._city.length ===0) {
      throw new Error('City is mandatory for activate address');
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  changeStreet(street: string): void {
    this._street = street;
  }
}