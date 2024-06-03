import { motion } from "framer-motion";
import noImg from "../assets/no_repo_img.png";

export interface props {
	img: string;
	name: string;
	description: string;
	languages: string[];

	top?: number;
	newLanguages?: string[];
}

export default function ProjectCard({
	img,
	name,
	description,
	languages,
	top = 0,
	newLanguages,
}: props) {
	const card = {
		start: {
			backgroundColor: "#101010",
		},
		end: {
			backgroundColor: "#252525",
		},
	};

	const image = {
		start: {
			opacity: 0,
			backdropFilter: "blur(0px)",
			backgroundColor: "#00000000",
			paddingRight: "10rem",
		},
		end: {
			opacity: 1,
			backdropFilter: "blur(8px)",
			backgroundColor: "#19191940",
			paddingRight: 0,
		},
	};

	// TODO: figure out this circle gradient bullshit lma o     if not then just reconfigure the code to change the colour and delete all mouse-related hooks

	languages = newLanguages ? languages.concat(newLanguages) : languages;

	const languageCards = languages.map((language) => (
		<div className="box-border flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white/30 bg-card-black p-2 backdrop-blur-xl">
			<img
				src={`/src/assets/icons/${language}.svg`}
				alt={language}
				className="m-auto opacity-50"
			/>
		</div>
	));

	return (
		<>
			<a className="relative h-full w-full" href={`https://github.com/ameya-g-git/${name}`}>
				<div id={`${name}-card`}>
					<motion.div
						className="absolute inset-5 left-[1%] top-[1%] flex h-[98%] w-[98%] flex-col gap-2 rounded-3xl bg-opacity-50 p-4 backdrop-blur-md"
						initial="start"
						whileHover="end"
						variants={card}
					>
						<motion.div
							variants={image}
							className="absolute inline-flex h-[46%] w-[95%] items-center justify-center gap-2 rounded-2xl"
						>
							<p className="text-3xl">→</p>
							<p className="text-2xl">go to repository</p>
						</motion.div>
						<img
							className="h-1/2 rounded-2xl object-cover"
							src={img ? img : noImg}
							alt={`Banner image of  ${name}`}
							style={{
								objectPosition: `center ${top}%`,
							}}
						/>
						<div className="flex flex-col gap-1">
							<span>
								<h2 className="inline select-none text-3xl text-white/25">/</h2>
								<h2 className="inline text-3xl text-white ">
									{name ? name : "no-repo-found"}
								</h2>
							</span>
							<p className="text-lg leading-tight text-white">
								{description ? description : "lorem ipsum and such"}
							</p>
						</div>
					</motion.div>
					<div className="absolute -bottom-4 z-20 flex w-full flex-row items-center justify-center gap-2">
						{languageCards ? languageCards : null}
					</div>
					<svg rx={24} className="pointer-events-none absolute h-full w-full select-none">
						<defs>
							<linearGradient id="gradient" y1={0} y2={1}>
								<stop stopColor="#FFFFFF80" offset={0} />
								<stop stopColor="#FFFFFF20" offset={1} />
							</linearGradient>
						</defs>
						<rect
							className="fill-none stroke-2"
							x="1%"
							y="1%"
							width="98%"
							height="98%"
							rx={24}
							stroke="url(#gradient)"
						/>
					</svg>
				</div>
			</a>
		</>
	);
}
