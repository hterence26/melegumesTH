////////////////////////////////ES6
const log = console.log;
const tab = console.table;
/* const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
 */
// créer tableau panier

function createPanier() {
	if (document.getElementById("tbPanier") === null) {
		// get the reference for the body
		var div = document.getElementById("listePanier");

		// creates a <table> element and a <tbody> element
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");
		var tblTotal = document.createElement("ttotal")
		let inith = ['Produits', 'Prix/pc', 'Qté', 'Total', 'Retirer'];

		// creating all cells
		for (var i = 0; i < 1; i++) {
			// creates a table row
			var row = document.createElement("tr");
			var row2 = document.createElement("tr");

			for (var j = 0; j < inith.length; j++) {
				// Create a <td> element and a text node, make the text
				// node the contents of the <td>, and put the <td> at
				// the end of the table row
				var cell = document.createElement("th");
				var cellText = document.createTextNode(inith[j]);
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			for (var k = 0; k < 3; k++) {
				var celtot = document.createElement("td");
				var totTx = document.getElementById("totalPanier").getElementsByTagName("td")[k]

				row2.appendChild(celtot);
			}
			var totCell = document.getElementById("totalPanier").getElementsByTagName("td")[0];
			var totTx = document.getElementById("totalPanier").getElementsByTagName("td")[0].createTextNode("TOTAL");
			totCell.appendChild(totTx);


			// add the row to the end of the table body
			tblBody.appendChild(row);
			tblTotal.appendChild(row2);
		}

		// put the <tbody> in the <table>
		tbl.appendChild(tblBody);
		tbl.appendChild(tblTotal);
		// appends <table> into <body>
		div.appendChild(tbl);
		// set the table's id;
		tbl.setAttribute("id", "tbPanier");
		tblBody.setAttribute("id", "bodyPanier");
		tblTotal.setAttribute("id","totalPanier");
	}
}

// FIN tableau panier

// ajout produits dans le tableau panier



function goPanier(idForm) {


	// récupère éléments de la commande
	idProd = document.querySelector('#' + idForm);
	log(idProd);
	nomProd = idProd.getElementsByClassName("nomProd")[0].innerHTML;
	prixProd = idProd.getElementsByClassName("prixProd")[0].innerHTML;
	qttProd = idProd.getElementsByClassName("legPanier")[0].elements[0].value;
	totalProd = prixProd * qttProd + " €"
	txtCom = [nomProd, prixProd, qttProd, totalProd, '-'];

	// récupère éléments du tableau
	var tblPanier = document.getElementById("tbPanier");



	if (tblPanier === null) {
		createPanier();

	};

	if (qttProd < 1 || qttProd > 10) {
		alert("Indiquez une quantité valide");
		
	}else {

	// creating all cells
	var tblBody = document.getElementById("bodyPanier");
	var trTotal = document.getElementById("totalPanier"); 

	for (var i = 0; i < 1; i++) {
		// creates a table row
		var row = document.createElement("tr");

		for (var j = 0; j < txtCom.length; j++) {
			// Create a <td> element and a text node, make the text
			// node the contents of the <td>, and put the <td> at
			// the end of the table row
			var cell = document.createElement("td");
			var cellText = document.createTextNode(txtCom[j]);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		

		// add the row to the end of the table body
		tblBody.appendChild(row);
		trTotal.getElementsByTagName('td')[1] += prixProd * qttProd;
	}
}
};

// FIN ajout produits

// Formulaire de commande

/*var testForm = document.getElementById('dateLiv').value;
log(testForm);
var testSel = document.getElementById('date1').value;
log(testSel);
let testText = testSel.options[testSel.selectedIndex].value;
log(testText);*/

/* let objetCollecte = [
	{ nom: "Mel'égumes", adresse: "Avenue de la Joyeuse Entrée", cp: "7000", ville: "Mons" },
	{ nom: "Mosaic", adresse: "Rue d’Havré, 23", cp: "7020", ville: "Nimy" },
	{ nom: "All Cook", adresse: "Av. Maréchal Foch, 795", cp: "7012", ville: "Jemappes" },
	{ nom: "Le Pain Perdu", adresse: "Rue des Ecoles, 1", cp: "7034", ville: "Obourg" }
];

let dateLiv = "";
let nomColl = objetCollecte[1].nom; */

// Vérification du formulaire de commande


function verifName() {

	let champ = document.getElementsByName("nom")[0];
	
	if (champ.value.length < 2 || champ.value.length > 35) {
		surligne(champ, true);
		return false;
	}
	else {

		surligne(champ, false);
		return true;

	}

}

function verifMail() {
	let champ = document.getElementsByName("email")[0];
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

	if (!regex.test(champ.value)) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}

function verifTel() {
	let champ = document.getElementsByName("tel")[0];
	var regex = /(0|\+32)[1-9]( *[0-9]{2}){4}/;
	let telData = champ.value;
	log("Téléphone : " + telData);

	if (!regex.test(champ.value)) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}


function verifDepot() {
	var champ = document.getElementsByName("depot")[0];
	let depotN = champ.options[champ.selectedIndex].value;
	log("Point de collecte sélectionné :" + depotN);

	if (depotN === 'default') {
		surligne(champ, true);
		return false;
	} else {
		surligne(champ, false);
		return true;
	}
}


function surligne(champ, erreur) {
	if (erreur)
		champ.style.backgroundColor = "#fba";
	else
		champ.style.backgroundColor = "";
}


function verifForm() {
	var nameOk = verifName();
	var mailOk = verifMail();
	var telOk = verifTel();
	var depotOk = verifDepot();

	if (nameOk && mailOk && telOk && depotOk) {
		return true;
	} else {
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}

};



// FIN verif formulaire

// Bouton commander
// Utilisation service externe emailjs pour envoi mail
/* Initialisation service */
(function () {
	emailjs.init("user_J9bfCqfml32HAuefbb8gl");
})();

let template_params = [];

let service_id = "default_service";
let template_id = "panier_melegumes";



function getCommande() {
	let valCom = verifForm();
	
	log('valCom :' + valCom);

	var sel = document.getElementsByName('depot')[0];

	depotData = sel.options[sel.selectedIndex];


	// display its value and text
	
	log(depotData.text);

	nameData = document.getElementsByName('nom')[0].value;
	log(nameData);

	mailData = document.getElementsByName('email')[0].value;
	let telData = document.getElementsByName('tel')[0].value;

	template_params = [
		nameData, mailData, telData, depotData
	];
tab(template_params);


	if (valCom == true) {
		log("val",template_params);
		emailjs.send(service_id, template_id, template_params);
		alert(`Votre commande a bien été envoyée`);
		return true;
	} else {
		alert(`Un problème est survenu. Votre commande n'a pas été envoyée`);
		return false;
	};
};


 

// FIN Bouton commander




