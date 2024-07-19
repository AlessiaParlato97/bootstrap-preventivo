// AGGIUNGERE L'INTERAZIONE CON L'UTENTE

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-prezzo');

    //INVOCAZIONE DELLA FUNZIONE SUBMIT
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //CREARE PER OGNI ELEMENTO UNA RECEZIONE DI INPUT IN CONSOLE
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const email = document.getElementById('email').value;
        const lavoro = document.getElementById('lavoro').value;
        const area = document.getElementById('area').value;
        const codice = document.getElementById('codice').value;
        const privacy = document.getElementById('flexCheckDefault').checked;




        //CONTROLLARE E VALIDARE IN JS TUTTI GLI INPUT CON CONDIZIONI
        if (!nome || !cognome || !email || !lavoro || !privacy) {
            alert("Per favore, compila tutti i campi obbligatori");
        } else {
            //altrimenti stampa tutti i valori
            console.log(`Nome: ${nome}`);
            console.log(`Cognome: ${cognome}`);
            console.log(`Email: ${email}`);
            console.log(`Lavoro: ${lavoro}`);
            console.log(`TextArea: ${area}`);
            console.log(`Codice sconto: ${codice}`);
            console.log(`Privacy: ${privacy}`);
        }



        /*--il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste
        
    
        
        --Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
        
        --Step BONUS (facoltativo)
        Prova a generare dinamicamente le opzioni della select a partire da un oggetto js.*/


        //CALCOLO PREVENTIVO BASE

        /*--Il prezzo finale = numero di ore (10) per prezzo orario
        --Il prezzo orario per una commissione varia in questo modo:
        se  backend prezzo = 10 * 20.50€
        se  frontend prezzo = 10 * 15.30€
        se  l’analisi progettuale prezzo = 10 * 33.60€
        */

        const ore = 10;
        //const euro = 0;
        const prezzoBase = 0;


        if (lavoro === 'backend') {
            const euro = 20.50;
            const prezzoBase = ore * euro;
            console.log(prezzoBase);

            // Mostra il prezzo finale nella pagina
            document.getElementById('prezzoBase').innerText = `€${prezzoBase.toFixed(2)}`;

        } else if (lavoro === 'frontend') {
            const euro = 15.30;
            const prezzoBase = ore * euro;
            console.log(prezzoBase);

            // Mostra il prezzo finale nella pagina
            document.getElementById('prezzoBase').innerText = `€${prezzoBase.toFixed(2)}`;

        } else if (lavoro === 'analysis') {
            const euro = 33.60;
            const prezzoBase = ore * euro;
            console.log(prezzoBase);

            // Mostra il prezzo finale nella pagina
            document.getElementById('prezzoBase').innerText = `€${prezzoBase.toFixed(2)}`;
        }



        /*--AGGIUNGERE POSSIBILITA' RISPARMIO DEL 25% SUL PREZZO FINALE
        CON CODICI PROMOZIONALI:
        YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
        --Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.*/

        const codiciScontoValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
        let prezzoFinale = prezzoBase; // Prezzo base


        if (codiciScontoValidi.includes(codice)) {
            prezzoFinaleScontato = prezzoFinale - 0.75; // Applica uno sconto del 25%
            console.log(prezzoFinale);
            //STAMPA IN FORMA UMANA
            document.getElementById('prezzoFinale').innerText = `€${prezzoFinale.toFixed(2)}`;
        }



    });
});