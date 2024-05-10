import { Carousel, IconButton } from "@material-tailwind/react";

function InformationProject ({ project, closePopup, informationProject }) {

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 min-h-screen w-full overflow-auto translate-x-full" ref={informationProject}>
            <div className=" bg-slate-50 h-full w-full rounded relative flex flex-col items-center justify-center px-4 pt-12 space-y-6 overflow-auto">
                <div onClick={closePopup} className="absolute top-0 py-2 w-full flex justify-between items-center bg-slate-100 border-b border-slate-800">
                <h3 className={`ml-2 text-3xl font-semibold text-${project.color.other}-500`}>{project.name}</h3>
                    <img src="../assets/images/icons/exit-btn-red.svg" alt="" className="hover:scale-110"/>
                </div>
                <a href={project.src} target="_blank" className="underline decoration-solid hover:opacity-50">Accéder au site vitrine</a>
                <Carousel className="rounded-l overflow-y-visible overflow-x-hidden h-auto flex-none"
                autoplay="true"
                autoplayDelay="10000"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
        </IconButton>
      )}>
                {project.img.map((img, index) =>
                        <img key={index} src={img} onClick={() => setImgSelect(index)} alt="" />
                )}
                </Carousel>
                <p className="text-l text-center">{project.desc}</p>
                <hr className={`w-1/3 bg-${project.color.other}-500 h-1`}/>
                <div>
                    <h2 className="text-center mb-4">
                        Technologies utilisées :
                    </h2>
                    <div className="flex flex-wrap justify-center">
                    {project.techno.map((techno, index) =>
                        <button key={`${techno} + ${index}`} className={`p-2 m-2 bg-${project.color.other}-500`}>{techno}</button>
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
    )
}

export default InformationProject;