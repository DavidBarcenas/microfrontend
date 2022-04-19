import { faker } from '@faker-js/faker';

const mount = el => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`
  el.innerHTML = cartText
}

if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root-cart')
  if(el) {
    mount(el)
  }
}

export { mount }