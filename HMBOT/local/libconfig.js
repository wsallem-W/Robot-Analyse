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
		/// Declaration des élements présents dans le config.json
		nomFichierConfig : 'config.json',
		nomFichierConfigDA : 'configDA.json',
		constantes : {
			ASSPRI: 'ASSPRI',
			produitValide: 'VA',
			produitTermine : 'RA',
			correspondanceRang : {
				ASSPRI: ['1'],
				CONJOI: ['11'],
				ENFANT: ['21', '22', '23', '24', '25', '26', '27', '28', '29']
			}

		} 
	};
	


	var fichierConfig = {};
	var scenario = {};
	scenario.CMU = 'CMU';
	scenario.ACS = 'ACS';
	scenario.SIRH = 'SIRH';
	scenario.SIRHUpdate = 'SIRHUpdate';
	scenario.DA = 'DA';
	scenario.Analyse = 'ANALYSE';
	
	configF.scenario=scenario;
	configF.fichierConfig = fichierConfig;
	
	
	configF.chargementFichierConfig = function() {
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + configF.nomFichierConfig);
		configF.fichierConfig = JSON.parse(chemin);
		configF.cheminVersTemplate = configF.fichierConfig.cheminTemplate;
		ctx.log('Initialisation : Chargement du fichier config.json');
	}
	
	configF.chargementFichierConfigDA = function() {
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + configF.nomFichierConfigDA);
		configF.fichierConfig = JSON.parse(chemin);
		configF.cheminVersTemplate = configF.fichierConfig.cheminTemplate;
		ctx.log('Initialisation : Chargement du fichier configDA.json');
	}
	
	configF.chargementFichierConfigScenarioCMU = function() {
		var cheminConfigScenario = 'configCMU.json';
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + cheminConfigScenario);
		configF.fichierConfigScenario = new confFileCMUClass();
		configF.fichierConfigScenario = JSON.parse(chemin);
		ctx.log('Initialisation : Chargement du fichier configCMU.json');
	}
	
	configF.chargementFichierConfigScenarioANALYSE = function() {
		var cheminConfigScenario = 'configAnalyseSituation.json';
		ctx.log('-->configF.chargementFichierConfig()');
		var chemin = ctx.fso.file.read(ctx.options.serverURL + '\\' + cheminConfigScenario);
		configF.fichierConfigScenario = new confFileANALYSEClass();
		configF.fichierConfigScenario = JSON.parse(chemin);
	}
	
	
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
	
	
	
	configF.init = function(dat) {
		var codeScenario=dat.codeScenario;
		ctx.log('---> configF.init('+codeScenario+')');
//		configF.chargementFichierConfig();
		configF.cheminVersTemplate=configF.fichierConfig.cheminTemplate;
		var config = dat.scenarioConfig[codeScenario];
		configF.cheminRacine = config.cheminRacine;
		var finTitreResultat='_Resultats.';
		var avecExcel = !!config.excel;
		
		
		// Dans le cas du scenario SIRH ou autre où les données sont dans un json et non dans un xls
		if (!avecExcel) {
			configF.nomFichier = 'pivot.json';
			//configF.nomFichierResultat = ctx.dateF.formatJJMMAAAA(new Date()) + "_" + codeScenario + finTitreResultat + 'xls';
			configF.nomFichierResultat =  "_" + codeScenario + finTitreResultat + 'xls';
			return true;
		}
		var extensionFichier = ctx.configF.fichierExtension(codeScenario);
		var fichiers = ctx.fso.folder.getFileCollection(configF.cheminRacine);
		var n_fichiers = 0;
		while(!fichiers.atEnd()) {
			var ff = fichiers.item();
			// on verifie si il n'y a pas deux fichiers de données sans "finTitreResultat" dans le titre
			if ((ff.Name.indexOf(extensionFichier) !== -1)) {
				n_fichiers += 1;
				configF.nomFichier = ff.Name;
			}
			fichiers.moveNext();
		}
		
		if (n_fichiers !== 1) {
			ctx.traceF.errorTxt(n_fichiers + " " + extensionFichier + " fichiers trouvés dans  " + configF.cheminRacine + ", seulement 1 fichier est demandé");
			ctx.popupF.newPopup(n_fichiers + " fichier(s) Excel de données trouvé(s) dans " + configF.cheminRacine + ", il en faut un et un seul.", 'Erreur Excel');
			return false;	
		}

		var extension = ctx.configF.extensionFichierResultat(codeScenario, configF.nomFichier);
		var test = ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1);
		ctx.log('test : '+test);
		var nomFichierResultatComplet = ctx.dateF.formatAAAAMMJJ(new Date())+ "_" + codeScenario + "_" + ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1)  + finTitreResultat + extension;
		
		configF.cheminFichier=configF.cheminRacine + configF.nomFichier;
		if (!ctx.fso.file.exist(configF.cheminFichier)) {
			ctx.traceF.errorTxt("Ouverture Impossible : aucune fichier à l'addresse : "+configF.cheminFichier);
			return false;	
		}

		ctx.log("Ouverture réussie : fichier trouvé");
		configF.nomFichierResultat = nomFichierResultatComplet;
		configF.cheminFichierResultat = configF.cheminRacine+configF.nomFichierResultat;
		return true;	
	}

  //getCodeProductCorrespond
	configF.codeProduitACSCorrespondant = function(codeProduit) {
		var config = configF.fichierConfigScenario;
		return config.produitAccesSante[codeProduit];
	}

  //configFile.getHarmonieCustomerPath
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
	
	configF.recupererCheminTemplate = function(){
		return configF.fichierConfig.cheminTemplate;
	}
	
	configF.initDA = function(codeScenario) {
		ctx.log('---> configF.init('+codeScenario+')');
		configF.chargementFichierConfigDA();
		configF.cheminVersTemplate=configF.fichierConfig.cheminTemplate;
		var config = configF.fichierConfig[codeScenario];
		configF.cheminRacine = config.cheminRacine;
		var finTitreResultat='_Resultats.';
		var avecExcel = !!config.excel;
		
		
		// Dans le cas du scenario SIRH ou autre où les données sont dans un json et non dans un xls
		if (!avecExcel) {
			configF.nomFichier = 'pivot.json';
			//configF.nomFichierResultat = ctx.dateF.formatJJMMAAAA(new Date()) + "_" + codeScenario + finTitreResultat + 'xls';
			configF.nomFichierResultat =  "_" + codeScenario + finTitreResultat + 'xls';
			return true;
		}
		var extensionFichier = ctx.configF.fichierExtension(codeScenario);
		var fichiers = ctx.fso.folder.getFileCollection(configF.cheminRacine);
		var n_fichiers = 0;
		while(!fichiers.atEnd()) {
			var ff = fichiers.item();
			// on verifie si il n'y a pas deux fichiers de données sans "finTitreResultat" dans le titre
			if ((ff.Name.indexOf(extensionFichier) !== -1)) {
				n_fichiers += 1;
				configF.nomFichier = ff.Name;
			}
			fichiers.moveNext();
		}
		
		if (n_fichiers !== 1) {
			ctx.traceF.errorTxt(n_fichiers + " " + extensionFichier + " fichiers trouvés dans  " + configF.cheminRacine + ", seulement 1 fichier est demandé");
			ctx.popupF.newPopup(n_fichiers + " fichier(s) Excel de données trouvé(s) dans " + configF.cheminRacine + ", il en faut un et un seul.", 'Erreur Excel');
			return false;	
		}

		var extension = ctx.configF.extensionFichierResultat(codeScenario, configF.nomFichier);
		var test = ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1);
		ctx.log('test : '+test);
		var nomFichierResultatComplet =  "_" + codeScenario + "_" + ctx.string.left(configF.nomFichier, configF.nomFichier.length - extension.length - 1)  + finTitreResultat + extension;
		
		configF.cheminFichier=configF.cheminRacine + configF.nomFichier;
		if (!ctx.fso.file.exist(configF.cheminFichier)) {
			ctx.traceF.errorTxt("Ouverture Impossible : aucune fichier à l'addresse : "+configF.cheminFichier);
			return false;	
		}

		ctx.traceF.infoTxt("Ouverture réussie : fichier trouvé");
		configF.nomFichierResultat = nomFichierResultatComplet;
		configF.cheminFichierResultat = configF.cheminRacine + configF.nomFichierResultat;
		return true;	
	}

	
	return configF;
}) ();