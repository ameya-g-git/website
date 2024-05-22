import wave from "../assets/wave.svg"
import scribbleTitle from "../assets/portfolio_icons/scribble_title.svg"
import smiley from "../assets/portfolio_icons/smiley_title.svg"
import eye from "../assets/portfolio_icons/eye_title.svg"
import jagged from "../assets/portfolio_icons/jagged.svg"
import sine from "../assets/portfolio_icons/sine.svg"
import square from "../assets/portfolio_icons/square.svg"
import circle from "../assets/hero_shapes/circle.svg"
import pen_icon from '../assets/home_icons/pen_icon.svg'
import paintbrush from '../assets/paintbrush.svg'

import useMousePosition from "../hooks/useMousePosition";
import Shape from "../components/Shape";
import ScrollingImage from "../components/ScrollingImage";
import { NavLink, Outlet, useLocation } from "react-router-dom"
import clsx from "clsx"

export default function PortfolioPage() {
    const mousePosition = useMousePosition()
    const { pathname } = useLocation()

    // TODO: rework the hover anim to use framer motion just to make life easier : D
    const navStyles = (path : string) => clsx({
        "flex flex-row items-center gap-4 text-4xl px-8 py-4 transition-all ease-out hover:bg-yellow border-2 border-white/30 hover:text-black hover:shadow-lg hover:shadow-yellow/25 rounded-lg": true,
        "bg-yellow text-black shadow-lg shadow-yellow/25": pathname == path,
        "bg-card-black text-white": pathname != path,
        
    })

    return (
        <>
            <section id="banner" className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
                <div className="flex items-center justify-center text-black font-page-heading">
                    <h1 className="md:text-[18rem] text-[25vw]">portfolio</h1>
                    <img src={scribbleTitle} className="absolute h-24 pr-[33rem] mt-5" alt="" />
                    <img src={smiley} className="absolute h-[4.5rem] mt-6 ml-[6.5rem] left-1/2" alt="" />
                    <img src={eye} className="absolute h-16 mt-6 ml-[51rem]" alt="" />
                    <div className="absolute w-full h-full pointer-events-none select-none">
                        <Shape src={sine} top="59vh" right="25vw" width="12vw" />
                        <Shape src={square} top="59vh" right="40vw" width="12vw" delay={2} />
                        <Shape src={jagged} top="59vh" right="55vw" width="12vw" />

                        <Shape src={sine} top="10vh" right="10vw" width="25vw" z={4} delay={4} />
                        <Shape src={square} top="20vh" right="75vw" width="15vw" delay={2} />
                        <Shape src={jagged} top="30vh" right="50vw" width="7vw" delay={3} />
                        
                        <Shape src={jagged} top="70vh" right="75vw" width="18vw" />
                        <Shape src={square} top="70vh" right="10vw" width="15vw" delay={2} />
                        <Shape src={sine} top="80vh" right="40vw" width="12vw" z={4} delay={4} />
                    </div>
                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} width="full">
                        <img src={wave} alt="" className="object-cover w-full" />
                    </ScrollingImage>
                </div>
            </section>
            <section className="flex flex-col items-center gap-2 pt-8 bg-black">
                <h2 className="text-2xl">always experimenting with new media and styles!</h2>
                <div className="flex flex-row gap-8 rounded-full">
                    <NavLink className={navStyles("/portfolio/gfx")} to={"/portfolio/gfx"}>
                        <img src={pen_icon} className="block h-10" alt="" />
                        graphic design
                    </NavLink>
                </div>
                <Outlet />
            </section>
        </>
    )
} 