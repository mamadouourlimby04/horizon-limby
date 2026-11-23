# Site d'Horizon Limby

Site d'une seule page pour l'association Horizon Limby, l'association des ressortissants de Karakossi (sous-préfecture de Balaki, préfecture de Mali, Guinée).

## Ouvrir le site

Double-clique sur `index.html`. Il s'ouvre dans le navigateur sans installation.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Le contenu et les textes de la page |
| `style.css` | Les couleurs, les polices et la mise en page |
| `script.js` | Le tableau des sections, la grille du bureau, le menu mobile et le bouton « Copier le lien » |
| `images/logo.png` | Le logo sans fond blanc, aux couleurs éclaircies pour le fond sombre |
| `images/logo-original.jpg` | Le logo d'origine, sur fond blanc |
| `images/*.jpg` | Les photos du bureau, recadrées en carré (360 × 360) |

## Où modifier les données

Dans `script.js` :
- Le tableau `sections` contient les sections, leurs représentants et leur nombre de ressortissants.
- Le tableau `team` contient les membres du bureau. Si une personne n'a pas de photo (`img:""`), ses initiales s'affichent à la place.

Les textes (mission, projets, gestion de l'argent, contact) se modifient directement dans `index.html`.

## Choix de style à respecter

- **Fond sombre obligatoire** (brun terre, `#1b1612`). Pas de fond blanc.
- Les parties de la page alternent entre deux fonds, et chaque titre est souligné en vert.
- Les couleurs d'accent viennent du logo : vert des collines, ocre du soleil, bleu de la rivière.
- Polices : Fraunces pour les titres, Source Sans 3 pour le texte.
- **Ton simple et direct**, comme écrit par un membre de l'association. Pas de slogans ni de formules marketing.
- Pas de dessins génériques. On ajoutera de vraies photos de la zone de Karakossi quand elles seront disponibles.
- On parle de « zone de Karakossi » et pas de « village ».
- Le mot « cotisation » doit rester discret. L'association ne fait pas que collecter : elle va aussi entreprendre elle-même des projets d'agriculture et d'élevage.

## Informations sur l'association

- **Fondée le 4 août 2024** par Diallo Mamadou Oury, qui en est le président.
- **Environ 500 ressortissants**, répartis en quatre sections :
  - Karakossi : 215 personnes, représentées par M. Diawne Souleymane.
  - Zone frontalière Guinée–Sénégal–Mali, base à Souloudena : environ 100 personnes, représentées par M. Diallo Ibrahima.
  - Côte d'Ivoire : environ 100 personnes, représentées par M. Diallo Mamadou Aliou.
  - Labé – Conakry : plus de 80 personnes, représentées par M. Diallo Mamadou Alpha.
- **Bureau** : Diallo Abdoulaye est vice-président. Sidibé Bachir est chargé de communication : il gère la page Facebook avec M. Diawne Souleymane.
- **Projets en cours** : rouvrir l'école et amener l'eau.
- **Projets à venir** : l'agriculture et l'élevage.
- **Circuit de l'argent** :
  - Les représentants de Karakossi et de Souloudena, ainsi que Diallo Abdoulaye en Côte d'Ivoire, remettent ce qu'ils collectent à M. Diallo Mamadou Alpha.
  - M. Diallo Mamadou Alpha collecte aussi à Labé et à Conakry, puis verse le tout sur le compte de l'association.
  - Le président, le vice-président et M. Diallo Mamadou Alpha ont accès au compte.
  - Chaque mois, l'association publie la liste des participants et le solde du compte, avant et après la collecte.

## Ce qui manque encore

- Les photos de M. Diallo Ibrahima et de Sidibé Bachir.
- De vraies photos de la zone de Karakossi.
- Le lien de la page Facebook et un numéro de contact.

## Mettre le site en ligne

Le site fonctionne tel quel sur GitHub Pages ou sur Netlify : il suffit d'y déposer le dossier.
