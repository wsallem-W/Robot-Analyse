﻿// Contextor Studio
// Auto-generated declaration file : do not modify !



var ActivInfinitev7 = ctx.addApplication('ActivInfinitev7', {"comment":"v7","nature":"WEB3","path":"http://infinite-haum0a/mdg/auth/Login.do"});

ActivInfinitev7.pConnexion = ActivInfinitev7.addPage('pConnexion', {"comment":"Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/auth/Login.do?logout"});
ActivInfinitev7.pConnexion.oIdentifiant = ActivInfinitev7.pConnexion.addItem('oIdentifiant', {"mustExist":true});
ActivInfinitev7.pConnexion.oPwd = ActivInfinitev7.pConnexion.addItem('oPwd');
ActivInfinitev7.pConnexion.btConnexion = ActivInfinitev7.pConnexion.addItem('btConnexion', {"mustExist":true});

ActivInfinitev7.pTabDeBord = ActivInfinitev7.addPage('pTabDeBord', {"comment":"haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/"});
ActivInfinitev7.pTabDeBord.btMenuSynthese = ActivInfinitev7.pTabDeBord.addItem('btMenuSynthese', {"mustExist":true});
ActivInfinitev7.pTabDeBord.btContratIndiv = ActivInfinitev7.pTabDeBord.addItem('btContratIndiv');
ActivInfinitev7.pTabDeBord.btContexteContrat = ActivInfinitev7.pTabDeBord.addItem('btContexteContrat');
ActivInfinitev7.pTabDeBord.btMenuContratIndiv = ActivInfinitev7.pTabDeBord.addItem('btMenuContratIndiv');
ActivInfinitev7.pTabDeBord.btConsultation = ActivInfinitev7.pTabDeBord.addItem('btConsultation');
ActivInfinitev7.pTabDeBord.btMenuChangeCouver = ActivInfinitev7.pTabDeBord.addItem('btMenuChangeCouver');
ActivInfinitev7.pTabDeBord.btCangeCouverSTD = ActivInfinitev7.pTabDeBord.addItem('btCangeCouverSTD');
ActivInfinitev7.pTabDeBord.btSansEffetChangC = ActivInfinitev7.pTabDeBord.addItem('btSansEffetChangC');
ActivInfinitev7.pTabDeBord.btAdhesionCollect = ActivInfinitev7.pTabDeBord.addItem('btAdhesionCollect');
ActivInfinitev7.pTabDeBord.btSouscriptionSante = ActivInfinitev7.pTabDeBord.addItem('btSouscriptionSante');
ActivInfinitev7.pTabDeBord.btMenuResiCourante = ActivInfinitev7.pTabDeBord.addItem('btMenuResiCourante');
ActivInfinitev7.pTabDeBord.btFinCMU = ActivInfinitev7.pTabDeBord.addItem('btFinCMU');
ActivInfinitev7.pTabDeBord.btFinACS = ActivInfinitev7.pTabDeBord.addItem('btFinACS');
ActivInfinitev7.pTabDeBord.btSansEffetResiC = ActivInfinitev7.pTabDeBord.addItem('btSansEffetResiC');
ActivInfinitev7.pTabDeBord.btCagSituatPart = ActivInfinitev7.pTabDeBord.addItem('btCagSituatPart');
ActivInfinitev7.pTabDeBord.btMenuResilConcu = ActivInfinitev7.pTabDeBord.addItem('btMenuResilConcu');
ActivInfinitev7.pTabDeBord.btGroupeObligatoireExterne = ActivInfinitev7.pTabDeBord.addItem('btGroupeObligatoireExterne');

ActivInfinitev7.pContexteContratRech = ActivInfinitev7.addPage('pContexteContratRech', {"comment":"Contexte Contrat - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/Go.do?id=ACW1\u0026action=afficherContrat"});
ActivInfinitev7.pContexteContratRech.oTitrePage2 = ActivInfinitev7.pContexteContratRech.addItem('oTitrePage2', {"mustNotExist":true});
ActivInfinitev7.pContexteContratRech.btRecherche = ActivInfinitev7.pContexteContratRech.addItem('btRecherche');
ActivInfinitev7.pContexteContratRech.onIdentificationBenef = ActivInfinitev7.pContexteContratRech.addItem('onIdentificationBenef', {"mustExist":true});
ActivInfinitev7.pContexteContratRech.oTypeIdentification = ActivInfinitev7.pContexteContratRech.addItem('oTypeIdentification', {"mustExist":true});

ActivInfinitev7.pContexteContratOuvert = ActivInfinitev7.addPage('pContexteContratOuvert', {"comment":"Contexte Contrat - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/AccueilMenu.do?method=rechercher"});
ActivInfinitev7.pContexteContratOuvert.oTitrePage = ActivInfinitev7.pContexteContratOuvert.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pContexteContratOuvert.oNumeroContrat = ActivInfinitev7.pContexteContratOuvert.addItem('oNumeroContrat', {"occurs":1});
ActivInfinitev7.pContexteContratOuvert.oDateFinEffet = ActivInfinitev7.pContexteContratOuvert.addItem('oDateFinEffet', {"occurs":1});
ActivInfinitev7.pContexteContratOuvert.oContratIndiv = ActivInfinitev7.pContexteContratOuvert.addItem('oContratIndiv', {"occurs":1});
ActivInfinitev7.pContexteContratOuvert.oTitrePage2 = ActivInfinitev7.pContexteContratOuvert.addItem('oTitrePage2');
ActivInfinitev7.pContexteContratOuvert.oTypeIdentification = ActivInfinitev7.pContexteContratOuvert.addItem('oTypeIdentification');
ActivInfinitev7.pContexteContratOuvert.oNumIdentification = ActivInfinitev7.pContexteContratOuvert.addItem('oNumIdentification');
ActivInfinitev7.pContexteContratOuvert.btRecherche = ActivInfinitev7.pContexteContratOuvert.addItem('btRecherche');
ActivInfinitev7.pContexteContratOuvert.oInfosSouscripteur = ActivInfinitev7.pContexteContratOuvert.addItem('oInfosSouscripteur');

ActivInfinitev7.pIdentContratRechConsul = ActivInfinitev7.addPage('pIdentContratRechConsul', {"comment":"Sans effet - Changement couverture - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/Go.do?id=ACCC04STD"});
ActivInfinitev7.pIdentContratRechConsul.oContratIndiv = ActivInfinitev7.pIdentContratRechConsul.addItem('oContratIndiv');
ActivInfinitev7.pIdentContratRechConsul.oDateDebEffet = ActivInfinitev7.pIdentContratRechConsul.addItem('oDateDebEffet');
ActivInfinitev7.pIdentContratRechConsul.btRecherche = ActivInfinitev7.pIdentContratRechConsul.addItem('btRecherche');
ActivInfinitev7.pIdentContratRechConsul.btFermeture = ActivInfinitev7.pIdentContratRechConsul.addItem('btFermeture');
ActivInfinitev7.pIdentContratRechConsul.oBtnPageCourante = ActivInfinitev7.pIdentContratRechConsul.addItem('oBtnPageCourante');
ActivInfinitev7.pIdentContratRechConsul.oTypeCttStatic = ActivInfinitev7.pIdentContratRechConsul.addItem('oTypeCttStatic');
ActivInfinitev7.pIdentContratRechConsul.oBonHommeRecherche = ActivInfinitev7.pIdentContratRechConsul.addItem('oBonHommeRecherche');

