﻿ctx.configF = (function() {
	
	
	var configF = {
		cheminRacine:'', //var rootPath;
		codeScenario:'',
		nomFichier:'', //var fileName;
		cheminFichier:'', //var getPathFile();
		nomFichierResultat:'', //var fileNameOutput;
		cheminFichierResultat:'', //getPathFileOutput()
		cheminFichierConfig:'',
		cheminVersTemplate:'',
		nomFichierStartProcessusBat : 'startProcessus.bat',
		/// Declaration des élements présents dans le vonfig.json
		nomFichierConfig : 'config.json',
		constantes : {
			ASSPRI: 'ASSPRI',
			principale: 'Principale',
			produitValide: 'VA',
			produitTermine : 'RA',
			entiteRattachement : 'P - HARMONIE MUTUELLE',
			correspondanceRang : {
				ASSPRI: ['1'],
				CONJOI: ['11'],
				ENFANT: ['21', '22', '23', '24', '25', '26', '27', '28', '29']
			}
		},
		gammeProduit : ['Harmonie','Harmonie Santé Particuliers', 'Harmonie Santé Collectif'],
		fichierConfig : '',
		fichierConfigScenario:''
	};
	


	
	var scenario = {};
	scenario.CMU = 'CMU';
	scenario.ACS = 'ACS';
	scenario.SIRH = 'SIRH';
	scenario.SIRHUpdate = 'SIRHUpdate';
	scenario.DA = 'DA';
	scenario.Suspension ='Suspension';

	scenario.Adhesion = 'Adhesion';
	
	configF.scenario=scenario;
	
	
	configF.chargementFichierConfig = function() {
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + configF.nomFichierConfig);
		configF.fichierConfig = new confFileClass();
		configF.fichierConfig = JSON.parse(chemin);
		configF.cheminVersTemplate=configF.fichierConfig.cheminTemplate;
		ctx.log('Initialisation : Chargement du fichier config.json');
	}
	
	configF.chargementFichierConfigScenarioCMU = function() {
		var cheminConfigScenario = 'configCMU.json';
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + cheminConfigScenario);
		configF.fichierConfigScenario = new confFileCMUClass();
		configF.fichierConfigScenario = JSON.parse(chemin);
		ctx.log('Initialisation : Chargement du fichier configCMU.json');
	}
		
	configF.chargementFichierConfigScenarioAdhesion = function() {
		var cheminConfig = 'configAdhesion.json';
		ctx.log('-->configF.chargementFichierConfigScenarioAdhesion()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + cheminConfig);
		ctx.log('Chemin dossier server : ' + ctx.options.serverURL);
		ctx.log('Chemin fichier config Adhesion : ' + ctx.options.serverURL + '\\' + cheminConfig);
		configF.fichierConfigScenario = new confFileAdhesionClass();
		configF.fichierConfigScenario = JSON.parse(chemin);
		ctx.log('Initialisation : Chargement du fichier configAdhesion.json');
		}
<<<<<<< HEAD
=======
	
>>>>>>> 60ef554f642819a89e9cceae6e7246a34e34eb29
	
	
	configF.recupConfigScenario = function(codeScenario) {
		ctx.log('--> config '+codeScenario);
		return configF.fichierConfig[codeScenario];
	}
	
	configF.cheminVersStartProcessusBat = function() {
		return ctx.options.serverURL + '\\' + configF.nomFichierStartProcessusBat;
	}
	
	configF.fichierExtension = function(codeScenario) {  // à voir où la fonction est utile
		switch(codeScenario) {
			case ctx.configF.scenario.SIRH:
			case ctx.configF.scenario.DA:
				return '.json';
			default:
				return '.xls';
		}
	}
	
//	configF.getResultFileExtension
	configF.extensionFichierResultat = function(codeScenario, nomFichier) {  // à voir où la  fonction est utile
		return codeScenario === ctx.configF.scenario.SIRH ? 'xls' : ctx.fso.file.getExtensionName(nomFichier);
	}
	
//	configF.selectionFichier = function (chemin,extensionFichier,finTitre){
		
//		var listeFichiers = ctx.fso.folder.getFileCollection(chemin);
//		var cheminVersFichier=undefined;
//		var label = "<script>function cl(element) { close(element.id); }</script>";
//		label = label + "<p> Avec quel fichier souhaitez-vous travailler ? :<br/><br/>";
//		var count=0;
//		while(!listeFichiers.atEnd()) {
//			var ff = listeFichiers.item();
//			ctx.log('Nom fichier : '+ ff);
//				// on verifie si il n'y a pas deux fichiers de données sans "finTitreResultat" dans le titre
//			if ((ff.Name.indexOf(extensionFichier) !== -1) && (ff.Name.indexOf(finTitre==-1))) {
//				label = label + "<a href='javascript:void(0)' id='Option"+count+"' onclick='cl(this);' > ";
//				label = label + "<b> "+ ff.Name+" </b> </a><br/>";
//				count += 1;
//			}
//				listeFichiers.moveNext();
//		}
//		var pMaPopup = ctx.popup('maPopup', e.popup.template.NoButton) ;
//			pMaPopup.open({	message: label }) ;
//			pMaPopup.waitResult(function(res) 
//			{
//				var it=Number(res[6]);
//				cheminVersFichier=ff.Name;
//			  ctx.log('Résultat cliqué: ' + res + " k : " +it+ "Fichier : "+cheminVersFichier);
//				// Quand on clique, res renvoi l'id, dans notre cas id=Option"k".Ce que nous interresse est le "k"
//			});
//		return cheminVersFichier;
//	}
	
<<<<<<< HEAD
	configF.init = function(codeScenario) {
=======
	configF.init = function(dat) {
		var codeScenario=dat.codeScenario;
>>>>>>> 60ef554f642819a89e9cceae6e7246a34e34eb29
		ctx.log('---> configF.init('+codeScenario+')');
		configF.chargementFichierConfig();
		configF.cheminVersTemplate=configF.fichierConfig.cheminTemplate;
		var config = configF.fichierConfig[codeScenario];
		configF.cheminRacine = config.cheminRacine;
		var finTitreResultat='_Resultats.';
		var avecExcel = !!config.excel;
		
		
		// Dans le cas du scenario SIRH ou autre où les données sont dans un json et non dans un xls
		if (!avecExcel) {
			configF.nomFichier = 'pivot.json';
			configF.nomFichierResultat = ctx.dateF.formatAAAAMMJJ(new Date()) + "_" + codeScenario + finTitreResultat + 'xls';
			return true;
		}
		var extensionFichier = ctx.configF.fichierExtension(codeScenario);
		var fichiers = ctx.fso.folder.getFileCollection(configF.cheminRacine);
		var n_fichiers = 0;
		while(!fichiers.atEnd()) {
			
			var ff = fichiers.item();
			ctx.log('Nom fichier : '+ ff);
			// on verifie si il n'y a pas deux fichiers de données sans "finTitreResultat" dans le titre
			if ((ff.Name.indexOf(extensionFichier) !== -1) && (ff.Name.indexOf(finTitreResultat==-1))) {
				n_fichiers += 1;
				configF.nomFichier = ff.Name;
			}
			fichiers.moveNext();
		}
		
		if (n_fichiers !== 1) {
//			var cheminVersFichier = ctx.configF.selectionFichier(configF.cheminRacine,extensionFichier,finTitreResultat);
//			if (cheminVersFichier != undefined){
//				configF.nomFichier=cheminVersFichier;
//			} 
//			else{
				ctx.traceF.errorTxt(n_fichiers + " " + extensionFichier + " fichiers trouvés dans  " + configF.cheminRacine + ", seulement 1 fichier est demandé");
				ctx.popupF.newPopup(n_fichiers + " fichier(s) Excel de données trouvé(s) dans " + configF.cheminRacine + ", il en faut un et un seul.", 'Erreur Excel');
				return false;
//			}
				
		}

		var extension = ctx.configF.extensionFichierResultat(codeScenario, configF.nomFichier);
		var test = ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1);
		ctx.log('test : '+test);
		var nomFichierResultatComplet = ctx.dateF.formatAAAAMMJJ(new Date()) + "_" + codeScenario + "_" + ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1)  + finTitreResultat + extension;
		
		configF.cheminFichier=configF.cheminRacine + configF.nomFichier;
		if (!ctx.fso.file.exist(configF.cheminFichier)) {
			ctx.traceF.errorTxt("Ouverture Impossible : aucune fichier à l'addresse : "+configF.cheminFichier);
			return false;	
		}

		ctx.traceF.infoTxt("Ouverture réussie : fichier trouvé");
		configF.nomFichierResultat = nomFichierResultatComplet;
		configF.cheminFichierResultat = configF.cheminRacine+configF.nomFichierResultat;
		return true;	
	}

