import { motion, Variants } from "framer-motion";

interface props {
	img: string;
	title: string;
	icon: string;
}

export default function DesignCard({ img, title, icon }: props) {
	const card: Variants = {
		start: {
			opacity: 0,
			backdropFilter: "",
			backgroundColor: "transparent",
			paddingLeft: "10rem",
		},
		end: {
			opacity: 1,
			backdropFilter: "blur(4px)",
			backgroundColor: "#191919C0",
			paddingLeft: 0,
		},
	};

	const item = {
		start: { opacity: 0 },
		end: { opacity: 1 },
	};

	return (
		<div className="box-border w-full rounded-3xl border-2 border-white border-opacity-25 bg-card-black p-2">
			<img
				src={img}
				alt={`${title} banner`}
				className="h-full w-full rounded-xl object-cover"
			/>
			<motion.div
				initial="start"
				whileHover="end"
				variants={card}
				className="relative -top-full inline-flex h-full w-full items-center justify-center gap-2 rounded-xl transition-all ease-out"
			>
				<motion.img variants={item} src={icon} alt={`${icon} icon`} className="h-8" />
				<motion.h3 variants={item} className="right-full text-2xl">
					{title}
				</motion.h3>
			</motion.div>
		</div>
	);
}
