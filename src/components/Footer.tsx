import { Link } from "react-router-dom";

import arrowSmiley from "/assets/arrow_smiley.png";
import nameFill from "/assets/ameyaGupta_fill.png";
import nameOutline from "/assets/ameyaGupta_outline.png";
import downarrow from "/assets/downarrow.svg";
import email from "/assets/icons/email.png";
import github from "/assets/icons/github.png";
import linkedin from "/assets/icons/linkedin.png";
import resume from "/assets/icons/resume.png";
import { Fragment } from "react/jsx-runtime";
import useWindowSize from "../hooks/useWindowSize";

interface footerButtonProps {
	icon: string;
	link: string;
	alt: string;
}

function FooterButton({ icon, link, alt }: footerButtonProps) {
	return (
		<Link
			to={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center justify-center w-12 h-12 p-2 transition-all border-2 rounded-lg border-white/20 bg-card-black/50 hover:bg-card-hover"
		>
			<img src={icon} alt={alt} className="h-full" />
		</Link>
	);
}

export default function Footer() {
	const { screenWidth } = useWindowSize();

	const firstLayer = (
		<div className="flex flex-row items-center gap-1 ml-12 md:-ml-12">
			{Array(10)
				.fill("ameyaGupta")
				.map((_name, id) => {
					return id === 1 ? (
						<p
							key={`${id}p`}
							className="text-xl text-nowrap font-footer text-yellow md:text-2xl"
						>
							© Ameya Gupta
						</p>
					) : (
						<img
							key={`${id}img`}
							src={id % 2 === 0 ? nameFill : nameOutline}
							className="h-12 opacity-20"
							alt=""
						/>
					);
				})}
		</div>
	);

	const secondLayer = (
		<div className="flex flex-row items-center gap-2 md:-ml-80">
			{Array(10)
				.fill("ameyaGupta")
				.map((_name, id) => {
					return id === 1 ? (
						<p
							key={id}
							className="text-2xl text-nowrap font-footer text-yellow md:text-5xl"
						>
							let's work together!
						</p>
					) : (
						<img
							key={id}
							src={id % 2 === 0 ? nameFill : nameOutline}
							className="h-14 opacity-20 md:h-24"
							alt=""
						/>
					);
				})}
		</div>
	);

	const thirdLayer = (
		<div className="-ml-60 flex flex-row items-center gap-4 md:-ml-[31.5rem]">
			{Array(10)
				.fill("ameyaGupta")
				.map((_name, id) => {
					return id === 1 ? (
						<Fragment key={id}>
							<p className="text-5xl text-nowrap font-footer text-yellow md:text-8xl">
								contact me
							</p>
							<img src={downarrow} className="flex w-16 md:w-30" />
						</Fragment>
					) : (
						<img
							key={id}
							src={id % 2 === 0 ? nameFill : nameOutline}
							className="h-24 opacity-20 md:h-32"
							alt=""
						/>
					);
				})}
		</div>
	);

	return (
		<footer id="footer" className="h-fit overflow-x-hidden bg-[#0A0A00]">
			<div className="-ml-[9%] flex w-[120%] flex-col items-center gap-4 shadow-footer">
				<img src={arrowSmiley} className="my-2 mt-8 w-28" alt="" />
				<div className="-ml-48 flex flex-col md:ml-0 [&>*]:-my-1 md:[&>*]:-my-0.5">
					{screenWidth > 480 && (
						<>
							{firstLayer}
							{secondLayer}
							{thirdLayer}
						</>
					)}
				</div>
				<div className="flex flex-col items-center justify-between w-full px-16 mb-8 h-fit md:flex-row md:px-56">
					<div className="my-2 flex flex-col items-center gap-4 text-center md:flex-row md:gap-[16.5rem] md:text-left">
						<p className="text-nowrap">
							looking for entry-level positions to expand my skillset and make
							valuable connections!
						</p>
						<div className="flex flex-row items-center justify-center gap-1 shadow-yellow before:bg-yellow">
							<FooterButton
								icon={email}
								link="mailto:ameya.guptag@gmail.com?subject=hi%20from%20your%20website!"
								alt="email"
							/>
							<FooterButton
								icon={github}
								link="https://github.com/ameya-g-git"
								alt="github"
							/>
							<FooterButton
								icon={linkedin}
								link="https://linkedin.com/in/ameya-g"
								alt="linkedin"
							/>
							<FooterButton icon={resume} link="/assets/AG_resume.pdf" alt="resume" />
						</div>
						<div />
					</div>
					<p className="mt-4 text-nowrap md:-mr-4 md:w-64">
						created with ❤︎/✒︎ on{" "}
						<a
							className="underline"
							target="_blank"
							href="https://github.com/ameya-g-git/website"
						>
							github
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
