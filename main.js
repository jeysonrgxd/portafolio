import modalScript from './js/modal.JS'

const ipad = window.matchMedia('screen and (max-width: 800px)')
const menu = document.querySelector('.menu')
const portafolio_cont = document.querySelector(".portfolio .container")
const burgerButton = document.querySelector('#burger-menu')
const modal_img = document.querySelector(".modal-project")
const modal_cont_img = modal_img.querySelector(".modal-cont-img")
const loader_modal = modal_img.querySelector(".lds-ring")
const btnMas = document.querySelector(".cargar-mas")
const form_data = document.querySelector(".form-email")
const resp_message = document.querySelector(".resp-email")
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
      btnMas.textContent = "😰"
      btnMas.title = "Ya no hay mas 😅"
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
   let form = new FormData(e.target) // es tipo multipart/form-data
   let params = new URLSearchParams(form)
   fetch("https://frozen-fjord-75081.herokuapp.com/clientePort", {
      method:"POST",
      // body: `email=${e.target.email.value}&mensaje=${e.target.mensaje.value}`,
      body: params.toString(),
      headers:{
         'Content-Type': 'application/x-www-form-urlencoded'
      }
   })
   .then(resp =>{
      return resp.json()
   }) 
   .then(resp =>{
      if(resp.ok){
         resp_message.style.display= "block"
         e.target.reset()
         desbanecer(resp_message)
      }
   })

})
function desbanecer(element){
   setTimeout(() => {
      element.style.display = "none"
   }, 3500);
}

if (!ipad.matches) modalScript(modal_img, loader_modal, modal_cont_img)
ipad.addListener(validation)
validation(ipad);