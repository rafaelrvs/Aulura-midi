function tocaSom(idElementoAudio){
  //acessando o audio
  document.querySelector(idElementoAudio).play();
  
}
 const listaDeTeclas = document.querySelectorAll('.tecla');



 let contador = 0;
 // automatização
 while(contador < listaDeTeclas.length){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
//template string pegando os id dinamicamente
  const idAudio = `#som_${instrumento}`
  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  contador = contador +1;
}