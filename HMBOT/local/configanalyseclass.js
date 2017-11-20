﻿//Délaration d'une classe pour le fichier config.json permettant ainsi de reconnaitre les attributs chargés

/** @constructor */
var confFileANALYSEClass = function() {
  this.ANALYSE ={
       afficherMenu : '',
       cheminRacine: '',
		   touteTraceActive : '',
       excel : {
            debutIndexLigne : '',
				    debutIndexCol : '',
            indexColonne : {
      	        nom : '',
                prenom : '',
                dateDeNaissance : '', 
                referenceGRC : '',
                type : '',
                numeroRO : '',
							  gammeProduit: '',
							  debDateEffet: '',
							  numProduit1 : '',
							  numProduit10 : '',
							  numSEQ : '',
							  numExtCtt : '',
								contexteAnalyseStoppee : '',
							  dateTraitementAnalyse : '',
							  presenceHPP : '',
								paiementAdhesion : '',
								dateEffetAControler : '',
								payeurSouscriptDifferent : '',
								clauseBenefAdh : '',
								clauseBenefConjoint : '',
								controleGestion : '',
								nomPayeur : '',
								prenomPayeur: '',
								appPayeur: '',
								batPayeur: '',
								voiePayeur: '',
								lieuDitPayeur: '',
								cpPayeur: '',
								villePayeur: '',
								cedexPayeur: '',
								paysPayeur: ''
            }
        },
			 tabGammeCode : [],
			 listeProduits : []
	}
	this.Version = '1.1'
};