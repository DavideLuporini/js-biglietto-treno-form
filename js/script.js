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
let displayUName = document.getElementById('username')

// ask the DISTANCE
const distance = document.getElementById('km').value;
console.log(distance);

// declaring price per km
const pricePerKm = 0.21;

// declaring age
const age = document.getElementById('age').value

// calculate pre discount price
let displayPrice = document.getElementById('price')

// bottone calcola
const btnGenerate = document.querySelector('button')

// preparo costante per stampare in pagina il numero di cabina random
const displayCabin = document.getElementById('cabin')

// preparo costante per stampare in pagina il numero di cabina random
const displayCp = document.getElementById('cp')

// display type of ticket
const displayTicket = document.getElementById('ticket')


// bottone genera
btnGenerate.addEventListener('click', function() {
    // validazione dati
    if (!uName && distance <= 0 && age == 0) {
        alert("Fai attenzione! Uno dei dati non è stato inserito!");
    } else {
        // STAMPARE PRICE IN CASELLA PREZZO
        const uName = document.getElementById('name').value;
        console.log(uName);
        displayUName.innerHTML = uName;

        // prelevare dato distanza
        const distance = document.getElementById('km').value;

        // NUMERO CABINA
        const cabin = Math.floor(Math.random() * 15 + 1);
        displayCabin.innerHTML = cabin;

        // NUMERO CP
        const cp = Math.floor(Math.random() * 5000 + 1);
        displayCp.innerHTML = cp;

        const age = document.getElementById('age');
        console.log(age);

        // controllo età passeggero
        if (age.value == 3) {
            let price = (pricePerKm * distance * 0.6).toFixed(2);
            displayPrice.innerHTML = price;
            console.log(price);
            displayTicket.innerHTML = 'Biglietto over 65';
        } else if (age.value == 1) {
            let price = (pricePerKm * distance * 0.8).toFixed(2);
            displayPrice.innerHTML = price;
            console.log(price);
            displayTicket.innerHTML = 'Biglietto over under 18';

        } else {
            let price = (pricePerKm * distance).toFixed(2);
            displayPrice.innerHTML = price;
            displayTicket.innerHTML = 'Biglietto standard';
        }

    }
})



// bottone annulla
const btnUndo = document.getElementById('undo');

btnUndo.addEventListener('click', function() {

    window.location.reload()
})