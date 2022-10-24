/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i 
multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 
che di 5 stampi “FizzBuzz”.*/

/*BONUS 1: Crea un container nel DOM , aggiungendo 
(attraverso la funzione append()) un elemento html con il numero o la 
stringa corretta da mostrare.*/

/*BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
a seconda che il valore inserito sia un numero, un fizz, 
un buzz o un fizzbuzz. */


const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");
let fizzBuzzItem;

for(let i = 1; i<=100; i++){
    if ( i % 3 === 0 && i % 5 === 0 ){
        fizzBuzzItem = document.createElement("div");
        fizzBuzzItem.classList.add("fizzbuzz-item", "fizzbuzz-bk-color");
        fizzBuzzItem.innerHTML = "FizzBuzz";
        fizzBuzzContainer.append(fizzBuzzItem);
    } else if ( i % 3 === 0){
        fizzBuzzItem = document.createElement("div");
        fizzBuzzItem.classList.add("fizzbuzz-item", "fizz-bk-color");
        fizzBuzzItem.innerHTML = "Fizz";
        fizzBuzzContainer.append(fizzBuzzItem);
    } else if ( i % 5 === 0){
        fizzBuzzItem = document.createElement("div");
        fizzBuzzItem.classList.add("fizzbuzz-item", "buzz-bk-color");
        fizzBuzzItem.innerHTML = "Buzz";
        fizzBuzzContainer.append(fizzBuzzItem);
    } else {
        fizzBuzzItem = document.createElement("div");
        fizzBuzzItem.classList.add("fizzbuzz-item", "blue-bk-color");
        fizzBuzzItem.innerHTML = i;
        fizzBuzzContainer.append(fizzBuzzItem);
    }
}



// POST IT CUSTOMIZED
$(document).ready(function () {
    all_notes = $("li a");
  
    all_notes.on("keyup", function () {
      note_title = $(this).find("h2").text();
      note_content = $(this).find("p").text();
  
      item_key = "list_" + $(this).parent().index();
  
      data = {
        title: note_title,
        content: note_content
      };
  
      window.localStorage.setItem(item_key, JSON.stringify(data));
    });
  
    all_notes.each(function (index) {
      data = JSON.parse(window.localStorage.getItem("list_" + index));
  
      if (data !== null) {
        note_title = data.title;
        note_content = data.content;
  
        $(this).find("h2").text(note_title);
        $(this).find("p").text(note_content);
      }
    });
  });