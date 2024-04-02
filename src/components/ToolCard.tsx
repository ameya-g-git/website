export default function ToolCard({name, icon} : {name : string, icon ?: string}) {
    // TODO: make this responsive based on screen size cause otherwise this does not look fun to scroll through
    return (
        <>
        <div className="flex flex-row items-center w-full px-4 py-3 bg-opacity-50 border-2 border-white border-opacity-25 h-14 bg-card-black rounded-2xl backdrop-blur-md">
            <img src={`/src/assets/icons/${icon ? icon : name}.png`} alt={`${name} logo`} className="h-full"/>
            <h3 className="relative flex-grow text-center opacity-50 h-fit">{name}</h3>
        </div>
        </>
    )
}