const grid = new Muuri(".grid",{
   // para poder nosotros redondear y utilizar porcentaje revisar
   // https://github.com/haltu/muuri#layout-
   layout:{
      rounding:false
   }
});

window.addEventListener("load", ( )=>{
   // para que refresque nuestro layout
   grid.refreshItems().layout();
   document.querySelector(".grid").classList.add("imagenes-cargadas")
})