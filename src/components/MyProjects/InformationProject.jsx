import { Carousel, IconButton } from "@material-tailwind/react";

function InformationProject ({ project, handleToggle }) {

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-full flex justify-center items-center">
            <div className=" bg-slate-50 overflow-y-auto py-4 h-full rounded relative">
                <div className="flex flex-col items-center justify-center px-4 pt-12 space-y-6">
                <div onClick={handleToggle} className="absolute top-0 py-2 w-full flex justify-between items-center bg-slate-100 border-b border-slate-800">
                <h3 className={`ml-2 text-3xl font-semibold text-${project.color}-500`}>{project.name}</h3>
                    <img src="../assets/images/icons/exit-btn-red.svg" alt="" className="hover:scale-110"/>
                </div>
                <a href={project.src} target="_blank" className="underline decoration-solid hover:opacity-50">Accéder au site vitrine</a>
                <Carousel className="rounded-l"
                autoplay="true"
                autoplayDelay="10000"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? `w-8 bg-${project.color}-500` : `w-4 bg-${project.color}-500 opacity-50`
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color={project.color}
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color={project.color}
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
        </IconButton>
      )}>
                {project.img.map((img, index) =>
                        <img key={index} src={img} onClick={() => setImgSelect(index)} alt="" />
                )}
                </Carousel>
                <p className="text-l text-center">{project.desc}</p>
                <hr className={`w-1/3 bg-${project.color}-500 h-1`}/>
                <div>
                    <h2 className="text-center mb-4">
                        Technologies utilisées :
                    </h2>
                    <div className="flex flex-wrap justify-start">
                    {project.techno.map((techno, index) =>
                        <button key={`${techno} + ${index}`} className={`p-2 m-2 bg-${project.color}-500`}>{techno}</button>
                    )}
                    </div>
                </div>
                <hr className={`w-1/3 bg-${project.color}-500 h-1`}/>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <img src="../assets/images/icons/calendar.png" alt="" className="h-6 w-6 mr-2" />
                        <p>Date de création : <span className={`font-medium text-${project.color}-500`}>{project.date}</span></p>
                    </div>
                    {project.time && 
                        <div className="flex items-center">
                        <img src="../assets/images/icons/timer.png" alt="" className="h-6 w-6 mr-2" />
                        <p>Temps de réalisation : <span className={`font-medium text-${project.color}-500`}>{project.time}</span></p>
                    </div>}

                </div>
            </div>
         </div>
        </div>
    )
}

export default InformationProject;