# Guide de démarrage du projet

## 📋 Prérequis

Assurez-vous d'avoir installé :

- **Node.js** (v14 ou supérieur)
- **npm** ou **yarn**
- **Git**

## 🚀 Étapes pour démarrer le projet

### 1. Cloner le dépôt depuis Git

```bash
git clone https://github.com/nicolasgodineau/nicolas_webcv_react.git
cd nicolas_webcv_react
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer le serveur de développement

```bash
npm start
```

Le projet s'ouvrira automatiquement à `http://localhost:3000`

## 🏗️ Construire le projet (Build)

Pour créer une version optimisée du projet prête pour la production :

```bash
npm run build-and-zip
```

Le build.zip sera créé dans le dossier

## 🌍 Configuration multilingue

Le projet supporte le français et l'anglais. Les fichiers de traduction se trouvent dans `public/locales/`

## ✏️ Ajouter ou modifier des informations

### Pour les modifications de texte simples

Toutes les modifications de contenu textuel (expériences, compétences, description, etc.) se font dans les fichiers JSON de langue situés dans `public/locales/` :
- `en.json` pour l'anglais
- `fr.json` pour le français

**Après modification**, il faut **mettre à jour ces fichiers sur le serveur** via **cPanel** dans le dossier `/public/locales/` du site en production.

### Pour ajouter des éléments avec icônes ou images

Si vous souhaitez ajouter de nouvelles sections, des icônes, ou des images au portfolio :
1. Utilisez **VSCode** pour modifier le code React
2. Ajoutez les composants nécessaires dans `src/`
3. Importez les images dans `src/images/`
4. Compilez le projet avec `npm run build-and-zip`
5. Déployez la nouvelle version sur le serveur

## 📂 Structure du projet

```
src/
├── articles/          # Sections principales du CV
├── components/        # Composants React réutilisables
├── images/           # Images du portfolio
└── lang/             # Fichiers de traduction
public/
├── locales/          # Fichiers i18n (EN, FR)
└── build/            # Dossier de production après build
```

## ✨ Notes

- Le projet utilise **React 18** avec **Material-UI** pour le design
- **i18next** pour la gestion multilingue
- **Tailwind CSS** et **PostCSS** pour les styles
