// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora
// di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano,
// dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log()
// per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// - creare un bottone in HTML
// - collegare il bottone a JS

const buttonInput = document.querySelector('button');

const quadratone = document.querySelector ('.quadratone')

buttonInput.addEventListener('click', function(){

    for (let i = 1; i <= 100; i++){

        const square = document.createElement ('div');

        // AGGIUNGO LA CLASSE SQUARE ALLA COSTANTE SQUARE 
        square.classList.add ('square');

        square.innerHTML = i;


        //  console.log(square)

        // APPENDO LA CLASSE SQUARE NEL QUADRATONE CONTAINER 
        quadratone.append(square);

        square.addEventListener('click', function(){


            this.classList.toggle ('active');
            console.log (this.innerHTML);

        });
    }
}
);


