import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { useState } from "react";
import Test from "./Test";

function Header() {

    const [isVisible, setIsVisible] = useState(true)

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="bg-svg w-screen">
            <Navbar handleToggle={handleToggle} />
            {!isVisible && <BurgerMenu handleToggle={handleToggle} />}
            <Test />
        </div>
    )
}

export default Header;