import { useState } from "react";
import Image from "../components/Image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function PortfolioGFX() {
	const images = Object.keys(import.meta.glob("/src/assets/img/gfx/*.webp"));
	const [imagePortal, setImagePortal] = useState({ show: false, img: "" });

	function pathToImgName(path: string) {
		const pathSplit = path.split("/");
		const lastItem = pathSplit[pathSplit.length - 1];

		return lastItem;
	}

	const portalBg: Variants = {
		start: { opacity: 0, backdropFilter: "blur(0px)" },
		end: { opacity: 1, backdropFilter: "blur(12px)" },
	};

	const portalImg: Variants = {
		start: { opacity: 0, scale: 0.75 },
		end: { opacity: 1, scale: 1 },
	};

	function toggle(src: string) {
		if (imagePortal.show) {
			setImagePortal({ show: false, img: "" });
		} else {
			setImagePortal({ show: true, img: src });
		}
	}

	return (
		<>
			{images.map((src, i) => {
				return <Image src={src} key={i} toggle={toggle} />;
			})}
			{createPortal(
				<AnimatePresence>
					{imagePortal.show && (
						<motion.div
							variants={portalBg}
							initial="start"
							animate="end"
							exit="start"
							onClick={(_e) => toggle("")}
							className="fixed left-0 top-0 z-[9999] flex h-screen w-screen flex-col bg-black/50 backdrop-blur-md "
						>
							<div className="inline-flex h-16 w-full flex-row items-center gap-8 bg-gradient-to-b from-black/50 to-transparent p-2">
								<button
									onClick={(_e) => toggle("")}
									className="inline-flex h-12 w-12 items-center justify-center bg-transparent text-3xl text-white hover:bg-white/20"
								>
									←
								</button>
								<h2 className="select-none pt-1">
									{pathToImgName(imagePortal.img)}
								</h2>
							</div>

							<div className="flex grow items-center justify-center overflow-hidden p-6 pt-0">
								<motion.img
									variants={portalImg}
									className="shadow-3xl max-h-full max-w-full rounded-xl shadow-black/25"
									src={imagePortal.img}
									alt=""
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body,
			)}
		</>
	);
}
