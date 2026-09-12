export default function Navbar() {
    return (
        <nav className=" sticky top-0 z-50 bg-white">
            <div className=" flex mx-auto max-w-7xl items-center justify-between px-4 py-4 gap-7">
                <div>
                    <img src="/assets/logo-text.png" alt="Right Left logo" className="h-10" />
                </div>
                <div >
                    <ul>
                        <li className="flex items-center gap-4 ">
                            <a href="">Home</a>
                            <a href="">Technologies</a>
                            <a href="">Projects</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-2.5">
                    <button> Sign In</button>
                    <button className="rounded-full bg-[#DB2777] text-white py-1.5 px-3.5">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}