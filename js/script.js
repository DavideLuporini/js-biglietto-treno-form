// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

console.log('js ok');

// ask for the name
const uName = document.getElementById('name').value;
console.log(uName);

// ask the DISTANCE
const distance = document.getElementById('km').value;
console.log(distance);

// declaring price per km
const pricePerKm = 0.21;

// // calculate pre discount price
// const price = (distance * pricePerKm);
// console.log(price);

// bottone calcola
const btnGenerate = document.querySelector('button')

btnGenerate.addEventListener('click', function() {
    // STAMPARE PRICE IN CASELLA PREZZO
    const uName = document.getElementById('name').value;
    console.log(uName);

    const distance = document.getElementById('km').value;
    console.log(distance + ' km');

    const price = pricePerKm * distance;
    console.log(price)
})





// bottone annulla
const btnUndo = document.getElementById('undo')