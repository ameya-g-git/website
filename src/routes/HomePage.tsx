import clsx from "clsx";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useLoaderData } from "react-router-dom";
import localforage from "localforage";

import useWindowSize from "../hooks/useWindowSize";
import { getRepoDetails } from "../hooks/getRepoDetails";

import ScrollingImage from "../components/ScrollingImage";
import Shape from "../components/Shape";
import ProjectCard, { props as cardProps } from "../components/ProjectCard";
import ToolCard from "../components/ToolCard";
import DesignCard from "../components/DesignCard";

import starCurve from "/assets/home_icons/star_curve.svg";
import wave from "/assets/wave.svg";
import circle from "/assets/hero_shapes/circle.svg";
import circle2 from "/assets/hero_shapes/circle2.svg";
import curve from "/assets/hero_shapes/curve.svg";
import curve2 from "/assets/hero_shapes/curve2.svg";
import curve3 from "/assets/hero_shapes/curve3.svg";
import hex from "/assets/hero_shapes/hex.svg";
import nanner from "/assets/hero_shapes/nanner.svg";
import square from "/assets/hero_shapes/square.svg";
import squiggle from "/assets/hero_shapes/squiggle.svg";
import star from "/assets/hero_shapes/star.svg";
import triangle from "/assets/hero_shapes/triangle.svg";
import triangle2 from "/assets/hero_shapes/triangle2.svg";
import glaggle from "/assets/hero_shapes/glaggle.svg";

import dev_icon from "/assets/home_icons/dev_icon.svg";
import tech_icon from "/assets/home_icons/technologies_icon.svg";
import pen_icon from "/assets/home_icons/pen_icon.svg";
import gd_card from "/assets/home_icons/gd_card.webp";
import ui_card from "/assets/home_icons/ui_card.webp";
import pencil from "/assets/pencil.svg";
import paintbrush from "/assets/paintbrush.svg";

interface windowSize {
	screenWidth: number;
	screenHeight: number;
}

export async function loader() {
	const repoNames: string[] = ["mirrormult-figma-plugin", "keep-it-real", "paper-strings"]; // repositories to load
	let makeRequest: boolean = true; // boolean to hold whether or not a request needs to be made

	const repoDetails = await localforage.keys().then(async (keys) => {
		let details: (void | cardProps)[]; // cardProps comes from ProjectCard.tsx
		details = []; // details will be the value returned from this operation to either a) make a request || b) use cached repo data to avoid unnecessary APi calls

		if (keys.length >= 1 && !makeRequest) {
			// if localforage is not empty and request doesn't need to be made
			const result: cardProps[] | null = await localforage.getItem("key", (err) => {
				if (err) {
					console.error(err);
				}
			});
			if (result) {
				details = result;
			}

			if (details.length === repoNames.length) {
				// run code below if the number of repos match
				for (let i = 0; i < repoNames.length; i++) {
					// iterate through each list to see if the repo names match
					if (details[i]!.name != repoNames[i]) {
						makeRequest = true; // if the repo names don't match, a new request must be made
						break;
					}
				}
			} else {
				// if the number of repos don't match, a new request must be made
				makeRequest = true;
			}
		}

		if (makeRequest) {
			// code to make the request
			const repoDetailsPromises = repoNames.map((repoName: string) =>
				getRepoDetails(repoName).catch((err) => console.error(err)),
			);
			details = await Promise.all(repoDetailsPromises);
			await localforage.setItem("key", details, (err) => {
				if (err) {
					console.error(err);
				}
			});
		}

		return details; // return the repo details
	});

	return repoDetails;
}

