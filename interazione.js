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
        const prezzoFinalissimo = document.getElementById('prezzoFinalissimo').value;




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






            //--Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).

            //--Step BONUS (facoltativo)
            //Prova a generare dinamicamente le opzioni della select a partire da un oggetto js.*/


            //CALCOLO PREVENTIVO BASE

            /*--Il prezzo finale = numero di ore (10) per prezzo orario
            --Il prezzo orario per una commissione varia in questo modo:
            se  backend prezzo = 10 * 20.50€
            se  frontend prezzo = 10 * 15.30€
            se  l’analisi progettuale prezzo = 10 * 33.60€
            */

            const ore = 10;
            //const euro = 0;
            let prezzoBase = 0;


            if (lavoro === 'backend') {
                const euro = 20.50;
                prezzoBase = ore * euro;
                console.log(prezzoBase);



            } else if (lavoro === 'frontend') {
                const euro = 15.30;
                prezzoBase = ore * euro;
                console.log(prezzoBase);



            } else if (lavoro === 'analysis') {
                const euro = 33.60;
                prezzoBase = ore * euro;
                console.log(prezzoBase);


            }

            // Mostra il prezzo finale nella pagina
            //document.getElementById('prezzoBase').innerText = `€${prezzoBase.toFixed(2)}`;

            calcolaPrezzoFinale(prezzoBase, codice);


        }

    });
});

/*--AGGIUNGERE POSSIBILITA' RISPARMIO DEL 25% SUL PREZZO FINALE
    CON CODICI PROMOZIONALI:
    YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.
    --Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.*/


function calcolaPrezzoFinale(prezzoBase, codice) {
    prezzoBase = Number(prezzoBase);

    const codiciScontoValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let prezzoFinaleScontato;
    if (codiciScontoValidi.includes(codice)) {
        const sconto = 0.25 * prezzoBase; // Applica uno sconto del 25%
        prezzoFinaleScontato = prezzoBase - sconto;
        console.log(prezzoFinaleScontato);
        document.getElementById('prezzoFinalissimo').innerText = `€${prezzoFinaleScontato.toFixed(2)}`;
    } else {
        console.log('Il codice non è valido');
        console.log(prezzoBase);
        document.getElementById('prezzoFinalissimo').innerText = `€${prezzoBase.toFixed(2)}`;
    }
}

