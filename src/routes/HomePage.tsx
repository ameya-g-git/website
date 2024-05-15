import clsx from 'clsx'
import { Player } from '@lottiefiles/react-lottie-player';
import { useLoaderData, useNavigate } from 'react-router-dom';
import localforage from 'localforage';

import useWindowSize from '../hooks/useWindowSize'
import { getRepoDetails } from '../hooks/getRepoDetails';

import ScrollingImage from '../components/ScrollingImage';
import Shape from '../components/Shape';
import ProjectCard, { props as cardProps } from '../components/ProjectCard';
import ToolCard from '../components/ToolCard';
import DesignCard from '../components/DesignCard';

import starCurve from '../assets/home_icons/star_curve.svg'
import wave from '../assets/wave.svg'
import circle from '../assets/hero_shapes/circle.svg'
import circle2 from '../assets/hero_shapes/circle2.svg'
import curve from '../assets/hero_shapes/curve.svg'
import curve2 from '../assets/hero_shapes/curve2.svg'
import curve3 from '../assets/hero_shapes/curve3.svg'
import hex from '../assets/hero_shapes/hex.svg'
import nanner from '../assets/hero_shapes/nanner.svg'
import square from '../assets/hero_shapes/square.svg'
import squiggle from '../assets/hero_shapes/squiggle.svg'
import star from '../assets/hero_shapes/star.svg'
import triangle from '../assets/hero_shapes/triangle.svg'
import triangle2 from '../assets/hero_shapes/triangle2.svg'
import glaggle from '../assets/hero_shapes/glaggle.svg'

import dev_icon from '../assets/home_icons/dev_icon.svg'
import tech_icon from '../assets/home_icons/technologies_icon.svg'
import pen_icon from '../assets/home_icons/pen_icon.svg'
import gd_card from '../assets/home_icons/gd_card.png'
import ui_card from '../assets/home_icons/ui_card.png'
import pencil from '../assets/pencil.svg'
import paintbrush from '../assets/paintbrush.svg'


// TODO: figure out a way to load the fonts elsewhere so the fonts   work on github pages
// TODO: deploy this on github pages just to see how things go :D

interface windowSize {
    screenWidth: number,
    screenHeight: number
}

export async function loader() {
    const repoNames : string[] = ['mirrormult-figma-plugin', 'mc-quantization', 'keep-it-real'] // repositories to load
    let makeRequest : boolean = true // boolean to hold whether or not a request needs to be made
    
    const repoDetails = await localforage.keys().then(async keys => {
        let details : (cardProps | null | void)[]; // cardProps comes from ProjectCard.tsx
        details = [] // details will be the value returned from this operation to either a) make a request || b) use cached repo data to avoid unnecessary APi calls
        
        if (keys.length >= 1 && !makeRequest) { // if localforage is not empty and request doesn't need to be made
            const result : cardProps[] | null = await localforage.getItem('key', (err) => { if (err) {console.log(err)} })
            if (result) {
                details = result
            }

            if (details.length === repoNames.length) { // run code below if the number of repos match
                for (let i = 0; i < repoNames.length; i++) { // iterate through each list to see if the repo names match
                    if (details[i]!.name != repoNames[i]) {
                        makeRequest = true // if the repo names don't match, a new request must be made
                        break;
                    }
                }
            } else { // if the number of repos don't match, a new request must be made
               makeRequest = true
            }
        }

        if (makeRequest) { // code to make the request
            const repoDetailsPromises = repoNames.map( (repoName : string) => getRepoDetails(repoName).catch(err => console.log(err)))
            details = await Promise.all(repoDetailsPromises)
            await localforage.setItem('key', details, (err) => { if (err) {console.log(err)} })
        }

        return details // return the repo details
    })
    
    return repoDetails
}

