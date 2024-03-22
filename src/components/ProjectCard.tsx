export interface props {
    img: string,
    name: string,
    description: string,
    languages: string[]
    top?: number
}

export default function ProjectCard({img, name, description, languages, top = 0} : props) {

    const languageCards = languages.map( language => 
        <div className="flex flex-row items-center justify-center w-12 h-12">
            <div className="absolute top-1/2 left-1/2 bg-card-black">
                <img src={`/src/assets/icons/${language}.png`} alt={language} className="h-8"/>
            </div>
            <svg width="100%" height="100%" rx={24} >
                <defs>
                    <linearGradient id="gradient" y1={0} y2={1}>
                        <stop stopColor="#FFFFFF80" offset={0} />
                        <stop stopColor="#FFFFFF20" offset={1} />
                    </linearGradient>
                </defs>
                <rect className="stroke-2 fill-none" x="1%" y="1%" width='98%' height='98%' rx={8} stroke="url(#gradient)" />
            </svg>
        </div> )

    return (
        <div id={`${name}-card`} className="relative w-full h-full">
            <div className="absolute flex flex-col gap-2 rounded-3xl bg-card-black backdrop-blur-xl p-3 w-[98%] h-[98%] top-[1%] left-[1%]">
                <img className="object-cover rounded-2xl h-1/2" src={img} alt={`Banner image of  ${name}`}
                    style={{
                        objectPosition: `center ${top}%`
                    }} />
                <div>
                    <span>
                        <h2 className="inline text-3xl text-white opacity-25">/</h2>
                        <h2 className="inline text-3xl text-white ">{name}</h2>
                    </span>
                    <p className="text-lg leading-tight text-white">{description}</p>
                </div>
                <div className="flex flex-row">
                    {languageCards}
                </div>
            </div>
            <svg width="100%" height="100%" rx={24} className="box-content absolute">
                <defs>
                    <linearGradient id="gradient" y1={0} y2={1}>
                        <stop stopColor="#FFFFFF80" offset={0} />
                        <stop stopColor="#FFFFFF20" offset={1} />
                    </linearGradient>
                </defs>
                <rect className="stroke-2 fill-none" x="1%" y="1%" width='98%' height='98%' rx={24} stroke="url(#gradient)" />
            </svg>
        </div>
    )
}