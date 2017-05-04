# harmonie-contextor

# Installation

Le fichier de configuration doit se trouver dans `C:\contextor-config\config.json`.

Exemple de template du fichier de configuration : 

```json
{
    "pathTemplate": "C:\\Users\\excel\\template\\",
    "ACS": {
        "rootPath": "C:\\Users\\excel\\ACS-20170420-1\\",
        "addYearSearchContract": 30,
        "excel": {
            "startColumnIndex": 2,
            "startRowIndex": 1,
            "columnIndex": {
                "individualContract": 1,
                "insuredName": 7,
                "insuredSurName": 8,
                "subscribedCodeProduct": 9,
                "ACSCertificateStartDate": 14,
                "ACSCertificateEndDate": 15,
                "scheduleCode": 16,
                "paymentTypeLabel": 17,
                "dateProceedContract": 18,
                "statusContract": 19,
                "commentContract": 20
            }
        }c
    }
}

```

# Template HTML pour les statistiques

Il faut déjà commencer par définir le `pathTemplate` du fichier de configuration.
On doit avoir une arborescence qui ressemble à :

```bash
LeCheminPathTemplate\template\LeCodeDuScenario.html

# Exemple
C:\Users\excel\template\ACS.html
```

Il n'y a que quatre champs qui sont pris en compte pour l'instant. Ils doivent être écrits sous cette forme :

```html
<h1>Temps total de traitement : {{ totalTimeDuration }}></h1>
```

On a les variables `fileName`, `totalTimeDuration`, `countCaseProcessed`, `countCaseSuccessProcessed`.
Vous pouvez retrouver un exemple de fichier html dans le dossier template qui se trouve à la racine du projet.

# Déploiement

Pour commencer, on va créer un dossier `deploy` dans `C:` qui va contenir tout ce qu'il faut pour que l'utilisateur lance simplement le projet.

On va mettre le dossier template et le fichier `config.json` dans le dossier `deploy`.

Dans contextor Studio, il faut faire `File -> Export project`, il va générer un dossier `export` qui contient un dossier et un fichier zip. 
On va copier/coller le dossier dans notre dossier `deploy`.

Ensuite, on peut créer un nouveau raccourci `Clic droit dans l'explorateur Windows -> Nouveau -> Raccourci` dans le dossiuer `deploy`. On va ensuite modifier dans les propriétés du raccourci `Clic doit -> Propriétés -> Onglet Cible`. 

Pour commencer il faut vider le champ `Démarrer dans :` et remplir le champ `Cible :` par :

```bash
"Chemin vers l'éxécutable CtxRun de contextor intéractive" -z "Chemin vers le dossier" -w "%APPDATA%" -p 240

#Exemple
"C:\Program Files\Contextor\Interactive\CtxtRun.exe" -z "C:\deploy\Harmonie-ACS_1.0" -w "%APPDATA%" -p 240
```

Pour plus d'information sur les paramètres voir la documentation sur `https://contextor.eu/dokuwiki/doku.php?id=training:interactive3:tutorials:ex_deployment`.

Il suffit de zipper le dossier `deploy` et de le fournir aux utilisateurs.

# Lancement utilisateur

- Avoir installé Contextor Interactive sur la machine (Vérifier que l’éxécutable « C:\Program Files\Contextor\Interactive\CtxtRun.exe » existe)
- Se connecter à  Infinite
- Extraire le zip dans « C : »
- Aller dans le fichier config.json pour mettre le chemin vers le dossier qui contient votre fichier Excel
- Lancer le raccourci Contextor
