﻿ctx.excelF = (function() {
	
	
	var excelF = {
			config : '',
			configExcel:'',
			codeScenario:''
	};
	
	//Constantes
	//excelHelper.constants
	excelF.constantes = {
		statuts: {
			Succes: "Traité",
			Echec: "Non traité",
			DejaTraite : "Déjà Fait"
		}
	}
	//
	
	
	excelF.configExcel = function(dat) {
			
		ctx.excelF.config = dat.scenarioConfig[dat.codeScenario];
		ctx.excelF.configExcel = ctx.excelF.config.excel;
	}
//	getHeaderFile
	excelF.modifierEntete = function() {
		var tab = [
			{ columnIndex: ctx.excelF.configExcel.indexColonne.dateTraitementContrat, value: "Date traitement contrat" },
			{ columnIndex: ctx.excelF.configExcel.indexColonne.statutsContrat, value: "Statuts contrat" },
			{ columnIndex: ctx.excelF.configExcel.indexColonne.commentaireContrat, value: "Commentaire" }
		];
		return tab;
	}
	//startRowIndex
	excelF.debutIndexLigne = function() {
		return ctx.excelF.configExcel.debutIndexLigne - 1;
	}
	
	excelF.indexDerniereLigne = function() {
		var nligne = ctx.excel.sheet.getLastRow(ctx.excelF.conversionNomCol(ctx.excelF.configExcel.debutIndexCol) + ctx.excelF.configExcel.debutIndexLigne) - 1;
		return nligne;
	}


	//writeStats
	excelF.remplirStats = function(obj) {
		ctx.statsF.remplir(obj);
	}
	
	/// Fonctions de manipulation
	
	
//	toColumnName
excelF.conversionNomCol = function(nombre) {
	for (var ret = '', a = 1, b = 26; (nombre -= a) >= 0; a = b, b *= 26) {
		ret = String.fromCharCode(parseInt((nombre % b) / a, 10) + 65) + ret;
	}
	return ret;
};
//writeArrayObject
excelF.remplirObjetTableau = function(Index, arrayMessage) {
		for (var i in arrayMessage) {
			var message = arrayMessage[i];
			ctx.excel.sheet.setCell(Index, message.columnIndex, String(message.value));
		}
	};
//.writeArray
excelF.remplirTableau = function(rowIndex, arrayMessage) {
		for (var i in arrayMessage) {
			var message = arrayMessage[i];

			//ctx.log(message);
			//ctx.log(parseInt(i,10) + 1);
			ctx.excel.sheet.setCell(rowIndex, parseInt(i,10) + 1, String(message));
			//ctx.log(String(message));

			ctx.excel.sheet.setCell(rowIndex, parseInt(i,10) + 1, String(message));

			ctx.excel.sheet.setCell(rowIndex, parseInt(i,10) + 1, String(message));

		}
	}

//.createFile
	excelF.creerFichier = function() {
		ctx.excel.release();
		ctx.excel.initialize();
		try {
			ctx.excel.file.create();
		} catch (ex) {
			ctx.traceF.errorTxt('Impossible de créer un fichier Excel');
		}
	}
	
//	.openFile
	excelF.ouvertureFichier = function(chemin) {
		ctx.excel.release();
		ctx.excel.initialize();
		try {
			ctx.excel.file.open(chemin);
		} catch (ex) {
			ctx.traceF.errorTxt('Can not copy open excel file, ' + chemin);
		}
	}
	//.copyFile
	excelF.copieFichier = function(cheminFichierExcel, debutIndexLigne, remplirCol) {
		try {
			ctx.excel.file.saveAs(cheminFichierExcel); 
			ctx.excelF.remplirObjetTableau(debutIndexLigne, remplirCol);
			ctx.traceF.infoTxt(" La création du fichier résultat Excel est réussie");
		} catch (ex) {
			ctx.traceF.errorTxt('Impossible d\'enregistrer le fichier excel : ' + cheminFichierExcel);
		}
	}
	
	
excelF.sauverFichier = function(chemin) {
		try {
			if (chemin) {
				ctx.excel.file.saveAs(chemin);
			}
			else {
				ctx.excel.file.save(); 
			}
		} catch (ex) {
			ctx.traceF.errorTxt('Impossible d\'enregistrer le fichier excel');
		}
	}
	
	excelF.fermerFichier = function() {
		var feuille = ctx.excel.getWorkbooks()[0];
		ctx.excel.file.close(feuille, true);
		ctx.excel.end();
		ctx.excel.release();
	}
	
	
	return excelF;
}) ();

