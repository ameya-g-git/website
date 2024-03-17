import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import useScrollLength from "../hooks/useScrollLength";
import ScrollingImage from "./ScrollingImage";
import starbar from "../assets/starbar.png"

export default function Navbar() {
    const scrollLength : number = useScrollLength();
    const routes : string[] = ['', 'projects', 'portfolio'];
    const navElementClasses = clsx("content-box m-4 border-b-0 border-yellow transition-all hover:border-b-4 hover:-translate-y-0.5")

    const navLinkElements = routes.map( item => (
        <NavLink 
            key={item}
            to={`/${item}`}
            className={({ isActive, isPending, isTransitioning }) =>
                [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                ].join(" ") + navElementClasses
            }
            >
            {item ? item : 'home'}
        </NavLink>
    ))


    return (
        <div className={`z-[999] transition-all ease-in-out fixed inline-flex justify-around w-full p-3 bg-black h-14 ${scrollLength > 0 ? '-top-14' : 'top-0'}`}>
            <ScrollingImage ltr={true} width="starbar" img={starbar} />
            <nav className="relative inline-flex items-center justify-around w-full mx-8 text-lg transition-all border-b-0 mb text-yellow font-body">
                {navLinkElements}
                <a className={navElementClasses}>resume</a>
                <a className={navElementClasses}>contact</a>
            </nav>
            <ScrollingImage ltr={false} width="starbar" img={starbar} />
        </div>
    )
}