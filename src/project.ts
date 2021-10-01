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
const mobileProductCart: Mobile[] = [
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

let total = 0;



let clickedBtn: string = 'documentBtn';
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



const setTotal = () => {
  total = mobileProductCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  if(totalArea) totalArea.innerHTML = `$ ${total}`
}
setTotal()


const myFunction = (item: Mobile) => {
  console.log('Button clicked');
}


mobileProductCart.forEach(item => {
  if(projectArea) projectArea.innerHTML += `
    <div class='item'> 
      <div class='left-side'> 
        <div class='img'></div>
        <div class='description'>
          <h4>$ ${item.name} </h4>
          <p>$ ${item.price} </p>
          <button> Remove </button>
        </div>
      </div>

      <div class='right-side'> 
        <span id='incre' onclick='${myFunction(item)}'> > </span>
        <p> 1 </p>
        <span> > </span>
      </div>
    </div>
  `
}) 






