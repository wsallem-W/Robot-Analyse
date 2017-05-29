﻿ActivInfinitev7.scenario({ readExcel: function(ev, sc) {
	var data = sc.data;
	sc.onTimeout(ctx.config.getTimeout(), function(sc, st) { sc.endScenario(); });
	sc.onError(function(sc, st, ex) { sc.endScenario();	});
	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.step(ActivInfinitev7.steps.initConfig);
	sc.step(ActivInfinitev7.steps.openFile);
	sc.step(ActivInfinitev7.steps.copyFile);
	sc.step(ActivInfinitev7.steps.readFile);
	sc.step(ActivInfinitev7.steps.startScenarioACS);
	sc.step(ActivInfinitev7.steps.closeFile);
	sc.step(ActivInfinitev7.steps.writeStats);
}});

ActivInfinitev7.step({ initConfig : function(ev, sc, st) {
	sc.data.config = ctx.config.getConfigACS();
	sc.data.configExcel = sc.data.config.excel;
	
	ctx.trace.writeInfo('Start scenario readExcel ' + ctx.config.getCodeScenarioACS());
	ctx.trace.writeInfo('STEP - init');
	if (!ctx.configACS.init()) {
		sc.endScenario();	
	}
	
	sc.data.pathFileOutputExcelACS = ctx.configACS.getPathFileOutputExcelACS();
	sc.data.pathFileExcelACS = ctx.configACS.getPathFileExcelACS();
	sc.data.totalTimeDuration = new Date();
	sc.endStep();
}});

ActivInfinitev7.step({ openFile : function(ev, sc, st) {
	ctx.trace.writeInfo('STEP - openFile');
	ctx.excel.initialize();
	try {
		ctx.excel.file.open(sc.data.pathFileExcelACS);
	} catch (ex) {
		ctx.trace.writeError('Can not copy open excel file, ' + sc.data.pathFileExcelACS);
	}
	sc.endStep();
}});

ActivInfinitev7.step({ copyFile : function(ev, sc, st) {
	ctx.trace.writeInfo('STEP - copyFile');
	try {
		ctx.excel.file.saveAs(sc.data.pathFileOutputExcelACS); 
		
		var writeArray = [
			{ columnIndex: sc.data.configExcel.columnIndex.dateProceedContract, value: "Date traitement contrat" },
			{ columnIndex: sc.data.configExcel.columnIndex.statusContract, value: "Status contrat" },
			{ columnIndex: sc.data.configExcel.columnIndex.commentContract, value: "Commentaire" }
		];
		
		ctx.excelHelper.write(sc.data.configExcel.startRowIndex - 1, writeArray);
		ctx.trace.writeInfo("Create Output Excel file succeed");
	} catch (ex) {
		ctx.trace.writeError('Can not copy save excel file, ' + sc.data.pathFileOutputExcelACS);
	}
	sc.endStep();
}});

ActivInfinitev7.step({ readFile : function(ev, sc, st) {
	ctx.trace.writeInfo('STEP - readFile');
	var lastIndexRow = ctx.excel.sheet.getLastRow(ctx.excelHelper.toColumnName(sc.data.configExcel.startColumnIndex) + sc.data.configExcel.startRowIndex) - 1;
	sc.data.contracts = getAllCellsv7(lastIndexRow, sc.data.configExcel);
	sc.data.countCaseProcessed = 0;
	sc.data.countCaseSuccessProcessed = 0;
	sc.data.indexCurrentContract = 0;
	sc.endStep();
}});

ActivInfinitev7.step({ startScenarioACS : function(ev, sc, st) {
	var i = sc.data.indexCurrentContract;
	
	var currentContracts = sc.data.contracts[i];
	var config = ctx.config.getConfigACS();
	var data = { contract: currentContracts, config: config, configExcel: config.excel };
	
	ActivInfinitev7.scenarios.navigationMenu.start(data).onEnd(function(s) {
			sc.data.countCaseProcessed += 1;
		
		if (s.data.statusContract === ctx.excelHelper.constants.status.Success) {
			sc.data.countCaseSuccessProcessed += 1;
		}

		var writeArray = [
			{ columnIndex: sc.data.configExcel.columnIndex.dateProceedContract, value: ctx.date.formatTrace(new Date()) },
			{ columnIndex: sc.data.configExcel.columnIndex.statusContract, value: s.data.statusContract },
			{ columnIndex: sc.data.configExcel.columnIndex.commentContract, value: s.data.commentContract }
		];
		
		ctx.excelHelper.write(currentContracts.row, writeArray);
		
		if (i < sc.data.contracts.length - 1) {
			sc.data.indexCurrentContract += 1;
			sc.endStep(ActivInfinite.steps.startScenarioACS);
		} else {
			sc.endStep();
		}
	});
	
}});

ActivInfinitev7.step({ closeFile : function(ev, sc, st) {
	ctx.trace.writeInfo('STEP - closeFile');
	var workbook = ctx.excel.getWorkbooks()[0];
	ctx.excel.file.close(workbook, true);
	ctx.excel.release();
	ctx.excel.end();
	sc.endStep();
}});

ActivInfinitev7.step({ writeStats : function(ev, sc, st) {
	ctx.trace.writeInfo('STEP - writeStats');
	var obj = {};
	obj['fileName'] = ctx.configACS.getFileNameOutputExcelACS();
	obj['totalTimeDuration'] = ctx.date.diffToSecond(sc.data.totalTimeDuration, new Date());
	obj['countCaseProcessed'] = sc.data.countCaseProcessed;
	obj['countCaseSuccessProcessed'] = sc.data.countCaseSuccessProcessed;
	ctx.stats.write(obj);

	ctx.trace.writeInfo('End scenario readExcel ' + ctx.config.getCodeScenarioACS());
	sc.endStep();
}});

function getAllCellsv7(lastIndexRow, configACSExcel){
	var contracts = [];
	for (var i = configACSExcel.startRowIndex; i <= lastIndexRow; i++) {
		var dateProceedContract = ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.dateProceedContract);
		if (dateProceedContract !== undefined && ctx.string.trim(String(dateProceedContract)) !== '') {
			continue;
		}
		
		var contract = {
			row : i,
			individualContract: ctx.stringHelper.padLeft(ctx.string.trim(String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.individualContract))), '00000000'),
			insuredIdentifiant: ctx.string.trim(String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.insuredIdentifiant))),
			insuredName: String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.insuredName)),
			insuredSurName: String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.insuredSurName)),
			subscribedCodeProduct: String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.subscribedCodeProduct)),
			ACSCertificateStartDate: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.ACSCertificateStartDate),
			ACSCertificateEndDate: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.ACSCertificateEndDate),
			scheduleCode: String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.scheduleCode)),
			paymentTypeLabel: String(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.paymentTypeLabel))
		};
		contracts.push(contract);
	}
	
	return contracts;
}
