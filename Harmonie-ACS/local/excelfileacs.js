﻿ActivInfinite.scenario({ readExcel: function(ev, sc) {
	var data = sc.data;
	sc.onTimeout(30000, function(sc, st) { sc.endScenario();	});
	sc.onError(function(sc, st, ex) { sc.endScenario();	});
	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.step(ActivInfinite.steps.getConfig);
	sc.step(ActivInfinite.steps.openFile);
	sc.step(ActivInfinite.steps.copyFile);
	sc.step(ActivInfinite.steps.readFile);
	sc.step(ActivInfinite.steps.closeFile);
}});

ActivInfinite.step({ getConfig : function(ev, sc, st) {
	sc.data.config = ctx.config.getConfigACS();
	sc.data.configExcel = sc.data.config.excel;
	sc.endStep();
}});

ActivInfinite.step({ openFile : function(ev, sc, st) {
	ctx.excel.initialize();
	ctx.excel.file.open(pathFileExcelACS);
	sc.endStep();
}});

ActivInfinite.step({ copyFile : function(ev, sc, st) {
	ctx.excel.file.saveAs(pathFileOutputExcelACS); 
	sc.endStep();
}});

ActivInfinite.step({ readFile : function(ev, sc, st) {
	var lastIndexRow = ctx.excel.sheet.getLastRow(ctx.excelHelper.toColumnName(sc.data.configExcel.startColumnIndex) + sc.data.configExcel.startRowIndex) - 1;
	var contracts = getAllCells(lastIndexRow, sc.data.configExcel)
	sc.endStep();
}});

ActivInfinite.step({ closeFile : function(ev, sc, st) {
	ctx.excel.end();
	ctx.excel.release();
	sc.endStep();
}});

function getAllCells(lastIndexRow, configACSExcel){
	var contracts = [];
	for(var i = configACSExcel.startRowIndex; i <= lastIndexRow; i++){
		var contract = {
			row : i,
			individualContract: ctx.string.trim(ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.individualContract)),
			insuredName: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.insuredName),
			insuredSurName: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.insuredSurName),
			subscribedProduct: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.subscribedProduct),
			ACSCertificateStartDate: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.ACSCertificateStartDate),
			ACSCertificateEndDate: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.ACSCertificateEndDate),
			scheduleCode: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.scheduleCode),
			paymentTypeLabel: ctx.excel.sheet.getCell(i, configACSExcel.columnIndex.paymentTypeLabel)
		};
		contracts.push(contract);
	}
	
	return contracts;
}
