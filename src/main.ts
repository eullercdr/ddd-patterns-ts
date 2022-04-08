import { Address } from "./domain/entities/address";
import Customer from "./domain/entities/customer";
import Order from "./domain/entities/order";
import OrderItem from "./domain/entities/order-item";

let customer = new Customer('123','Euller Cristian');
const address = new Address( 'Av. Brasil', 'São Paulo', 'SP', '01310-000');
customer.address= address;
customer.activate();
const item1 = new OrderItem('1','Cerveja',10, 'p1', 2);
const item2 = new OrderItem('2','Coca',10, 'p2', 2);

const order = new Order('1','123',[item1,item2]);