import modalScript from './js/modal.JS'

const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu')
const portafolio_cont = document.querySelector(".portfolio .container")
const burgerButton = document.querySelector('#burger-menu')
const modal_img = document.querySelector(".modal-project")
const modal_cont_img = modal_img.querySelector(".modal-cont-img")
const loader_modal = modal_img.querySelector(".lds-ring")
const btnMas = document.querySelector(".cargar-mas")
const form_data = document.querySelector(".form-email")
let count = 0

function validation(event) {
   if (event.matches) {
      burgerButton.addEventListener('click', hideShow)
   } else {
      burgerButton.removeEventListener('click', hideShow)
   }
}

function hideShow() {
   if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
   } else {
      menu.classList.add('is-active');
   }
}

function moreArticle (){
   if(count > 0){
      btnMas.disabled = true
      return false

   } else {
      fetch('./js/article.json')
      .then(resp =>{
         return resp.json()
      })
      .then(resp=>{
         resp.forEach(element => {
            portafolio_cont.insertAdjacentHTML("beforeend",element)
         });
      })
   }
   count++;
}

btnMas.addEventListener("click",(e)=>{
   moreArticle();
})
form_data.addEventListener("submit",(e)=>{
   e.preventDefault()
   let form = new FormData(e.target)
   fetch("https://frozen-fjord-75081.herokuapp.com/clientePort",{
      method:"POST",
      headers: {
         'Content-Type': 'application/x-www-form-url-encoded'
      },
      body:form
   })
   .then(resp =>{
      return resp.json()
   })
   .then(resp =>{
      console.log(resp)
   })

})
modalScript(modal_img, loader_modal, modal_cont_img)
ipad.addListener(validation)
validation(ipad);