import Carrousel from "./Carrousel";

function Skills() {
  let skillsIcons = [
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
      name: "JavaScript",
      imgSrc: "../../assets/skills-icons/icons8-javascript-144.svg",
    },
    {
      name: "React",
      imgSrc: "../../assets/skills-icons/icons8-react.svg",
    },
    {
      name: "NodeJs",
      imgSrc: "../../assets/skills-icons/icons8-nodejs-144.svg",
    },
    {
      name: "Express",
      imgSrc: "../../assets/skills-icons/icons8-express-js.svg",
    },
    {
      name: "MySql",
      imgSrc: "../../assets/skills-icons/icons8-mysql-144.svg",
    },
    {
      name: "MongoDB",
      imgSrc: "../../assets/skills-icons/icons8-mongodb-144.svg",
    },
  ];

  return (
    <div className="bg-slate-200 md:flex md:justify-center">
      <div className="bg-cyan-500 pt-8 border-t-2 border-b-2 rounded-md border-white md:w-4/6 md:rounded-md md:border-2 md:border-transparent md:shadow-sm md:shadow-black">
        <h2 className="text-2xl font-semibold text-center text-slate-50">Technologies maitrisées</h2>  
        <Carrousel skillsIcons={skillsIcons} />
      </div>
    </div>
  );
}

export default Skills;
