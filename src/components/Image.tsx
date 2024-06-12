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
					console.log(src);
					toggle(src);
				}}
				className="h-fit flex-grow cursor-pointer rounded-3xl border-2 border-white/20 bg-card-black p-2 transition-all hover:brightness-75"
			>
				<img src={src} alt="" className="max-h-96 w-full rounded-2xl object-cover" />
			</div>
		</>
	);
}
