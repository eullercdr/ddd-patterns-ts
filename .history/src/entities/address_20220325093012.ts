export class Address {
    constructor(
        public street: string,
        public number: number,
        public city: string,
        public state: string,
        public zipCode: number,
        public country: string
    ) {}
}