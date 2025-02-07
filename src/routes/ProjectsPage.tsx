import planet_curve from "/assets/planet_curve.svg";
import wave from "/assets/wave.svg";
import ScrollingImage from "../components/ScrollingImage";
import useWindowSize from "../hooks/useWindowSize";

import create from "/assets/projects_icons/create_icon.svg";
import explore from "/assets/projects_icons/explore_icon.svg";
import discover from "/assets/projects_icons/discover_icon.svg";

import websiteBanner from "/embedbanner.webp";

import localforage from "localforage";
import ProjectCard, { props as cardProps } from "../components/ProjectCard";
import { getRepoDetails } from "../hooks/getRepoDetails";
import { useLoaderData } from "react-router-dom";
import clsx from "clsx";

export async function loader() {
	const repoNames: string[] = [
		"hither-and-dither",
		"paper-strings",
		"app-alert",
		"keep-it-real",
		"basic-dithering-app",
		"website",
		"mirrormult-figma-plugin",
	]; // repositories to load
	let makeRequest: boolean = true; // boolean to hold whether or not a request needs to be made

	const repoDetails = await localforage.keys().then(async (keys) => {
		let details: (cardProps | null | void)[]; // cardProps comes from ProjectCard.tsx
		details = []; // details will be the value returned from this operation to either a) make a request || b) use cached repo data to avoid unnecessary API calls

		if (keys.length >= 1) {
			// if localforage is not empty
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

export default function Projects() {
	const { screenWidth } = useWindowSize();
	const loaderData: any = useLoaderData();

	const languages = Array(2)
		.fill(["javascript", "python", "c++", "html", "css", "typescript"])
		.flat();
	const tools = Array(2).fill(["git", "vite", "npm", "python", "figma"]).flat();
	const frameworks = Array(2)
		.fill(["react", "vue", "tailwind", "bootstrap", "flask", "numpy", "matplotlib"])
		.flat();

	const widths = [screenWidth * 0.75, screenWidth * 0.85, screenWidth * 0.95];
	const strokeWidth = 5;

	const cardBoxStyles = clsx({
		"flex-wrap gap-x-4 gap-y-6 min-h-60 w-full justify-center p-4": true,
		"grid grid-cols-2": 960 >= screenWidth && screenWidth >= 720,
		"grid grid-cols-3": screenWidth >= 960,
		"flex flex-col": screenWidth < 720,
	});

	const languageIcons = languages.map((lang, i) => {
		return (
			<object
				key={`${lang}-${i}`}
				width={50}
				height={50}
				className="absolute -ml-6 -mt-6 animate-orbit-rev stroke-yellow brightness-0"
				data={`/assets/icons/${lang}.svg`}
				style={
					{
						"--radius": `${widths[0] / 2}px`,
						"--delay": `${Math.round((30000 / languages.length) * i)}ms`,
					} as React.CSSProperties
				}
			/>
		);
	});

	const toolIcons = tools.map((tool, i) => {
		return (
			<object
				key={`${tool}-${i}`}
				width={50}
				height={50}
				className="absolute -ml-6 -mt-6 animate-orbit brightness-0"
				data={`/assets/icons/${tool}.svg`}
				style={
					{
						"--radius": `${widths[1] / 2}px`,
						"--delay": `${Math.round((30000 / tools.length) * i)}ms`,
					} as React.CSSProperties
				}
			/>
		);
	});

	const frameworkIcons = frameworks.map((framework, i) => {
		return (
			<object
				key={`${framework}-${i}`}
				width={50}
				height={50}
				className="absolute -ml-6 -mt-6 animate-orbit-rev brightness-0"
				data={`/assets/icons/${framework}.svg`}
				style={
					{
						"--radius": `${widths[2] / 2}px`,
						"--delay": `${Math.round((30000 / frameworks.length) * i)}ms`,
					} as React.CSSProperties
				}
			/>
		);
	});

	const circleElements = widths.map((width) => {
		return (
			<svg
				key={width}
				className="absolute select-none"
				width={width + strokeWidth * 2}
				height={width + strokeWidth * 2}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="black"
				strokeWidth={strokeWidth}
			>
				<circle r={width / 2} cx={width / 2 + strokeWidth} cy={width / 2 + strokeWidth} />
			</svg>
		);
	});

	return (
		<>
			<section
				id="banner"
				role="banner"
				className="relative flex h-screen w-full items-center justify-center overflow-hidden"
			>
				{screenWidth > 768 && (
					<div
						id="orbit"
						className="visible absolute flex h-full w-full select-none items-center justify-center"
					>
						{circleElements}
						<div id="languages">{languageIcons}</div>
						<div id="tools">{toolIcons}</div>
						<div id="frameworks">{frameworkIcons}</div>
					</div>
				)}
				<div className="z-50 flex items-center justify-center bg-yellow font-page-heading text-black">
					<h1 className="text-[25vw] md:text-[18rem]">projects</h1>
					<img
						src={planet_curve}
						className="absolute mr-6 h-[4.25rem] md:mr-[4.5rem] md:h-[12.5rem]"
					/>
				</div>
				<div className="absolute bottom-0 scale-150 md:scale-100">
					<ScrollingImage ltr={true} width="full">
						<img src={wave} className="w-screen" alt="" />
					</ScrollingImage>
				</div>
			</section>
			<section className="flex flex-col items-center gap-2 bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] pt-4">
				<h2 className="text-2xl">i like to make projects that help people</h2>
				<div className="flex flex-row gap-8 rounded-full">
					<div className="flex items-center gap-4 border-r-4 pr-8">
						{screenWidth > 768 && <img src={explore} alt="explore icon" />}
						<h1 className="text-4xl">explore</h1>
					</div>
					<div className="flex flex-row items-center gap-4 border-r-4 pr-8">
						{screenWidth > 768 && <img src={create} alt="create icon" />}
						<h1 className="text-4xl">create</h1>
					</div>
					<div className="flex flex-row items-center gap-4">
						{screenWidth > 768 && <img src={discover} alt="discover icon" />}
						<h1 className="text-4xl">discover</h1>
					</div>
				</div>
				{screenWidth < 768 && (
					<div className="mt-2 flex h-8 flex-row gap-4">
						<img src={explore} alt="explore icon" />
						<img src={create} alt="create icon" />
						<img src={discover} alt="discover icon" />
					</div>
				)}
				<div className={cardBoxStyles}>
					<ProjectCard
						top={50}
						{...loaderData[0]}
						newLanguages={["flask", "numpy", "tailwind"]}
					/>
					<ProjectCard
						{...loaderData[1]}
						newLanguages={["vite", "react", "numpy"]}
						top={50}
					/>
					<ProjectCard top={50} newLanguages={["flask"]} {...loaderData[2]} />
					<ProjectCard
						img={websiteBanner}
						newLanguages={["flask", "numpy"]}
						top={50}
						{...loaderData[3]}
					/>
					<ProjectCard
						{...loaderData[4]}
						top={50}
						newLanguages={["vite", "react", "tailwind"]}
					/>
					<ProjectCard {...loaderData[5]} top={25} />
					<ProjectCard {...loaderData[6]} top={50} />
				</div>
			</section>
		</>
	);
}
