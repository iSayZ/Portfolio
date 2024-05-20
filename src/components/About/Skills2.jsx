function Skills2 ({ skillsIcons, skills }) {

    return (
        <div ref={skills} className="bg-sky-950 rounded shadow-xl py-4 hidden sm:block">
            <h2 className="text-slate-50 text-3xl text-center mb-4">Techonologies maitrisées</h2>
            <div className="flex flex-row flex-wrap justify-center">
            {skillsIcons.map((skill, index) => (
                <div key={`${skill.name} + ${index}`} className="flex flex-col items-center justify-around bg-slate-50 rounded p-3 shadow-lg opacity-90 w-40 m-2">
                    <img src={skill.imgSrc} alt="" className="w-24 h-24" />
                    <p className="font-semibold text-l text-center text-slate-800">
                        {skill.name === "Tailwind CSS" ? "Tailwind" : skill.name}
                    </p>
                </div> 
            ))}
            </div>
        </div>
    )
}

export default Skills2;