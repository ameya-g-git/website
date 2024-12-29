import ProjectCard from "../components/ProjectCard";
import websiteBanner from "/embedbanner.webp";
import slayschoolsBanner from "/assets/ui/slayschools.webp";
import mirrormultBanner from "/assets/ui/mirrormult.webp";
import rTistBanner from "/assets/ui/rtist.webp";
import hitherAndDitherBanner from "/assets/ui/hitheranddither.webp";
import useWindowSize from "../hooks/useWindowSize";
import clsx from "clsx";

export default function PortfolioUI() {
	const { screenWidth } = useWindowSize();

	const cardBoxStyles = clsx({
		"flex-wrap gap-4 min-h-60 w-full justify-center p-4": true,
		"flex flex-col": screenWidth < 960,
		"grid grid-cols-3": screenWidth >= 960,
	});

	return (
		<div id="images" className={cardBoxStyles}>
			<ProjectCard
				img={websiteBanner}
				top={30}
				name="website"
				description="the ui design i made for my website! fairly barebones when it comes to animation, and definitely a bit ambitious in certain parts, but served as a great structure to help me structure the site and think about my design choices!"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
			<ProjectCard
				img={hitherAndDitherBanner}
				top={50}
				name="hither-&-dither"
				description="a ui design for a web app im working on right now that applies various dithering algorithms to an uploaded image"
				url="https://www.figma.com/proto/hvaz50fpTFcnehIZshFGca/hither-%26-dither?page-id=0%3A1&node-id=1-3&viewport=792%2C184%2C0.63&t=vVSiqH544Vlzxk3C-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3"
			/>
			<ProjectCard
				img={rTistBanner}
				top={50}
				name="rTist"
				description="a design for a beginner-friendly image editing application. my first experimentation with apple's ui assets!"
				url="https://www.figma.com/proto/QpXXcmvJCtq8pc86cDgRTJ/rTist-ui?page-id=0%3A1&node-id=10-1111&viewport=354%2C664%2C0.23&t=jFdxhnGf9s6ZRkrP-1&scaling=scale-down&content-scaling=fixed"
			/>
			<ProjectCard
				img={slayschoolsBanner}
				top={100}
				name="slayschool-redesign"
				description="a redesign for the website of slayschool, a generative ai flashcard service. one of my first complete ui designs. received praise from the founder, ali jiwani!"
				url="https://www.figma.com/proto/EnknM3UtRZ62LCNF09yrbG/slayschools-ui-redesign?page-id=0%3A1&node-id=0-6&viewport=1675%2C17%2C0.17&t=njV61w3L9ZI54sGD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A6"
			/>
			<ProjectCard
				img={mirrormultBanner}
				name="mirrormult-plugin"
				top={0}
				description="the ui design for the mirrormult plugin for figma!"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=419-103&viewport=-1448%2C-82%2C0.25&t=cWECrpYznZEuqzPf-1&scaling=min-zoom&starting-point-node-id=419%3A103&content-scaling=fixed"
			/>
		</div>
	);
}
