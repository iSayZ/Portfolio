import { useRef, useEffect } from "react";
import gsap from "gsap";

function Navbar({ handleToggle }) {

  const navbar = useRef(null);

  useEffect(() => {
    gsap.to(navbar.current, {
      opacity: 1,
      y: 0,
      duration: 2
    })
  }, [])



  return (
    <div id="top" className="w-screen flex justify-between items-center h-1/6 p-3 lg:justify-center relative">
      <div
        onClick={handleToggle}
        className="lg:hidden ml-3 p-0.5 hover:bg-sky-900 hover:rounded hover:shadow-md active:rotate-90 transition-all ease-in-out duration-200"
      >
        <svg
          class="h-8 w-8 text-slate-200 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <nav className="hidden text-slate-50 text-xl space-x-10 lg:block opacity-0 -translate-y-10" ref={navbar}>
        <a className="hover:text-slate-400 inline-block hover:scale-105" href="">
          Index
        </a>
        <a className="hover:text-slate-400 inline-block hover:scale-105" href="#about-me">
          About me
        </a>
        <a className="hover:text-slate-400 inline-block hover:scale-105" href="">
          Projects
        </a>
        <a className="hover:text-slate-400 inline-block hover:scale-105" href="">
          Contact
        </a>
      </nav>
    </div>
    
  );
}

export default Navbar;
