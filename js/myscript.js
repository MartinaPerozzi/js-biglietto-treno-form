// Calcolare il prezzo totale del viaggio in treno

// MILESTONE 1
const button_submit_el = document.querySelector(".button-proceed");
console.log(button_submit_el);

button_submit_el.addEventListener(
    "click",
    function () {

        // Dati necessari: numero di km da percorrere e età del passeggero

        // Chiedere all'utente il suo nome e cognome
        const myName = document.querySelector("#name").value;
        console.log("myName", myName);

        const mySurname = document.querySelector("#surname").value;
        console.log("mySurname", mySurname);

        // Chiedere all'utente il numero di km che deve percorrere
        const myKm = document.querySelector("input[type = 'number']").value;
        console.log("myKm", myKm);

        // Chiedere all'utente la sua età
        const myAge = document.querySelector('#My-Age').value;
        console.log("myAge", myAge);

        // CALCOLARE PREZZO

        // Prezzo al km
        let xKm = parseFloat(0.21);
        console.log("xKm", xKm);

        // calcolo
        let kmPercorso = (myKm * xKm);
        console.log("kmPercorso=", `(${myKm} * ${xKm})`, kmPercorso);
        let fixedNumber = kmPercorso.toFixed(2);

        // APPLICARE SCONTI

        if (myAge == "minorenne") {
            let kmPercorso = (myKm * xKm) - (((myKm * xKm) * 20) / 100);
            console.log(kmPercorso, "con sconto del 20%");

            let fixedNumber = kmPercorso.toFixed(2);

            // Messaggio all'utente
            document.getElementById("your_trip").innerHTML = "Grazie " + myName + "!" + " Il prezzo totale del biglietto è " + fixedNumber + "€ con uno sconto applicato del 20%";

            // Ticket
            const ticket = document.querySelector('.ticket-bg');
            ticket.classList.add("display-block");

            // Name category
            document.getElementById("name-sur").innerHTML = myName + " " + mySurname;
            // Sale category
            document.getElementById("sale").innerHTML = "Sconto del 20%";
            // Price category 
            document.getElementById("price").innerHTML = fixedNumber + "€";
            // Carrozza
            document.getElementById("carrozza").innerHTML = "3";
            // Cp
            const randomNumber = Math.floor(Math.random() * 9000 + 1000);
            document.getElementById("cp").innerHTML = randomNumber;



        } else if (myAge == "over65") {

            let kmPercorso = (myKm * xKm) - (((myKm * xKm) * 40) / 100);
            console.log(kmPercorso, "con sconto del 40%");

            let fixedNumber = kmPercorso.toFixed(2);

            // Messaggio all'utente
            document.getElementById("your_trip").innerHTML = "Grazie " + myName + "!" + " Il prezzo totale del biglietto è " + fixedNumber + "€ con uno sconto applicato del 40%";

            // Ticket
            const ticket = document.querySelector('.ticket-bg');
            ticket.classList.add("display-block");

            // Name category
            document.getElementById("name-sur").innerHTML = myName + " " + mySurname;
            // Sale category
            document.getElementById("sale").innerHTML = "Sconto del 40%";
            // Price category 
            document.getElementById("price").innerHTML = fixedNumber + "€";
            // Carrozza
            document.getElementById("carrozza").innerHTML = "1";
            // Cp
            const randomNumber = Math.floor(Math.random() * 9000 + 1000);
            document.getElementById("cp").innerHTML = randomNumber;

        } else {

            let kmPercorso = (myKm * xKm);
            console.log("kmPercorso=", `(${myKm} * ${xKm})`, kmPercorso);

            // Messaggio all'utente
            document.getElementById("your_trip").innerHTML = "Grazie " + myName + "!" + " Il prezzo totale del biglietto è " + fixedNumber + "€";

            // Ticket
            const ticket = document.querySelector('.ticket-bg');
            ticket.classList.add("display-block");
            // Name category
            document.getElementById("name-sur").innerHTML = myName + " " + mySurname;
            // Sale category
            document.getElementById("sale").innerHTML = "Biglietto Standard ";
            // Price category 
            document.getElementById("price").innerHTML = fixedNumber + "€";
            // Carrozza
            document.getElementById("carrozza").innerHTML = "2";
            // Cp
            const randomNumber = Math.floor(Math.random() * 9000 + 1000);
            document.getElementById("cp").innerHTML = randomNumber;
        }

    }
);
