function BurgerMenu({ handleToggle, burgerMenu }) {
  
  return (
    <div className="min-h-screen w-full fixed z-50 top-0 left-0 right-0 bottom-0 bg-sky-900 opacity-0 backdrop-blur flex justify-center -translate-x-full " ref={burgerMenu}>
      <div className="flex flex-col justify-center items-center text-slate-50 text-3xl space-y-6">
        <a className="hover:text-slate-400 hover:scale-110" href="" onClick={handleToggle}>
          Index
        </a>
        <a className="hover:text-slate-400 hover:scale-110" href="#about-me" onClick={handleToggle}>
          About me
        </a>
        <a className="hover:text-slate-400 hover:scale-110" href="" onClick={handleToggle}>
          Projects
        </a>
        <a className="hover:text-slate-400 hover:scale-110" href="" onClick={handleToggle}>
          Contact
        </a>
        <svg onClick={handleToggle}
          class="h-10 w-10 text-slate-50 hover:text-slate-400 hover:scale-110 cursor-pointer active:rotate-90 transition-all ease-in-out duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <line x1="18" y1="6" x2="6" y2="18" />{" "}
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
}

export default BurgerMenu;
