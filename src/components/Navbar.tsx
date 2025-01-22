import { NavLink, useLocation } from "react-router-dom";
import ScrollingImage from "./ScrollingImage";
import starbar from "/assets/starbar.png";
import useWindowSize from "../hooks/useWindowSize";

export default function Navbar() {
	const { screenWidth } = useWindowSize();
	const { pathname } = useLocation();

	const routes: string[] = ["", "projects", "portfolio"];
	const navElementClasses =
		"content-box m-4 border-yellow transition-all hover:border-b-4 hover:-translate-y-0.5 animate-nav-load";

	const navLinkElements = routes.map((item) => (
		<li key={item}>
			<NavLink
				role="listitem"
				to={`/${item === "portfolio" ? "portfolio/gfx" : item}`}
				onClick={(_e) => document.getElementById("banner")?.scrollIntoView()}
				className={({ isActive, isPending }) =>
					`${navElementClasses} ${isActive || (item === "portfolio" && pathname === "/portfolio/ui") ? "border-b-4" : ""} ${isPending ? "animate-nav-load" : ""}`
				}
			>
				{item ? item : "home"}
			</NavLink>
		</li>
	));

	return (
		<div
			className={`fixed z-[9999] inline-flex h-14 w-screen justify-around bg-black p-3 transition-all ease-in-out`}
		>
			{screenWidth > 768 && (
				<ScrollingImage ltr={true} width="starbar">
					<img src={starbar} alt="" className="object-cover w-64" />
				</ScrollingImage>
			)}
			<nav className="w-full *:text-sm md:*:text-base">
				<ul className="relative inline-flex items-center justify-around w-full h-full px-8 text-lg transition-all font-body text-yellow">
					{navLinkElements}
					<li>
						<a
							role="listitem"
							className={navElementClasses}
							href="/assets/AG_resume.pdf"
							target="_blank"
						>
							resume
						</a>
					</li>
					<li>
						<a role="listitem" className={navElementClasses} href="#footer">
							contact
						</a>
					</li>
				</ul>
			</nav>
			{screenWidth > 768 && (
				<ScrollingImage ltr={false} width="starbar">
					<img src={starbar} alt="" className="object-cover w-64" />
				</ScrollingImage>
			)}
		</div>
	);
}
