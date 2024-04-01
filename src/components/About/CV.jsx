function CV({ handleToggle }) {


    return (
        <div className="fixed z-10 top-0 left-0 right-0 w-full h-svh backdrop-blur-sm flex flex-col justify-center items-center p-6">
            <div className="relative bg-amber-500 w-full h-full flex justify-center items-center rounded p-20 shadow-black shadow-sm lg:w-5/6">
            <svg onClick={handleToggle} class="cursor-pointer absolute right-3 top-3 h-12 w-12 text-slate-50 hover:scale-105"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                <div className="bg-slate-50 w-full h-full opacity-100">
                    <h1>MON CV</h1>
                </div>
            </div>
        </div>
    )
}

export default CV;