ActivInfinitev7.pIdentContratRechResu = ActivInfinitev7.addPage('pIdentContratRechResu', {"comment":"Consultation - N°00023788 - Valide - Adhérent : Mademoiselle MAHE BEATRICE - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_9\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentContratRechResu.btBtnFooterSuivant = ActivInfinitev7.pIdentContratRechResu.addItem('btBtnFooterSuivant');
ActivInfinitev7.pIdentContratRechResu.btDETAIL = ActivInfinitev7.pIdentContratRechResu.addItem('btDETAIL');
ActivInfinitev7.pIdentContratRechResu.oTitreErreur = ActivInfinitev7.pIdentContratRechResu.addItem('oTitreErreur');
ActivInfinitev7.pIdentContratRechResu.oBtIdentAssures = ActivInfinitev7.pIdentContratRechResu.addItem('oBtIdentAssures');
ActivInfinitev7.pIdentContratRechResu.oBtnPageCourante = ActivInfinitev7.pIdentContratRechResu.addItem('oBtnPageCourante');
ActivInfinitev7.pIdentContratRechResu.oTexteErreur = ActivInfinitev7.pIdentContratRechResu.addItem('oTexteErreur');
ActivInfinitev7.pIdentContratRechResu.oDateDebutEffet = ActivInfinitev7.pIdentContratRechResu.addItem('oDateDebutEffet');
ActivInfinitev7.pIdentContratRechResu.oCodeOffre = ActivInfinitev7.pIdentContratRechResu.addItem('oCodeOffre');
ActivInfinitev7.pIdentContratRechResu.oProdGaran = ActivInfinitev7.pIdentContratRechResu.addItem('oProdGaran');
ActivInfinitev7.pIdentContratRechResu.oHistoriqueOpts = ActivInfinitev7.pIdentContratRechResu.addItem('oHistoriqueOpts');

ActivInfinitev7.pIdentContResilRech = ActivInfinitev7.addPage('pIdentContResilRech', {"comment":"Resiliation Contrat - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACRE01RE3F_426\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentContResilRech.btRecherche = ActivInfinitev7.pIdentContResilRech.addItem('btRecherche');
ActivInfinitev7.pIdentContResilRech.oContratIndiv = ActivInfinitev7.pIdentContResilRech.addItem('oContratIndiv');
ActivInfinitev7.pIdentContResilRech.oDateDebEffet = ActivInfinitev7.pIdentContResilRech.addItem('oDateDebEffet');
ActivInfinitev7.pIdentContResilRech.oBtnPageCourante = ActivInfinitev7.pIdentContResilRech.addItem('oBtnPageCourante');
ActivInfinitev7.pIdentContResilRech.oTexte1 = ActivInfinitev7.pIdentContResilRech.addItem('oTexte1', {"mustNotExist":true});
ActivInfinitev7.pIdentContResilRech.oBlocNotes = ActivInfinitev7.pIdentContResilRech.addItem('oBlocNotes', {"mustNotExist":true});
ActivInfinitev7.pIdentContResilRech.oParametresDuCalcul = ActivInfinitev7.pIdentContResilRech.addItem('oParametresDuCalcul', {"mustNotExist":true});
ActivInfinitev7.pIdentContResilRech.oAucuneOpe = ActivInfinitev7.pIdentContResilRech.addItem('oAucuneOpe', {"mustNotExist":true});
ActivInfinitev7.pIdentContResilRech.oSelectionDuCompteC = ActivInfinitev7.pIdentContResilRech.addItem('oSelectionDuCompteC', {"mustNotExist":true});
ActivInfinitev7.pIdentContResilRech.oConfirmerLenregistr = ActivInfinitev7.pIdentContResilRech.addItem('oConfirmerLenregistr', {"mustNotExist":true});

ActivInfinitev7.pIdentContResilRechRe = ActivInfinitev7.addPage('pIdentContResilRechRe', {"comment":"Resiliation Contrat - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACRE01RE3F_403\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentContResilRechRe.btSuivant = ActivInfinitev7.pIdentContResilRechRe.addItem('btSuivant');
ActivInfinitev7.pIdentContResilRechRe.btBtnContinuer = ActivInfinitev7.pIdentContResilRechRe.addItem('btBtnContinuer');
ActivInfinitev7.pIdentContResilRechRe.oDivErreur = ActivInfinitev7.pIdentContResilRechRe.addItem('oDivErreur');
ActivInfinitev7.pIdentContResilRechRe.oDateDemande = ActivInfinitev7.pIdentContResilRechRe.addItem('oDateDemande');

ActivInfinitev7.pIdentContResilRechRe = ActivInfinitev7.addPage('pIdentContResilRechRe', {"comment":"Resiliation Contrat - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/contrat/ACIC.do?method=rechercher\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACRE01RE3F_403\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentContResilRechRe.oDivErreur = ActivInfinitev7.pIdentContResilRechRe.addItem('oDivErreur', {"mustExist":true});

ActivInfinitev7.pBlocNotesResil = ActivInfinitev7.addPage('pBlocNotesResil', {"comment":"Resiliation Contrat - N°22404280 - Valide - Adhérent : Monsieur RAKOTOARISOA MARTIAL - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACRE01RE3F_438\u0026CONTAINER_NOM_FONCTION=ACBN_200\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACRE01RE3F_438\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pBlocNotesResil.oBtnPageCourante = ActivInfinitev7.pBlocNotesResil.addItem('oBtnPageCourante');
ActivInfinitev7.pBlocNotesResil.btSuivant = ActivInfinitev7.pBlocNotesResil.addItem('btSuivant');
ActivInfinitev7.pBlocNotesResil.oContenuBlocNote = ActivInfinitev7.pBlocNotesResil.addItem('oContenuBlocNote');
ActivInfinitev7.pBlocNotesResil.oBlocNotes = ActivInfinitev7.pBlocNotesResil.addItem('oBlocNotes', {"mustExist":true});

ActivInfinitev7.pBlocNotes = ActivInfinitev7.addPage('pBlocNotes', {"comment":"Consultation - N°21998269 - Résilié - Adhérent : Madame RUIZ SANDRINE - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_25\u0026CONTAINER_NOM_FONCTION=ACBN_102\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_25\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pBlocNotes.oContenuBlocNote = ActivInfinitev7.pBlocNotes.addItem('oContenuBlocNote');
ActivInfinitev7.pBlocNotes.oTitrePage = ActivInfinitev7.pBlocNotes.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pBlocNotes.btIdentAssures = ActivInfinitev7.pBlocNotes.addItem('btIdentAssures');
ActivInfinitev7.pBlocNotes.btSuivant = ActivInfinitev7.pBlocNotes.addItem('btSuivant');
ActivInfinitev7.pBlocNotes.btFermeture = ActivInfinitev7.pBlocNotes.addItem('btFermeture');
ActivInfinitev7.pBlocNotes.oBtnPageCourante = ActivInfinitev7.pBlocNotes.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pIdentAssures = ActivInfinitev7.addPage('pIdentAssures', {"comment":"Consultation - N°00293756 - Résilié - Adhérent : Monsieur CALVEZ DANIEL - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_6\u0026CONTAINER_NOM_FONCTION=ACIA_400\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_6\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentAssures.btAttestAideCompl = ActivInfinitev7.pIdentAssures.addItem('btAttestAideCompl');
ActivInfinitev7.pIdentAssures.oTitrePage = ActivInfinitev7.pIdentAssures.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pIdentAssures.btInfoRo = ActivInfinitev7.pIdentAssures.addItem('btInfoRo');
ActivInfinitev7.pIdentAssures.btFermeture = ActivInfinitev7.pIdentAssures.addItem('btFermeture');
ActivInfinitev7.pIdentAssures.oAssureRO = ActivInfinitev7.pIdentAssures.addItem('oAssureRO');
ActivInfinitev7.pIdentAssures.oDroitROAdherent = ActivInfinitev7.pIdentAssures.addItem('oDroitROAdherent');
ActivInfinitev7.pIdentAssures.btSuivant = ActivInfinitev7.pIdentAssures.addItem('btSuivant', {"mustExist":true});
ActivInfinitev7.pIdentAssures.oBtnPageCourante = ActivInfinitev7.pIdentAssures.addItem('oBtnPageCourante', {"mustExist":true});
ActivInfinitev7.pIdentAssures.oListeAssures = ActivInfinitev7.pIdentAssures.addItem('oListeAssures', {"occurs":1});
ActivInfinitev7.pIdentAssures.oNomPrenom = ActivInfinitev7.pIdentAssures.addItem('oNomPrenom', {"occurs":1});
ActivInfinitev7.pIdentAssures.oDateNaissance = ActivInfinitev7.pIdentAssures.addItem('oDateNaissance', {"occurs":1});
ActivInfinitev7.pIdentAssures.btNext = ActivInfinitev7.pIdentAssures.addItem('btNext');

ActivInfinitev7.pIdentAssuresEdit = ActivInfinitev7.addPage('pIdentAssuresEdit', {"comment":"Consultation - N°00293756 - Résilié - Adhérent : Monsieur CALVEZ DANIEL - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_6\u0026CONTAINER_NOM_FONCTION=ACIA_400\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_6\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentAssuresEdit.oTitrePage = ActivInfinitev7.pIdentAssuresEdit.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pIdentAssuresEdit.btFermeture = ActivInfinitev7.pIdentAssuresEdit.addItem('btFermeture');
ActivInfinitev7.pIdentAssuresEdit.oAssureRO = ActivInfinitev7.pIdentAssuresEdit.addItem('oAssureRO');
ActivInfinitev7.pIdentAssuresEdit.oDroitROAdherent = ActivInfinitev7.pIdentAssuresEdit.addItem('oDroitROAdherent');
ActivInfinitev7.pIdentAssuresEdit.oRgNaissance = ActivInfinitev7.pIdentAssuresEdit.addItem('oRgNaissance');
ActivInfinitev7.pIdentAssuresEdit.oNumRO = ActivInfinitev7.pIdentAssuresEdit.addItem('oNumRO');
ActivInfinitev7.pIdentAssuresEdit.oCleRO = ActivInfinitev7.pIdentAssuresEdit.addItem('oCleRO');
ActivInfinitev7.pIdentAssuresEdit.oSituationFamil = ActivInfinitev7.pIdentAssuresEdit.addItem('oSituationFamil');
ActivInfinitev7.pIdentAssuresEdit.oNomNaissance = ActivInfinitev7.pIdentAssuresEdit.addItem('oNomNaissance');
ActivInfinitev7.pIdentAssuresEdit.oTypeAssure = ActivInfinitev7.pIdentAssuresEdit.addItem('oTypeAssure');
ActivInfinitev7.pIdentAssuresEdit.oSexe = ActivInfinitev7.pIdentAssuresEdit.addItem('oSexe');
ActivInfinitev7.pIdentAssuresEdit.DateDeNaiss = ActivInfinitev7.pIdentAssuresEdit.addItem('DateDeNaiss');
ActivInfinitev7.pIdentAssuresEdit.oCategSociale = ActivInfinitev7.pIdentAssuresEdit.addItem('oCategSociale');
ActivInfinitev7.pIdentAssuresEdit.oTeletrans = ActivInfinitev7.pIdentAssuresEdit.addItem('oTeletrans');
ActivInfinitev7.pIdentAssuresEdit.btValider = ActivInfinitev7.pIdentAssuresEdit.addItem('btValider', {"mustExist":true});
ActivInfinitev7.pIdentAssuresEdit.oBtnPageCourante = ActivInfinitev7.pIdentAssuresEdit.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pIdentAssuresAttest = ActivInfinitev7.addPage('pIdentAssuresAttest', {"comment":"Consultation - Adhérent : Monsieur CHARLOT GUY - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_1\u0026CONTAINER_NOM_FONCTION=ACAC_403\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_1\u0026CONTAINER_NOM_FONCTION=ACIA_400\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentAssuresAttest.oType = ActivInfinitev7.pIdentAssuresAttest.addItem('oType', {"occurs":1});
ActivInfinitev7.pIdentAssuresAttest.oDateDeb = ActivInfinitev7.pIdentAssuresAttest.addItem('oDateDeb', {"occurs":1});
ActivInfinitev7.pIdentAssuresAttest.oDateFin = ActivInfinitev7.pIdentAssuresAttest.addItem('oDateFin', {"occurs":1});
ActivInfinitev7.pIdentAssuresAttest.oTitrePage = ActivInfinitev7.pIdentAssuresAttest.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pIdentAssuresAttest.btVisuCotisation = ActivInfinitev7.pIdentAssuresAttest.addItem('btVisuCotisation');
ActivInfinitev7.pIdentAssuresAttest.btFermeture = ActivInfinitev7.pIdentAssuresAttest.addItem('btFermeture');
ActivInfinitev7.pIdentAssuresAttest.oBtnPageCourante = ActivInfinitev7.pIdentAssuresAttest.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pProdGaranConsul = ActivInfinitev7.addPage('pProdGaranConsul', {"comment":"Consultation - N°21213405 - Valide - Adhérent : Monsieur BOURGOIN JEAN HUGUES - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/contrat/ACG2.do?method=doSelectionAssure\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_17\u0026CONTAINER_NOM_FONCTION=ACG2\u0026AFFICHAGE_CONTAINER\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_17\u0026CONTAINER_NOM_FONCTION=ACG2_500\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pProdGaranConsul.oTitrePage = ActivInfinitev7.pProdGaranConsul.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pProdGaranConsul.oListeAssures = ActivInfinitev7.pProdGaranConsul.addItem('oListeAssures', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oTypeBenef = ActivInfinitev7.pProdGaranConsul.addItem('oTypeBenef', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oCodeProduit = ActivInfinitev7.pProdGaranConsul.addItem('oCodeProduit', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oDateRadProduit = ActivInfinitev7.pProdGaranConsul.addItem('oDateRadProduit', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oEtatProduit = ActivInfinitev7.pProdGaranConsul.addItem('oEtatProduit', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.btVisuCotisation = ActivInfinitev7.pProdGaranConsul.addItem('btVisuCotisation');
ActivInfinitev7.pProdGaranConsul.oLongTableGaranties = ActivInfinitev7.pProdGaranConsul.addItem('oLongTableGaranties');
ActivInfinitev7.pProdGaranConsul.btFermeture = ActivInfinitev7.pProdGaranConsul.addItem('btFermeture');
ActivInfinitev7.pProdGaranConsul.btSuivant = ActivInfinitev7.pProdGaranConsul.addItem('btSuivant');
ActivInfinitev7.pProdGaranConsul.oNomPrenom = ActivInfinitev7.pProdGaranConsul.addItem('oNomPrenom', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oDateNaissAdh = ActivInfinitev7.pProdGaranConsul.addItem('oDateNaissAdh', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.oDateRadiation = ActivInfinitev7.pProdGaranConsul.addItem('oDateRadiation', {"occurs":1});
ActivInfinitev7.pProdGaranConsul.btIdentContrat = ActivInfinitev7.pProdGaranConsul.addItem('btIdentContrat');
ActivInfinitev7.pProdGaranConsul.btNext = ActivInfinitev7.pProdGaranConsul.addItem('btNext');
ActivInfinitev7.pProdGaranConsul.btIdentAssures = ActivInfinitev7.pProdGaranConsul.addItem('btIdentAssures');

ActivInfinitev7.pVisuCptCotisConsul = ActivInfinitev7.addPage('pVisuCptCotisConsul', {"comment":"Consultation - N°00248886 - Valide - Adhérent : Monsieur GOURIO LOIC - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_114\u0026CONTAINER_NOM_FONCTION=AC36_900\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_114\u0026CONTAINER_NOM_FONCTION=AC3Q_800\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pVisuCptCotisConsul.oTitrePage = ActivInfinitev7.pVisuCptCotisConsul.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pVisuCptCotisConsul.oDateEch = ActivInfinitev7.pVisuCptCotisConsul.addItem('oDateEch', {"occurs":1});
ActivInfinitev7.pVisuCptCotisConsul.oSoldeCompt = ActivInfinitev7.pVisuCptCotisConsul.addItem('oSoldeCompt', {"occurs":1});
ActivInfinitev7.pVisuCptCotisConsul.oListeProduits = ActivInfinitev7.pVisuCptCotisConsul.addItem('oListeProduits');
ActivInfinitev7.pVisuCptCotisConsul.btFermeture = ActivInfinitev7.pVisuCptCotisConsul.addItem('btFermeture');
ActivInfinitev7.pVisuCptCotisConsul.oBtnPageCourante = ActivInfinitev7.pVisuCptCotisConsul.addItem('oBtnPageCourante');

ActivInfinitev7.pProdGaranChgtCouv = ActivInfinitev7.addPage('pProdGaranChgtCouv', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=ACG2_200\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pProdGaranChgtCouv.oTitrePage = ActivInfinitev7.pProdGaranChgtCouv.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pProdGaranChgtCouv.btMajPage = ActivInfinitev7.pProdGaranChgtCouv.addItem('btMajPage');
ActivInfinitev7.pProdGaranChgtCouv.btSuivant = ActivInfinitev7.pProdGaranChgtCouv.addItem('btSuivant');
ActivInfinitev7.pProdGaranChgtCouv.btFermeture = ActivInfinitev7.pProdGaranChgtCouv.addItem('btFermeture');
ActivInfinitev7.pProdGaranChgtCouv.btMajProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('btMajProduit');
ActivInfinitev7.pProdGaranChgtCouv.btAjoutProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('btAjoutProduit');
ActivInfinitev7.pProdGaranChgtCouv.oNouvCodeProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('oNouvCodeProduit');
ActivInfinitev7.pProdGaranChgtCouv.oCodeProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('oCodeProduit', {"occurs":1});
ActivInfinitev7.pProdGaranChgtCouv.btSauvNouvCodeProd = ActivInfinitev7.pProdGaranChgtCouv.addItem('btSauvNouvCodeProd');
ActivInfinitev7.pProdGaranChgtCouv.btSauvMajProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('btSauvMajProduit');
ActivInfinitev7.pProdGaranChgtCouv.btNouvProduit = ActivInfinitev7.pProdGaranChgtCouv.addItem('btNouvProduit');
ActivInfinitev7.pProdGaranChgtCouv.oTitrePopUp = ActivInfinitev7.pProdGaranChgtCouv.addItem('oTitrePopUp');
ActivInfinitev7.pProdGaranChgtCouv.btContinuer = ActivInfinitev7.pProdGaranChgtCouv.addItem('btContinuer');
ActivInfinitev7.pProdGaranChgtCouv.oBtnPageCourante = ActivInfinitev7.pProdGaranChgtCouv.addItem('oBtnPageCourante');

ActivInfinitev7.pParamDivers = ActivInfinitev7.addPage('pParamDivers', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=ACPD_300\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=ACG2_200\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pParamDivers.oTitrePage = ActivInfinitev7.pParamDivers.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pParamDivers.btSuivant = ActivInfinitev7.pParamDivers.addItem('btSuivant');
ActivInfinitev7.pParamDivers.btFermeture = ActivInfinitev7.pParamDivers.addItem('btFermeture');
ActivInfinitev7.pParamDivers.oBtnPageCourante = ActivInfinitev7.pParamDivers.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pParamDiversConsul = ActivInfinitev7.addPage('pParamDiversConsul', {"comment":"Consultation - N°21213405 - Valide - Adhérent : Monsieur BOURGOIN JEAN HUGUES - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_31\u0026CONTAINER_NOM_FONCTION=ACPD_700\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_31\u0026CONTAINER_NOM_FONCTION=AC36_900\u0026AFFICHAGE_CONTAINER"});

ActivInfinitev7.pParamDeCalcul = ActivInfinitev7.addPage('pParamDeCalcul', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=AC32_400\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_31\u0026CONTAINER_NOM_FONCTION=ACPD_300\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pParamDeCalcul.oTitrePage = ActivInfinitev7.pParamDeCalcul.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pParamDeCalcul.btSuivant = ActivInfinitev7.pParamDeCalcul.addItem('btSuivant');
ActivInfinitev7.pParamDeCalcul.oPasDeCalcul = ActivInfinitev7.pParamDeCalcul.addItem('oPasDeCalcul');
ActivInfinitev7.pParamDeCalcul.btFermeture = ActivInfinitev7.pParamDeCalcul.addItem('btFermeture');
ActivInfinitev7.pParamDeCalcul.oContratIndiv = ActivInfinitev7.pParamDeCalcul.addItem('oContratIndiv');
ActivInfinitev7.pParamDeCalcul.oPasCalculStat = ActivInfinitev7.pParamDeCalcul.addItem('oPasCalculStat');
ActivInfinitev7.pParamDeCalcul.oCalculCotisNonAutori = ActivInfinitev7.pParamDeCalcul.addItem('oCalculCotisNonAutori');
ActivInfinitev7.pParamDeCalcul.oBtnPageCourante = ActivInfinitev7.pParamDeCalcul.addItem('oBtnPageCourante');

ActivInfinitev7.pHistoCotisation = ActivInfinitev7.addPage('pHistoCotisation', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_32\u0026CONTAINER_NOM_FONCTION=AC3Q_500\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_32\u0026CONTAINER_NOM_FONCTION=AC32_400\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pHistoCotisation.oBtnPageCourante = ActivInfinitev7.pHistoCotisation.addItem('oBtnPageCourante', {"mustExist":true});
ActivInfinitev7.pHistoCotisation.btSuivant = ActivInfinitev7.pHistoCotisation.addItem('btSuivant');
ActivInfinitev7.pHistoCotisation.btFermeture = ActivInfinitev7.pHistoCotisation.addItem('btFermeture');

ActivInfinitev7.pValidationActeChgtCouv = ActivInfinitev7.addPage('pValidationActeChgtCouv', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_52\u0026CONTAINER_NOM_FONCTION=ACVV_700\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_52\u0026CONTAINER_NOM_FONCTION=AC36_600\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pValidationActeChgtCouv.oTitrePage = ActivInfinitev7.pValidationActeChgtCouv.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pValidationActeChgtCouv.btSauvegarde = ActivInfinitev7.pValidationActeChgtCouv.addItem('btSauvegarde', {"mustExist":true});
ActivInfinitev7.pValidationActeChgtCouv.btFermeture = ActivInfinitev7.pValidationActeChgtCouv.addItem('btFermeture');
ActivInfinitev7.pValidationActeChgtCouv.oBtnPageCourante = ActivInfinitev7.pValidationActeChgtCouv.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pVisuCptCotisChgtCouv = ActivInfinitev7.addPage('pVisuCptCotisChgtCouv', {"comment":"Sans effet - Changement couverture - N°03043298 - Valide - Adhérent : Madame JEANNE FRANCOISE - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_32\u0026CONTAINER_NOM_FONCTION=AC36_600\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC04STD_32\u0026CONTAINER_NOM_FONCTION=AC3Q_500\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pVisuCptCotisChgtCouv.oTitrePage = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('oTitrePage');
ActivInfinitev7.pVisuCptCotisChgtCouv.oBtnPageCourante = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('oBtnPageCourante', {"mustExist":true});
ActivInfinitev7.pVisuCptCotisChgtCouv.oValidation = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('oValidation', {"type":"Key"});
ActivInfinitev7.pVisuCptCotisChgtCouv.btSuivant = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('btSuivant');
ActivInfinitev7.pVisuCptCotisChgtCouv.btFermeture = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('btFermeture');
ActivInfinitev7.pVisuCptCotisChgtCouv.oConfirmerLenregistr = ActivInfinitev7.pVisuCptCotisChgtCouv.addItem('oConfirmerLenregistr', {"mustNotExist":true});

ActivInfinitev7.pProdGaranChgtCouvEtat = ActivInfinitev7.addPage('pProdGaranChgtCouvEtat', {"comment":"Changement de couverture - N°00248886 - Valide - Adhérent : Monsieur GOURIO LOIC - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/contrat/ACG2.do?method=doModifierCouverture\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_67\u0026CONTAINER_NOM_FONCTION=ACG2\u0026AFFICHAGE_CONTAINER\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_67\u0026CONTAINER_NOM_FONCTION=ACG2_300\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pProdGaranChgtCouvEtat.oEtatProduit = ActivInfinitev7.pProdGaranChgtCouvEtat.addItem('oEtatProduit', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pProdGaranChgtCouvEtat.btSauvegarde = ActivInfinitev7.pProdGaranChgtCouvEtat.addItem('btSauvegarde', {"mustExist":true});
ActivInfinitev7.pProdGaranChgtCouvEtat.btFermeture = ActivInfinitev7.pProdGaranChgtCouvEtat.addItem('btFermeture');
ActivInfinitev7.pProdGaranChgtCouvEtat.oBtnPageCourante = ActivInfinitev7.pProdGaranChgtCouvEtat.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pAvisEcheanceChgtCouv = ActivInfinitev7.addPage('pAvisEcheanceChgtCouv', {"comment":"Changement de couverture - N°00248886 - Valide - Adhérent : Monsieur GOURIO LOIC - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_14\u0026CONTAINER_NOM_FONCTION=AC3U_900\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_14\u0026CONTAINER_NOM_FONCTION=AC36_800\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pAvisEcheanceChgtCouv.oTitrePage = ActivInfinitev7.pAvisEcheanceChgtCouv.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pAvisEcheanceChgtCouv.oSelectEdition = ActivInfinitev7.pAvisEcheanceChgtCouv.addItem('oSelectEdition', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pAvisEcheanceChgtCouv.btSuivant = ActivInfinitev7.pAvisEcheanceChgtCouv.addItem('btSuivant');
ActivInfinitev7.pAvisEcheanceChgtCouv.btFermeture = ActivInfinitev7.pAvisEcheanceChgtCouv.addItem('btFermeture');
ActivInfinitev7.pAvisEcheanceChgtCouv.oBtnPageCourante = ActivInfinitev7.pAvisEcheanceChgtCouv.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pDemandeCartesChgtCouv = ActivInfinitev7.addPage('pDemandeCartesChgtCouv', {"comment":"Changement de couverture - N°00248886 - Valide - Adhérent : Monsieur GOURIO LOIC - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_14\u0026CONTAINER_NOM_FONCTION=ACEK_1000\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCC01STD_14\u0026CONTAINER_NOM_FONCTION=AC3U_900\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pDemandeCartesChgtCouv.oTypeEditionDiff = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('oTypeEditionDiff', {"mustExist":true});
ActivInfinitev7.pDemandeCartesChgtCouv.oNonTypeEdition = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('oNonTypeEdition', {"mustExist":true});
ActivInfinitev7.pDemandeCartesChgtCouv.oTitrePage = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pDemandeCartesChgtCouv.btSuivant = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('btSuivant');
ActivInfinitev7.pDemandeCartesChgtCouv.btFermeture = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('btFermeture');
ActivInfinitev7.pDemandeCartesChgtCouv.oBtnPageCourante = ActivInfinitev7.pDemandeCartesChgtCouv.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pInformationRO = ActivInfinitev7.addPage('pInformationRO', {"comment":"Changement situation particulière - N°00502420 - Valide - Adhérent : Mademoiselle DESILE MONIQUE - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/contrat/ACRO.do?method=modifierAssures\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACMA01MASP_160\u0026CONTAINER_NOM_FONCTION=ACRO_400\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pInformationRO.btCreationNouvSituati = ActivInfinitev7.pInformationRO.addItem('btCreationNouvSituati');
ActivInfinitev7.pInformationRO.btValider = ActivInfinitev7.pInformationRO.addItem('btValider');
ActivInfinitev7.pInformationRO.oCodeSitPart0 = ActivInfinitev7.pInformationRO.addItem('oCodeSitPart0');
ActivInfinitev7.pInformationRO.btFermeture = ActivInfinitev7.pInformationRO.addItem('btFermeture');
ActivInfinitev7.pInformationRO.oSituationParti = ActivInfinitev7.pInformationRO.addItem('oSituationParti');
ActivInfinitev7.pInformationRO.btAnnuler = ActivInfinitev7.pInformationRO.addItem('btAnnuler');
ActivInfinitev7.pInformationRO.oBtnPageCourante = ActivInfinitev7.pInformationRO.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pIdentAssuresInfoRO = ActivInfinitev7.addPage('pIdentAssuresInfoRO', {"comment":"Consultation - N°21309938 - Valide - Adhérent : Monsieur HASANI MENTOR - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_1\u0026CONTAINER_NOM_FONCTION=ACRO_402\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_1\u0026CONTAINER_NOM_FONCTION=ACIA_400\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIdentAssuresInfoRO.oTitrePage = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oTitrePage');
ActivInfinitev7.pIdentAssuresInfoRO.oTitrePage2 = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oTitrePage2');
ActivInfinitev7.pIdentAssuresInfoRO.oTypeAssure = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oTypeAssure', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.oEtatProduit = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oEtatProduit', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.oRangeAssure = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oRangeAssure', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.oDateFinEffetProduit = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oDateFinEffetProduit', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.oCodeProduit = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oCodeProduit', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.btNavigListeProduits = ActivInfinitev7.pIdentAssuresInfoRO.addItem('btNavigListeProduits');
ActivInfinitev7.pIdentAssuresInfoRO.oListeAssures = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oListeAssures', {"occurs":1});
ActivInfinitev7.pIdentAssuresInfoRO.btFermeture = ActivInfinitev7.pIdentAssuresInfoRO.addItem('btFermeture');
ActivInfinitev7.pIdentAssuresInfoRO.btModifListeAssures = ActivInfinitev7.pIdentAssuresInfoRO.addItem('btModifListeAssures');
ActivInfinitev7.pIdentAssuresInfoRO.btSuivant = ActivInfinitev7.pIdentAssuresInfoRO.addItem('btSuivant');
ActivInfinitev7.pIdentAssuresInfoRO.oBtnPageCourante = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oBtnPageCourante');
ActivInfinitev7.pIdentAssuresInfoRO.oE = ActivInfinitev7.pIdentAssuresInfoRO.addItem('oE', {"mustExist":true});

ActivInfinitev7.pIdentContRechContratColl = ActivInfinitev7.addPage('pIdentContRechContratColl', {"comment":"Adhésions en collectif - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/Go.do?id=ACSO01ASOB"});
ActivInfinitev7.pIdentContRechContratColl.oNumContratCollec = ActivInfinitev7.pIdentContRechContratColl.addItem('oNumContratCollec', {"mustExist":true});
ActivInfinitev7.pIdentContRechContratColl.oGroupAssures = ActivInfinitev7.pIdentContRechContratColl.addItem('oGroupAssures', {"mustExist":true});
ActivInfinitev7.pIdentContRechContratColl.oTypeContrat = ActivInfinitev7.pIdentContRechContratColl.addItem('oTypeContrat', {"mustExist":true});
ActivInfinitev7.pIdentContRechContratColl.btSuivant = ActivInfinitev7.pIdentContRechContratColl.addItem('btSuivant', {"mustNotExist":true});
ActivInfinitev7.pIdentContRechContratColl.btRecherche = ActivInfinitev7.pIdentContRechContratColl.addItem('btRecherche');
ActivInfinitev7.pIdentContRechContratColl.oDateDebEffet = ActivInfinitev7.pIdentContRechContratColl.addItem('oDateDebEffet', {"mustExist":true});
ActivInfinitev7.pIdentContRechContratColl.btFermeture = ActivInfinitev7.pIdentContRechContratColl.addItem('btFermeture');
ActivInfinitev7.pIdentContRechContratColl.oBtnPageCourante = ActivInfinitev7.pIdentContRechContratColl.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pIntervPrinRechBenef = ActivInfinitev7.addPage('pIntervPrinRechBenef', {"comment":"Adhésions en collectif - N°22401301 - EN COURS - - VETIR ERAM ENSEMBLE DU PERSONNEL - haum04 - Activ Infinite - Module de gestion","path":"http://infinite-haum04/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACSO01ASOB_28\u0026CONTAINER_NOM_FONCTION=ACIN_200\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACSO01ASOB_28\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIntervPrinRechBenef.oNumINSEE = ActivInfinitev7.pIntervPrinRechBenef.addItem('oNumINSEE');
ActivInfinitev7.pIntervPrinRechBenef.btRecherche = ActivInfinitev7.pIntervPrinRechBenef.addItem('btRecherche');
ActivInfinitev7.pIntervPrinRechBenef.oResParPersonne = ActivInfinitev7.pIntervPrinRechBenef.addItem('oResParPersonne');
ActivInfinitev7.pIntervPrinRechBenef.btValider = ActivInfinitev7.pIntervPrinRechBenef.addItem('btValider');
ActivInfinitev7.pIntervPrinRechBenef.btAnnuler = ActivInfinitev7.pIntervPrinRechBenef.addItem('btAnnuler');
ActivInfinitev7.pIntervPrinRechBenef.oResNomBenef = ActivInfinitev7.pIntervPrinRechBenef.addItem('oResNomBenef', {"occurs":1});
ActivInfinitev7.pIntervPrinRechBenef.oLigneResNomBenef = ActivInfinitev7.pIntervPrinRechBenef.addItem('oLigneResNomBenef', {"occurs":1});
ActivInfinitev7.pIntervPrinRechBenef.oTitrePage = ActivInfinitev7.pIntervPrinRechBenef.addItem('oTitrePage', {"mustExist":true});
ActivInfinitev7.pIntervPrinRechBenef.oBtnPageCourante = ActivInfinitev7.pIntervPrinRechBenef.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pIntervenantPrincipal = ActivInfinitev7.addPage('pIntervenantPrincipal', {"comment":"Adhésions en collectif - N°22468406 - EN COURS - - VETIR ERAM ENSEMBLE DU PERSONNEL - haum0a - Activ Infinite - Module de gestion","path":"http://infinite-haum0a/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACSO01ASOB_18\u0026CONTAINER_NOM_FONCTION=ACIS_300\u0026AFFICHAGE_CONTAINER=OK\u0026BOUTON_CONTAINER=BOUTON_SUIVANT\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACSO01ASOB_18\u0026CONTAINER_NOM_FONCTION=ACIN_200\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pIntervenantPrincipal.oCivilite = ActivInfinitev7.pIntervenantPrincipal.addItem('oCivilite', {"mustExist":true});
ActivInfinitev7.pIntervenantPrincipal.oNom = ActivInfinitev7.pIntervenantPrincipal.addItem('oNom', {"mustExist":true});
ActivInfinitev7.pIntervenantPrincipal.oPrenom = ActivInfinitev7.pIntervenantPrincipal.addItem('oPrenom', {"mustExist":true});
ActivInfinitev7.pIntervenantPrincipal.oCodePostal = ActivInfinitev7.pIntervenantPrincipal.addItem('oCodePostal', {"mustExist":true});
ActivInfinitev7.pIntervenantPrincipal.oCodePostalAdresse = ActivInfinitev7.pIntervenantPrincipal.addItem('oCodePostalAdresse');
ActivInfinitev7.pIntervenantPrincipal.oAdresse = ActivInfinitev7.pIntervenantPrincipal.addItem('oAdresse');
ActivInfinitev7.pIntervenantPrincipal.oModePaiementPrest = ActivInfinitev7.pIntervenantPrincipal.addItem('oModePaiementPrest', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pIntervenantPrincipal.oModeReglmetCotis = ActivInfinitev7.pIntervenantPrincipal.addItem('oModeReglmetCotis', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pIntervenantPrincipal.oFrequenceDeregl = ActivInfinitev7.pIntervenantPrincipal.addItem('oFrequenceDeregl', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pIntervenantPrincipal.oTypeTerme = ActivInfinitev7.pIntervenantPrincipal.addItem('oTypeTerme', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pIntervenantPrincipal.oFrequenceAvisEch = ActivInfinitev7.pIntervenantPrincipal.addItem('oFrequenceAvisEch', {"mustExist":true,"type":"Key"});
ActivInfinitev7.pIntervenantPrincipal.btSuivant = ActivInfinitev7.pIntervenantPrincipal.addItem('btSuivant');
ActivInfinitev7.pIntervenantPrincipal.oLocaliteAdresse = ActivInfinitev7.pIntervenantPrincipal.addItem('oLocaliteAdresse');
ActivInfinitev7.pIntervenantPrincipal.oLocaliteAdrNonContro = ActivInfinitev7.pIntervenantPrincipal.addItem('oLocaliteAdrNonContro');
ActivInfinitev7.pIntervenantPrincipal.oNumAdresse = ActivInfinitev7.pIntervenantPrincipal.addItem('oNumAdresse');
ActivInfinitev7.pIntervenantPrincipal.oPays = ActivInfinitev7.pIntervenantPrincipal.addItem('oPays');
ActivInfinitev7.pIntervenantPrincipal.btFermeture = ActivInfinitev7.pIntervenantPrincipal.addItem('btFermeture');
ActivInfinitev7.pIntervenantPrincipal.oBtnPageCourante = ActivInfinitev7.pIntervenantPrincipal.addItem('oBtnPageCourante', {"mustExist":true});

ActivInfinitev7.pServeurWebFerme = ActivInfinitev7.addPage('pServeurWebFerme', {"comment":"Weblogic Bridge Message","path":"http://infinite-haum04/mdg/auth/login"});
ActivInfinitev7.pServeurWebFerme.oMessageErreur = ActivInfinitev7.pServeurWebFerme.addItem('oMessageErreur');

ActivInfinitev7.pResiliationConcu = ActivInfinitev7.addPage('pResiliationConcu', {"comment":"Resiliation Contrat - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/Go.do?id=ACRE01RE2B"});
ActivInfinitev7.pResiliationConcu.oNumeroContratIndiv = ActivInfinitev7.pResiliationConcu.addItem('oNumeroContratIndiv');
ActivInfinitev7.pResiliationConcu.oDateDebutEffet = ActivInfinitev7.pResiliationConcu.addItem('oDateDebutEffet');
ActivInfinitev7.pResiliationConcu.oNumeroContratCol = ActivInfinitev7.pResiliationConcu.addItem('oNumeroContratCol');
ActivInfinitev7.pResiliationConcu.oGroupeAssure = ActivInfinitev7.pResiliationConcu.addItem('oGroupeAssure');
ActivInfinitev7.pResiliationConcu.btRecherche = ActivInfinitev7.pResiliationConcu.addItem('btRecherche');
ActivInfinitev7.pResiliationConcu.btFermer = ActivInfinitev7.pResiliationConcu.addItem('btFermer');

ActivInfinitev7.pRecherchePPRefGRC = ActivInfinitev7.addPage('pRecherchePPRefGRC', {"comment":"Consultation - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/contrat/ACIC.do?method=rechercheContrat\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_233\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pRecherchePPRefGRC.oSystemeExterne = ActivInfinitev7.pRecherchePPRefGRC.addItem('oSystemeExterne');
ActivInfinitev7.pRecherchePPRefGRC.oIdentifiantGRC = ActivInfinitev7.pRecherchePPRefGRC.addItem('oIdentifiantGRC');
ActivInfinitev7.pRecherchePPRefGRC.btRecherchePP = ActivInfinitev7.pRecherchePPRefGRC.addItem('btRecherchePP');
ActivInfinitev7.pRecherchePPRefGRC.oNumeroRo = ActivInfinitev7.pRecherchePPRefGRC.addItem('oNumeroRo');
ActivInfinitev7.pRecherchePPRefGRC.oNom = ActivInfinitev7.pRecherchePPRefGRC.addItem('oNom');
ActivInfinitev7.pRecherchePPRefGRC.oPrenom = ActivInfinitev7.pRecherchePPRefGRC.addItem('oPrenom');
ActivInfinitev7.pRecherchePPRefGRC.oDateNaissance = ActivInfinitev7.pRecherchePPRefGRC.addItem('oDateNaissance');

ActivInfinitev7.pRecherchePPRefGRCRes = ActivInfinitev7.addPage('pRecherchePPRefGRCRes', {"comment":"Consultation - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/personne/RecherchePersonne.do?method=doRecherchePersonne\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_233\u0026CONTAINER_NOM_FONCTION=ACIC_100\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pRecherchePPRefGRCRes.oResultatParRelation = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oResultatParRelation');
ActivInfinitev7.pRecherchePPRefGRCRes.oListeContrats = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oListeContrats', {"occurs":1});
ActivInfinitev7.pRecherchePPRefGRCRes.btValider = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('btValider');
ActivInfinitev7.pRecherchePPRefGRCRes.btFermer = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('btFermer');
ActivInfinitev7.pRecherchePPRefGRCRes.oTypeRelation = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oTypeRelation', {"occurs":1});
ActivInfinitev7.pRecherchePPRefGRCRes.oIdentiteRelation = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oIdentiteRelation', {"occurs":1});
ActivInfinitev7.pRecherchePPRefGRCRes.oStatus = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oStatus', {"occurs":1});
ActivInfinitev7.pRecherchePPRefGRCRes.oAucunContratDispo = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oAucunContratDispo');
ActivInfinitev7.pRecherchePPRefGRCRes.oSystemeExterne = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('oSystemeExterne');
ActivInfinitev7.pRecherchePPRefGRCRes.btAnnuler = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('btAnnuler');
ActivInfinitev7.pRecherchePPRefGRCRes.btVisualiser = ActivInfinitev7.pRecherchePPRefGRCRes.addItem('btVisualiser');

ActivInfinitev7.pHistoriqueOptsConsul = ActivInfinitev7.addPage('pHistoriqueOptsConsul', {"comment":"Consultation - N°22602103 - Valide - Adhérent : Mademoiselle LESIEUR LAURY - haum03 - Activ Infinite - Module de gestion","path":"http://infinite-haum03/mdg/LancementFonction.do?method=debuter\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_207\u0026CONTAINER_NOM_FONCTION=ACHO_200\u0026AFFICHAGE_CONTAINER=OK\u0026CONTAINER_FONCTION_FORCAGE_VALIDATION=FALSE\u0026CONTAINER_NOM_SCENARIO_ENREGISTREMENT=ACCO03STSO_207\u0026CONTAINER_NOM_FONCTION=ACG2_500\u0026AFFICHAGE_CONTAINER"});
ActivInfinitev7.pHistoriqueOptsConsul.oTableOperations = ActivInfinitev7.pHistoriqueOptsConsul.addItem('oTableOperations', {"occurs":1});
ActivInfinitev7.pHistoriqueOptsConsul.oContexte = ActivInfinitev7.pHistoriqueOptsConsul.addItem('oContexte', {"occurs":1});
ActivInfinitev7.pHistoriqueOptsConsul.btNext = ActivInfinitev7.pHistoriqueOptsConsul.addItem('btNext');
ActivInfinitev7.pHistoriqueOptsConsul.oProdGaran = ActivInfinitev7.pHistoriqueOptsConsul.addItem('oProdGaran');
ActivInfinitev7.pHistoriqueOptsConsul.btIdentAssures = ActivInfinitev7.pHistoriqueOptsConsul.addItem('btIdentAssures');


var GRCHarMu = ctx.addApplication('GRCHarMu', {"nature":"WEB3","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=Login\u0026SWEPL=1\u0026SRN=0esr4fnBcnFtKeSh7yeqjnxckJLSTIe2bR4kmPQSqVMb\u0026SWETS=1508832674552","customType":"Siebel"});

GRCHarMu.pMain = GRCHarMu.addPage('pMain', {"comment":"GRC Harmonie Mutuelles - INFOCENTRE(16.90.02_001 / 36.00.00_001 / 5.4.1_B012)","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=Login\u0026SWEPL=1\u0026_sn=54BLZSWYC8oABeaVpij6WR19NkAnLa9gg0iKWZlaSzfoMEhbedqAxP9SnMerqPc3UgpmV1Gf8OCuDAmmjhsTfiZf.rPDnnZ6G0WTmiElfuzaNHVquuA07WOVoBDBI.aDyiajl6eIVPmFMzoNoMDrYzfWcmIefSRRVfi7AZXzjUEuBFZ78BcXdgRylCAtQX12\u0026SRN=qw3EUlhVU9oRGyuly1g8FoulTmVgpf4ZeJGTjc1h3HUb\u0026SWETS=1509380980024\u0026SWEHo=sbl37inf1"});

GRCHarMu.pRechercheAI = GRCHarMu.addPage('pRechercheAI', {"comment":"[_svf0] - Mes polices/devis","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=GetViewLayout\u0026SWEView=SIHM%20All%20Individual%20Policy%20Search%20View\u0026SWEVI=\u0026SWEVLC=1-1E31ZN_Siebel%2bFinancial%2bServices_43%257c1506445245%257c1507204104_0_23021_QF000220000_L\u0026SRN=qw3EUlhVU9oRGyuly1g8FoulTmVgpf4ZeJGTjc1h3HUb"});
GRCHarMu.pRechercheAI.btExecuter = GRCHarMu.pRechercheAI.addItem('btExecuter');
GRCHarMu.pRechercheAI.btRechecher = GRCHarMu.pRechercheAI.addItem('btRechecher');
GRCHarMu.pRechercheAI.oList = GRCHarMu.pRechercheAI.addItem('oList', {"customType":"siebel.grid"});

GRCHarMu.pBulletinAdhesion = GRCHarMu.addPage('pBulletinAdhesion', {"comment":"[_svf0] - Mes polices/devis","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=GetViewLayout\u0026SWEView=SIHM%20Individual%20Policy%20View\u0026SWEVI=\u0026SWEVLC=1-1E31ZN_Siebel%2bFinancial%2bServices_43%257c1506445245%257c1507204104_0_23021_QF000220000_L\u0026SRN=QtVljFBP8Asav7kR5gkX4HFIzP4YP55AItVGXblv4Dgb"});
GRCHarMu.pBulletinAdhesion.oDateEffet = GRCHarMu.pBulletinAdhesion.addItem('oDateEffet', {"customType":"siebel.edit"});
GRCHarMu.pBulletinAdhesion.oTab = GRCHarMu.pBulletinAdhesion.addItem('oTab', {"customType":"siebel.tab"});
GRCHarMu.pBulletinAdhesion.btCoordBancaires = GRCHarMu.pBulletinAdhesion.addItem('btCoordBancaires');
GRCHarMu.pBulletinAdhesion.oGestControl = GRCHarMu.pBulletinAdhesion.addItem('oGestControl', {"customType":"siebel.edit"});
GRCHarMu.pBulletinAdhesion.oPaiementAdh = GRCHarMu.pBulletinAdhesion.addItem('oPaiementAdh', {"customType":"siebel.edit"});
GRCHarMu.pBulletinAdhesion.oDateAdh = GRCHarMu.pBulletinAdhesion.addItem('oDateAdh');

GRCHarMu.pDetailAdhesion = GRCHarMu.addPage('pDetailAdhesion', {"comment":"[_svf0] - Mes polices/devis","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=GetViewLayout\u0026SWEView=SIHM%20Individual%20Policy%20Complement%20View\u0026SWEVI=\u0026SWEVLC=1-1E31ZN_Siebel%2bFinancial%2bServices_43%257c1506445245%257c1507204104_0_23021_QF000220000_L\u0026SRN=lY5w8uVHwvBCoe73vfNG9daIe9UrJ7I4S2sDiKeaNFAb"});
GRCHarMu.pDetailAdhesion.oClBenefAdh = GRCHarMu.pDetailAdhesion.addItem('oClBenefAdh', {"customType":"siebel.edit"});
GRCHarMu.pDetailAdhesion.oClBenefConj = GRCHarMu.pDetailAdhesion.addItem('oClBenefConj', {"customType":"siebel.edit"});
GRCHarMu.pDetailAdhesion.btCoordBancaires = GRCHarMu.pDetailAdhesion.addItem('btCoordBancaires');

GRCHarMu.pMainCB = GRCHarMu.addPage('pMainCB', {"comment":"Coordonnées bancaires","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=ShowPopupFrames\u0026SWEDIC=1\u0026SWEU=/fins_fra/start.swe%3fSWECmd%3dGetCachedFrame%26SWEC%3d70%26SWEFrame%3dtop._sweclient._swecontent._sweview._swetmp%26SRN%3dStXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb%26SWESP%3d1%26SRN%3dStXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb\u0026SRN=StXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb"});

GRCHarMu.pCoordonneesBancaires = GRCHarMu.addPage('pCoordonneesBancaires', {"comment":"[_swepopcontent] - Coordonnées bancaires","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=GetCachedFrame\u0026SWEC=106\u0026SWEFrame=top._sweclient._swecontent._sweview._swetmp\u0026SRN=StXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb\u0026SWESP=1\u0026SRN=StXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb\u0026SRN=StXJoPmjOaAEJLPjhvIK4PWiwsxkXG2bNBZFt9vjancb"});
GRCHarMu.pCoordonneesBancaires.oList = GRCHarMu.pCoordonneesBancaires.addItem('oList', {"customType":"siebel.grid"});
GRCHarMu.pCoordonneesBancaires.btOk = GRCHarMu.pCoordonneesBancaires.addItem('btOk');

GRCHarMu.pPersonnesPhysiques = GRCHarMu.addPage('pPersonnesPhysiques', {"comment":"[_svf0] - Tous les interlocuteurs","path":"http://sbl37inf1/fins_fra/start.swe?SWECmd=GetViewLayout\u0026SWEView=Contact%20List%20View\u0026SWEVI=\u0026SWEVLC=1-1E31ZN_Siebel%2bFinancial%2bServices_43%257c1506445245%257c1507204104_0_23021_QF000220000_L\u0026SRN=3S9chCeX7qpy6kjNtHIOKYcwaWpgcBlLHIknwrBmGScb"});
GRCHarMu.pPersonnesPhysiques.oCivilite = GRCHarMu.pPersonnesPhysiques.addItem('oCivilite', {"customType":"siebel.edit"});
GRCHarMu.pPersonnesPhysiques.btExecuter = GRCHarMu.pPersonnesPhysiques.addItem('btExecuter');
GRCHarMu.pPersonnesPhysiques.btRechercher = GRCHarMu.pPersonnesPhysiques.addItem('btRechercher');
GRCHarMu.pPersonnesPhysiques.oList = GRCHarMu.pPersonnesPhysiques.addItem('oList', {"customType":"siebel.grid"});
