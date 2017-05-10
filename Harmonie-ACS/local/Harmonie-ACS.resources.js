﻿// Contextor Studio
// Auto-generated declaration file : do not modify !



var ActivInfinite = ctx.addApplication('ActivInfinite', {"nature":"WEB3","path":"http://infinite-haur05/WebAneto/ValiderIdentification.do#"});

ActivInfinite.pConsultContratIndiv = ActivInfinite.addPage('pConsultContratIndiv', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/ValiderIdentification.do#"});
ActivInfinite.pConsultContratIndiv.oIndividualContract = ActivInfinite.pConsultContratIndiv.addItem('oIndividualContract');
ActivInfinite.pConsultContratIndiv.btSearch = ActivInfinite.pConsultContratIndiv.addItem('btSearch', {"mustExist":true});
ActivInfinite.pConsultContratIndiv.oDateContract = ActivInfinite.pConsultContratIndiv.addItem('oDateContract');

ActivInfinite.pContratIndivFound = ActivInfinite.addPage('pContratIndivFound', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_59\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER="});
ActivInfinite.pContratIndivFound.oIndividualContract = ActivInfinite.pContratIndivFound.addItem('oIndividualContract', {"mustExist":true});
ActivInfinite.pContratIndivFound.oBtNext = ActivInfinite.pContratIndivFound.addItem('oBtNext');
ActivInfinite.pContratIndivFound.oBtClose = ActivInfinite.pContratIndivFound.addItem('oBtClose');
ActivInfinite.pContratIndivFound.btNavigateBlockNote = ActivInfinite.pContratIndivFound.addItem('btNavigateBlockNote');

ActivInfinite.pContractIndivNotFoun = ActivInfinite.addPage('pContractIndivNotFoun', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_201\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER="});
ActivInfinite.pContractIndivNotFoun.oDetailError = ActivInfinite.pContractIndivNotFoun.addItem('oDetailError');
ActivInfinite.pContractIndivNotFoun.oTitlePage = ActivInfinite.pContractIndivNotFoun.addItem('oTitlePage', {"mustExist":true});
ActivInfinite.pContractIndivNotFoun.oBtClose = ActivInfinite.pContractIndivNotFoun.addItem('oBtClose');

ActivInfinite.pDashboard = ActivInfinite.addPage('pDashboard', {"comment":"Activ Infinite - Site 01 - SAPCTOR1 (Utilisateur)","path":"http://infinite-haur05/WebAneto/ValiderIdentification.do"});
ActivInfinite.pDashboard.btMenu = ActivInfinite.pDashboard.addItem('btMenu');

ActivInfinite.pBlockNotes = ActivInfinite.addPage('pBlockNotes', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/container/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_139\u0026CONTAINER_NOM_FONCTION=ACBN_102\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE"});
ActivInfinite.pBlockNotes.oBlockNotes = ActivInfinite.pBlockNotes.addItem('oBlockNotes', {"mustExist":true});
ActivInfinite.pBlockNotes.oContentBlockNote = ActivInfinite.pBlockNotes.addItem('oContentBlockNote');
ActivInfinite.pBlockNotes.oBtClose = ActivInfinite.pBlockNotes.addItem('oBtClose');
ActivInfinite.pBlockNotes.btProductList = ActivInfinite.pBlockNotes.addItem('btProductList');

ActivInfinite.pProductList = ActivInfinite.addPage('pProductList', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/container/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_33\u0026CONTAINER_NOM_FONCTION=ACPG_500\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE"});
ActivInfinite.pProductList.oTextContract = ActivInfinite.pProductList.addItem('oTextContract', {"mustExist":true});
ActivInfinite.pProductList.oBtClose = ActivInfinite.pProductList.addItem('oBtClose');
ActivInfinite.pProductList.oRowInformation = ActivInfinite.pProductList.addItem('oRowInformation', {"occurs":1});

ActivInfinite.pSynthesisContract = ActivInfinite.addPage('pSynthesisContract', {"comment":"[frameInitial0] - Accueil","path":"http://infinite-haur05/WebAneto/AccueilMenu.do?method=afficher\u0026redirection_action=FicheSynthesePersonne\u0026redirection_method=afficherPersonne\u0026NumCtr=00248886\u0026IdfSys=389324\u0026submitSyntheseDate=true"});
ActivInfinite.pSynthesisContract.oDateEnd = ActivInfinite.pSynthesisContract.addItem('oDateEnd', {"occurs":1});
ActivInfinite.pSynthesisContract.oContrats = ActivInfinite.pSynthesisContract.addItem('oContrats', {"mustExist":true});
ActivInfinite.pSynthesisContract.oIndividualContract = ActivInfinite.pSynthesisContract.addItem('oIndividualContract', {"occurs":1});

ActivInfinite.pSynthesisSearch = ActivInfinite.addPage('pSynthesisSearch', {"comment":"[frameInitial0] - Accueil","path":"http://infinite-haur05/WebAneto/AccueilMenu.do?SAPCTOR1\u00261493915114793\u0026method=afficher\u0026redirection_action=ACW1\u0026redirection_method=afficherContrat\u0026tailleFenetre=507"});
ActivInfinite.pSynthesisSearch.oTypeIdentification = ActivInfinite.pSynthesisSearch.addItem('oTypeIdentification');
ActivInfinite.pSynthesisSearch.oBenefIdentification = ActivInfinite.pSynthesisSearch.addItem('oBenefIdentification');
ActivInfinite.pSynthesisSearch.btSearch = ActivInfinite.pSynthesisSearch.addItem('btSearch', {"mustExist":true});

ActivInfinite.pContribution = ActivInfinite.addPage('pContribution', {"comment":"[frameInitial0] - Web Aneto","path":"http://infinite-haur05/WebAneto/container/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_92\u0026CONTAINER_NOM_FONCTION=AC36_900\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE"});
ActivInfinite.pContribution.oIdTableEch = ActivInfinite.pContribution.addItem('oIdTableEch', {"mustExist":true});
