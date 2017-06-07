﻿ActivInfinitev7.scenario({ scenarioCMU: function(ev, sc) {
	sc.data.scenarioCode = ctx.config.CMU;
	sc.onTimeout(ctx.config.getTimeout(), function(sc, st) { sc.endScenario(); });
	sc.onError(function(sc, st, ex) { sc.endScenario();	});
	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.step(ActivInfinitev7.steps.initScenario);
	sc.step(ActivInfinitev7.steps.startScenarioCMU);
	sc.step(ActivInfinitev7.steps.endScenario);
}});
	
ActivInfinitev7.step({ startScenarioCMU : function(ev, sc, st) {
	var i = sc.data.indexCurrentContract;
	var config = ctx.config.getConfig(ctx.config.CMU);
	sc.data.beneficiaries = sc.data.contracts[i];
	sc.data.contract = ctx.scenarioHelper.searchInsuredFromType(ctx.scenarioHelper.constantes.ASSPRI, sc.data.beneficiaries);
	if (!sc.data.contract) {
		ctx.trace.writeError('ASSPRI is not found');
		throw new Error('ASSPRI is not found');
	}
	sc.data.config = config;
	sc.data.configExcel = config.excel;
	
	ActivInfinitev7.scenarios.checkContractCMU.start(sc.data).onEnd(function(s) {
		sc.data.countCaseProcessed += 1;
		
		if (s.data.statusContract === ctx.excelHelper.constants.status.Success) {
			sc.data.countCaseSuccessProcessed += 1;
		}

		var writeArray = [
			{ columnIndex: sc.data.configExcel.columnIndex.dateProceedContract, value: ctx.date.formatTrace(new Date()) },
			{ columnIndex: sc.data.configExcel.columnIndex.statusContract, value: s.data.statusContract },
			{ columnIndex: sc.data.configExcel.columnIndex.commentContract, value: s.data.commentContract }
		];
		
		ctx.excelHelper.write(sc.data.contract.row, writeArray);
		
		if (i < sc.data.contracts.length - 1) {
			sc.data.indexCurrentContract += 1;
			sc.endStep(ActivInfinitev7.steps.startScenarioCMU);
		} else {
			sc.endStep();
		}
	});
}});
