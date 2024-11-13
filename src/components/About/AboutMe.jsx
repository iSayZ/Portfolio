import { useState } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills.jsx";
import Skills2 from "./Skills2.jsx";
import { Button } from "@material-tailwind/react";

function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);

  const title = useRef(null);
  const aboutContainer = useRef(null);
  const aboutMe = useRef(null);
  const btn = useRef(null);
  const skills = useRef(null);

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false
    });

    gsap.fromTo(
      aboutContainer.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      }
    );
    
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
        duration: 0.5,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      aboutMe.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.7,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      btn.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      skills.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-end",
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      }
    );
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  let skillsIcons = [
    {
      name: "JavaScript",
      imgSrc: "../../assets/skills-icons/icons8-javascript-144.svg",
    },
    {
      name: "React",
      imgSrc: "../../assets/skills-icons/icons8-react.svg",
    },
    {
      name: "Node.js",
      imgSrc: "../../assets/skills-icons/icons8-nodejs-144.svg",
    },
    {
      name: "Express",
      imgSrc: "../../assets/skills-icons/icons8-express-js.svg",
    },
    {
      name: "HTML",
      imgSrc: "../../assets/skills-icons/icons8-html-5-144.svg",
    },
    {
      name: "CSS",
      imgSrc: "../../assets/skills-icons/icons8-css-144.svg",
    },
    {
      name: "Tailwind CSS",
      imgSrc: "../../assets/skills-icons/icons8-tailwind-css-144.svg",
    },
    {
      name: "MySql",
      imgSrc: "../../assets/skills-icons/icons8-mysql-144.svg",
    },
    {
      name: "Github",
      imgSrc: "../../assets/skills-icons/icons8-github-150.svg",
    },
    {
      name: "Figma",
      imgSrc: "../../assets/skills-icons/icons8-figma-144.svg",
    },
    {
      name: "Docker",
      imgSrc: "../../assets/skills-icons/icons8-docker.svg",
    },
    {
      name: "TypeScript",
      imgSrc: "../../assets/skills-icons/icons8-typescript.svg",
    },
    {
      name: "Nest.js",
      imgSrc: "../../assets/skills-icons/icons8-nestjs.svg",
    },
    {
      name: "Next.js",
      imgSrc: "../../assets/skills-icons/icons8-nextjs.svg",
    },
    {
      name: "MongoDB",
      imgSrc: "../../assets/skills-icons/icons8-mongodb-144.svg",
    },
  ];

  return (
    <div
      id="about-me"
      className="bg-slate-200 w-full h-full py-8 lg:py-20 lg:px-40"
      ref={aboutContainer}
    >
      <div className="relative md:rounded md:shadow-xl md:bg-slate-50 md:bg-opacity-30 md:mb-20 md:w-5/6 p-6 m-auto">
        <h2 ref={title} className="text-4xl font-semibold text-cyan-500 m-0 text-center md:mt-6 mb-14">
          Qui suis-je ?
        </h2>
        <div ref={aboutMe} className="text-center mx-8 mb-12 space-y-4 lg:leading-7 lg:text-l md:text-left">
        <div className="w-44 rounded overflow-hidden shadow-xl m-auto mb-12 md:float-left md:mr-10 md:mb-8 relative">
              <img src="../assets/profil2.png" alt="" className="" />
            </div>
          <p>
          Développeur web passionné et compétent, je transforme ma passion pour la technologie en une carrière enrichissante. 🚀
          </p>
          <p>
          Ayant acquis des compétences solides en JavaScript, React, Node.js et MySQL, et bien d'autres technologies. Je me consacre à la conception d'applications web dynamiques et innovantes. Avec une approche axée sur les meilleures pratiques de développement (méthode Agile) et une volonté d'apprendre continuellement, je suis prêt à relever les défis techniques passionnants qui se présentent à moi.
          </p>
          <p>
          Mon approche collaborative et ma capacité à apprendre rapidement me permettent de m'adapter aux
          exigences changeantes du secteur. À la recherche d'opportunités pour
          contribuer à des projets stimulants et pour élargir mes compétences en
          développement web au sein d'une équipe dynamique. N’hésitez pas à me
          contacter si mon profil vous intéresse, au plaisir de vous rencontrer
          ! ✌️
          </p>
          <span id="about-end"></span>
          </div>        
          <a ref={btn} href="https://www.estrine-alexis.fr/assets/CV_Alexis_ESTRINE.pdf/" target="_blank" className="block mb-6 md:mb-12 text-center">
                  <Button variant="gradient" color="orange">
                    Voir mon CV
                  </Button>
                </a>
      </div>
      <Skills skillsIcons={skillsIcons} skills={skills} />
      <Skills2 skillsIcons={skillsIcons} skills={skills} />
    </div>
  );
}

export default AboutMe;
