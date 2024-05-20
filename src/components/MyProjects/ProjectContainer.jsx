function ProjectContainer({ project, openPopup }) {
  return (
    <>
      <div className="min-h-auto w-full bg-slate-300 relative rounded">
        <img
          src={project.img[project.imgTop]}
          alt=""
          className="w-full h-full lg:h-60 xl:h-80 2xl:min-h-full object-fill lg:object-cover 2xl:object-fill rounded-tl-sm rounded-tr-sm"
        />
        <div
          onClick={openPopup}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 bg-slate-900 rounded-tl-sm rounded-tr-sm flex justify-center items-center cursor-pointer transition duration-300 ease-out hover:opacity-80"
        >
          <p className="text-slate-100 lg:text-xl">Cliquez ici pour en savoir plus...</p>
          <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
        </div>
      </div>
      <h3 className="text-slate-100 font-semibold text-xl my-2">
        {project.name}
      </h3>
    </>
  );
}

export default ProjectContainer;
