import { Address } from "./entities/address";
import Customer from "./entities/customer";
import OrderItem from "./entities/order-item";

let customer = new Customer('123','Euller Cristian');
const address = new Address( 'Av. Brasil', 'São Paulo', 'SP', '01310-000');
customer.address= address;
customer.activate();
const item1 = new OrderItem('1','Cerveja',10);
const item2 = new OrderItem('2','Coca',10);

const order = new OrderItem('1','Cerveja',10);