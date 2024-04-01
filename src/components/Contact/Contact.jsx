function Contact() {



    return (
        <div className="bg-slate-200 w-full flex justify-center py-12 px-4">
            <div className="bg-slate-900 opacity-80 p-8 rounded shadow-black shadow-sm flex flex-col items-center justify-center w-full md:w-4/6 md:flex-row md:flex-wrap">
                <h3 className="font-semibold text-xl text-slate-50 mb-2 text-center md:mr-2 lg:text-1xl">Une question ?</h3>
                <h3 className="font-semibold text-xl text-slate-50 mb-2 text-center lg:text-1xl">Un projet à me proposer ?</h3>
                <h2 className="font-semibold text-3xl text-orange-500 mb-10 text-center md:w-full md:mt-2 lg:text-4xl">Contactez moi !</h2>
                <div className="w-full">
                    <form action="" className="flex flex-col items-center space-y-6 w-full md:flex-row md:flex-wrap md:justify-between">
                        <input type="text" id="lastname" placeholder="Nom" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500 md:w-[45%] md:mt-6"/>
                        <input type="text" id="firstname" placeholder="Prénom" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500 md:w-[45%]"/>
                        <input type="email" id="email" placeholder="E-mail" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"/>
                        <input type="text" id="subject" placeholder="Votre sujet" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"/>
                        <textarea name="message" id="message" placeholder="Votre message" rows="5" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"></textarea>
                        <button className="text-slate-50 font-semibold bg-orange-500 p-2 rounded hover:opacity-90 hover:scale-105 m-auto">Envoyer votre message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;