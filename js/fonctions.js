function creaJeu() {
  deckBleu = creaDeck()
  deckRouge = creaDeck()
  var bleu = 'bleu'
  var rouge = 'rouge'
  var divDeck =""
  for (var i = 0; i < 5; i++) {
    divDeck += '<img id="bleu'+deckBleu[i].img+'" onclick="carteSelect('+i+','+0+')" src="'+deckBleu[i].img+'" />'
  }
  document.getElementById('deckBleu').innerHTML = divDeck
  divDeck=""
  for (var i = 0; i < 5; i++) {
    divDeck += '<img id="rouge'+deckRouge[i].img+'" onclick="carteSelect('+i+','+1+')" src="'+deckRouge[i].img+'" />'
  }
  document.getElementById('deckRouge').innerHTML = divDeck
}



function creaDeck() {
  var nbAleatoire = Math.floor(Math.random() * tabCartes1Etoile.length)
  var deck = new Array (tabCartes1Etoile[nbAleatoire])
  nbAleatoire = Math.floor(Math.random() * tabCartes2Etoiles.length)
  deck.push(tabCartes2Etoiles[nbAleatoire])
  nbAleatoire = Math.floor(Math.random() * tabCartes3Etoiles.length)
  deck.push(tabCartes3Etoiles[nbAleatoire])
  nbAleatoire = Math.floor(Math.random() * tabCartes4Etoiles.length)
  deck.push(tabCartes4Etoiles[nbAleatoire])
  nbAleatoire = Math.floor(Math.random() * tabCartes5Etoiles.length)
  deck.push(tabCartes5Etoiles[nbAleatoire])
  return deck
}



function carteSelect(i,equipe) {
  if (equipe==1) {
    if(tourJoueur=='rouge'){
      carteRougeSelect = deckRouge[i]
      document.getElementById('carteSelectionne').innerHTML = 'Carte Selectionnée : <img src="'+carteRougeSelect.img+'" />'
    }
    else{
      alert('Ceci n\'est pas votre deck !')
    }
  }
  else {
    if(tourJoueur=='bleu'){
      carteBleuSelect = deckBleu[i]
      document.getElementById('carteSelectionne').innerHTML = 'Carte Selectionnée : <img src="'+carteBleuSelect.img+'" />'
    }
    else{
      alert('Ceci n\'est pas votre deck !')
    }
  }
}

function placeCarte(nb) {
  if (emplacementVide(nb)) {
    if(tourJoueur=='bleu'){
      if(typeof(carteBleuSelect)=="undefined") {
        alert('Aucune carte selectionnée !')
      }
      else {
        document.getElementById(nb).src=carteBleuSelect.img
        document.getElementById(nb).style.border='7px solid #006d73'
        document.getElementById(nb).style.borderRadius='10px'
        carteNoirBlanc(carteBleuSelect)
        tabCartesPosées[nb]=carteBleuSelect
        finDeTour(nb)
        document.getElementById('auTourDe').innerHTML = 'Au tour du joueur : <font class="equipeRouge">Rouge</font>'
        carteBleuSelect=undefined
        tourJoueur='rouge'
      }
    }
    else{
      if (typeof(carteRougeSelect)=="undefined") {
        alert('Aucune carte selectionnée !')
      }
      else {
        document.getElementById(nb).src=carteRougeSelect.img
        document.getElementById(nb).style.border='7px solid red'
        document.getElementById(nb).style.borderRadius='10px'
        carteNoirBlanc(carteRougeSelect)
        tabCartesPosées[nb]=carteRougeSelect
        finDeTour(nb)
        document.getElementById('auTourDe').innerHTML = 'Au tour du joueur : <font class="equipeBleu">Bleu</font>'
        carteRougeSelect=undefined
        tourJoueur='bleu'
      }
    }
  }
  else {

    alert('Une carte est déjà placée ici !')
  }
}



function finDeTour(nb) {
  verifAutour(nb)
  document.getElementById('carteSelectionne').innerHTML = 'Sélectionner une carte<img src="img/dosCarte.png">'
  nbTour++
  quiGagne()
}



function emplacementVide(nb) { //ATTENTION ERREUR SUR SERVEUR
  var regex = /\w*.png/
  if (document.getElementById(nb).src.match(regex)=='dosCarte.png') {
    return true
  }
  else {
    return false
  }
}



function emplacementOccupé(nb) { //ATTENTION ERREUR SUR SERVEUR
  var regex = /\w*.png/
  if (document.getElementById(nb).src.match(regex)!='dosCarte.png') {
    return true
  }
  else {
    return false
  }
}



