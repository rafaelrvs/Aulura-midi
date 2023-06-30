function tocaSom(SeletorAudio){
  //acessando o audio
  const elemento = document.querySelector(SeletorAudio)

  if(elemento && elemento.localName ==='audio'){
    elemento.play();

  }
  else{
    console.log('Elemento não encontrado ou seletor não encontrado')
  }
  
}
 const listaDeTeclas = document.querySelectorAll('.tecla');



 // automatização
 for(let contador = 0; contador < listaDeTeclas.length; contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
//template string pegando os id dinamicamente
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  tecla.onkeydown = function (evento){
   if(evento.code === 'Space' || evento.code === 'NumpadEnter') {
    tecla.classList.add('ativa');
  }
  
}
tecla.onkeyup = function(){
  tecla.classList.remove('ativa');
}
}