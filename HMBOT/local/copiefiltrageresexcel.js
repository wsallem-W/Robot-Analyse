﻿
/** Description */
GRCHarMu.scenario({ scCopieFiltrageExcel: function(ev, sc) {
	var data = sc.data;
	sc.onTimeout(30000, function(sc, st) { sc.endScenario();	}); // default timeout handler for each step
	sc.onError(function(sc, st, ex) { sc.endScenario();	}); // default error handler
	sc.setMode(e.scenario.mode.clearIfRunning);
	// add steps here...
	
	sc.step(GRCHarMu.steps.stInitCopieFiltrageExcel);
	sc.step(GRCHarMu.steps.stCreationCopieDataExcel);
	sc.step(GRCHarMu.steps.stFinCopieFiltrageExcel);
	
}});

/** Description */
GRCHarMu.step({ stInitCopieFiltrageExcel: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stInitCopieFiltrageExcel: Découpage de fichers résulat en blocs de taille 10');	
	sc.endStep();
	return;
}});


/** Description */
GRCHarMu.step({ stCreationCopieDataExcel: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stCreationCopieDataExcel: copie des lignes qui sont traitées, les lignes qui ne sont pas analysées sont copiées dans un fichier des données non traitées');
	var time = ctx.getTime()+'';
	var maDate = ctx.getDate()+'';
	var nameFichierResultat = maDate.substr(0,4)+''+maDate.substr(5,2)+''+maDate.substr(8,2)+'_'+time.substr(0,2)+''+time.substr(3,2)+''+time.substr(6,2);
		try {
			var rangeValues = ctx.excel.sheet.getRangeValues('A' + data.ppCouranteAnalyse.dataLocale.indexDeb + ':' + data.varGlobales.carFinIndexCol + '' + data.ppCouranteAnalyse.dataLocale.indexFin + '');
			ctx.excel.file.open(data.ppCouranteAnalyse.dataFichiers.cheminTemplateExcel + data.ppCouranteAnalyse.dataFichiers.nomTemplate);
			ctx.excel.getWorkbook(data.ppCouranteAnalyse.dataFichiers.nomTemplate);
			//ctx.excel.file.saveAs(data.ppCouranteAnalyse.dataFichiers.cheminResultats + nameFichierResultat + data.ppCouranteAnalyse.dataFichiers.nomFichierATraiter);
			ctx.excel.file.saveAs(data.ppCouranteAnalyse.dataFichiers.cheminData + data.ppCouranteAnalyse.dataFichiers.nomRepertoire + '\\Data_Excel\\' + data.ppCouranteAnalyse.dataFichiers.nomRepertoire +'_Analyse_'+ nameFichierResultat + data.ppCouranteAnalyse.dataFichiers.nomFichierATraiter);
			var extension = ctx.fso.file.getExtensionName(data.ppCouranteAnalyse.dataFichiers.nomFichierATraiter);
			var nomFichier = data.ppCouranteAnalyse.dataFichiers.nomFichierATraiter;
			var nomFichierSansExt = nomFichier.substr(0, nomFichier.length - extension.length -1);
			//on fait la copie que des lignes traitées
			var indexFinInsert = data.ppCouranteAnalyse.dataLocale.indexFin - data.ppCouranteAnalyse.dataLocale.indexDeb + 2 ;
			ctx.excel.sheet.setRangeValues('A2:'+ data.varGlobales.carFinIndexCol + '' + indexFinInsert +'',rangeValues);
			//on fait close de nouveau fichier créer
			ctx.excel.file.close(nameFichierResultat + '.xlsb', true);
			ctx.excel.getWorkbook(data.ppCouranteAnalyse.dataFichiers.nomFichierResultatAnalyse);
			//création de ticket
			ctx.fso.file.create(data.ppCouranteAnalyse.dataFichiers.cheminData + data.ppCouranteAnalyse.dataFichiers.nomRepertoire + '\\Tickets\\' + nameFichierResultat + nomFichierSansExt);
			ctx.wait(function(ev){
			 	ctx.traceF.infoTxt('************************ Fin try\catch - découpage excel');
				sc.endStep();
				return;
			}, 1000);
		} catch (ex) {
			ctx.traceF.errorTxt('Can not copy open excel file');	
			sc.endStep();
			return;
		}
}});


/** Description */
GRCHarMu.step({ stFinCopieFiltrageExcel: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt('Etape stFinCopieFiltrageExcel: Fin découpage de ième blocs de sortie');
	data.ppCouranteAnalyse.dataLocale.nbAdhesion = 0;
	data.ppCouranteAnalyse.dataLocale.indexDeb = data.ppCouranteAnalyse.dataLocale.indexFin + 1;
	data.ppCouranteAnalyse.dataLocale.indexFin = data.ppCouranteAnalyse.dataLocale.indexDeb -1;
	sc.endScenario();
	return;
}});
