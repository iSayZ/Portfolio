function Navbar({ handleToggle }) {
  return (
    <div className="w-screen flex justify-between items-center h-1/6 p-3 lg:justify-center">
      <div
        onClick={handleToggle}
        className="lg:hidden ml-3 p-0.5 hover:bg-sky-900 hover:rounded hover:shadow-md active:rotate-90 transition-all ease-in-out duration-100"
      >
        <svg
          class="h-8 w-8 text-slate-200"
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
      {/* <div className="p-2 hover:bg-sky-900 hover:rounded-full hover:shadow-md transition-all ease-in-out duration-500 lg:hidden">
        <svg
          class="h-6 w-6 text-slate-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="5" />{" "}
          <line x1="12" y1="1" x2="12" y2="3" />{" "}
          <line x1="12" y1="21" x2="12" y2="23" />{" "}
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
          <line x1="1" y1="12" x2="3" y2="12" />{" "}
          <line x1="21" y1="12" x2="23" y2="12" />{" "}
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </div> */}
      <nav className="hidden text-slate-400 text-xl space-x-10 lg:block">
        <a className="hover:text-slate-50" href="">
          Index
        </a>
        <a className="hover:text-slate-50" href="">
          About me
        </a>
        <a className="hover:text-slate-50" href="">
          Projects
        </a>
        <a className="hover:text-slate-50" href="">
          Contact
        </a>
      </nav>
    </div>
    
  );
}

export default Navbar;
