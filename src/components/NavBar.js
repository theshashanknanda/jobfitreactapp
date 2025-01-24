import { NavLink } from "react-router-dom"
import './NavBar.css'
import menuicon from '../img/menu_icon.png'
import { useEffect, useState } from "react"

function NavBar(){
    let [isMini, setIsMini] = useState(false)
    let [isMenuClicked, setIsMenuClicked] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const mediaQuery = window.matchMedia("(max-width: 900px)")
            setIsMini(mediaQuery.matches)

            if(!isMini){
                setIsMenuClicked(false)
            }
        }

        window.addEventListener("resize", handleResize)
        handleResize()
    }, [])

    return (
    <div 
    className="min-w-[80vw] mx-auto mt-8 bg-white rounded-3xl p-6 shadow-lg shadow-gray-500 w-[90vw] flex justify-between items-start">
        <div className={isMenuClicked ? "mininav" : "flex flex-row items-center justify-between w-[100%]"}>
            <h1 className="text-3xl font-extrabold">
                <NavLink to='/'>JobFitAI</NavLink>
            </h1>
            <ul className={isMenuClicked ? "minilist" : "list flex mx-4 gap-6 items-center"}>
                <li>
                    <a href="/#home">Home</a>
                </li>
                <li>
                    <a href="/#about">What's JobFit?</a>
                </li>
                <li>
                    <a href="/#faq">FAQ</a>
                    </li>
                <li>
                    <a href="/#features">Features</a>
                </li>
            </ul>
            <div className={isMenuClicked ? "minibuttons" : "buttons flex gap-4 items-center"}>
                <button className="border border-black px-5 py-1.5 rounded-full font-semibold text-sm">
                    <NavLink to='/login'>Login</NavLink>
                </button>
                <button className="border border-black px-5 py-1.5 rounded-full font-semibold text-sm bg-[#0281A7] text-white">
                    <NavLink to='/signup'>Signup</NavLink>
                </button>
            </div>
        </div>

        <img className="ham h-[20px] w-[30px] hidden" alt="Ham menu" src={menuicon} onClick={() => {setIsMenuClicked(!isMenuClicked)}}></img>
    </div>)
}

export default NavBar