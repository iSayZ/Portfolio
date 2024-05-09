function ProjectContainer ({ project, handleToggle }) {
    return (
        <div className="mb-8 flex flex-col items-center bg-slate-900/50 rounded shadow-xl overflow-hidden">
            <div className="min-h-auto w-full bg-slate-300 relative md:w-2/5 rounded">
                    <img src={project.img[0]} alt="" className="w-full h-full object-fill rounded-tl-sm rounded-tr-sm" />
                    <div onClick={handleToggle} className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 bg-slate-900 rounded-tl-sm rounded-tr-sm flex justify-center items-center cursor-pointer hover:opacity-80">
                        <p className="text-slate-100">Cliquez ici pour en savoir plus...</p>
                    </div>
            </div>
            <h3 className="text-slate-100 font-semibold text-xl my-2">{project.name}</h3>
        </div>
    )
}

export default ProjectContainer;