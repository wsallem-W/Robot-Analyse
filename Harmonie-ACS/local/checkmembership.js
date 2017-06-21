﻿ActivInfinitev7.scenario({ checkMembership: function(ev, sc) {
	sc.data.codeScenario = ctx.config.SIRH;
	sc.onTimeout(ctx.config.getTimeout(), function(sc, st) { sc.endScenario();	});
	sc.onError(function(sc, st, ex) { sc.endScenario();	});
	sc.setMode(e.scenario.mode.noStartIfRunning);
	sc.step(ActivInfinitev7.steps.initializeCheckMembership);
	sc.step(ActivInfinitev7.steps.navigateToMembership);
	sc.step(ActivInfinitev7.steps.searchMembership);
	sc.step(ActivInfinitev7.steps.searchMembershipBenef);
	sc.step(ActivInfinitev7.steps.setPrincipalInterlocutorData);
	sc.step(ActivInfinitev7.steps.endCheckMembership);
}});

ActivInfinitev7.step({ initializeCheckMembership: function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - START - checkMembership - ' + sc.data.codeScenario);
	sc.endStep();
}});

ActivInfinitev7.step({ navigateToMembership : function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - navigateToMembership');
	ctx.scenarioHelper.goTo(ctx.scenarioHelper.pageLinks.membershipCollective);
	ActivInfinitev7.pMembershipColSearch.wait(function() {
		sc.endStep();
	});
}});

ActivInfinitev7.step({ searchMembership : function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - searchMembership');
	
	ActivInfinitev7.pMembershipColSearch.oNumberContractCol.set(sc.data.contract.individualContractCollectif);
	ActivInfinitev7.pMembershipColSearch.oInsureGroup.set(sc.data.contract.insureGroup);
	ActivInfinitev7.pMembershipColSearch.oContractType.set('2'); // Select 'Adhésion' on contract select list
	ActivInfinitev7.pMembershipColSearch.btSearch.click();
	
	ActivInfinitev7.pMembershipColSearch.events.UNLOAD.on(function() {
		ActivInfinitev7.pTerminatedContractFo.events.LOAD.on(function() {
			ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - membership found');
			
			sc.data.commentContract = 'Adhésion trouvé';
			sc.data.statusContract = ctx.excelHelper.constants.status.Success;
			
			ActivInfinitev7.pTerminatedContractFo.btNext.click();
			ActivInfinitev7.pMembershipSearchBene.wait(function() {
				sc.endStep();
			});
		});
	
		ActivInfinitev7.pMembershipColSearch.events.LOAD.on(function() {
			var message = ctx.scenarioHelper.withEmptyMessagesPopup(ctx.scenarioHelper.getMessagesPopup());
			ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - END SCENARIO - membership not found');
			sc.data.commentContract = 'Revoir centre: ' + message;
			sc.data.statusContract = ctx.excelHelper.constants.status.Fail;
			ctx.scenarioHelper.goHome(function() {
				sc.endScenario();
			});
		});
	});
}});

ActivInfinitev7.step({ searchMembershipBenef : function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - searchMembershipBenef');
	
	ActivInfinitev7.pMembershipSearchBene.oNumberINSEE.set(sc.data.contract.inseeNumber);
	ActivInfinitev7.pMembershipSearchBene.btSearch.click();
	
	ActivInfinitev7.pMembershipSearchBene.events.UNLOAD.on(function() {
		ActivInfinitev7.pMembershipSearchBene.events.LOAD.on(function() {
			var benefExist = ActivInfinitev7.pMembershipSearchBene.oSearchValid.exist();			
			// TODO next task
			
			ActivInfinitev7.pMembershipSearchBene.btCancel.click();
			ActivInfinitev7.pMembershipMainBenef.wait(function() {
				sc.endStep();
			});
		});
	});
}});

ActivInfinitev7.step({ setPrincipalInterlocutorData: function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - setPrincipalInterlocutorData');
	
	ActivInfinitev7.pMembershipMainBenef.oModePaymentContribut.set('1'); // Select 'Chèque'
	ActivInfinitev7.pMembershipMainBenef.events.UNLOAD.on(function(){
		ActivInfinitev7.pMembershipMainBenef.events.LOAD.on(function(){
			ActivInfinitev7.pMembershipMainBenef.oCivility.set(sc.data.contract.civility);
			ActivInfinitev7.pMembershipMainBenef.oName.set(sc.data.contract.name);
			ActivInfinitev7.pMembershipMainBenef.oFirstname.set(sc.data.contract.firstName);
			ActivInfinitev7.pMembershipMainBenef.oPostalCode.set(sc.data.contract.postalCode);
			ActivInfinitev7.pMembershipMainBenef.oLocality.set(sc.data.contract.locality);
			ActivInfinitev7.pMembershipMainBenef.oAddress.set(sc.data.contract.address);
			ActivInfinitev7.pMembershipMainBenef.oPaymentFrequency.set('TR'); // Select 'trimestriel'
			ActivInfinitev7.pMembershipMainBenef.oModePaymentPrestatio.set('C'); // Select 'Chèque'
			ActivInfinitev7.pMembershipMainBenef.oExpiryFrequency.set('A'); // Select 'Annuel'
			ActivInfinitev7.pMembershipMainBenef.oTermeType.set('AE'); // Select 'A échoir'
			ctx.scenarioHelper.goHome(function() {
				sc.endStep();
			});
		});
	});
}});
	
ActivInfinitev7.step({ endCheckMembership : function(ev, sc, st) {
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - STEP - endCheckMembership');
	ctx.trace.writeInfo(sc.data.contract.individualContractCollectif + ' - END - checkMembership - ' + sc.data.codeScenario);
	sc.endStep();
}});
