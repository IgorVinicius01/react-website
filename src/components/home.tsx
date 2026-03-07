import { Link, Outlet } from "react-router-dom";
import { Building, HomeIcon, LayoutGrid, Menu, MoreHorizontal, X } from 'lucide-react'
import { useState } from "react";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="
            flex flex-col 
            md:flex-row min-h-screen w-full">
            <aside className={`
                bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] 
                text-white transition-all duration-300
                flex flex-col
                ${isOpen ? "md:w-64 w-full" : "md:w-20 w-full"}
                sticky top-0 z-50 md:h-screen`
            }>
                <div className={`
                    flex items-center p-4 
                    ${isOpen ? "justify-between w-full" : "justify-center"}
                `}>
                    <h1 className={`
                        font-bold text-xl transition-all duration-300
                        ${!isOpen ? "hidden" : "block"}
                    `}>
                        RD Alugueis
                    </h1>

                    <button 
                        onClick={toggleMenu}
                        className="
                        p-1 rounded-md 
                        hover:bg-blue-500 transition-colors
                        cursor-pointer"
                    >
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>

                <nav className={`
                    flex flex-col gap-2 p-2
                    ${isOpen ? "block" : "hidden md:flex items-center"}
                `}>
                    <MenuLink to="." icon={<HomeIcon size={24}/>} label="Home" isOpen={isOpen}/>
                    <MenuLink to="Predio" icon={<Building size={24}/>} label="Prédio" isOpen={isOpen}/>
                    <MenuLink to="." icon={<LayoutGrid size={24}/>} label="Kitnets" isOpen={isOpen}/>
                    <MenuLink to="." icon={<MoreHorizontal size={24}/>} label="Outros" isOpen={isOpen}/>
                </nav>
            </aside>

            <main className="flex-1 bg-gray-">
                <Outlet/>
            </main>
        </div>
    )
}

function MenuLink({ to, icon, label, isOpen } : 
    { to: string, icon: React.ReactNode, label: string, isOpen: boolean }) {
    return (
        <Link 
            to={to}
            className="flex items-center gap-4 p-3 rounded-md hover:bg-blue-500 transition-all whitespace-nowrap"
        >
            <div className="min-w-[24px] flex justify-center">{icon}</div>
            <span className={`${!isOpen && "md:hidden"} transition-opacity`}>
                {label}
            </span>
        </Link>
    );
}

export default Home;