import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [ projectSelect, setProjectSelect ] = useState([]);

    const projects = [
      {
          id: 1,
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
          id: 2,
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
          gitSrc: "https://github.com/WildCodeSchool-2024-02/JS-LILLE-0224-P2-G2-feet-n-fun/",
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
          id: 3,
          name: "Portfolio",
          desc: "Mon portfolio professionnel (site sur lequel vous naviguez).",
          techno: ["React", "JavaScript", "Tailwind CSS", "Responsive"],
          src: "https://estrine-alexis.vercel.app/",
          gitSrc: "https://github.com/iSayZ/Portfolio",
          date: "Avril 2024",
          color: {carouselBubble: "cyan-500", carouselArrow: "white", other: "cyan"},
          imgTop: 0,
          img: [
              "../assets/projects/portfolio/accueil.png"
          ],
          key: ["all", "only"]
      },
      {
          id: 4,
          name: "Trombinoscope",
          desc: "Trombinoscope réalisé en équipe, mettant en valeur la promotion de la Wild Code School 2024.",
          techno: ["JavaScript", "HTML", "CSS", "Responsive"],
          src: "https://alexoualexandre.github.io/lille-0224-projet1-trombinoscope/",
          gitSrc: "https://github.com/alexoualexandre/lille-0224-projet1-trombinoscope",
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
