﻿ActivInfinitev7.scenario({ coverageChangeContract: function(ev, sc) {
	var data = sc.data;
	sc.onTimeout(ctx.config.getTimeout(), function(sc, st) { sc.endScenario();	});
	sc.onError(function(sc, st, ex) { sc.endScenario();	});
	sc.setMode(e.scenario.mode.noStartIfRunning);
	sc.step(ActivInfinitev7.steps.initializeCoverageChangeContract);
	sc.step(ActivInfinitev7.steps.searchCoverageContract);
	sc.step(ActivInfinitev7.steps.goToProductUpdatePage);
	sc.step(ActivInfinitev7.steps.updateProduct);
	sc.step(ActivInfinitev7.steps.goToVisualizationContributionFromCoverageChange);
//	sc.step(ActivInfinitev7.steps.validationCalcul); //TO uncomment when the before step are done
	sc.step(ActivInfinitev7.steps.goToImmediateNoticePage);
	sc.step(ActivInfinitev7.steps.selectElementDiffereIntoImmediateNotice);
	sc.step(ActivInfinitev7.steps.checkElementDiffereIntoAskThirdPartyPayment);
//	sc.step(ActivInfinitev7.steps.saveContract); //TO uncomment when the before step are done
	sc.step(ActivInfinitev7.steps.closeContractUpdate);
	sc.step(ActivInfinitev7.steps.endCoverageChangeContract);
}});

ActivInfinitev7.step({ initializeCoverageChangeContract: function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContract + ' - STEP START - coverage change');
	sc.data.commentContract += 'Changement de couverture du contrat \n';
	
	function navigateToCoverageChange() {
		window.location.href = '/mdg/Go.do?id=ACCC01STD';
	};
	
	ActivInfinitev7.pDashboard.injectFunction(navigateToCoverageChange);
	ActivInfinitev7.pDashboard.execScript('navigateToCoverageChange()');
	ActivInfinitev7.pSearchContractIndiv.wait(function() {
		sc.endStep();
	});
}});

ActivInfinitev7.step({ searchCoverageContract: function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContract + ' - STEP - searchCoverageContract');
	
	ActivInfinitev7.pSearchContractIndiv.oIndividualContract.set(sc.data.contract.individualContract);
	ActivInfinitev7.pSearchContractIndiv.oDateContract.set(ctx.date.formatDDMMYYYY(ctx.date.addDay(new Date(sc.data.contract.ACSCertificateEndDate), 1)));
	ActivInfinitev7.pSearchContractIndiv.btSearch.click();
	
	ActivInfinitev7.pSearchContractIndiv.events.UNLOAD.on(function() {
		ctx.scenarioHelper.checkIfContractFound(sc, function() {
			sc.endStep(ActivInfinitev7.steps.closeContractUpdate);
		});
		
		ActivInfinitev7.pTerminatedContractFo.events.LOAD.on(function() {
			ctx.trace.writeInfo(sc.data.contract.individualContract + ' - STEP - contract found');
			
			sc.data.commentContract += 'Contrat trouvé \n';
			sc.data.statusContract = ctx.excelHelper.constants.status.Success
			sc.endStep();
		});
	});
}});
	
ActivInfinitev7.step({ goToProductUpdatePage: function(ev, sc, st) {
	ActivInfinitev7.pTerminatedContractFo.btNext.click();
	ActivInfinitev7.pBlockNotes.wait(function() {
		ActivInfinitev7.pBlockNotes.btNext.click();
		ActivInfinitev7.pProductUpdate.wait(function() {
			sc.endStep();
		});
	});
}});

ActivInfinitev7.step({ updateProduct: function(ev, sc, st) {
	//TODO on the next PR
	sc.endStep();
}});

ActivInfinitev7.step({ goToVisualizationContributionFromCoverageChange: function(ev, sc, st) {
	//TODO
	sc.endStep();
}});

ActivInfinitev7.step({ goToImmediateNoticePage: function(ev, sc, st) {
	//TODO
	sc.endStep();
}});

ActivInfinitev7.step({ selectElementDiffereIntoImmediateNotice: function(ev, sc, st) {
	//TODO
	sc.endStep();
}});

ActivInfinitev7.step({ checkElementDiffereIntoAskThirdPartyPayment: function(ev, sc, st) {
	//TODO
	sc.endStep();
}});

ActivInfinitev7.step({ endCoverageChangeContract: function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContract + ' - STEP END - coverage change');
	ActivInfinitev7.pDashboard.wait(function() {
		sc.endStep();
	});
}});
