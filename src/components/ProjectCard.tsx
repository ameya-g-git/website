import { motion } from 'framer-motion';
import no_img from '../assets/no_repo_img.png'

export interface props {
    img: string,
    name: string,
    description: string,
    languages: string[]
    
    top?: number
    newLanguages?: string[]
}

export default function ProjectCard({img, name, description, languages, top = 0, newLanguages} : props) {  
    const card = {
        start: {
            backgroundColor: "#101010"
        },
        end: {
            backgroundColor: "#252525"
        }
    }

    const image = { 
        start: {
            opacity: 0, backdropFilter: "blur(0px)", backgroundColor: "#00000000", paddingRight: "10rem"},
        end: {
            opacity: 1, backdropFilter: "blur(8px)", backgroundColor: "#19191940", paddingRight: 0},
    }

    // TODO: on hover, link the card to the respective repository with a cool hover arrow effect on the image   will maybe make a custom Image component that can do this for all images 
    // TODO: figure out this circle gradient bullshit lma o     if not then just reconfigure the code to change the colour and delete all mouse-related hooks
    
    languages = newLanguages ? languages.concat(newLanguages) : languages

    const languageCards = languages.map( language => 
        <div className="box-border flex items-center justify-center w-10 h-10 p-2 border-2 rounded-lg bg-card-black backdrop-blur-xl border-white/30">
            <img src={`/src/assets/icons/${language}.svg`} alt={language} className="m-auto opacity-50"/>
        </div> 
    )

    return ( 
        <>
            <a className='relative w-full h-full' href={`https://github.com/ameya-g-git/${name}`}>
                <div 
                    id={`${name}-card`} 
                    >
                    <motion.div className="absolute top-[1%] left-[1%] flex flex-col w-[98%] h-[98%] gap-2 p-4 bg-opacity-50 rounded-3xl backdrop-blur-md inset-5"
                        initial="start" 
                        whileHover="end"
                        variants={card}>
                        <motion.div 
                            variants={image}
                            className='absolute inline-flex items-center justify-center w-[95%] gap-2 rounded-2xl h-[46%]'>
                            <p className='text-3xl'>→</p>
                            <p className='text-2xl'>go to repository</p>
                        </motion.div>
                        <img className="object-cover rounded-2xl h-1/2" src={img ? img : no_img} alt={`Banner image of  ${name}`}
                            style={{
                                objectPosition: `center ${top}%`
                            }}/>
                        <div className='flex flex-col gap-1'>
                            <span>
                                <h2 className="inline text-3xl select-none text-white/25">/</h2>
                                <h2 className="inline text-3xl text-white ">{name ? name : 'no-repo-found'}</h2>
                            </span>
                            <p className="text-lg leading-tight text-white">{description ? description : 'lorem ipsum and such'}</p>
                        </div>
                    </motion.div>
                    <div className="absolute z-20 flex flex-row items-center justify-center w-full gap-2 -bottom-4">
                        {languageCards ? languageCards : null}
                    </div>
                    <svg rx={24} className="absolute w-full h-full pointer-events-none select-none">
                        <defs>
                            <linearGradient id="gradient" y1={0} y2={1}>
                                <stop stopColor="#FFFFFF80" offset={0} />
                                <stop stopColor="#FFFFFF20" offset={1} />
                            </linearGradient>
                        </defs>
                        <rect className="stroke-2 fill-none" x='1%' y='1%' width='98%' height='98%' rx={24} stroke="url(#gradient)" />
                    </svg>
                </div>
            </a>
        </>
    )
}