function verifAutour(nb) {
  var couleur = 'red'
  if (tourJoueur=='bleu') {
    couleur='#006d73'
  }
  var border = '7px solid '+couleur

  switch (nb) {
    case 1:
      if (emplacementOccupé(2)) {
        if (tabCartesPosées[1].valDroite>tabCartesPosées[2].valGauche) {
          document.getElementById(2).style.border=border
        }
      }
      if (emplacementOccupé(4)) {
        if (tabCartesPosées[1].valBas>tabCartesPosées[4].valHaut) {
          document.getElementById(4).style.border=border
        }
      }
      break;

    case 2:
      if (emplacementOccupé(1)) {
        if (tabCartesPosées[2].valGauche>tabCartesPosées[1].valDroite) {
          document.getElementById(1).style.border=border
        }
      }
      if (emplacementOccupé(3)) {
        if (tabCartesPosées[2].valDroite>tabCartesPosées[3].valGauche) {
          document.getElementById(3).style.border=border
        }
      }
      if (emplacementOccupé(5)) {
        if (tabCartesPosées[2].valBas>tabCartesPosées[5].valHaut) {
          document.getElementById(5).style.border=border
        }
      }
      break;

    case 3:
      if (emplacementOccupé(2)) {
        if (tabCartesPosées[3].valGauche>tabCartesPosées[2].valDroite) {
          document.getElementById(2).style.border=border
        }
      }
      if (emplacementOccupé(6)) {
        if (tabCartesPosées[3].valBas>tabCartesPosées[6].valHaut) {
          document.getElementById(6).style.border=border
        }
      }
      break;

    case 4:
      if (emplacementOccupé(1)) {
        if (tabCartesPosées[4].valHaut>tabCartesPosées[1].valBas) {
          document.getElementById(1).style.border=border
        }
      }
      if (emplacementOccupé(5)) {
        if (tabCartesPosées[4].valDroite>tabCartesPosées[5].valGauche) {
          document.getElementById(5).style.border=border
        }
      }
      if (emplacementOccupé(7)) {
        if (tabCartesPosées[4].valBas>tabCartesPosées[7].valHaut) {
          document.getElementById(7).style.border=border
        }
      }
      break;

    case 5:
      if (emplacementOccupé(2)) {
        if (tabCartesPosées[5].valHaut>tabCartesPosées[2].valBas) {
          document.getElementById(2).style.border=border
        }
      }
      if (emplacementOccupé(4)) {
        if (tabCartesPosées[5].valGauche>tabCartesPosées[4].valDroite) {
          document.getElementById(4).style.border=border
        }
      }
      if (emplacementOccupé(6)) {
        if (tabCartesPosées[5].valDroite>tabCartesPosées[6].valGauche) {
          document.getElementById(6).style.border=border
        }
      }
      if (emplacementOccupé(8)) {
        if (tabCartesPosées[5].valBas>tabCartesPosées[8].valHaut) {
          document.getElementById(8).style.border=border
        }
      }
      break;

    case 6:
      if (emplacementOccupé(3)) {
        if (tabCartesPosées[6].valHaut>tabCartesPosées[3].valBas) {
          document.getElementById(3).style.border=border
        }
      }
      if (emplacementOccupé(5)) {
        if (tabCartesPosées[6].valGauche>tabCartesPosées[5].valDroite) {
          document.getElementById(5).style.border=border
        }
      }
      if (emplacementOccupé(9)) {
        if (tabCartesPosées[6].valBas>tabCartesPosées[9].valHaut) {
          document.getElementById(9).style.border=border
        }
      }
      break;

    case 7:
      if (emplacementOccupé(4)) {
        if (tabCartesPosées[7].valHaut>tabCartesPosées[4].valBas) {
          document.getElementById(4).style.border=border
        }
      }
      if (emplacementOccupé(8)) {
        if (tabCartesPosées[7].valDroite>tabCartesPosées[8].valGauche) {
          document.getElementById(8).style.border=border
        }
      }
      break;

    case 8:
      if (emplacementOccupé(5)) {
        if (tabCartesPosées[8].valHaut>tabCartesPosées[5].valBas) {
          document.getElementById(5).style.border=border
        }
      }
      if (emplacementOccupé(7)) {
        if (tabCartesPosées[8].valGauche>tabCartesPosées[7].valDroite) {
          document.getElementById(7).style.border=border
        }
      }
      if (emplacementOccupé(9)) {
        if (tabCartesPosées[8].valDroite>tabCartesPosées[9].valGauche) {
          document.getElementById(9).style.border=border
        }
      }
      break;

    case 9:
      if (emplacementOccupé(6)) {
        if (tabCartesPosées[9].valHaut>tabCartesPosées[6].valBas) {
          document.getElementById(6).style.border=border
        }
      }
      if (emplacementOccupé(8)) {
        if (tabCartesPosées[9].valGauche>tabCartesPosées[8].valDroite) {
          document.getElementById(8).style.border=border
        }
      }
      break;
  }
}



function carteNoirBlanc(carte) {
  couleur='rouge'
  if (tourJoueur == 'bleu') {
    couleur='bleu'
  }
  /* Méthode avec Regex :
  var regex = /\w*.png$/
  var source = carte.img.match(regex)
  document.getElementById(carte.img).src='img/NoirBlanc/'+source*/
  document.getElementById(couleur+carte.img).style.filter = 'grayscale(100%)'
  document.getElementById(couleur+carte.img).onclick=function(){}
}



function quiGagne() {
  if (nbTour==9) {
    var pointsBleu = 0
    var pointsRouge = 0
    for (var i = 1; i < 10; i++) {
      var regex = /\w*$/
      if (document.getElementById(i).style.border.match(regex)=='blue') {
        pointsBleu++
      }
      else {
        pointsRouge++
      }
    }
    if (pointsBleu>pointsRouge) {
      alert('Le jour Bleu l\'emporte ! Félicitations ! On rejoue ?')
    }
    else {
      alert('Le jour Rouge l\'emporte ! Félicitations ! On rejoue ?')
    }
    window.location.reload()
  }
}
