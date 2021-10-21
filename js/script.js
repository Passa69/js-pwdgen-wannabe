// Assegnare una password all'utente, generata dai suoi dati

// Chiediamo all'utente il nome
let username = prompt("Scrivi il tuo nome");
console.log(username);

// Chiediamo all'utente il suo cognome
let surname = prompt("Scrivi il tuo cognome");
console.log(surname);

// Chiediamo all'utente il suo colore preferito
let color = prompt("Scrivi il tuo colore preferito");
console.log(color);

// Ricaviamo la password
// let password = 

// Comunichiamo la password all'utente
document.getElementById("mio_id").innerHTML = `La password assegnata è: ${username}${surname}${color}21`;