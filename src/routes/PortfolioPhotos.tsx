import { useState } from "react";
import PortfolioImage from "../components/PortfolioImage";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useKeyPress } from "../hooks/useKeyPress";

export default function PortfolioPhotos() {
	const imagePaths = Object.keys(import.meta.glob("/public/assets/photos/*.webp")).sort(
		(a, b) => {
			const aNum = parseInt(pathToImgName(a).split(" ")[0]);
			const bNum = parseInt(pathToImgName(b).split(" ")[0]);

			return bNum - aNum;
		},
	); // sorted based on the first number

	useKeyPress("Escape", (_) => setImagePortal({ show: false, src: "", width: 0, height: 0 }));
	useKeyPress("ArrowLeft", (_) => {
		if (imagePortal.show) {
			const img = new Image();
			const prevSrc = prevImg(imagePortal.src);
			img.src = prevSrc;
			img.onload = () => {
				setImagePortal((prev) => {
					return {
						...prev,
						src: prevSrc,
						width: img.width,
						height: img.height,
					};
				});
			};
		}
	});
	useKeyPress("ArrowRight", (_) => {
		if (imagePortal.show) {
			const img = new Image();
			const nextSrc = nextImg(imagePortal.src);
			img.src = nextSrc;
			img.onload = () => {
				setImagePortal((prev) => {
					return {
						...prev,
						src: nextSrc,
						width: img.width,
						height: img.height,
					};
				});
			};
		}
	});

	function pathToImgName(path: string) {
		const pathSplit = path.split("/");
		const lastItem = pathSplit[pathSplit.length - 1];

		return lastItem;
	}

	const imageNames = imagePaths.map((path) => {
		const imageFullName = pathToImgName(path);
		const imageName = imageFullName.split(" ")[1];

		return imageName;
	});

	console.log(imageNames);

	const imageNum = imageNames.length;

	const images = Array(imageNum)
		.fill(" ")
		.map((_item, i) => `/assets/photos/${imageNames.length - i} ${imageNames[i]}`);

	const [imagePortal, setImagePortal] = useState({ show: false, src: "", width: 0, height: 0 });

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
		start: { opacity: 0, scale: 0.75, filter: "brightness(500)" },
		end: { opacity: 1, scale: 1, filter: "", transition: { type: "spring" } },
		exit: { opacity: 0, scale: 0.75 },
	};

	function toggle(src: string) {
		if (!src) {
			setImagePortal({ show: false, src: "", width: 0, height: 0 });
		}
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImagePortal({
				show: true,
				src,
				width: img.width,
				height: img.height,
			});
		};
	}

	return (
		<>
			<div
				id="images"
				className="flex w-full flex-row flex-wrap justify-center gap-4 px-4 py-4 md:px-12"
			>
				{images.map((src, i) => {
					return <PortfolioImage src={src} key={i} toggle={toggle} />;
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
									{imageNames[images.indexOf(imagePortal.src)]}
								</h2>
							</div>

							<div className="relative flex h-full w-full items-center justify-between gap-2 overflow-hidden p-4 pr-8 pt-2">
								<button
									onClick={(e) => {
										e.stopPropagation();
										setImagePortal((prev) => {
											return {
												...prev,
												img: prevImg(prev.src),
											};
										});
									}}
									className="z-[999] flex h-12 w-12 items-center justify-center bg-transparent text-3xl text-white hover:bg-white/20 active:bg-white/50"
								>
									←
								</button>
								<div className="relative flex h-[90%] w-[75%] items-center justify-center">
									{/* 
                  // TODO: figure out how to use image width to get the corner guys to show up BEEP BOOP ily :3 - cc p.s. ur really cool did u know that p.p.s. iiiiiiiiiiiii looooooooooooove u
                  */}

									<div
										className="absolute flex h-auto max-w-full items-center justify-center lg:max-h-full lg:w-auto"
										style={{
											aspectRatio: `${imagePortal.width} / ${imagePortal.height}`,
										}}
									>
										<motion.div
											key={imagePortal.src + "_border"}
											initial={{ scale: 1.3, opacity: 0 }}
											animate={{
												scale: 1,
												opacity: 1,
												transition: { type: "spring" },
											}}
											className="absolute h-full w-full *:aspect-square *:w-24 *:border-white/40"
										>
											<div className="absolute left-0 top-0 rounded-tl-[2.5rem] border-l-8 border-t-8 "></div>
											<div className="absolute bottom-0 left-0 rounded-bl-[2.5rem] border-b-8 border-l-8 "></div>
											<div className="absolute right-0 top-0 rounded-tr-[2.5rem] border-r-8 border-t-8 "></div>
											<div className="absolute bottom-0 right-0 rounded-br-[2.5rem] border-b-8 border-r-8 "></div>
										</motion.div>
										<motion.img
											key={imagePortal.src}
											variants={portalImg}
											className="shadow-3xl animate-flash z-10 h-[calc(100%-4rem)] w-[calc(100%-4rem)] rounded-3xl"
											src={imagePortal.src}
											alt={pathToImgName(imagePortal.src)}
										/>
									</div>
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										setImagePortal((prev) => {
											return {
												...prev,
												img: nextImg(prev.src),
											};
										});
									}}
									className="z-[999] flex h-12 w-12 items-center justify-center bg-transparent text-3xl text-white hover:bg-white/20 active:bg-white/35"
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
