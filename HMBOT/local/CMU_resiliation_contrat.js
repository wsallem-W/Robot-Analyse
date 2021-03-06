﻿ActivInfinitev7.scenario({ scResiliationCMU: function(ev, sc) {
	var data = sc.data;
  sc.onTimeout(30000, function(sc, st) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv  + 'onTimeOut -  On quitte le scenario '+ sc.name + ' durant le step : '+  st.name + ' sur la page ' +  ev.pageName );
		data.contratCourantCMU.notes.statutsContrat = ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	sc.onError(function(sc, st, ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv  + 'onError -  On quitte le scenario '+ sc.name + ' durant le step : '+  st.name + ' sur la page ' +  ev.pageName + ' en raison de : '+ ex);
		data.contratCourantCMU.notes.statutsContrat = ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	sc.setMode(e.scenario.mode.noStartIfRunning);
	sc.step(ActivInfinitev7.steps.stInitFinCMU);
	sc.step(ActivInfinitev7.steps.stRechercheContratCMU);
	sc.step(ActivInfinitev7.steps.stNaviguerVersBlocNotes);
	sc.step(ActivInfinitev7.steps.stNaviguerVersCalculParam);
	sc.step(ActivInfinitev7.steps.stNaviguerVersHistoCotisations);
	sc.step(ActivInfinitev7.steps.stNaviguerVersVisuCompteCotisant);
	sc.step(ActivInfinitev7.steps.stValidationCalcul);
	sc.step(ActivInfinitev7.steps.stSauvegardeCMU); 
	sc.step(ActivInfinitev7.steps.stFinResiliationCMU);
}});

ActivInfinitev7.step({ stInitFinCMU: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP START - stInitFinCMU');
	ActivInfinitev7.pTabDeBord.wait(function(){
			ActivInfinitev7.pTabDeBord.btFinCMU.click();
	    sc.endStep();
	    return;
	});

}});

ActivInfinitev7.step({ stRechercheContratCMU: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stRechercheContratCMU');

	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur recherche contrat : Sortie du Scenario car temps de recherche trop long ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur recherche contrat : ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});

	ActivInfinitev7.pIdentContResilRech.wait(function() {
		var date  = ctx.dateF.ajouterJour(ctx.dateF.dateEnString(data.contratCourantCMU.dataLocale.dateFinEffSituatParti), 1,0, 0);
		ActivInfinitev7.pIdentContResilRech.oContratIndiv.set(data.contratCourantCMU.dataLocale.numeroContratIndiv);
		ActivInfinitev7.pIdentContResilRech.oDateDebEffet.set(date);
		ActivInfinitev7.pIdentContResilRech.btRecherche.click();
		sc.endStep();
		return;
	});
	
}});


/** Description */
ActivInfinitev7.step({ stNaviguerVersBlocNotes: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersBlocNotes');
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers le bloc-notes ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur lors de la navigation vers le bloc-notes';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	
	
	
	ActivInfinitev7.pIdentContResilRechRe.wait(function () {
		if(ActivInfinitev7.pIdentContResilRechRe.oDivErreur.exist()){
			var msgErreur = ActivInfinitev7.pIdentContResilRechRe.oDivErreur.get().trim();
			msgErreur=ctx.stringF.suppressionRetourEtTab(msgErreur);
			ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - erreur recherche contrat à la résiliation: ' + msgErreur);
			data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur recherche contrat à la résiliation: ' + msgErreur;
			data.contratCourantCMU.notes.statutsContrat = ctx.excelF.constantes.statuts.Echec;
			sc.endStep(ActivInfinitev7.steps.stFinResiliationCMU);
			return ;
		}
		else{
			if(ActivInfinitev7.pIdentContResilRechRe.btBtnContinuer.exist()){
				ActivInfinitev7.pIdentContResilRechRe.btBtnContinuer.click();
			}
			ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersBlocNotes');
			ActivInfinitev7.pIdentContResilRechRe.btSuivant.click();
			sc.endStep();
			return;
		}
   });
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersCalculParam: function(ev, sc, st) {
	var data = sc.data;
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers Paramètre de calcul ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: erreur lors de la navigation vers le paramètre de calcul : ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	ActivInfinitev7.pBlocNotesResil.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersCalculParam');
		ActivInfinitev7.pBlocNotesResil.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersHistoCotisations: function(ev, sc, st) {
	var data = sc.data;
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers l\'Historique des cotisations';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers l\'Historique des cotisations ';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	ActivInfinitev7.pParamDeCalcul.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersHistoCotisations');
		ActivInfinitev7.pParamDeCalcul.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersVisuCompteCotisant: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersVisuCompteCotisant');
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers Visualisation du compte cotisant';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur lors de la navigation vers Visualisation du compte cotisant';
		data.contratCourantCMU.notes.statutsContrat= ctx.excelF.constantes.statuts.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
		
    sc.endScenario();
	});
	ActivInfinitev7.pHistoCotisation.wait(function(ev){
		ActivInfinitev7.pHistoCotisation.btSuivant.click();
		sc.endStep();
		return;
	});
}});

ActivInfinitev7.step({ stValidationCalcul: function(ev, sc, st) {
	var data = sc.data;
	ActivInfinitev7.pVisuCptCotisChgtCouv.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stValidationCalcul');
		// Into CMU, the contribution array is empty (message "aucune donnée") so the validation button doesn't exist
		if (ActivInfinitev7.pVisuCptCotisChgtCouv.oValidation.exist()) {
			ActivInfinitev7.pVisuCptCotisChgtCouv.oValidation.set('OUI');
		}
		ActivInfinitev7.pVisuCptCotisChgtCouv.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stSauvegardeCMU: function(ev, sc, st) {
	ActivInfinitev7.pValidationActeChgtCouv.wait(function() {
		var data = sc.data;
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stSauvegardeCMU');
		ActivInfinitev7.pValidationActeChgtCouv.btSauvegarde.click();
		data.contratCourantCMU.notes.commentaireContrat = data.nomScenario + ' effectuée';
		data.contratCourantCMU.notes.statutsContrat = ctx.excelF.constantes.statuts.Succes;
		data.contratCourantCMU.statutsCMU.contratResilie = true;
	});
	
	ActivInfinitev7.pIdentContResilRech.wait(function(ev) {
		ctx.log('Retour sur la page Resiliation Contrat Recherche');
		sc.endStep();
		return;
	});
	
}});

ActivInfinitev7.step({ stFinResiliationCMU: function(ev, sc, st) {
	var data = sc.data;
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP END - stFinResiliationCMU');
	ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
	ctx.log('Retour au tableau de bord');
	sc.endStep();
	return ;
}});
