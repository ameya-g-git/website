interface props {
	src: string;
	link?: string;
	toggle: (src: string) => void;
}

export default function Image({ src, toggle }: props) {
	return (
		<>
			<div
				onClick={(_e) => {
					toggle(src);
				}}
				className="flex-grow p-2 transition-all border-2 cursor-pointer h-fit rounded-3xl border-white/20 bg-card-black hover:brightness-75"
			>
				<img
					src={src}
					className="object-cover w-full pointer-events-auto select-auto max-h-96 rounded-2xl"
				/>
			</div>
		</>
	);
}
