import clsx from "clsx";
import { ReactNode } from "react";
interface props {
	ltr: boolean;
	width: string;
	children: ReactNode;
	colour?: string;
}

export default function ScrollingImage({ ltr, width, children, colour }: props) {
	const elementWidth = clsx({
		"w-full": width === "full",
		"w-60": width === "starbar",
		"bg-black": colour === "black",
	});

	const containerStyles = clsx(
		`flex items-center h-full ${elementWidth} overflow-hidden ${ltr ? "" : "-scale-x-100"}`,
	);

	const imageStyles = clsx(
		`relative flex flex-row justify-end ${elementWidth} animate-infinite-scroll w-[200%]`,
	);

	return (
		<div role="presentation" className={containerStyles}>
			<div className={imageStyles}>
				{children}
				{children}
			</div>
		</div>
	);
}
