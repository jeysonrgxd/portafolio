import modalScript from './js/modal.JS'

const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const modal_img = document.querySelector(".modal-project")
const modal_cont_img = modal_img.querySelector(".modal-cont-img")
const loader_modal = modal_img.querySelector(".lds-ring")

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


modalScript(modal_img, loader_modal, modal_cont_img)
ipad.addListener(validation)
validation(ipad);