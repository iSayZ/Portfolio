import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [ projectSelect, setProjectSelect ] = useState();

    const openPopup = (indexProject) => {
      setProjectSelect(indexProject);
      setIsPopupOpen(true);
      document.body.classList.add('overflow-hidden');
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
      document.body.classList.remove('overflow-hidden');
    };

  // Je return mon provider et je lui donne en value mes states, functions, etc.. mise plus haut don j'ai besoin
  return (
    <MainContext.Provider value={{ openPopup, closePopup, isPopupOpen, setIsPopupOpen, projectSelect }}>
      {children}
    </MainContext.Provider>
  );
}
// J'exporte mon hook personnalisé
export const useMain = () => useContext(MainContext);
