import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/About/AboutMe";
import Contact from "./components/Contact/Contact";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";
import TopBtn from "./components/TopBtn/TopBtn";

function App() {
  return (
    <>
      <Header />
      {/* <div className="absolute z-1"> */}
      <AboutMe />
      {/* </div> */}
      <MyProjects />
      <Contact />
      <Footer />
      <TopBtn />
    </>  
  );
}

export default App;
