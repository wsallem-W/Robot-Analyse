﻿ctx.config = (function() {
	
	var nameFileConfig = 'config.json';
	var nameFileStartProcessusBat = 'startProcessus.bat';
	var config = {};
	var configFile = {};
	
	config.CMU = 'CMU';
	config.ACS = 'ACS';
	config.SIRH = 'SIRH';
	config.DA = 'DA';
	
	config.loadConfigFile = function() {
		var pathConfigFile = ctx.fso.file.read(ctx.options.serverURL + '\\' + nameFileConfig);
		configFile = JSON.parse(pathConfigFile);
	};
	
	config.getPathTemplate = function() {
		return configFile.pathTemplate;
	}
	
	config.getConfig = function(codeScenario) {
		return configFile[codeScenario];
	}
	
	config.getPathStartProcessusBat = function() {
		return ctx.options.serverURL + '\\' + nameFileStartProcessusBat;
	}
	
	config.getTimeout = function(minute) {
		minute = minute || 2;
		// Time in millisecond 
		return 1000 * 60 * minute;
	}
	
	config.getCheckExtension = function(codeScenario) {
		switch(codeScenario) {
			case ctx.config.SIRH:
			case ctx.config.DA:
				return '.json';
			default:
				return '.xls';
		}
	}
	
	config.getResultFileExtension = function(codeScenario, fileName) {
		return codeScenario === ctx.config.SIRH ? 'xls' : ctx.fso.file.getExtensionName(fileName);
	}
	
	return config;
}) ();
