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
import useWindowSize from "../hooks/useWindowSize";

interface linkProps {
	icon: string;
	title: string;
	path: string;
}

export default function PortfolioPage() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { screenWidth, screenHeight } = useWindowSize();

	const WIDTH = 1440;
	const HEIGHT = 1080;

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
				className="flex w-full grow flex-row items-center gap-4 rounded-lg px-8 py-4 text-3xl text-white shadow-yellow hover:shadow-sm md:text-4xl"
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
						<img
							src={scribbleTitle}
							className="absolute mt-4 h-1/5 pr-[46vw] md:h-24 md:pr-[33rem]"
							alt=""
						/>
						<img
							src={smiley}
							className="absolute left-1/2 ml-[9.25vw] mt-5 h-1/6 md:ml-[6.5rem] md:h-[4.5rem]"
							alt=""
						/>
						<img
							src={eye}
							className="absolute ml-[71vw] mt-5 h-[14.28%] md:ml-[51rem] md:h-16"
							alt=""
						/>
					</div>
					{screenWidth > 768 && (
						<div
							role="presentation"
							className="absolute -mt-14 inline-flex h-6 -translate-x-24 translate-y-20 scale-90 gap-2 *:h-auto *:max-w-12 *:animate-float md:-ml-72 md:mt-12 md:h-12"
						>
							{iconElements}
						</div>
					)}
				</div>
				{screenWidth > 1080 && (
					<div className="pointer-events-none absolute flex h-full w-full select-none items-center justify-center">
						<div className="h-full w-full">
							<svg className="absolute left-0 top-0 h-full w-full">
								<motion.rect
									key={1}
									x={(screenWidth / WIDTH) * -150}
									y={(screenHeight / HEIGHT) * 850}
									rx={80}
									width={(screenWidth / WIDTH) * 400}
									height={(screenHeight / HEIGHT) * 400}
									stroke="#000000"
									strokeWidth={90}
									fillOpacity={0}
									variants={pathAnim}
									initial="start"
									animate="end"
								/>
								<motion.rect
									key={2}
									x={(screenWidth / WIDTH) * -100}
									y={(screenHeight / HEIGHT) * -275}
									rx={80}
									width={(screenWidth / WIDTH) * 600}
									height={(screenHeight / HEIGHT) * 600}
									stroke="#000000"
									strokeWidth={90}
									fillOpacity={0}
									variants={pathAnim}
									initial="start"
									animate="end"
								/>
								<motion.rect
									key={3}
									x={(screenWidth / WIDTH) * 1250}
									y={(screenHeight / HEIGHT) * -300}
									rx={80}
									width={(screenWidth / WIDTH) * 400}
									height={(screenHeight / HEIGHT) * 700}
									stroke="#000000"
									strokeWidth={90}
									fillOpacity={0}
									variants={pathAnim}
									initial="start"
									animate="end"
								/>
								<motion.rect
									key={4}
									transform={`rotate(90 ${(screenWidth / WIDTH) * 1400} ${(screenHeight / HEIGHT) * 850})`}
									x={(screenWidth / WIDTH) * 1350}
									y={(screenHeight / HEIGHT) * 550}
									rx={80}
									width={(screenWidth / WIDTH) * 400}
									height={(screenHeight / HEIGHT) * 700}
									stroke="#000000"
									strokeWidth={90}
									fillOpacity={0}
									variants={pathAnim}
									initial="start"
									animate="end"
								/>
							</svg>
						</div>
					</div>
				)}
				<div className="absolute bottom-0 z-[99] scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} className="w-screen" alt="" />
					</ScrollingImage>
				</div>
			</section>
			<section className="flex flex-col items-center gap-2 bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] pt-8">
				<h2 className="text-center text-xl md:text-2xl">
					always experimenting with new media and styles!
				</h2>
				<div className="flex w-96 cursor-pointer flex-col items-center gap-4 rounded-full px-4 md:w-1/2 md:flex-row md:justify-center">
					<PortfolioLink icon={pen_icon} title="graphic design" path="/portfolio/gfx" />
					<PortfolioLink icon={paintbrush_icon} title="ui design" path="/portfolio/ui" />
				</div>
				<Outlet />
			</section>
		</>
	);
}
