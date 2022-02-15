 /* ----------------scroll events --------------------------------------------------------------------------------*/
 
 window.sr = ScrollReveal();

 if(screen.width >= 1000){/* al hacerce resonsive puede que no se vean tan bien las animaciones */
                          /* po eso es mejor decirle que al tener menos de 1000px no las aplique */

    sr.reveal('.header_main_container', {  //pongo el nombre de la clase al que se le aplicara la animacion
       duration: 3000 //duracion de la animacion 3 segundos      
    });

    sr.reveal('.descripcion_empresa', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'left', /* aparecera de  mi izquierda a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
      sr.reveal('#img_main', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'right', /* aparecera de mi derecha a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
      sr.reveal('#portafolio_sec', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'bottom', /* aparecera de mi derecha a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
      sr.reveal('#servicios_sec', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'bottom', /* aparecera de mi derecha a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
      sr.reveal('#nosotros_sec', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'bottom', /* aparecera de mi derecha a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
      sr.reveal('#unete_sec', {  
        duration: 3000, //duracion de la animacion 3 segundos
        origin: 'bottom', /* aparecera de mi derecha a su posicion original */
        distance:'100px' // distancia de donde comienza a su posicion original
      });
 }
 /* ----------------scroll events --------------------------------------------------------------------------------*/


var btn_top = document.getElementById("top"); 
var nav_input= document.getElementsByClassName('nav_input');       
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 100){
        nav_input[0].checked = false;  
        document.body.style.overflowY="scroll";        
    }
    if(document.documentElement.scrollTop > 700){
        btn_top.style.display="block";
    }else{
        btn_top.style.display="none";                
    }
})

function disableScroll(){ 

    var nav_input= document.getElementsByClassName('nav_input');
    if(nav_input[0].checked == false){
       document.documentElement.scrollTop = 0;
       document.body.style.overflow="hidden";
    }else{        
       document.body.style.overflow="scroll";               
    }          
 }

