import "./App.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainProvider } from "./contexts/Context";
import Header from "./components/Header/Header";
import AboutMe from "./components/About/AboutMe";
import Contact from "./components/Contact/Contact";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";
import TopBtn from "./components/TopBtn/TopBtn";

function App() {

  gsap.registerPlugin(ScrollTrigger);

  const topBtn = useRef(null);

  useEffect(() => {
    gsap.fromTo(topBtn.current, {
      opacity: 0,
      y: 10
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
          end: "bottom center",
          markers: false
      }      
    })
  }, [])

  return (
    <>
      <MainProvider>
        <Header />
        <AboutMe />
        <MyProjects />
        <Contact />
        <Footer />
        <TopBtn topBtn={topBtn} />     
      </MainProvider>
    </>  
  );
}

export default App;
