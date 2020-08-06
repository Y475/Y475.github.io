var montact = 100;
var montper = 0;
function jouer() {
  var perdu = false;
  var choix = document.getElementById("choix").value;
  var mise = parseInt(document.getElementById("number").value);
  if (montact == 0) {
    alert("Malheureusement ,Votre porte monnaie est vide");
  } else if (mise > montact) {
    alert("La somme misée est supérieure à celle de votre porte monnaie, choisissez une somme inferieure ");
  } else {
    // Initialisation gain
    var gain = 0;
    // Mise retirée du porte monnaie
    montact -= mise;

    // Entier aléatoire entre 0 et 36
    var resultat = Math.round(Math.random() * 36);

    if (resultat == 0) {
      // Si l'ordi tire 0, on perd
      perdu = true;
    } else if (resultat == choix) {
      // Si l'ordi tire le meme nombre, on gagne
      gain = mise + mise * 35;
    } else if (
      (choix == "pair" && resultat % 2 == 0) ||
      (choix == "impair" && resultat % 2 != 0)
    ) {
      // Si on choisi 'Pair' et que l'ordi tire un nombre pair, on gagne.
      // Même chose pour le choix 'Impair'
      gain = mise * 2;
    } else {
      // Dans tous les autres cas, on perd
      perdu = true;
    }

    if (perdu) {
      alert("PERDU ! Resultat = " + resultat + "\nMise perdue = " + mise);
      montper += mise;
    } else {
      alert("GAGNÉ ! Resultat = " + resultat + "\nMise rendue = " + gain);
      montact += gain;
    }

    document.getElementById("mact").value = montact;
    document.getElementById("mperd").value = montper;
  }
}
