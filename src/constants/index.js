import edc from "../assets/projects/EDC.png";
import rickmorty from "../assets/projects/Rick_Morty.png";
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `Je suis un étudiant ,  spécialisé dans la création d'applications web. Tout en étant en pleine formation, j'ai acquis des compétences en JavaScript, React, Vue, Angular, et PHP / MySQL. Mon objectif est de mettre à profit mon apprentissage pour concevoir des solutions qui offrent des expériences utilisateur exceptionnelles.`;
export const ABOUT_TEXT = `Je suis un ancien joueur professionnel de jeux vidéo, où j'ai appris à relever des défis complexes et à me dépasser constamment. Après avoir passé plusieurs années à développer mes compétences dans cet univers, j'ai décidé de réorienter ma carrière vers un domaine qui me permet de canaliser ma créativité et ma passion pour la technologie : le développement front-end
                            Je suis actuellement étudiant en développement web à Montréal, où j'acquiers des compétences en utilisant des technologies modernes telles que React, Vue, et Angular. Mon parcours dans le gaming m'a doté d'une grande capacité d'adaptation, de la rigueur et de la persévérance, des qualités que je mets aujourd'hui au service de la programmation. Je suis déterminé à construire des interfaces utilisateur performantes et esthétiques, tout en m'ouvrant aux opportunités dans le monde du développement web.`;

export const PROJECTS = [
  {
    title: "Music Festival Website",
    image: edc,
    description:
      "J'ai développé une Progressive Web App (PWA) entièrement responsive pour le site web du EDC Music Festival. La PWA garantit que les utilisateurs peuvent accéder au site même hors ligne, grâce à l'intégration du service worker qui met en cache des éléments comme les images pour une expérience interrompue.",
    technologies: ["HTML", , "CSS", "Javascript", "Tailwind"],
    github: "https://github.com/KolerY/TP3_BlanchetteYannick",
  },
  {
    title: "Rick and Morty App",
    image: rickmorty,
    description:
      "J'ai développé un site en React utilisant l'API de Rick and Morty et React Redux pour la gestion de l'état globale. Les utilisateurs peuvent explorer les personnages, consulter leurs détails et naviguer entre les lieux et épisodes associés. Le tout est stylisé avec Tailwind CSS pour une interface fluide et responsive.",
    technologies: ["HTML", "CSS", "React", "Redux", "Tailwind"],
    github: "https://github.com/KolerY/RickAndMortyAPI",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Un site web de portfolio personnel présentant mes projets, compétences et informations de contact.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    github: "https://github.com/KolerY/yb-portfolio",
  },
];

export const CONTACT = {
  address: "Montréal, QC, Canada",
  email: "yannickblanchette1337@gmail.com",
};
