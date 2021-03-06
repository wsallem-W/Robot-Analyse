﻿/** Description */
GRCHarMu.scenario({ scGenerationFichierSortie :function(ev, sc) {
	var data = sc.data;
	sc.onTimeout(35000, function(sc, st) { sc.endScenario();	}); // default timeout handler for each step
	sc.onError(function(sc, st, ex) { sc.endScenario();	}); // default error handler
	sc.setMode(e.scenario.mode.clearIfRunning);
	// add steps here...
	
	sc.step(GRCHarMu.steps.stInitGestionFichierSortie);
	sc.step(GRCHarMu.steps.stCreationFichierSortie);
	sc.step(GRCHarMu.steps.stChargementFichierTechnique);
	sc.step(GRCHarMu.steps.stExecMacroSortie);
	sc.step(GRCHarMu.steps.stFinGestionFichierSortie);
	
}});

/** Description */
GRCHarMu.step({ stInitGestionFichierSortie: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stInitGestionFichierSortie: Initialisation de création de fichier de sortie');
	sc.endStep();
	return;
}});


/** Description */
GRCHarMu.step({ stCreationFichierSortie: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stCreationFichierSortie: Creatio de fichier de résultats');
	var time = ctx.getTime()+'';
	var maDate = ctx.getDate()+'';
	var extensionNom = maDate.substr(0,4)+''+maDate.substr(5,2)+''+maDate.substr(8,2)+'_'+time.substr(0,2)+''+time.substr(3,2)+''+time.substr(6,2) + '_';
	data.ppCouranteAnalyse.dataFichiers.nomFichierSortie = data.ppCouranteAnalyse.dataFichiers.nomRepertoire + '_Analyse_' + extensionNom + data.ppCouranteAnalyse.dataFichiers.nomFichierSortie;
	try{
		//création de répertoire sous WALLI
		if(ctx.fso.folder.exist(data.ppCouranteAnalyse.dataFichiers.cheminResultat + data.ppCouranteAnalyse.dataFichiers.nomRepertoire) === false){
			ctx.fso.folder.create(data.ppCouranteAnalyse.dataFichiers.cheminResultat + data.ppCouranteAnalyse.dataFichiers.nomRepertoire);
		}else{
			ctx.fso.file.deleteInFolder(data.ppCouranteAnalyse.dataFichiers.cheminResultat + data.ppCouranteAnalyse.dataFichiers.nomRepertoire + '\\');
		}
		//open de template de sortie
		ctx.excel.file.open(data.ppCouranteAnalyse.dataFichiers.cheminTemplateExcel + data.ppCouranteAnalyse.dataFichiers.nomTemplateSortie);
		//save as dans le répertoire résultat
		ctx.excel.file.saveAs(data.ppCouranteAnalyse.dataFichiers.cheminResultat + data.ppCouranteAnalyse.dataFichiers.nomRepertoire + '\\'+ data.ppCouranteAnalyse.dataFichiers.nomFichierSortie);
		ctx.wait(function(ev){
			 	ctx.traceF.infoTxt('************************ Fin try\catch - création de fichier de sortie');
				sc.endStep();
				return;
		}, 1000);
	}catch(ex){
		ctx.traceF.errorTxt('Erreur création fichier de sortie');
		sc.endStep();
		return;
	}
}});


/** Description */
GRCHarMu.step({ stChargementFichierTechnique: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stChargementFichierTechnique: Chargement de fichier de résultats dans la feuille data');
	data.varGlobales.ligneCourante = 2 ;
	var deb = data.varGlobales.ligneCourante;
	var fin = data.varGlobales.indexDerniereLigne;
	//copie de la ième ligne de fichier technique vers le fichier de résultats "feuille data"
	for(var i = deb; i <= fin; i++){
		ctx.excel.getWorkbook(data.ppCouranteAnalyse.dataFichiers.nomFichierResultatAnalyse);
		var rangeValues = ctx.excel.sheet.getRangeValues('A' + i + ':' + data.varGlobales.carFinIndexCol + '' + i + '');
		ctx.excel.getWorkbook(data.ppCouranteAnalyse.dataFichiers.nomFichierSortie);
		ctx.excel.sheet.activate('data');
		ctx.excel.sheet.setRangeValues('A' + i + ':' + data.varGlobales.carFinIndexCol + '' + i + '',rangeValues);
		ctx.excel.file.save();
	}
	sc.endStep();
	return;
}});


/** Description */
GRCHarMu.step({ stExecMacroSortie: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stExecMacroSortie: Exécution de la macro de génération de fichier de sortie');
	ctx.excel.getWorkbook(data.ppCouranteAnalyse.dataFichiers.nomFichierSortie);
	ctx.excel.sheet.activate('Table correspondance');
	ctx.excel.sheet.selectRange('B1:B1');
	ctx.excel.file.save();
	ctx.excel.file.close(data.ppCouranteAnalyse.dataFichiers.nomFichierSortie , true); //d'extension .xlsm qui contient la macro
	sc.endStep();
	return;
}});


/** Description */
GRCHarMu.step({ stFinGestionFichierSortie: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stFinGestionFichierSortie: Fin génération de fichier de résultats');
	sc.endStep();
	return;
}});