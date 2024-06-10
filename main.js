function tocarSom(id) {
   document.querySelector(id).play();
}

const teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < teclas.length; i++){
   const sons = teclas[i].classList[1];
   teclas[i].onclick = function () {
      tocarSom(`#som_${sons}`);
   }
   teclas.onkeydown = function(evento){
      if(evento.code === 'Enter' || evento.code === 'Space'){
         teclas.classList.add('ativa');
      }
   }
   teclas.onkeyup = function(){
      teclas.classList.remove('ativa');
   }
}