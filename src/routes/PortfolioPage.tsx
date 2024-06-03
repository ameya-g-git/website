import wave from "../assets/wave.svg";
import scribbleTitle from "../assets/portfolio_icons/scribble_title.svg";
import smiley from "../assets/portfolio_icons/smiley_title.svg";
import eye from "../assets/portfolio_icons/eye_title.svg";
import jagged from "../assets/portfolio_icons/jagged.svg";
import sine from "../assets/portfolio_icons/sine.svg";
import square from "../assets/portfolio_icons/square.svg";
import pen_icon from "../assets/home_icons/pen_icon.svg";
import paintbrush_icon from "../assets/paintbrush.svg";

import Shape from "../components/Shape";
import Image from "../components/Image";
import ScrollingImage from "../components/ScrollingImage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface linkProps {
	icon: string;
	title: string;
	path: string;
}

export default function PortfolioPage() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const navAnim: Variants = {
		start: { backgroundColor: "#101010", borderWidth: "2px", borderColor: "#FFFFFF4E" },
		end: { backgroundColor: "#FFF813", borderWidth: "2px", borderColor: "#FFF813" },
	};

	const titleAnim: Variants = {
		start: { filter: "" },
		end: { filter: "brightness(0)" },
	};

	function PortfolioLink({ icon, title, path }: linkProps) {
		return (
			<motion.a
				initial={pathname === path ? "end" : "start"}
				whileHover="end"
				variants={navAnim}
				transition={{
					duration: 0.2,
				}}
				href="#images"
				onClick={(_e) => navigate(path)}
				className="flex w-96 flex-row items-center rounded-lg py-4 pl-8 text-4xl text-white shadow-yellow hover:shadow-sm"
			>
				<motion.img variants={titleAnim} src={icon} className="block h-10" alt="" />
				<motion.h1 className="flex-grow text-center" variants={titleAnim}>
					{title}
				</motion.h1>
			</motion.a>
		);
	}

	return (
		<>
			<section
				id="banner"
				className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
			>
				<div className="flex items-center justify-center font-page-heading text-black">
					<h1 className="text-[25vw] md:text-[18rem]">portfolio</h1>
					<img src={scribbleTitle} className="absolute mt-5 h-24 pr-[33rem]" alt="" />
					<img
						src={smiley}
						className="absolute left-1/2 ml-[6.5rem] mt-6 h-[4.5rem]"
						alt=""
					/>
					<img src={eye} className="absolute ml-[51rem] mt-6 h-16" alt="" />
				</div>
				<div className="pointer-events-none absolute h-full w-full select-none">
					{" "}
					{/* rework this entire thing dawg */}
					<Shape src={sine} top="59vh" right="25rem" width="12rem" />
					<Shape src={square} top="59vh" right="40vw" width="12rem" delay={2} />
					<Shape src={jagged} top="59vh" right="55vw" width="12rem" />
					<Shape src={sine} top="10vh" right="10vw" width="25rem" z={4} delay={4} />
					<Shape src={square} top="20vh" right="75vw" width="15rem" delay={2} />
					<Shape src={jagged} top="30vh" right="50vw" width="7rem" delay={3} />
					<Shape src={jagged} top="70vh" right="75vw" width="18rem" />
					<Shape src={square} top="70vh" right="10vw" width="15rem" delay={2} />
					<Shape src={sine} top="80vh" right="40vw" width="12rem" z={4} delay={4} />
				</div>
				<div className="absolute bottom-0 scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} alt="" className="w-full object-cover" />
					</ScrollingImage>
				</div>
			</section>
			<section className="flex flex-col items-center gap-2 bg-black pt-8">
				<h2 className="text-2xl">always experimenting with new media and styles!</h2>
				<div className="flex cursor-pointer flex-row gap-4 rounded-full">
					<PortfolioLink icon={pen_icon} title="graphic design" path="/portfolio/gfx" />
					<PortfolioLink icon={paintbrush_icon} title="ui design" path="/portfolio/ui" />
				</div>
				<div id="images" className="flex w-full flex-row flex-wrap gap-4 px-12 py-4">
					<Outlet />
				</div>
			</section>
		</>
	);
}
