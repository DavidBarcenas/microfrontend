import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`

document.getElementById('root-cart').innerHTML = cartText