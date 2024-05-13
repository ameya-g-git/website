export default function ToolCard({name, icon} : {name : string, icon ?: string}) {
    // TODO: make this responsive based on screen size cause otherwise this does not look fun to scroll through
    return (
        <div className="flex flex-row items-center w-full px-4 py-3 transition-all ease-out bg-opacity-50 border-2 border-white border-opacity-25 hover:bg-card-hover h-14 bg-card-black rounded-2xl">
            <img src={`/src/assets/icons/${icon ? icon : name}.svg`} alt={`${name} logo`} className="opacity-50 max-w-8 max-h-8"/>
            <h3 className="relative flex-grow text-lg text-center text-white/50 h-fit">{name}</h3>
        </div>
    )
}