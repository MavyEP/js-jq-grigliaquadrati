//recupero il container ovvero il padre dei div quadrato (che sara il padre...)
var griglia_container = $('.container')

//creo un ciclo for ripetuto 25 volte per creare in pagina 25 quadrati all'interno del container
for (var i = 0; i < 25; i++) {
  griglia_container.append('<div class="quadrato"></div>')
}

//recupero l'elemento quadrato
var quadrato = $('.quadrato');

//per ogni div con classe "quadrato" ...
quadrato.each(function(){
  //genero un numero  random tra 0 e 10...
  numero = generaRandomNumber(0,10);
  //this sta per l'elemento sotto lavoro in questo momento :  per this creo al suo interno un p con al suo interno il numero random generato
  $(this).append("<p>" + numero + "</p>");
  //!!!SE!!! il numero é uguale a 0
  if (numero == 0) {
    //aggiungi la classe "green"
    $(this).addClass('green')
  }  //!!!SE!!! il numero é PARI ...
   else if ((numero % 2) == 0) {
    //aggiungi la classe "red"
    $(this).addClass('red')
  }  //!!!SE!!! é dispari lascialo cosi perche tanto deve essere nero .
 })


//creo la funzione per generare dei numeri random
function generaRandomNumber(min,max)  {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
