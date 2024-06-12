import ProjectCard from "../components/ProjectCard";
import websiteBanner from "/embedbanner.webp";

export default function PortfolioUI() {
	return (
		<div
			id="images"
			className="my-8 box-border grid min-h-60 w-full grid-cols-3 flex-row items-stretch gap-4 px-12"
		>
			<ProjectCard
				img={websiteBanner}
				top={30}
				name="website"
				description="the ui design i made for my website! fairly barebones when it comes to animation, and definitely a bit ambitious in certain parts, but served as a great structure to help me structure the site and think about my design choices!"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
			<ProjectCard
				img={websiteBanner}
				name="weiner"
				description="hello vro"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
			<ProjectCard
				img={websiteBanner}
				name="weiner"
				description="hello vro"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
			<ProjectCard
				img={websiteBanner}
				name="weiner"
				description="hello vro"
				url="https://www.figma.com/proto/PKkzjM6iSFsMLxpU82TsEE/professional-profile?page-id=0%3A1&type=design&node-id=770-1008&viewport=-1448%2C-82%2C0.25&t=wGEKE7FuYElvFYh8-1&scaling=min-zoom&starting-point-node-id=973%3A938&content-scaling=fixed"
			/>
		</div>
	);
}
