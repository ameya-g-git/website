import { useState } from "react";
import Image from "../components/Image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function PortfolioGFX() {
	const imagePaths = Object.keys(import.meta.glob("/public/assets/gfx/*.webp")).sort((a, b) => {
		const aNum = parseInt(pathToImgName(a).split(" ")[0]);
		const bNum = parseInt(pathToImgName(b).split(" ")[0]);

		return bNum - aNum;
	}); // sorted based on the first number

	const imageNames = imagePaths.map((path) => {
		const imageFullName = pathToImgName(path);
		const imageName = imageFullName.split(" ")[1];

		return imageName;
	});

	const imageNum = imageNames.length;

	const images = Array(imageNum)
		.fill(" ")
		.map((_item, i) => `/assets/gfx/${imageNum - i} ${imageNames[i]}`);

	const [imagePortal, setImagePortal] = useState({ show: false, img: "" });

	function pathToImgName(path: string) {
		const pathSplit = path.split("/");
		const lastItem = pathSplit[pathSplit.length - 1];

		return lastItem;
	}

	function prevImg(path: string) {
		const idx = images.indexOf(path);
		if (idx - 1 === -1) {
			return images[images.length - 1];
		} else {
			return images[idx - 1];
		}
	}

	function nextImg(path: string) {
		const idx = images.indexOf(path);
		if (idx + 1 === images.length) {
			return images[0];
		} else {
			return images[idx + 1];
		}
	}

	const portalBg: Variants = {
		start: { opacity: 0, backdropFilter: "blur(0px)" },
		end: { opacity: 1, backdropFilter: "blur(12px)" },
		exit: { opacity: 0, backdropFilter: "blur(0px)" },
	};

	const portalImg: Variants = {
		start: { opacity: 0, scale: 0.75, translateY: "12rem" },
		end: { opacity: 1, scale: 1, translateY: "0rem" },
		exit: { opacity: 0, scale: 0.75, translateY: "-12rem" },
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
			<div id="images" className="flex w-full flex-row flex-wrap gap-4 px-12 py-4">
				{images.map((src, i) => {
					return <Image src={src} key={i} toggle={toggle} />;
				})}
			</div>
			{createPortal(
				<AnimatePresence>
					{imagePortal.show && (
						<motion.div
							variants={portalBg}
							initial="start"
							animate="end"
							exit="exit"
							onClick={(_e) => toggle("")}
							className="fixed left-0 top-0 z-[9999] flex h-screen w-screen flex-col bg-black/50 backdrop-blur-md "
						>
							<div className="inline-flex h-16 w-full flex-row items-center gap-8 bg-gradient-to-b from-black/50 to-transparent p-2">
								<button
									onClick={(e) => {
										e.stopPropagation();
										toggle("");
									}}
									className="inline-flex h-12 w-12 items-center justify-center bg-transparent text-xl text-white hover:bg-white/20 active:bg-white/50"
								>
									◀︎
								</button>
								<h2 className="select-none pt-1">
									{imageNames[images.indexOf(imagePortal.img)]}
								</h2>
							</div>

							<div className="flex grow items-center justify-between overflow-hidden p-6 pt-2">
								<button
									onClick={(e) => {
										e.stopPropagation();
										setImagePortal((prev) => {
											return {
												...prev,
												img: prevImg(prev.img),
											};
										});
									}}
									className="z-[999] flex h-12 w-12 items-center justify-center bg-transparent text-3xl text-white hover:bg-white/20 active:bg-white/50"
								>
									←
								</button>
								<motion.img
									key={imagePortal.img}
									variants={portalImg}
									className="shadow-3xl max-h-full max-w-full rounded-xl shadow-black/25"
									src={imagePortal.img}
									alt={pathToImgName(imagePortal.img)}
								/>
								<button
									onClick={(e) => {
										e.stopPropagation();
										setImagePortal((prev) => {
											return {
												...prev,
												img: nextImg(prev.img),
											};
										});
									}}
									className="z-[9999] flex h-12 w-12 items-center justify-center bg-transparent text-3xl text-white hover:bg-white/20 active:bg-white/35"
								>
									→
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body,
			)}
		</>
	);
}
