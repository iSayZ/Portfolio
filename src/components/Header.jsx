import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { useState } from "react";
import Test from "./Test";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Header() {

    const [isVisible, setIsVisible] = useState(false)

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    const burgerMenu = useRef(null);

    console.log(`ici => ${burgerMenu}`)

    useEffect(() => {
        console.log(`ici 2 => ${burgerMenu}`)
        isVisible &&
        gsap.to(burgerMenu.current, {
            opacity: 0.95,
            x: 0,
            duration: 1
        })
    }, [isVisible])

    return (
        // bg-svg
        <div className="bg-sky-950 bg-svg w-screen">
            <Navbar handleToggle={handleToggle} />
            {isVisible && <BurgerMenu handleToggle={handleToggle} burgerMenu={burgerMenu} />}
            <Test />
        </div>
    )
}

export default Header;