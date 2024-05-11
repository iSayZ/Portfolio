import Carrousel from "./Carrousel";

function Skills({ skills }) {

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
      name: "NodeJs",
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
    // {
    //   name: "MongoDB",
    //   imgSrc: "../../assets/skills-icons/icons8-mongodb-144.svg",
    // },
  ];

  return (
    <div id="skills" className="bg-slate-200 md:flex md:justify-center">
      <div ref={skills} className="bg-sky-950 pt-8 border-t-2 border-b-2 lg:rounded-md border-white md:w-4/6 md:rounded-md md:border-2 md:border-transparent md:shadow-sm md:shadow-black">
        <h2 className="text-3xl font-semibold text-center text-slate-50">Technologies maitrisées</h2>  
        <div className="my-8 w-full flex justify-center">
          <Carrousel skillsIcons={skillsIcons} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
