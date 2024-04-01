import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { useState } from "react";
import Homepage from "./Homepage";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ParticlesBg from "./ParticlesBg";

function Header() {

    const [isVisible, setIsVisible] = useState(false)

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    const burgerMenu = useRef(null);

    useEffect(() => {
        isVisible ?
        gsap.to(burgerMenu.current, {
            opacity: 0.95,
            x: 0,
            duration: 1
        })
        :
        gsap.to(burgerMenu.current, {
            opacity: 0.95,
            x: `-100%`,
            duration: 1
        })
    }, [isVisible])



    return (
        <div className="bg-sky-950 w-full">
            {/* <ParticlesBg /> */}
            <Navbar handleToggle={handleToggle} />
            <BurgerMenu handleToggle={handleToggle} burgerMenu={burgerMenu} />
            <Homepage />
        </div>
    )
}

export default Header;