//	getCodeProductCorrespond
	configF.codeProduitACSCorrespondant = function(codeProduit) {
		var config = configF.fichierConfig[configF.scenario.ACS];
		return config.produitAccesSante[codeProduit];
	}

//	configFile.getHarmonieCustomerPath
	configF.cheminVersAppliHarmonieCustomer = function() {
		return ctx.options.serverURL + '\\harmonieCustomer.exe';
	}
	
	
	//getPathDirectory
   configF.recupererCheminRacine = function(){
      return configF.cheminRacine;
   }
            
            //getPathFile
   configF.recupererCheminFichier = function() {
     return configF.cheminRacine + configF.nomFichier;
   }
            
            //getFilenameOutput
   configF.recupererNomFichierDeSortie = function() {
     return configF.nomFichierResultat;
   }
            
            //getPathFileOutput
   configF.recupererCheminFichierDeSortie = function() {
     return configF.cheminRacine + configF.nomFichierResultat;
    }


	
	configF.correspondanceTab = function(tab1,tab2,nom){
		var resultat= '';
		for( var i in tab1){
			if(nom == tab1[i]){
				resultat=tab2[i];
				break;
			}
		}
		if(resultat == ''){
			ctx.traceF.errorTxt('Pas de correspondance trouvée pour ' + nom);
		}
		return resultat;
	}
	
	
	
	return configF;
}) ();