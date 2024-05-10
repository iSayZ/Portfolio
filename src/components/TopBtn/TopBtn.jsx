function TopBtn({ topBtn }) {

    return (
        <a href="#top" ref={topBtn} className="fixed bottom-2 right-2 bg-white rounded-full opacity-80 shadow-black shadow-sm hover:opacity-100 hover:scale-105">
            <svg class="h-12 w-12 text-slate-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="16 12 12 8 8 12" />  <line x1="12" y1="16" x2="12" y2="8" /></svg>
        </a>
    )
}

export default TopBtn;