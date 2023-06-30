function tocaSom(idElementoAudio){
  //acessando o audio
  document.querySelector(idElementoAudio).play();
  
}
 const listaDeTeclas = document.querySelectorAll('.tecla');



 let contador = 0;
 // automatização
 for(contador = 0; contador < listaDeTeclas.length; contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
//template string pegando os id dinamicamente
  const idAudio = `#som_${instrumento}`
  
  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  tecla.onkeydown = function (){
    tecla.classList.add('ativa');

  }
  tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }
}