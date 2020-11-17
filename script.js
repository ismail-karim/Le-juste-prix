// Etape 1 - Sélectionner nos éléments
let input = document.getElementById("prix");
let error = document.getElementById("erreur");
let form = document.querySelector('form');
let coups = 0;
let nbChoisit;
// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {
    let instruction = document.createElement('div');
    if(nombre < nbAlea)
    {
        //c'est plus
        instruction.textContent = "#" +coups +"("+ nombre + ") C'est plus!";
        instruction.className = "instruction plus";
        //Ajouter les classes
    }
    else if (nombre > nbAlea)
    {
        instruction.textContent = "#" +coups +"("+ nombre + ") C'est moins";
        instruction.className = "instruction moins ";
    }
    else {
        instruction.textContent = "#" +coups +"("+ nombre + ") Félicitation vous avez touvez le juste prix !";
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    document.getElementById("instructions").prepend(instruction);
}

// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nbAlea = Math.floor(Math.random()*1001);
console.log(nbAlea);
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', ()=>{
    if(isNaN(input.value)){
        //Afficher le message d'erreur
        error.style.display = "inline";
    }
    else{
        //cacher le message d'erreur
        error.style.display = "none";
    }
})
// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    if (isNaN(input.value) || (input.value == '')){
        //mettre la bordure du formulaire en rouge
        input.style.borderColor = "red";
    }
    else{
        //Mettre la bordure du formulaire en gris
        coups++;
        input.style.borderColor = "green";
        nbChoisit = input.value;
        input.value = '';
        verifier(nbChoisit);
    }
})
