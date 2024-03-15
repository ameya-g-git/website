import { NavLink } from "react-router-dom";
import StarBar from "./StarBar";
import { clsx } from "clsx";

export default function Navbar() {
    const routes = ['', 'projects', 'portfolio']
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
        <div className="relative inline-flex justify-around w-full p-3 bg-black h-14">
            <StarBar ltr={true} />
            <nav className="relative inline-flex items-center justify-around w-full mx-8 text-lg transition-all border-b-0 mb text-yellow font-body">
                {navLinkElements}
                <a className={navElementClasses}>resume</a>
                <a className={navElementClasses}>contact</a>
            </nav>
            <StarBar ltr={false} />
        </div>
    )
}