import { motion, Variants } from "framer-motion";

import ScrollingImage from "../components/ScrollingImage";

import wave from "/assets/hero_shapes/wave.svg";
import four from "/assets/4.svg";
import zero from "/assets/0.svg";
import eyes from "/assets/eyes.svg";
// import glaggle from "/assets/hero_shapes/glaggle.svg";
// import head from "/assets/portfolio_icons/head.svg";
// import nanner from "/assets/hero_shapes/nanner.svg";
// import square from "/assets/hero_shapes/square.svg";
// import react from "/assets/icons/react.svg";
// import typescript from "/assets/icons/typescript.svg";
// import tailwind from "/assets/icons/tailwind.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
	const pathAnim: Variants = {
		start: { pathLength: 0 },
		end: {
			pathLength: 1,
			transition: { repeat: Infinity, repeatType: "mirror", duration: 10 },
		},
	};

	return (
		<>
			<section
				id="banner"
				className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden text-black"
			>
				<div id="shapes" className="absolute w-full h-full pointer-events-none select-none">
					<svg className="w-full h-full">
						<motion.rect
							x={-300}
							y={800}
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
							y={-300}
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
					</svg>
					{/* <img
						src={glaggle}
						className="absolute right-3 top-[28rem] w-80 animate-float"
					/>
					<img src={head} className="absolute w-24 right-1/3 top-20 animate-float" />
					<img src={square} className="absolute left-16 top-1/4 w-60 animate-float" />
					<img
						className="absolute w-24 bottom-48 right-96 animate-float brightness-0"
						src={react}
					/>
					<img
						className="absolute w-16 left-96 top-24 animate-float brightness-0"
						src={tailwind}
					/>
					<img
						className="absolute bottom-[23rem] left-56 w-12 animate-float brightness-0"
						src={typescript}
					/> */}
				</div>
				<div className="flex mb-20 -ml-12">
					<img className="h-96 animate-float" src={four} alt="" />
					<img className="h-96 animate-float pl-4 [--delay:400ms]" src={zero} alt="" />
					<img className="-ml-4 h-96 animate-float [--delay:800ms]" src={four} alt="" />
				</div>
				<div className="flex flex-col items-center gap-4 min-w-1/3">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl ">
							sorry, the page you were looking for does not exist!
						</h1>
						<span className="flex flex-row items-center gap-2 text-xl">
							unless you were looking for this page...{" "}
							<img className="h-5" src={eyes} alt="eyes emoji" />
						</span>
					</div>
					<hr className="w-full border-black" />
					<div className="flex flex-col items-center">
						<span className="text-xl">
							if a link on this site brought you here,{" "}
							<a className="underline" href="#footer">
								contact me!
							</a>
						</span>
						<span>
							in the meantime, check out my{" "}
							<Link to="/projects" className="underline">
								projects
							</Link>{" "}
							or my{" "}
							<Link className="underline" to="/portfolio/gfx">
								design portfolio
							</Link>
							!
						</span>
					</div>
				</div>
				<div className="absolute bottom-0 scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} alt="" />
					</ScrollingImage>
				</div>
			</section>
		</>
	);
}
