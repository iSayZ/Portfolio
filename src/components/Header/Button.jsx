function Button({ btn }) {

    return (
        // <a href={btn.link} target="_blank">
        <a href={btn.link} target={btn.target}>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-3xl text-sm flex items-center justify-center space-x-1 border-blue-500 hover:border-slate-100 border-2 font-semibold pl-3 pr-3 text-slate-100 mr-4 mb-4 w-28">
                {btn.imgSrc}
                <p>{btn.name}</p>
            </button>
        </a>
    )
}

export default Button;