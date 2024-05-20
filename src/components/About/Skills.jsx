import Carrousel from "./Carrousel";

function Skills({ skillsIcons, skills }) {

  return (
    <div id="skills" className="bg-slate-200 sm:hidden">
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
