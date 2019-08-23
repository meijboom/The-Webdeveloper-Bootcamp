// Vraag hun leeftijd
var age = Number(prompt("hoe oud ben je?"));
while (isNaN(age)) {
    var age = prompt("voer uw leeftijd in cijfers in aub. Hoe oud ben u?");
}

// age is nu gelijk aan de leeftijd.
// regels van de nachtclub.
// entree vanaf 18 toegelaten, vanaf 21 mogen ze pas drinken.
// als ze 21 zijn zijn ze "jarig" en worden ze gefeliciteerd.
// als hun leeftijd even is bijvoorbeeld 2,4,6 etc wordt dit naar de console geschreven.
// als hun leeftijd een perfecte wortel is bijv 16 of 9, wordt dit ook naar de console geschreven.

if (age < 18) {
    alert("Sorry u mag niet naar binnen");
}
else if (age < 21) {
    alert("U mag naar binnen, maar geen alcohol drinken.");
}
else if (age === 21) {
    alert("gefeliciteerd! U mag naar binnen.")
}

if (age > 21) {
    alert("Kom binnen.")
}

// even of oneven?
if (age % 2 == 0) {
    console.log("De leeftijd is gelijk (even).");
}
else {
    console.log("de leeftijd is ongelijk.");
}

// Is de leeftijd een perfecte wortel?
if (age % Math.sqrt(age) === 0) {
        console.log("Ja de leeftijd is een perfecte wortel.");
    }
