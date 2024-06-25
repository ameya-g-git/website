import wave from "/assets/wave.svg";
import scribbleTitle from "/assets/portfolio_icons/scribble_title.svg";
import smiley from "/assets/portfolio_icons/smiley_title.svg";
import eye from "/assets/portfolio_icons/eye_title.svg";
import head from "/assets/portfolio_icons/head.svg";
import star from "/assets/portfolio_icons/star.svg";
import eye2 from "/assets/portfolio_icons/eye.svg";
import sparkle from "/assets/portfolio_icons/sparkle.svg";
import scribble from "/assets/portfolio_icons/scribble.svg";
import glaggle from "/assets/portfolio_icons/glaggle.svg";
import boom from "/assets/portfolio_icons/boom.svg";
import pen_icon from "/assets/home_icons/pen_icon.svg";
import paintbrush_icon from "/assets/paintbrush.svg";

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

	const icons = [head, glaggle, boom, eye2, star, scribble, sparkle];

	const iconElements = icons.map((icon, i) => (
		<img src={icon} style={{ "--delay": `${i * 200}ms` } as React.CSSProperties} />
	));

	const navAnim: Variants = {
		start: { backgroundColor: "#101010", borderWidth: "2px", borderColor: "#FFFFFF4E" },
		end: { backgroundColor: "#FFF813", borderWidth: "2px", borderColor: "#FFF813" },
	};

	const titleAnim: Variants = {
		start: { filter: "" },
		end: { filter: "brightness(0)" },
	};

	const pathAnim: Variants = {
		start: { pathLength: 0 },
		end: {
			pathLength: 1,
			transition: { repeat: Infinity, repeatType: "mirror", duration: 10 },
		},
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
				role="banner"
				className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
			>
				<div role="presentation" className="flex h-fit w-fit items-center justify-center">
					<div className="absolute flex items-center justify-center font-page-heading text-black">
						<h1 className="text-[25vw] md:text-[18rem]">portfolio</h1>
						<img src={scribbleTitle} className="absolute mt-5 h-24 pr-[33rem]" alt="" />
						<img
							src={smiley}
							className="absolute left-1/2 ml-[6.5rem] mt-6 h-[4.5rem]"
							alt=""
						/>
						<img src={eye} className="absolute ml-[51rem] mt-6 h-16" alt="" />
					</div>
					<div
						role="presentation"
						className="absolute -ml-72 mt-12 inline-flex h-12 -translate-x-24 translate-y-20 scale-90 gap-2 *:h-auto *:max-w-12 *:animate-float"
					>
						{iconElements}
					</div>
				</div>
				<div className="pointer-events-none absolute h-full w-full select-none overflow-hidden">
					<svg className="absolute left-0 top-0 h-full w-full">
						<motion.rect
							x={-150}
							y={700}
							rx={80}
							width={400}
							height={400}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							x={-100}
							y={-275}
							rx={80}
							width={700}
							height={600}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							x={1600}
							y={-250}
							rx={80}
							width={400}
							height={700}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
						<motion.rect
							transform="rotate(90 1400 850)"
							x={1300}
							y={150}
							rx={80}
							width={400}
							height={700}
							stroke="#000000"
							strokeWidth={90}
							fillOpacity={0}
							variants={pathAnim}
							initial="start"
							animate="end"
						/>
					</svg>
				</div>
				<div className="absolute bottom-0 z-[99] scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} alt="" className="w-full object-cover" />
					</ScrollingImage>
				</div>
			</section>
			<section className="flex flex-col items-center gap-2 bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] pt-8">
				<h2 className="text-2xl">always experimenting with new media and styles!</h2>
				<div className="flex cursor-pointer flex-row gap-4 rounded-full">
					<PortfolioLink icon={pen_icon} title="graphic design" path="/portfolio/gfx" />
					<PortfolioLink icon={paintbrush_icon} title="ui design" path="/portfolio/ui" />
				</div>
				<Outlet />
			</section>
		</>
	);
}
