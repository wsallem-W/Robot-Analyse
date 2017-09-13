﻿ActivInfinitev7.scenario({ scResiliationCMU: function(ev, sc) {
	var data = sc.data;
	sc.data.currentScenario = 'Fin CMU';
  sc.onTimeout(30000, function(sc, st) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' Timeout le scénario courant a été arrêté');
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	sc.onError(function(sc, st, ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ex + ' le scénario courant a été arrêté');
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
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP START - stInitFinCMU');
	ActivInfinitev7.pTabDeBord.btFinCMU.click();
	sc.endStep();
	return;
}});

ActivInfinitev7.step({ stRechercheContratCMU: function(ev, sc, st) {
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stRechercheContratCMU');

	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur recherche contrat : Sortie du Scenario car temps de recherche trop long ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur recherche contrat : ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	
	ActivInfinitev7.pRecherContratIndiv.wait(function() {
		var date  = ctx.dateF.ajouterJour(ctx.dateF.dateEnString(data.scenarioConfig.excel.indexColonne.dateFinSituationParticuliere), 1,0, 0);
		ActivInfinitev7.pRecherContratIndiv.oContratIndiv.set(data.contratCourantCMU.dataLocale.numeroContratIndiv);
		ActivInfinitev7.pRecherContratIndiv.oDateDebEffet.set(date);
		ActivInfinitev7.pRecherContratIndiv.btRecherche.click();
		sc.endStep();
		return;
	});
}});


/** Description */
ActivInfinitev7.step({ stNaviguerVersBlocNotes: function(ev, sc, st) {
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers le bloc-notes ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur lors de la navigation vers le bloc-notes';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	
	ActivInfinitev7.pContratTrouve.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersBlocNotes');
		var data = sc.data;
		ActivInfinitev7.pContratTrouve.btSuivant.click();
		sc.endStep();
		return;
	});
	
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersCalculParam: function(ev, sc, st) {
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers Paramètre de calcul ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: erreur lors de la navigation vers le paramètre de calcul : ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	ActivInfinitev7.pBlockNotes.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersCalculParam');
		var data = sc.data;
		ActivInfinitev7.pBlockNotes.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersHistoCotisations: function(ev, sc, st) {
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers l\'Historique des cotisations';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers l\'Historique des cotisations ';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	ActivInfinitev7.pParamDeCalcul.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersHistoCotisations');
		var data = sc.data;
		ActivInfinitev7.pParamDeCalcul.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stNaviguerVersVisuCompteCotisant: function(ev, sc, st) {
	st.onTimeout(30000,function(sc,st){
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'TimeOut -  search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Timeout lors de la navigation vers Visualisation du compte cotisant';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});	

	st.onError(function(sc,st,ex) {
		ctx.traceF.errorTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + 'OnError - error search contract ');
		data.contratCourantCMU.notes.commentaireContrat = 'Revoir centre: Erreur lors de la navigation vers Visualisation du compte cotisant';
		data.contratCourantCMU.notes.statusContrat= ctx.excelF.constantes.status.Echec;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endScenario();
	});
	ActivInfinitev7.pHistoContribution.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stNaviguerVersVisuCompteCotisant');
		var data = sc.data;
		ActivInfinitev7.pHistoContribution.btSuivant.click();
		sc.endStep();
		return;
	});
}});

ActivInfinitev7.step({ stValidationCalcul: function(ev, sc, st) {
	ActivInfinitev7.pVisuContribution.wait(function(ev){
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stValidationCalcul');
		// Into CMU, the contribution array is empty (message "aucune donnée") so the validation button doesn't exist
		if (ActivInfinitev7.pVisuContribution.oValidation.exist()) {
			ActivInfinitev7.pVisuContribution.oValidation.set('OUI');
		}
		ActivInfinitev7.pVisuContribution.btSuivant.click();
		sc.endStep();
		return;
	});
}});

/** Description */
ActivInfinitev7.step({ stSauvegardeCMU: function(ev, sc, st) {
	ActivInfinitev7.pSauvegardeMaj.wait(function() {
		var data = sc.data;
		ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP - stSauvegardeCMU');
		ActivInfinitev7.pSauvegardeMaj.btSauvegarde.click();
	
		data.contratCourantCMU.notes.commentaireContrat += ' | ' + sc.data.currentScenario + ' effectuée';
		data.contratCourantCMU.notes.statusContrat = ctx.excelF.constantes.status.Succes;
		ActivInfinitev7.pTabDeBord.start(data.webData.tabDeBordURL);
    sc.endStep();
		return;
	});
}});

ActivInfinitev7.step({ stFinResiliationCMU: function(ev, sc, st) {
	ctx.traceF.infoTxt(data.contratCourantCMU.dataLocale.numeroContratIndiv + ' - STEP END - stFinResiliationCMU');
	return sc.endScenario();
}});
