import clsx from "clsx";
import useWindowSize from "../hooks/useWindowSize";

interface props {
	src: string;
	link?: string;
	toggle: (src: string) => void;
}

export default function Image({ src, toggle }: props) {
	const { screenWidth } = useWindowSize();

	const imageStyles = clsx({
		"h-fit grow cursor-pointer rounded-3xl border-2 border-white/20 bg-card-black p-2 transition-all hover:brightness-75":
			true,
		"max-w-lg": screenWidth < 1200,
	});

	return (
		<>
			<div
				onClick={(_e) => {
					toggle(src);
				}}
				className={imageStyles}
			>
				<img
					src={src}
					className="pointer-events-auto max-h-96 w-full select-auto rounded-2xl object-cover"
				/>
			</div>
		</>
	);
}
