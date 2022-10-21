/*Código da ativação do modal*/
$(document).ready(function(){
    $('.modal').modal();
  });
          
/*Código da ativação do carrosel*/
  $(document).ready(function(){
    $('.carousel').carousel();
  });

/*Código para utilizar o load*/
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    })


  })



  

