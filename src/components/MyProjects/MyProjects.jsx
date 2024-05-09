import ProjectContainer from "./ProjectContainer";
import InformationProject from "./InformationProject";
import { useState } from "react";

function MyProjects() {

    const projects = [
        {
            name: "Feet & Fun",
            desc: "Site de e-commerce (vente de chaussettes), réalisé en équipe lors de ma formation à la Wild Code School.",
            techno: ["React", "JavaScript", "CSS", "API"],
            src: "https://feet-n-fun.vercel.app/",
            date: "Avril 2024",
            time: "3 semaines",
            color: "orange",
            img: [
                "../assets/projects/feet-n-fun/shop.png",
                "../assets/projects/feet-n-fun/product_details.png",
                "../assets/projects/feet-n-fun/search.png",
                "../assets/projects/feet-n-fun/filter.png",
                "../assets/projects/feet-n-fun/cart.png",
                "../assets/projects/feet-n-fun/favorites.png"
            ]
        },
        {
            name: "Portfolio",
            desc: "Mon portfolio professionnel (site sur lequel vous naviguez).",
            techno: ["React", "JavaScript", "Tailwind CSS"],
            src: "https://estrine-alexis.vercel.app/",
            date: "Avril 2024",
            color: "cyan",
            arrowColor: "white",
            img: [
                "../assets/projects/portfolio/accueil.png"
            ]
        },
        {
            name: "Trombinoscope",
            desc: "Trombinoscope réalisé en équipe, mettant en valeur la promotion de la Wild Code School 2024.",
            techno: ["JavaScript", "HTML", "CSS"],
            src: "https://alexoualexandre.github.io/lille-0224-projet1-trombinoscope/",
            date: "Mars 2024",
            time: "2 semaines",
            color: "pink",
            arrowColor: "white",
            img: [
                "../assets/projects/trombi/accueil.png"
            ]
        }
    ];

    const [ visible, setVisible ] = useState(false);

    const [ projectSelect, setProjectSelect ] = useState();

    const handleToggle = (indexProject) => {
        setProjectSelect(indexProject);
        setVisible(!visible);
    }

    return (
        <>
            <div id='my-projects' className="bg-cyan-500 w-full p-4 py-8 flex flex-col items-center md:flex-row md:justify-evenly md:flex-wrap">
                <h1 className="text-slate-100 text-3xl font-semibold mb-8">Mes projets</h1>
                {projects.map((project, index) => 
                        <ProjectContainer key={`${project.name} + ${index}`} project={project} handleToggle={() => handleToggle(index)} />
                )}
            </div>
            {visible && <InformationProject project={projects[projectSelect]} handleToggle={handleToggle} />}
        </>
    )
}

export default MyProjects;