export default function Home() {
    const { screenWidth } : windowSize = useWindowSize();
    const loaderData : any = useLoaderData();
    const cardData = loaderData
    const navigate = useNavigate()

    const languages = ['python', 'c++', 'html', 'css', 'typescript']
    const tools = ['git', 'vite', 'npm', 'pip', 'figma']
    const frameworks = ['react', 'vue', 'tailwind', 'bootstrap', 'flask', 'numpy', 'matplotlib']

    const nameStyles = clsx(
        'relative font-page-heading leading-none',
        (screenWidth >= 768 ? 'text-[33vh] -my-[10vh] -mb-[8vh]' : 'text-[33vw] -my-[5vh] -mb-[3vh]')
    )
    
    const lastNameStyles = clsx([
        'font-page-heading leading-none -my-[2vh]',
        (screenWidth >= 768 ? 'text-[22vh]' : 'text-[22vw]')
    ])

    return (
        <>
            <section id='banner' className='relative w-full h-full overflow-hidden'>
                { screenWidth >= 1200 &&
                    <div id='shapes' className='w-screen h-screen overflow-hidden [perspective:12px]'>
                        <Shape src={circle} top="15vh" right="0" z="3" width="24vw" delay={9} />
                        <Shape src={circle2} top="12vh" right="0" z="2" width="5vw" delay={4} />
                        <Shape src={curve} top="53vh" right="0.5vw" z="1" width="18vw" delay={3} />
                        <Shape src={curve2} top="20vh" right="16vw" z="1" width="24vw" delay={6}/>
                        <Shape src={curve3} top="72vh" right="70vw" width="25vw" delay={2} />
                        <Shape src={hex} top="70vh" right="55vw" width="10vw" delay={7}/>
                        <Shape src={nanner} top="57vh" right="22vw" width="7.5vw" delay={1} />
                        <Shape src={square} top="9vh" right="25vw" width="10vw" delay={4}/>
                        <Shape src={squiggle} top="67vh" right="36vw" width="15vw" />
                        <Shape src={star} top="10vh" right="10vw" z="4" width="8vw" delay={7} />
                        <Shape src={triangle} top="42vh" right="30vw" width="10vw" delay={2} />
                        <Shape src={triangle2} top="45vh" right="45vw" z="60" width="5vw" delay={3} />
                        <Shape src={glaggle} top="70vh" right="18vw" width="18vw" delay={6} />
                    </div>
                }
                <div className='box-border absolute px-8 text-black -translate-y-1/2 top-1/2 md:pt-8 md:py-48 md:px-20 py-18'>
                    <div className='inline-flex items-center gap-1'>
                        <Player 
                            src="https://lottie.host/1dd41cb5-2633-4dc5-99ba-03b545ea86ce/5x9D1FO1SB.json"
                            loop
                            autoplay
                            className='h-8 md:h-16'
                            />
                        <h2 className="text-xl md:text-4xl">hi! i'm</h2>
                    </div>
                    <div>
                        {screenWidth > 768 && <img src={starCurve} alt="" className='absolute max-h-[32vh] -mt-[7vh] -ml-[1vw]' />}
                        <div className='flex flex-row items-baseline h-full'>
                            <h1 className={nameStyles}>ameya</h1>
                            <p className='text-sm'>:3</p>
                        </div>
                        <div className="inline-flex items-end gap-2">
                            <h1 className={lastNameStyles}>gupta</h1>
                            <h2 className="text-sm md:text-lg md:mb-[2vh]">(he/him)</h2>
                        </div>
                    </div>
                    <div className='my-[4vh] md:my-[6vh] [&>*]:my-1 [&>h3]:text-[2vh] [&>h3]:md:text-xl'>
                        <h3>
                            aspiring software developer | multidisciplinary creative | graphic designer | 3d artist | ui designer
                        </h3>
                        <hr className='w-11/12 border-black' />
                        <h3 className=''>
                            passionate about bringing bold, unique design to software solutions
                        </h3>
                    </div>

                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} img={wave} width='full'/>
                </div>
            </section>
            
            {/* TODO: make this section gradient a tailwind variable since im using this on every page */}
            <section className='p-12 flex flex-col gap-16 w-full h-fit bg-gradient-to-b from-[#0A0A00] via-[#191919] to-[#0A0A00] [&_h2]:h-full [&_h2]:text-3xl'>
                <section id='projects' className='flex flex-col items-end gap-4'>
                    <span className='flex flex-row items-end w-full h-8 gap-2'>
                        <h2>here's what i've been</h2>
                        <img className='h-full' src={dev_icon} alt="React fragment element icon" />
                        <h2>working on!</h2>
                    </span>
                    <div className='box-border flex flex-row items-stretch w-full gap-4 h-96 min-h-60'>
                        <ProjectCard {...cardData[0]} top={50} />
                        <ProjectCard {...cardData[1]} top={0} newLanguages={['matplotlib', 'numpy']}/>
                        <ProjectCard {...cardData[2]} top={50} newLanguages={['flask', 'tailwind']}/>
                    </div>
                    <button className='w-[32.5%] mt-4 text-lg' onClick={_e => navigate('/projects')} >
                        check out more of what i’ve done! →
                    </button>
                </section>
                
                <section id='technologies' className='flex flex-col items-baseline gap-4'>
                    <span className='flex flex-row items-center justify-end w-full h-8 gap-2'>
                        <h2>here are the</h2>
                        <img className='h-full' src={tech_icon} alt="Stack icon" />
                        <h2>skills i've gained!</h2>
                    </span>
                    <div className='box-border flex flex-col items-stretch w-full gap-3 md:flex-row'>
                        <div id='languages' className='flex flex-col flex-grow gap-2'>
                            <h2 className='my-2 text-2xl text-white/50'>languages</h2>
                            <div className='grid grid-flow-col grid-rows-5 gap-2'>
                                {languages.map(lang => (
                                    <ToolCard name={lang} />
                                ))}
                            </div>
                        </div>

                        <div id='tools' className='flex flex-col flex-grow gap-2'>
                            <h2 className='my-2 text-2xl text-white/50'>tools</h2>
                            <div className='grid grid-flow-col grid-rows-5 gap-2'>
                                {tools.map(tool => (
                                    <ToolCard name={tool} icon={tool == "pip" ? "python" : undefined}/>
                                ))}
                            </div>
                        </div>

                        <div id='frameworks' className='flex flex-col flex-grow-[2] gap-2'>
                            <h2 className='my-2 text-2xl text-white/50'>frameworks</h2>
                            <div className='grid grid-flow-col grid-rows-5 gap-2'>
                                {frameworks.map(framework => (
                                    <ToolCard name={framework} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id='design' className='flex flex-col items-baseline gap-4'>
                    <span className='flex flex-row items-center w-full h-8 gap-2'>
                        <h2>check out some of my</h2>
                        <img className='h-full' src={pen_icon} alt="Pen icon" />
                        <h2>design work too!</h2>
                    </span>
                    <div className='flex flex-row w-full gap-4 justify-stretch'>
                        <DesignCard img={gd_card} title='graphic design' icon={pencil} />
                        <DesignCard img={ui_card} title='ui design' icon={paintbrush} />
                    </div>
                    <button className='w-[32.5%] mt-4 text-lg' onClick={_e => navigate('/projects')} >
                        take a look at the whole gallery! →
                    </button>
                </section>        
            </section>
        </>
    )
}