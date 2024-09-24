import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [ projectSelect, setProjectSelect ] = useState([]);

    const projects = [
      {
        id: 1,
        name: "Crumble",
        desc: "Crumble est un réseau social inspiré de Facebook, que j'ai développé seul, avec un fort accent sur l'interactivité et la réactivité. Ce projet intègre des fonctionnalités d'authentification sécurisée avec JWT, une gestion complète des profils utilisateurs, ainsi qu'un système de messagerie instantanée via WebSocket. Les utilisateurs peuvent publier du contenu, commenter, liker, et gérer leurs amis, le tout dans une interface réactive et responsive. J'ai également mis en place un panneau d'administration pour la gestion des utilisateurs et des publications.",
        techno: ["React", "Express", "MySQL", "WebSocket", "JWT"],
        gitSrc: "https://github.com/iSayZ/Crumble",
        date: "Septembre 2024",
        time: "4 semaines",
        color: {carouselBubble: "cyan-500", carouselArrow: "white", other: "cyan"},
        imgTop: 1,
        img: [
            "../assets/projects/crumble/login.png",
            "../assets/projects/crumble/index.png",
            "../assets/projects/crumble/profile.png",
            "../assets/projects/crumble/friend.png",
            "../assets/projects/crumble/chat.png",
            "../assets/projects/crumble/notification.png"
        ],
        key: ["all", "only"]
      },
      {
        id: 2,
        name: "Spot Lille Art",
        desc: "Spot Lille Art est une plateforme participative permettant de référencer, partager et découvrir des œuvres de street art dans la Métropole Européenne de Lille. Le projet inclut la mise en place d'un CRUD et de routes d'API sécurisées, une authentification, une carte interactive, la prise et l'upload de photos, ainsi qu'un espace administrateur.",
        techno: ["React", "Express", "MySQL"],
        src: "https://spot-lille-art.utopland.net",
        gitSrc: "https://github.com/iSayZ/Spot-Lille-Art",
        date: "Juillet 2024",
        time: "6 semaines",
        color: {carouselBubble: "cyan-500", carouselArrow: "white", other: "cyan"},
        imgTop: 0,
        img: [
            "../assets/projects/spot-lille-art/artworks.png",
            "../assets/projects/spot-lille-art/artwork.png",
            "../assets/projects/spot-lille-art/map.png",
            "../assets/projects/spot-lille-art/register.png",
            "../assets/projects/spot-lille-art/profil.png"
        ],
        key: ["all", "team"]
      },
      {
          id: 3,
          name: "MineGuide",
          desc: "Site réalisé en équipe lors de l'événement 'ProtoJam' de la Wild Code School, un concours où nous avions 24 heures pour développer un site autour du thème 'Nature & Déconnexion'. Nous avons choisi de prendre le sujet à l’envers. En hommage à la période du Covid où nous nous sommes évadés à travers les jeux vidéo, nous avons choisi Minecraft ! Ce jeu emblématique nous plonge dans des environnements naturels tout en nous offrant une évasion totale de la réalité. Ce site est donc une expérience fictive où vous pouvez découvrir 4 biomes de Minecraft, où chaque membre de notre équipe propose une location de gîte. Ce projet a non seulement été un plaisir à créer, mais il a également été récompensé par le prix de la meilleure technique lors de l'événement ! 🏆 (Le site est optimisé uniquement pour les ordinateurs en raison de contraintes de temps)",
          techno: ["React", "JavaScript", "CSS"],
          src: "https://mineguide.vercel.app/",
          gitSrc: "https://github.com/iSayZ/MineGuide-ProtoJam2024",
          date: "Mai 2024",
          time: "24 heures",
          color: {carouselBubble: "pink-500", carouselArrow: "pink", other:  "pink"},
          imgTop: 0,
          img: [
              "../assets/projects/mineguide/accueil.png",
              "../assets/projects/mineguide/aquatique.png",
              "../assets/projects/mineguide/avatar.png",
              "../assets/projects/mineguide/house.png",
              "../assets/projects/mineguide/monstres.png",
              "../assets/projects/mineguide/plantes.png",
              "../assets/projects/mineguide/equipe.png"
          ],
          key: ["all", "team", "small"]
      },
      {
          id: 4,
          name: "Feet & Fun",
          desc: `Feet & Fun est un site de e-commerce (basé sur la vente de chausettes 🧦) réalisé en équipe.
          Nous avons créé notre propre API qui contient toutes les informations de nos 150 produits.
          
          Liste des fonctionnalités : 
          
          - Panier / Liste de favoris ,
          - Fonction de recherche ( nom / description / mot clé ) ,
          - Filtre ( prix / tailles / couleurs ) ,
          - Tri ( prix coissant / décroissant / nouveautés ) ,
          -Entièrement responsive`,
          techno: ["React", "JavaScript", "CSS", "API", "Responsive"],
          src: "https://feet-n-fun.vercel.app/",
          gitSrc: "https://github.com/iSayZ/Feet-Fun",
          date: "Avril 2024",
          time: "3 semaines",
          color: {carouselBubble: "orange-500", carouselArrow: "orange", other:  "orange"},
          imgTop: 0,
          img: [
              "../assets/projects/feet-n-fun/shop.png",
              "../assets/projects/feet-n-fun/product_details.png",
              "../assets/projects/feet-n-fun/search.png",
              "../assets/projects/feet-n-fun/filter.png",
              "../assets/projects/feet-n-fun/cart.png",
              "../assets/projects/feet-n-fun/favorites.png"
          ],
          key: ["all", "team"]
      },
      {
          id: 5,
          name: "Portfolio",
          desc: "Mon portfolio professionnel (site sur lequel vous naviguez).",
          techno: ["React", "JavaScript", "Tailwind CSS", "Responsive"],
          src: "https://estrine-alexis.vercel.app/",
          gitSrc: "https://github.com/iSayZ/Portfolio",
          date: "Mai 2024",
          color: {carouselBubble: "cyan-500", carouselArrow: "white", other: "cyan"},
          imgTop: 0,
          img: [
              "../assets/projects/portfolio/accueil.png"
          ],
          key: ["all", "only"]
      },
      {
          id: 6,
          name: "Trombinoscope",
          desc: "Trombinoscope réalisé en équipe, mettant en valeur la promotion de la Wild Code School 2024.",
          techno: ["JavaScript", "HTML", "CSS", "Responsive"],
          src: "https://trombi-wcs.vercel.app/",
          gitSrc: "https://github.com/iSayZ/Trombinoscope-WCS",
          date: "Mars 2024",
          time: "2 semaines",
          color: {carouselBubble: "pink-500", carouselArrow: "white", other: "pink"},
          imgTop: 0,
          img: [
              "../assets/projects/trombi/index.png",
              "../assets/projects/trombi/section.png",
              "../assets/projects/trombi/card.png"
          ],
          key: ["all", "team"]
      }
  ];
  
    const openPopup = (idProject) => {
      const selectProject = projects.filter((project) => project.id === idProject)
      setProjectSelect(selectProject[0]);
      setIsPopupOpen(true);
      document.body.classList.add('overflow-hidden');
    };

    const closePopup = () => {
      setIsPopupOpen(false);
      document.body.classList.remove('overflow-hidden');
    };

  return (
    <MainContext.Provider value={{ openPopup, closePopup, isPopupOpen, setIsPopupOpen, projectSelect, projects }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMain = () => useContext(MainContext);
