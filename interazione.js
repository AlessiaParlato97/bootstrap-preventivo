/* AGGIUNGERE L'INTERAZIONE CON L'UTENTE
    --CREARE PER OGNI ELEMENTO UNA RECEZIONE DI INPUT IN CONSOLE
    --CONTROLLARE E VALIDARE IN JS TUTTI GLI INPUT CON CONDIZIONI
    --UNA VOLTA CONVALIDATO TUTTO, FARE IN MODO DI FAR FUNZIONARE IL BOTTONE SUBMIT CALCOLO PREVENTIVO CON TUTTI I DATI DI INPUT UTILI
    --il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste
    --Il prezzo finale = numero di ore (10) per prezzo orario
    --Il prezzo orario per una commissione varia in questo modo:
    se  backend prezzo = 10 * 20.50€
    se  frontend prezzo = 10 * 15.30€
    se  l’analisi progettuale prezzo = 10 * 33.60€

    --AGGIUMGERE POSSIBILITA' RISPARMIO DEL 25% SUL PREZZO FINALE
    CON CODICI PROMOZIONALI:
    YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
    --Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
    --Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
    
    --Step BONUS (facoltativo)
    Prova a generare dinamicamente le opzioni della select a partire da un oggetto js.*/




console.log("calcola prezzo del preventivo");


const formElement = document.getElementById('form-prezzo');
console.log(formElement);

// Recupera l'elemento input dall'HTML tramite il suo id per ogni elemento
const inputNomeElement = document.getElementById('inputNome');
const inputCognomeElement = document.getElementById('inputCognome');
const inputEmailElement = document.getElementById('inputEmail');
const inputSelectElement = document.getElementById('inputLavoro');
const inputTextAreaElement = document.getElementById('inputTextArea');
const inputCodiceSconto = document.getElementById('inputCodiceSconto');

console.log(inputNomeElement, inputCognomeElement, inputEmailElement, inputSelectElement, inputTextAreaElement, inputCodiceSconto);




formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = parseFloat(inputNomeElement.value);
    console.log(nome);
    console.log('submit', event);
});