import { faker } from '@faker-js/faker';


const mount = (el) => {
  let products = ''
  
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName()
    products += `<div><h3>${name}</h3></div>`
  }
  
  el.innerHTML = products
}

// Context

// We are running this file in development in isolation
// We are using our local index.html file
// Which defnitely has an element with an id of 'root-products'
// We want to immediately render our app into that element
if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('root-products')
  if(el) {
    mount(el)
  }
}

//We are runing this file in development or production
// through the container app
// No guarantee that an element with an id of 'root-products' exists
// We don't want try to immediatly render the app
export { mount }