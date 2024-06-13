import { motion } from "framer-motion";
import noImg from "/assets/no_repo_img.png";

export interface props {
	img: string;
	name: string;
	description: string;

	url?: string;
	top?: number;
	languages?: string[];
	newLanguages?: string[];
}

export default function ProjectCard({
	img,
	name,
	description,
	languages,
	top = 0,
	newLanguages,
	url = `https://github.com/ameya-g-git/${name}`,
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

	let languageCards;

	if (languages) {
		languages = newLanguages ? languages.concat(newLanguages) : languages;
		languageCards = languages.map((language, i) => (
			<div
				key={i}
				className="box-border flex items-center justify-center w-10 h-10 p-2 border-2 rounded-lg border-white/30 bg-card-black backdrop-blur-xl"
			>
				<img
					src={`/assets/icons/${language}.svg`}
					alt={language}
					className="m-auto opacity-50"
				/>
			</div>
		));
	}

	return (
		<>
			<a className="relative w-full h-96" target="_blank" href={url}>
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
							<p className="text-2xl">go to link</p>
						</motion.div>
						<img
							className="object-cover h-1/2 rounded-2xl"
							src={img ? img : noImg}
							alt={`Banner image of  ${name}`}
							style={{
								objectPosition: `center ${top}%`,
							}}
						/>
						<div className="flex flex-col gap-1">
							<span>
								<h2 className="inline text-3xl select-none text-white/25">/</h2>
								<h2 className="inline text-3xl text-white ">
									{name ? name : "no-repo-found"}
								</h2>
							</span>
							<p className="text-lg leading-tight text-white">
								{description ? description : "lorem ipsum and such"}
							</p>
						</div>
					</motion.div>
					<div className="absolute z-20 flex flex-row items-center justify-center w-full gap-2 -bottom-4">
						{languageCards ? languageCards : null}
					</div>
					<svg rx={24} className="absolute w-full h-full pointer-events-none select-none">
						<defs>
							<linearGradient id="gradient" y1={0} y2={1}>
								<stop stopColor="#FFFFFF80" offset={0} />
								<stop stopColor="#FFFFFF20" offset={1} />
							</linearGradient>
						</defs>
						<rect
							className="stroke-2 fill-none"
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
