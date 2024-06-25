import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useMain } from "../../contexts/Context";
import ProjectContainer from "./ProjectContainer";
import InformationProject from "./InformationProject";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

function MyProjects() {

    const { openPopup, closePopup, isPopupOpen, projectSelect, projects } = useMain();

    const informationProject = useRef(null);
    const title = useRef(null);
    const tabs = useRef(null)
    const projectsContainer = useRef(null)

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

    useEffect(() => {

        gsap.fromTo(
            title.current,
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: `#my-projects`,
                    start: "top center",
                    end: "top center",
                    markers: false,
                },
            }
            );

            gsap.fromTo(
                tabs.current,
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: `#my-projects`,
                        start: "top center",
                        end: "top center",
                        markers: false,
                    },
                }
                );

                gsap.fromTo(
                    projectsContainer.current,
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        delay: 0.8,
                        duration: 0.7,
                        scrollTrigger: {
                            trigger: `#my-projects`,
                            start: "top center",
                            end: "top center",
                            markers: false,
                        },
                    }
                    );

    }, [])

    const data = [
        {
            label: "Tous",
            value: "all"
        },
        {
            label: "En équipe",
            value: "team"
        },
        {
            label: "Seul",
            value: "only"
        }
    ]

    return (
        <>
            <div id='my-projects' className="bg-cyan-500 w-full px-4 py-12 lg:py-16">
                <h2 ref={title} className="text-slate-100 text-4xl font-semibold text-center mb-12">Projets réalisés</h2>
                <Tabs value="all" className="">
      <TabsHeader ref={tabs} className="md:mx-60">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody ref={projectsContainer} >
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <div className="lg:flex lg:flex-wrap lg:justify-evenly ">
                    {projects.filter((project) => project.key.includes(value.toString())).map((project, index) => (
                        // div provenant du composant ProjectContainer pour assurer le maintien de l'animation
                        <div className="mt-12 flex flex-col items-center bg-slate-900/50 rounded shadow-xl overflow-hidden lg:w-45% lg:flex-none"
                            key={`${project.name}-${index}`}
                        >
                            <ProjectContainer
                                project={project}
                                openPopup={() => openPopup(project.id)}
                            />
                        </div>
                    ))}
                </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
            </div>
            {isPopupOpen && <InformationProject project={projectSelect} closePopup={closePopup} informationProject={informationProject} />}
        </>
    )
}

export default MyProjects;