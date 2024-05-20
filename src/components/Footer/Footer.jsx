import gsap from "gsap";
import { useRef, useEffect } from "react";

function Footer() {

    const footer = useRef(null);

    useEffect(
        () =>  {
            gsap.fromTo(
                footer.current,
                {
                  opacity: 0,
                  y: 10,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: "#message",
                    start: "bottom center",
                    end: "bottom bottom",
                    markers: false,
                  },
                }
              );        }, 
        []
     );

    return (
        <div className="bg-sky-950 w-full py-12 text-slate-50 relative">
            <div ref={footer} className="relative flex flex-col items-center z-50">
                <h2 className="font-semibold text-lg mb-4">Mes réseaux sociaux</h2>
                <div className="flex justify-center space-x-3">
                    <a href="https://github.com/iSayZ/" target="_blank" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/github.svg" alt="" /> 
                    </a>
                    <a href="https://linkedin.com/in/alexis-estrine/" target="_blank" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/linkedin.svg" alt="" /> 
                    </a>
                    <a href="" target="_blank" className="hover:opacity-80 hover:scale-105">
                        <img src="../../../assets/social-icons/instagram.svg" alt="" /> 
                    </a>
                </div>
                <h3 className="mt-4 text-sm">© Estrine Alexis 2024 - Tout droits réservés</h3>
            </div>
        </div>
    )
}

export default Footer;

