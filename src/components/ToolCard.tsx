export default function ToolCard({ name, icon }: { name: string; icon?: string }) {
	// TODO: make this responsive based on screen size cause otherwise this does not look fun to scroll through
	return (
		<div className="flex h-14 w-full flex-row items-center rounded-2xl border-2 border-white border-opacity-25 bg-card-black bg-opacity-50 px-4 py-3 transition-all ease-out hover:bg-card-hover">
			<img
				src={`/assets/icons/${icon ? icon : name}.svg`}
				alt={`${name} logo`}
				className="max-h-8 max-w-8 opacity-50"
			/>
			<h3 className="relative h-fit flex-grow text-center text-lg text-white/50">{name}</h3>
		</div>
	);
}
