import { useState } from "react";
import Image from "../components/Image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function PortfolioGFX() {
	const images = Object.keys(import.meta.glob("/src/assets/img/gfx/*.webp"));
	const [imagePortal, setImagePortal] = useState({ show: false, img: "" });

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
							className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-black/50 p-16 backdrop-blur-md "
						>
							<motion.img
								variants={portalImg}
								className="shadow-3xl max-h-full rounded-xl shadow-black/25"
								src={imagePortal.img}
								alt=""
							/>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body,
			)}
		</>
	);
}
