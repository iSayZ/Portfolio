function Footer() {
    return (
        <div className="bg-sky-950 w-full p-8 text-slate-50">
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-lg mb-4">Mes réseaux sociaux</h2>
                <div className="flex justify-center space-x-3">
                    <a href="" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/github.svg" alt="" /> 
                    </a>
                    <a href="" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/linkedin.svg" alt="" /> 
                    </a>
                    <a href="" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/instagram.svg" alt="" /> 
                    </a>
                </div>
                <h3 className="mt-4">© Estrine Alexis 2024 - Tout droits réservés</h3>
            </div>
        </div>
    )
}

export default Footer;

