import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useMain } from "../../contexts/Context";
import ProjectContainer from "./ProjectContainer";
import InformationProject from "./InformationProject";

function MyProjects() {

    const { openPopup, closePopup, isPopupOpen, projectSelect } = useMain();

    const informationProject = useRef(null);

    useEffect(() => {
        isPopupOpen ?
        gsap.to(informationProject.current, {
            opacity: 1,
            x: 0,
            duration: 0.7
        })
        :
        gsap.to(informationProject.current, {
            opacity: 1,
            x: `100%`,
            duration: 0.7
        })
    }, [isPopupOpen])

    const projects = [
        {
            name: "Feet & Fun",
            desc: "Site de e-commerce (vente de chaussettes), réalisé en équipe lors de ma formation à la Wild Code School.",
            techno: ["React", "JavaScript", "CSS", "API", "Responsive"],
            src: "https://feet-n-fun.vercel.app/",
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
                "../assets/projects/feet-n-fun/favorites.png",
                "../assets/projects/feet-n-fun/responsive.png"
            ]
        },
        {
            name: "Portfolio",
            desc: "Mon portfolio professionnel (site sur lequel vous naviguez).",
            techno: ["React", "JavaScript", "Tailwind CSS", "Responsive"],
            src: "https://estrine-alexis.vercel.app/",
            date: "Avril 2024",
            color: {carouselBubble: "white", carouselArrow: "white", other: "cyan"},
            imgTop: 0,
            img: [
                "../assets/projects/portfolio/accueil.png"
            ]
        },
        {
            name: "Trombinoscope",
            desc: "Trombinoscope réalisé en équipe, mettant en valeur la promotion de la Wild Code School 2024.",
            techno: ["JavaScript", "HTML", "CSS", "Responsive"],
            src: "https://alexoualexandre.github.io/lille-0224-projet1-trombinoscope/",
            date: "Mars 2024",
            time: "2 semaines",
            color: {carouselBubble: "white", carouselArrow: "white", other: "pink"},
            imgTop: 0,
            img: [
                "../assets/projects/trombi/index.png",
                "../assets/projects/trombi/section.png",
                "../assets/projects/trombi/card.png"
            ]
        }
    ];

    return (
        <>
            <div id='my-projects' className="bg-cyan-500 w-full p-4 py-8 ">
                <h1 className="text-slate-100 text-3xl font-semibold mb-8 text-center">Mes projets</h1>
                <div className="lg:flex lg:flex-wrap lg:justify-evenly lg:space-x-4">
                    {projects.map((project, index) => 
                            <ProjectContainer key={`${project.name} + ${index}`} project={project} openPopup={() => openPopup(index)} />
                    )}
                </div>
            </div>
            {isPopupOpen && <InformationProject project={projects[projectSelect]} closePopup={closePopup} informationProject={informationProject} />}
        </>
    )
}

export default MyProjects;