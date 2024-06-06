import { NavLink } from "react-router-dom";
import ScrollingImage from "./ScrollingImage";
import starbar from "/assets/starbar.png";

export default function Navbar() {
	const routes: string[] = ["", "projects", "portfolio"];
	const navElementClasses =
		"content-box m-4 border-yellow transition-all hover:border-b-4 hover:-translate-y-0.5 animate-nav-load";

	const navLinkElements = routes.map((item) => (
		<NavLink
			key={item}
			to={`/${item === "portfolio" ? "portfolio/gfx" : item}`}
			className={({ isActive, isPending }) =>
				`${navElementClasses} ${isActive ? "border-b-4" : ""} ${isPending ? "animate-nav-load" : ""}`
			}
		>
			{item ? item : "home"}
		</NavLink>
	));

	return (
		<div
			className={`fixed z-[9999] inline-flex h-14 w-full justify-around bg-black p-3 transition-all ease-in-out`}
		>
			<ScrollingImage ltr={true} width="starbar">
				<img src={starbar} alt="" className="w-full object-cover" />
			</ScrollingImage>
			<nav className="mb font-body relative mx-8 inline-flex w-full items-center justify-around border-b-0 text-lg text-yellow transition-all">
				{navLinkElements}
				<a
					className={navElementClasses}
					href="../src/assets/AG_fullresume.pdf"
					target="_blank"
				>
					resume
				</a>
				<a className={navElementClasses} href="#footer">
					contact
				</a>
			</nav>
			<ScrollingImage ltr={false} width="starbar">
				<img src={starbar} alt="" className="w-full object-cover" />
			</ScrollingImage>
		</div>
	);
}
