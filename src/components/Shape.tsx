import useMousePosition from "../hooks/useMousePosition";

interface props {
	src: string;
	top: string;
	right: string;
	width?: string;
	z?: number;
	delay?: number;
	rotate?: number;
}

export default function Shape({ src, top, right, z = 1, width, delay = 0, rotate }: props) {
	const mousePosition = useMousePosition();
	return (
		<div
			className="absolute animate-float"
			style={
				{
					top: `calc(${top} + ${(mousePosition.y * z) / 150}px`,
					right: `calc(${right} - ${(mousePosition.x * z) / 150}px`,
					zIndex: z,
					"--delay": `${delay * 200}ms`,
				} as React.CSSProperties
			}
		>
			<img
				src={src}
				style={{ transform: `rotate(${rotate ? rotate : 0}deg)`, width: width || "auto" }}
			/>
		</div>
	);
}
