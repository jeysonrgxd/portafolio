const modalScript = function(modal,loader,cont){
   let cont_img = cont.querySelector("img")

   modal.addEventListener("click",(e)=>{
      if (e.target.matches(".modal-project")) {
         if(e.target.matches(".active")){
            loader.style.display="block"
            cont_img.src=""
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
            loadImages(resp,cont);
            loader.style.display = "none"
         })
      }
      
   })
}

const loadImages = function(arg,cont){
   let cont_img = cont.querySelector("img")
   cont_img.src = arg[0]
   console.log(arg);
}

export default modalScript

