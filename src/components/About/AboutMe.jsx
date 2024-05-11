import { useState } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills.jsx";

function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);

  const title = useRef(null);
  const aboutMe = useRef(null);
  const btn = useRef(null);
  const skills = useRef(null);

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
      aboutMe.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
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
        delay: 1,
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
      skills.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-me",
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

  return (
    <div
      id="about-me"
      className="bg-slate-200 w-full h-full py-12 lg:py-20 lg:p-12 lg:px-40"
    >
      <div className="text-center">
        <h1 ref={title} className="text-4xl font-semibold text-cyan-500 m-0">
          Qui suis-je ?
        </h1>
        <div ref={aboutMe} className="m-8 space-y-4 lg:leading-7 lg:text-l">
          <p>
          Passionné de technologie depuis toujours, je transforme aujourd'hui ma
          passion en devenant développeur web grâce à ma formation à la Wild
          Code School ! 🚀
          </p>
          <p>
          Doté d'une solide compréhension des langages HTML,
          CSS et JavaScript, je suis également en train d'explorer des
          technologies avancées telles que React.js, Node.js, Express, MySQL,
          Git, Github et d'autres. Avec une approche axée sur les meilleures
          pratiques de développement (méthode Agile) et une volonté d'apprendre
          continuellement, je suis prêt à relever les défis techniques
          passionnants qui se présentent à moi.
          </p>
          <p>
          Mon approche collaborative et ma capacité à apprendre rapidement me permettent de m'adapter aux
          exigences changeantes du secteur. À la recherche d'opportunités pour
          contribuer à des projets stimulants et pour élargir mes compétences en
          développement web au sein d'une équipe dynamique. N’hésitez pas à me
          contacter si mon profil vous intéresse, au plaisir de vous rencontrer
          ! ✌️
          </p>
          </div>        
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1iFZXXkv7Cxj5rTLxZ4uw3EUzjk4_HF1y/view?usp=sharing"
        >
          <button
            ref={btn}
            className="mb-12 bg-orange-500 p-2 text-slate-50 font-semibold rounded shadow-black shadow-sm active:shadow-none hover:scale-105"
          >
            Voir mon CV
          </button>
        </a>
      </div>
      <Skills skills={skills} />
    </div>
  );
}

export default AboutMe;
