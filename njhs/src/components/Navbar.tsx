import { useState } from "react";
import { Link } from "react-router-dom";

// Data
import NavData from "../mock-data/navbar.json";

// Types
import { NavbarElement } from "../types/navbar-types";

const NavbarData: Array<NavbarElement> = NavData.navElements;

export default function Navbar() {
    const [ mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <div className="
            w-full h-24 py-2 px-4 border-b-2 border-[#355796]
            md:grid md:grid-cols-5 
            flex justify-between items-center	
            ">
            <div className="col-span-1">
                <Link to="/">
                    <img 
                        src="logo.webp"
                        alt="New Jersey Humane Society Logo"
                        className="object-fit max-h-20"
                    ></img>
                </Link>
            </div>

            <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="flex items-center">
                <img src={mobileMenuOpen ? "./close.svg" : "./open.svg"} 
                    className="h-8 w-8"
                    alt={mobileMenuOpen ? "Close Icon" : "Open Icon"}
                />
            </button>
            <div
                className={"fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
                    (mobileMenuOpen ? " transition-opacity opacity-100 duration-500 translate-x-0" : " transition-all delay-500 opacity-0 translate-x-full")}
                >
                <div
                    className={"w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
                    (mobileMenuOpen ? " translate-x-0" : " translate-x-full")}
                >
                    <div className="flex flex-col items-center">
                        <div className="w-full h-24 flex flex-row items-center justify-between py-2 px-4 border-b-2 border-[#355796]">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                                <img 
                                    src="logo.webp"
                                    alt="New Jersey Humane Society Logo"
                                    className="object-fit max-h-20"
                                ></img>
                            </Link>
                            <button onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                                <img src="./close.svg"
                                    className="h-8 w-8"
                                    alt="Close Icon"
                                />
                            </button>
                        </div>
                        {NavbarData.map((navbarItem, idx) => (
                            <Link 
                                to={navbarItem.link} 
                                key={navbarItem.text} 
                                className={"block py-4 px-4 text-left w-full hover:bg-[#d7ddea]"}
                            >
                                <div className="flex items-center gap-x-4 w-32 m-auto">
                                    <img src={navbarItem.image} alt={navbarItem.text + " Icon"} className="h-8 w-8"/>
                                    <h1 className="text-xl">{navbarItem.text}</h1>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                    <section
                        className=" w-screen h-full cursor-pointer "
                        onClick={() => setMobileMenuOpen(false)}
                    ></section>
                </div>
            </div>
            <div className="hidden md:grid md:col-start-2 md:col-end-5 md:grid-cols-4 md:justify-evenly md:w-10/12 md:m-auto md:text-center">
                { NavbarData.map(navbarItem => {
                    return (
                        <Link to={navbarItem.link} key={navbarItem.text} className="group relative">
                            <div className="flex flex-col items-center">
                                <img src={navbarItem.image} alt={navbarItem.text + " Icon"} className="h-4 w-4"/>
                                <h1 className="text-xl">{navbarItem.text}</h1>
                            </div>
                            <span className="absolute left-1/2 w-0 h-0.5 bg-[#355796] group-hover:w-1/3 group-hover:transition-all duration-500"></span>  
                            <span className="absolute right-1/2 w-0 h-0.5 bg-[#355796] group-hover:w-1/3 group-hover:transition-all duration-500"></span>
                        </Link>
                    )
                })}
            </div>
        </div>
  )
}

/*
<div className="md:hidden">
    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center">
        <img src={mobileMenuOpen ? "./close.svg" : "./open.svg"} 
            className="h-8 w-8"
            alt={mobileMenuOpen ? "Close Icon" : "Open Icon"}
        />
    </button>
    <div className={`absolute top-24 right-0 bg-yellow-600 transform transition-transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 z-50`} style={{ width: "100%", maxWidth: "calc(100vw - 2rem)" }}>
        <div className="w-full">
            <div className="flex flex-col items-center py-2">
                {NavbarData.map(navbarItem => (
                    <Link 
                        to={navbarItem.link} 
                        key={navbarItem.text} 
                        className="block py-2 px-4 text-center"
                    >
                        <h1 className="text-xl">{navbarItem.text}</h1>
                        <span className="absolute left-1/2 w-0 h-0.5 bg-mainBlue group-hover:w-1/4 group-hover:transition-all duration-500"></span>  
                        <span className="absolute right-1/2 w-0 h-0.5 bg-mainBlue group-hover:w-1/4 group-hover:transition-all duration-500"></span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
</div>
*/