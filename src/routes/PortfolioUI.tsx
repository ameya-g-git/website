import ProjectCard from "../components/ProjectCard";
import websiteBanner from "/embedbanner.webp";
import slayschoolsBanner from "/assets/ui/slayschools.webp";
import mirrormultBanner from "/assets/ui/mirrormult.webp";

export default function PortfolioUI() {
	return (
		<div
			id="images"
			className="box-border grid flex-row items-stretch w-full grid-cols-3 gap-4 px-12 my-8 min-h-60"
		>
			<ProjectCard
				img={websiteBanner}
				top={30}
				name="website"
				description="the ui design i made for my website! fairly barebones when it comes to animation, and definitely a bit ambitious in certain parts, but served as a great structure to help me structure the site and think about my design choices!"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
			<ProjectCard
				img={slayschoolsBanner}
				top={60}
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
