import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import Gallery from "./Gallery";
import { Button } from "@material-tailwind/react";

function InformationProject ({ project, closePopup, informationProject }) {

  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  );

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 min-h-screen w-full overflow-auto translate-x-full" ref={informationProject}>
                <div className="relative top-0 p-2 md:p-6 large-screen:p-10 w-full flex justify-between items-center bg-slate-100 shadow z-50 lg:h-1/6">
                    <h3 className={`ml-2 text-3xl font-semibold text-${project.color.other}-500 lg:text-5xl`}>{project.name}</h3>
                    <button onClick={closePopup}>
                        <img src="../assets/images/icons/exit-btn-red.svg" alt="" className="mr-1 hover:bg-black/20 hover:rounded-md lg:h-14"/>
                    </button>
                </div>
            <div className="bg-slate-50 h-full w-full flex flex-col items-center px-4 py-8 space-y-6 lg:space-y-0 overflow-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:h-5/6">
                <div className="lg:w-45%">
                  <div className="w-full mb-8 flex flex-col items-center justify-center md:flex-row">
                    {project.src && 
                    <a href={project.src} target="_blank" className="mx-4 mb-4 md:mb-0">
                      <Button variant="gradient" color={project.color.other} className="">
                        Accéder au site vitrine 
                      </Button>
                    </a>}
                    {project.gitSrc && 
                    <a href={project.gitSrc} target="_blank" className="mx-4">
                      <Button variant="gradient" color={project.color.other} className="">
                        Accéder au repo Github
                      </Button>
                    </a>
                    }
                  </div>
                <Carousel className="rounded-l overflow-y-visible overflow-x-hidden h-auto flex-none"
                autoplay={true}
                autoplayDelay={10000}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={`LazyMotion + ${i}`}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? `w-8 bg-${project.color.carouselBubble}` : `w-4 bg-${project.color.carouselBubble} opacity-50`
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color={project.color.carouselArrow}
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color={project.color.carouselArrow}
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
        </IconButton>
      )}>
                {project.img.map((img, index) =>
                <span key={`${img} + ${index}`}>
                        <img src={img} alt="" className="relative"/>
                  <p className="opacity-0">.</p>
                        </span>
                )}
                </Carousel>
                </div>
                <div className="space-y-6 flex flex-col items-center justify-center lg:w-45%">
                    <p className="text-l text-center lg:w-2/3">{project.desc}</p>
                    <hr className={`w-1/3 bg-${project.color.other}-500 h-1`}/>
                    <div className="lg:w-2/3">
                        <h2 className="text-center mb-4">
                            Technologies utilisées :
                        </h2>
                        <div className="flex flex-wrap justify-center">
                        {project.techno.map((techno, index) =>
                            <button key={`${techno} + ${index}`} className={`p-2 m-2 bg-${project.color.other}-500 shadow-md`}>{techno}</button>
                          )}
                        </div>
                    </div>
                    <hr className={`w-1/3 bg-${project.color.other}-500 h-1`}/>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <img src="../assets/images/icons/calendar.png" alt="" className="h-6 w-6 mr-2" />
                            <p>Date de création : <span className={`font-medium text-${project.color.other}-500`}>{project.date}</span></p>
                        </div>
                        {project.time && 
                            <div className="flex items-center">
                            <img src="../assets/images/icons/timer.png" alt="" className="h-6 w-6 mr-2" />
                            <p>Temps de réalisation : <span className={`font-medium text-${project.color.other}-500`}>{project.time}</span></p>
                        </div>}
                    </div>
                </div>
         </div>
        {/* <Gallery project={project}/> */}
        </div>
    )
  }

export default InformationProject;