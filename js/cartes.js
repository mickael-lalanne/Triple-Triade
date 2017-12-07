class Carte {
  constructor(img, valHaut, valBas, valGauche, valDroite, nbEtoiles) {
    this.img = img;
    this.valHaut = valHaut;
    this.valBas = valBas;
    this.valGauche = valGauche;
    this.valDroite = valDroite;
    this.nbEtoiles = nbEtoiles;
  }
}

const ahriman = new Carte('img/1 étoile/Ahriman.png',5,2,2,5,1);
const amaljaa = new Carte('img/1 étoile/Amaljaa.png',1,7,1,4,1);
const bombo = new Carte('img/1 étoile/Bombo.png',3,3,3,4,1);
const chocobo = new Carte('img/1 étoile/Chocobo.png',3,2,1,7,1);
const coblyn = new Carte('img/1 étoile/Coblyn.png',3,3,4,3,1);
const coeurl = new Carte('img/1 étoile/Coeurl.png',2,2,5,5,1);
const dodo = new Carte('img/1 étoile/Dodo.png',4,3,4,2,1);
const goobbue = new Carte('img/1 étoile/Goobbue.png',2,5,2,5,1);
const ixal = new Carte('img/1 étoile/Ixal.png',6,3,4,1,1);

const chimere = new Carte('img/2 étoiles/Chimere.png',7,2,2,7,2);
const livia = new Carte('img/2 étoiles/Livia.png',3,7,1,7,2);
const momodi = new Carte('img/2 étoiles/Momodi.png',7,5,3,5,2);
const mur = new Carte('img/2 étoiles/Mur.png',6,2,3,7,2);
const sirene = new Carte('img/2 étoiles/Sirene.png',3,7,2,6,2);

const gilgamesh = new Carte('img/3 étoiles/Gilgamesh.png',3,7,2,6,3);
const ifrit = new Carte('img/3 étoiles/Ifrit.png',7,6,7,1,3);
const moggleMog = new Carte('img/3 étoiles/MoogleMog.png',7,7,1,6,3);
const titan = new Carte('img/3 étoiles/Titan.png',1,7,6,7,3);
const yshtola = new Carte('img/3 étoiles/Yshtola.png',7,1,4,8,3);

const leviathan = new Carte('img/4 étoiles/Leviathan.png',8,8,1,8,4);
const minfilia = new Carte('img/4 étoiles/Minfilia.png',9,3,5,8,4);
const ramuh = new Carte('img/4 étoiles/Ramuh.png',8,8,8,1,4);
const shiva = new Carte('img/4 étoiles/Shiva.png',1,8,8,8,4);
const ultima = new Carte('img/4 étoiles/Ultima.png',7,9,1,8,4);

const bahamut = new Carte('img/5 étoiles/Bahamut.png',9,9,6,5,5);
const kanESenna = new Carte('img/5 étoiles/KanESenna.png',9,1,7,10,5);
const lightning = new Carte('img/5 étoiles/Lightning.png',9,7,10,1,5);
const nanamo = new Carte('img/5 étoiles/Nanamo.png',10,4,8,6,5);
const raubahn = new Carte('img/5 étoiles/Raubahn.png',6,9,10,2,5);

var tabCartes1Etoile = [ahriman,amaljaa,bombo,chocobo,coblyn,coeurl,dodo,goobbue,ixal]
var tabCartes2Etoiles = [chimere,livia,momodi,mur,sirene]
var tabCartes3Etoiles = [gilgamesh,ifrit,moggleMog,titan,yshtola]
var tabCartes4Etoiles = [leviathan,minfilia,ramuh,shiva,ultima]
var tabCartes5Etoiles = [bahamut,kanESenna,lightning,nanamo,raubahn]
