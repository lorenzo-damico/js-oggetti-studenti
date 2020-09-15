// 1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
//    cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
//    stampare per ognuno nome e cognome.

// 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//    oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function () {

// PUNTO 1
// Creo un oggetto che descrive uno studente con 3 proprietà : nome, cognome, età.
var studente = {
  "nome": "Lorenzo",
  "cognome": "D'Amico",
  "età": 26
};

console.log(studente);

// Stampo la lista delle proprietà a schermo attraverso il ciclo for in.
for (var key in studente) {
  console.log(studente[key]);
}


// PUNTO 2
// Creo un array di oggetti di studenti.
var studenti = [
  {
    "nome": "Alessandro",
    "cognome": "Manzoni"
  },
  {
    "nome": "Giacomo",
    "cognome": "Leopardi"
  },
  {
    "nome": "Giovanni",
    "cognome": "Pascoli"
  }
];

console.log(studenti);

// Stampo nome e cognome di tutti gli studenti eseguendo un ciclo for sull'array con dentro un ciclo for in sugli oggetti.
for (var i = 0; i < studenti.length; i++) {
  for (var key in studenti[i]) {
    console.log(studenti[i][key]);
  }
}

// PUNTO 3
// Chiedo all'utente con 3 prompt di inserire nome cognome ed età di un nuovo studente.
var nomeUtente = prompt("Inserisci il tuo nome");
var cognomeUtente = prompt("Inserisci il tuo cognome");
var etaUtente = parseInt(prompt("Inserisci la tua età"));

// Creo un oggetto per il nuovo studente.
var nuovoStudente = {
  "nome": nomeUtente,
  "cognome": cognomeUtente,
  "età": etaUtente
};

console.log(nuovoStudente);

// Aggiungo l'oggetto nuovoStudente all'array degli studenti tramite un push.
studenti.push(nuovoStudente);

console.log(studenti);

});
