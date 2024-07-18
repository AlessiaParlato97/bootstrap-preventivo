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

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('form-prezzo');
    console.log(formElement);


    // Recupera l'elemento input dall'HTML tramite il suo id per ogni elemento
    const inputNomeElement = document.getElementById('inputNome');//.value.trim();
    const inputCognomeElement = document.getElementById('inputCognome');//.value.trim();
    const inputEmailElement = document.getElementById('inputEmail');//.value.trim();
    const selectLavoroElement = document.getElementById('inputLavoro');//.value.trim();
    const inputTextAreaElement = document.getElementById('inputTextArea');//.value.trim();
    const inputCodiceScontoElement = document.getElementById('inputCodiceSconto');//.value.trim();
    const inputPrivacyElement = document.getElementById('flexCheckDefault').checked;


    const calcoloOutputElement = document.getElementById('prezzoFinale');

    console.log(inputNomeElement, inputCognomeElement, inputEmailElement, selectLavoroElement, inputTextAreaElement, inputCodiceScontoElement, inputPrivacyElement, calcoloOutputElement);


    //invocazione della funzione SUBMIT(evento)
    formElement.addEventListener('submit', function (event) {
        event.preventDefault(); // Impedisce il comportamento di default del form


        /* Stampa in console i valori umani
        console.log("Nome: " + inputNome);
        console.log("Cognome: " + inputCognome);
        console.log("Email: " + inputEmail);
        console.log("Tipo di Lavoro: " + inputLavoro);
        console.log("TextArea: " + inputTextArea);
        console.log(`Codice Promozionale: ${inputCodiceSconto}`);
        console.log(`Privacy Accettata: ${inputPrivacy}`);*/




        //dichiarazione dati form
        const nome = parseFloat(inputNomeElement.value);
        console.log(nome);

        const cognome = parseFloat(inputCognomeElement.value);
        console.log(cognome);

        const email = parseFloat(inputEmailElement.value);
        console.log(email);

        const selectWork = selectLavoroElement.value;
        console.log(selectWork);

        const textArea = parseFloat(inputTextAreaElement.value);
        console.log(textArea);

        const privacy = parseFloat(inputPrivacyElement.value);
        console.log(privacy);

        const codice = parseFloat(inputCodiceScontoElement.value);
        console.log(codice);




        /*validare ogni dato input del form 
        if (!nome || !cognome || !email || !lavoro) {
            alert('Perfavore, compila tutti i campi obbligatori.');
            return;
        }*/

        //calcolare il prezzo base
        // se  backend prezzo = 10 * 20.50€ => 205 euro 
        // se  frontend prezzo = 10 * 15.30€ => 153 euro
        // se  l’analisi progettuale prezzo = 10 * 33.60€ => 336 euro

        const ore = 10;
        let euro = 0;
        let prezzoBase;


        // calcolo prezzo base con ciclo if-else
        if (inputLavoro === "backend") {
            prezzoBase = 205;
        } else if (inputLavoro === "frontend") {
            prezzoBase = 153;
        } else if (inputLavoro === "analysis") {
            prezzoBase = 336;
        } else {
            prezzoBase = 0;
        }

        console.log(prezzoBase);





        // Calcola sconto se il codice promozionale è valido
        const codiceScontoValido = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

        let sconto = 0;

        if (codice === codiceScontoValido) {
            sconto = (prezzoBase * 25) / 100; // 25% di sconto
            console.log(sconto);
        } else {
            console.log("Nessun codice sconto è stato inserito.")
        }

        const prezzoFinale = prezzoBase - sconto;
        console.log(prezzoFinale);











        // calcolo prezzo base con oggetti
        // Definizione dell'oggetto con i tipi di lavoro e i loro prezzi
        /*let prezziBase = {
            'backend': 205, //10*20.50,
            'frontend': 153, //10*15.30,
            'analysis': 336, //10*33.60,
        };
        
        let prezzoBase = prezziBase[lavoro] || 0;
        
        console.log(prezzoBase);*/
        ;




        inputNome.value = "";
        inputCognome.value = "";
        inputEmail.value = "";
        inputLavoro.value = "";
        inputTextArea.value = "";
        inputCodiceSconto.value = "";
        flexCheckDefault.value = "";


    });
});

