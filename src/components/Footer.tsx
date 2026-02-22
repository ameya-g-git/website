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
			className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-white/20 bg-card-black/50 p-2 text-2xl font-bold text-white/70 transition-all hover:bg-card-hover"
		>
			{icon.includes("/") ? <img src={icon} alt={alt} className="h-full" /> : icon}
		</Link>
	);
}

export default function Footer() {
	const { screenWidth } = useWindowSize();

	const firstLayer = (
		<div className="ml-12 flex flex-row items-center gap-1 md:-ml-12">
			{Array(10)
				.fill("ameyaGupta")
				.map((_name, id) => {
					return id === 1 ? (
						<p
							key={`${id}p`}
							className="text-nowrap font-footer text-xl text-yellow md:text-2xl"
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
							className="text-nowrap font-footer text-2xl text-yellow md:text-5xl"
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
							<p className="text-nowrap font-footer text-5xl text-yellow md:text-8xl">
								contact me
							</p>
							<img src={downarrow} className="md:w-30 flex w-16" />
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

	/* WEBRING WIDGET */

	const WEBRING_URL = "https://mac-csse-webring.vercel.app/";
	const MY_SITE = "ameyagupta.netlify.app";

	const webringWidget = (
		<p
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "0.5rem",
				fontSize: "1rem",
			}}
		>
			<FooterButton
				icon="←"
				link={`${WEBRING_URL}#${MY_SITE}?nav=prev`}
				alt="Previous site"
			></FooterButton>
			<FooterButton
				link={WEBRING_URL}
				icon={`${WEBRING_URL}assets/Uni_mcmaster_logo.svg.png`}
				alt="McMaster CS & SE Webring"
			></FooterButton>
			<FooterButton icon="→" link={`${WEBRING_URL}#${MY_SITE}?nav=next`} alt="Next site" />
		</p>
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
				<div className="mb-8 flex h-fit w-full flex-col items-center justify-between px-16 md:flex-row md:px-56">
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
					<div className="flex flex-row gap-4">
						{webringWidget}
						<p className="mt-4 text-nowrap md:-mr-4 md:w-64">
							<span className="pl-8">created with ❤︎/✒︎ on </span>
							<a
								className="underline "
								target="_blank"
								href="https://github.com/ameya-g-git/website"
							>
								github
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
