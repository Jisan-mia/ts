const preCode = document.querySelector('.container')
const project = document.querySelector('.project')
const projectArea = document.querySelector('#project-area')
const projectBtn = document.querySelector('#projectBtn')
const documentBtn = document.querySelector('#documentBtn')
const totalArea = document.querySelector('#total')



interface Mobile {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
let mobileProductCart: Mobile[] = [
  {
    id: 1,
    name: 'Samsung Galaxy S7',
    price: 300,
    quantity: 1
  },
  {
    id: 2,
    name: 'iPhone 11',
    price: 500,
    quantity: 1
  },
  {
    id: 3,
    name: 'Realme C21',
    price: 100,
    quantity: 1
  },
]

let total:number = 0;



let clickedBtn: string = 'projectBtn';
toggleFunc()

projectBtn?.addEventListener('click', () => {
  clickedBtn = 'projectBtn'
  toggleFunc()
  
} )

documentBtn?.addEventListener('click', () => {
  clickedBtn = 'documentBtn'
  toggleFunc()
} )

function toggleFunc () {

  if(clickedBtn == 'projectBtn') {

    preCode?.classList.add('displayNone')
    project?.classList.remove('displayNone')
    
    projectBtn?.classList.add('underlineStyle')
    documentBtn?.classList.remove('underlineStyle')
    
  } else {
    project?.classList.add('displayNone')
    preCode?.classList.remove('displayNone')

    projectBtn?.classList.remove('underlineStyle')
    documentBtn?.classList.add('underlineStyle')
  }
}



const setTotal = (): void => {
  total = mobileProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  if(totalArea) totalArea.innerHTML = `$ ${total}`
}
setTotal()

window.handleQuantity = (e: any): void => {
  let args = e.id.split(',')
  const add: number = args[1] == 'increment' ? 1 : -1
  const updatedProduct: Mobile[] = mobileProductCart.map(item => {
    if(item.id == args[0]) {
      item.quantity += add
    }
    return item
  }).filter(item => item.quantity !== 0)
  mobileProductCart = [...updatedProduct]
  loadProducts()
  setTotal()
}

window.handleRemove = (e: any): void => {
  const remainingProduct: Mobile[] = mobileProductCart.filter(item => item.id != e.id )
  console.log(remainingProduct)
  mobileProductCart = [...remainingProduct]
  loadProducts()
  setTotal()
}


function loadProducts (): void {
  let html: string = ''
  mobileProductCart.forEach(item => {
     html += `
      <div class='item'> 
        <div class='left-side'> 
          <div class='img'></div>
          <div class='description'>
            <h4> ${item.name} </h4>
            <p>$ ${item.price} </p>
            <button onclick='(handleRemove(this))' id=${item.id}> Remove </button>
          </div>
        </div>
  
        <div class='right-side'> 
          <span id=${[item.id, 'increment']} onclick='(handleQuantity(this))'> > </span>
          <p> ${item.quantity} </p>
          <span id=${[item.id, 'decrement']} onclick='(handleQuantity(this))'> > </span>
        </div>
      </div>
    `
  }) 
  if(projectArea) projectArea.innerHTML = html
}

loadProducts()