export default function Home() {
	const { screenWidth }: windowSize = useWindowSize();
	const loaderData: any = useLoaderData();
	const cardData = loaderData;

	const languages = ["python", "c++", "html", "css", "typescript"];
	const tools = ["git", "vite", "node", "pip", "figma"];
	const frameworks = ["react", "vue", "tailwind", "bootstrap", "flask", "numpy", "matplotlib"];

	const nameStyles = clsx(
		"relative font-page-heading leading-none",
		screenWidth >= 768 ? "text-[33vh] -my-[10vh] -mb-[8vh]" : "text-[33vw] -my-[5vh] -mb-[3vh]",
	);

	const lastNameStyles = clsx([
		"font-page-heading leading-none -my-[2vh]",
		screenWidth >= 768 ? "text-[22vh]" : "text-[22vw]",
	]);

	const projectSectionStyles = clsx({
		"flex w-full": true,
		"flex-col gap-6": screenWidth < 960,
		"flex-row gap-4": screenWidth >= 960,
	});

	// const cardBoxStyles = clsx({
	// 	"flex-wrap gap-4 min-h-60 w-full justify-center p-4": true,
	// 	"flex flex-col": screenWidth < 960,
	// 	"grid grid-cols-3": screenWidth >= 960,
	// });

	return (
		<>
			<section id="banner" role="banner" className="relative h-screen w-full overflow-hidden">
				{screenWidth >= 1200 && (
					<div
						role="presentation"
						id="shapes"
						className="mt-4 h-screen w-screen overflow-hidden [perspective:12px]"
					>
						<Shape src={circle} top="10vh" right="0px" z={3} width="24vw" delay={9} />
						<Shape src={circle2} top="8vh" right="0px" width="5vw" delay={4} />
						<Shape src={curve} top="53vh" right="0.5vw" z={2} width="18vw" delay={3} />
						<Shape src={curve2} top="20vh" right="16vw" width="24vw" delay={6} />
						<Shape src={curve3} top="70vh" right="72vw" z={4} width="25vw" delay={2} />
						<Shape src={hex} top="70vh" right="56vw" z={3} width="10vw" delay={7} />
						<Shape src={nanner} top="53vh" right="22vw" z={4} width="7.5vw" delay={1} />
						<Shape src={square} top="9vh" right="25vw" width="10vw" delay={4} />
						<Shape src={squiggle} top="67vh" right="36vw" z={2} width="15vw" />
						<Shape src={star} top="6vh" right="10vw" z={5} width="8vw" delay={7} />
						<Shape
							src={triangle}
							top="42vh"
							right="30vw"
							z={3}
							width="10vw"
							delay={2}
						/>
						<Shape
							src={triangle2}
							top="45vh"
							right="45vw"
							z={5}
							width="5vw"
							delay={3}
						/>
						<Shape src={glaggle} top="68vh" right="18vw" z={2} width="18vw" delay={6} />
					</div>
				)}
				<div
					role="presentation"
					className="py-18 absolute top-1/2 box-border -translate-y-1/2 px-8 text-black md:px-20 md:py-48 md:pt-8"
				>
					<div className="mt-4 inline-flex items-center gap-1">
						<Player
							src="https://lottie.host/1dd41cb5-2633-4dc5-99ba-03b545ea86ce/5x9D1FO1SB.json"
							loop
							autoplay
							className="h-8 w-16 md:h-16"
						/>
						<h2 className="text-xl md:text-4xl">hi! i'm</h2>
					</div>
					<div>
						{screenWidth > 768 && (
							<img
								role="presentation"
								src={starCurve}
								alt=""
								className="absolute -ml-[1vw] -mt-[7vh] max-h-[32vh]"
							/>
						)}
						<div className="flex h-full flex-row items-baseline">
							<h1 className={nameStyles}>ameya</h1>
							<p className="text-sm">:3</p>
						</div>
						<div className="inline-flex items-end gap-2">
							<h1 className={lastNameStyles}>gupta</h1>
							<h2 className="text-sm md:mb-[2vh] md:text-lg">(he/him)</h2>
						</div>
					</div>
					<div className="my-[4vh] md:my-[6vh] [&>*]:my-1 [&>h3]:text-[2vh] [&>h3]:md:text-xl">
						<h3>
							aspiring software developer | multidisciplinary creative | graphic
							designer | 3d artist | ui designer
						</h3>
						<hr className="w-full border-black md:w-11/12" />
						<h3 className="">
							passionate about bringing bold, unique design to software solutions
						</h3>
					</div>
				</div>
				<div className="absolute bottom-0 w-full scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} className="w-screen" alt="" />
					</ScrollingImage>
				</div>
			</section>
			<main className="flex h-fit w-full flex-col gap-16 bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] p-6 [&_h2]:h-full [&_h2]:text-3xl">
				<section id="projects" className="flex flex-col items-end gap-4">
					<span className="mb-12 flex h-8 w-full flex-col items-start gap-2 md:m-0 md:flex-row md:items-end">
						<h2>here's what i've been</h2>
						<div className="flex h-full flex-row gap-2">
							<img
								className="h-full"
								src={dev_icon}
								alt="React fragment element icon"
							/>
							<h2>working on!</h2>
						</div>
					</span>
					<div className={projectSectionStyles}>
						<ProjectCard {...cardData[0]} top={50} />
						<ProjectCard
							{...cardData[1]}
							top={50}
							newLanguages={["matplotlib", "numpy"]}
						/>
						<ProjectCard
							{...cardData[2]}
							top={50}
							newLanguages={["react", "tailwind", "numpy"]}
						/>
					</div>
					<Link
						className="mt-4 w-full text-lg md:w-[32.5%]"
						to="projects"
						onClick={(_e) => document.getElementById("banner")!.scrollIntoView()}
					>
						<button className="w-full">check out more of what i’ve done! →</button>
					</Link>
				</section>

				<section id="technologies" className="flex flex-col items-baseline gap-4">
					<span className="mb-8 flex h-8 w-full flex-col items-start gap-2 md:m-0 md:flex-row md:items-end">
						<h2>here are the</h2>
						<div className="flex h-full flex-row gap-2">
							<img className="h-full" src={tech_icon} alt="Hammer icon" />
							<h2>skills i've gained!</h2>
						</div>
					</span>
					<div className="box-border flex w-full flex-col items-stretch gap-3 md:flex-row">
						<div id="languages" className="flex flex-grow flex-col gap-2">
							<h2 className="my-2 text-2xl text-white/50">languages</h2>
							<div className="grid grid-flow-col grid-rows-5 gap-2">
								{languages.map((lang, i) => (
									<ToolCard key={i} name={lang} />
								))}
							</div>
						</div>

						<div id="tools" className="flex flex-grow flex-col gap-2">
							<h2 className="my-2 text-2xl text-white/50">tools</h2>
							<div className="grid grid-flow-col grid-rows-5 gap-2">
								{tools.map((tool, i) => (
									<ToolCard
										key={i}
										name={tool}
										icon={tool == "pip" ? "python" : undefined}
									/>
								))}
							</div>
						</div>

						<div id="frameworks" className="flex flex-grow-[2] flex-col gap-2">
							<h2 className="my-2 text-2xl text-white/50">frameworks</h2>
							<div className="grid grid-flow-col grid-rows-5 gap-2">
								{frameworks.map((framework, i) => (
									<ToolCard key={i} name={framework} />
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="design" className="flex flex-col items-baseline gap-4">
					<span className="mb-12 flex h-8 w-full flex-col items-start gap-2 md:m-0 md:flex-row md:items-end">
						<h2>check out some of my</h2>
						<div className="flex h-full flex-row gap-2">
							<img className="h-full" src={pen_icon} alt="Pen icon" />
							<h2>design work too!</h2>
						</div>
					</span>
					<div className="flex w-full flex-col justify-stretch gap-4 md:flex-row">
						<DesignCard
							path="/portfolio/gfx"
							img={gd_card}
							title="graphic design"
							icon={pencil}
						/>
						<DesignCard
							path="/portfolio/ui"
							img={ui_card}
							title="ui design"
							icon={paintbrush}
						/>
					</div>

					<Link
						to="portfolio/gfx"
						className="mt-4 w-full text-lg md:w-[32.5%]"
						onClick={(_e) => document.getElementById("banner")!.scrollIntoView()}
					>
						<button className="w-full">take a look at the whole gallery! →</button>
					</Link>
				</section>
			</main>
		</>
	);
}
