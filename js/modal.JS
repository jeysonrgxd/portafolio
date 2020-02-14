const modalScript = function(modal,loader,cont){

   let cont_img = cont.querySelector("img")
   let btNext = modal.querySelector(".btNext")
   let btPrev = modal.querySelector(".btPrev")
   let arrayImage = []
   let contador = 0

   modal.addEventListener("click",(e)=>{
      if (e.target.matches(".modal-project")) {
         if(e.target.matches(".active")){
            loader.style.display="block"
            cont_img.src=""
            arrayImage = []
            contador=0
            modal.classList.remove("active")

         } 
      }
   })
   
   document.addEventListener("click", (e)=>{

      if (e.target.matches(".project-image")){

         modal.classList.add("active")
         let emp = e.target.dataset.carp || "prueba";

         // fetch(`./IMGCollection/${emp}.json`)
         fetch(`./IMGCollection/${emp}.json`)
         .then(resp=>{
            return resp.json()
         })
         .then(resp =>{
            arrayImage = loadImages(resp, cont_img);
            loader.style.display = "none"
         })
      }
      
   })

   btNext.addEventListener("click", (e) => {
      loader.style.display = "block"
      if(arrayImage.length !== 0){
         // cont.classList.add("animate")
         if(contador < arrayImage.length-1){
            contador++
            cont_img.src=arrayImage[contador]
         } else{
            contador=0
            cont_img.src=arrayImage[contador]
         }

      } else{

         return false;
      }
   })

   btPrev.addEventListener("click", (e) => {
      loader.style.display = "block"
      if (arrayImage.length !== 0) {
         // cont.classList.add("animate")
         if (contador !== 0) {
            contador--
            cont_img.src = arrayImage[contador]
         } else {
            contador = arrayImage.length -1
            cont_img.src = arrayImage[contador]
         }
         
      } else {
         
         return false;
      }
   })
   // cont.addEventListener("animationend", e => cont.classList.remove("animate"))
   cont_img.addEventListener("load", e => loader.style.display = "none")

}

const loadImages = function(arg,img){
   img.src = arg[0]
   return arg;
}



export default modalScript

