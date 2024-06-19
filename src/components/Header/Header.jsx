import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { useState } from "react";
import Homepage from "./Homepage";
import { useRef, useEffect } from "react";
import gsap from "gsap";

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
            duration: 0.7
        })
        :
        gsap.to(burgerMenu.current, {
            opacity: 0.95,
            x: `-100%`,
            duration: 0.7
        })
    }, [isVisible])



    return (
        <div className="bg-sky-950 w-full">
            <Navbar handleToggle={handleToggle} />
            <BurgerMenu handleToggle={handleToggle} burgerMenu={burgerMenu} />
            <Homepage />
        </div>
    )
}

export default Header;