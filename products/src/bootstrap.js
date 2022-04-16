import { faker } from '@faker-js/faker';

let products = ''

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName()
  products += `<div><h3>${name}</h3></div>`
}

document.getElementById('root-products').innerHTML = products