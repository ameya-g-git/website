import planet_curve from "../assets/planet_curve.svg"
import wave from "../assets/wave.svg"
import ScrollingImage from "../components/ScrollingImage"
import useWindowSize from "../hooks/useWindowSize"

import create from "../assets/projects_icons/create_icon.svg"
import explore from "../assets/projects_icons/explore_icon.svg"
import discover from "../assets/projects_icons/discover_icon.svg"

import localforage from "localforage"
import ProjectCard, { props as cardProps } from "../components/ProjectCard"
import { getRepoDetails } from "../hooks/getRepoDetails"
import { useLoaderData } from "react-router-dom"

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

export default function Projects() {
    const {screenWidth} = useWindowSize()
    const loaderData : any = useLoaderData();

    const languages = Array(2).fill(['javascript', 'python', 'c++', 'html', 'css', 'typescript']).flat()
    const tools = Array(2).fill(['git', 'vite', 'npm', 'python', 'figma']).flat()
    const frameworks = Array(2).fill(['react', 'vue', 'tailwind', 'bootstrap', 'flask', 'numpy', 'matplotlib']).flat()

    const widths = [screenWidth * 0.75, screenWidth * 0.85, screenWidth * 0.95]
    const strokeWidth = 5

    const languageIcons = languages.map((lang, i) => {
        return (
            <object 
                key={lang} 
                width={50} 
                height={50} 
                className="absolute -mt-6 -ml-6 brightness-0 stroke-yellow animate-orbit-rev"
                data={`./src/assets/icons/${lang}.svg`}
                style={{
                    "--radius": `${widths[0] / 2}px`,
                    "--delay": `${Math.round((30000 / languages.length) * i)}ms`
                } as React.CSSProperties} />
        )
    })

    const toolIcons = tools.map((tool, i) => {
        return (
            <object 
                key={tool} 
                width={50} 
                height={50} 
                className="absolute -mt-6 -ml-6 brightness-0 animate-orbit"
                data={`./src/assets/icons/${tool}.svg`}
                style={{
                    "--radius": `${widths[1] / 2}px`,
                    "--delay": `${Math.round((30000 / tools.length) * i)}ms`
                } as React.CSSProperties} />
        )
    })

    const frameworkIcons = frameworks.map((framework, i) => {
        return (
            <object 
                key={framework} 
                width={50} 
                height={50} 
                className="absolute -mt-6 -ml-6 brightness-0 animate-orbit-rev"
                data={`./src/assets/icons/${framework}.svg`}
                style={{
                    "--radius": `${widths[2] / 2}px`,
                    "--delay": `${Math.round((30000 / frameworks.length) * i)}ms`
                } as React.CSSProperties} />
        )
    })

    const circleElements = widths.map(width => {
        return (
            <svg key={width} className="absolute select-none" width={width + (strokeWidth * 2)} height={width + (strokeWidth * 2)} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth={strokeWidth}>
                <circle r={width / 2} cx={width / 2 + strokeWidth} cy={(width / 2) + strokeWidth} />
            </svg>
        )
    })

    return (
        <>
            <section id="banner" className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                <div id="orbit" className="absolute flex items-center justify-center visible w-full h-full select-none">
                    {circleElements}
                    <div id="languages">
                        {languageIcons}
                    </div>
                    <div id="tools">
                        {toolIcons}
                    </div>
                    <div id="frameworks">
                        {frameworkIcons}
                    </div>
                </div>
                <div className="z-50 flex items-center justify-center text-black bg-yellow font-page-heading">
                    <h1 className="md:text-[18rem] text-[25vw]">projects</h1>
                    <img src={planet_curve} className="absolute mr-8 h-72 md:h-[12.5rem] md:mr-[4.5rem]"/>
                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} img={wave} width='full'/>
                </div>
            </section>
            <section className="flex flex-col items-center gap-2 bg-black">
                <h2 className="text-2xl">i like to make projects that help people</h2>
                <div className="flex flex-row gap-8 rounded-full">
                    <div className="flex flex-row items-center gap-4 pr-8 border-r-4">
                        <img src={explore} alt="explore icon" />
                        <h1 className="text-4xl">explore</h1>
                    </div>
                    <div className="flex flex-row items-center gap-4 pr-8 border-r-4">
                        <img src={create} alt="create icon" />
                        <h1 className="text-4xl">create</h1>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <img src={discover} alt="discover icon" />
                        <h1 className="text-4xl">discover</h1>
                    </div>
                </div>
                <div className='box-border flex flex-row items-stretch w-full gap-4 px-12 my-8 h-96 min-h-60'>
                    <ProjectCard {...loaderData[0]} top={50} />
                    <ProjectCard {...loaderData[1]} newLanguages={['matplotlib', 'numpy']}/>
                    <ProjectCard {...loaderData[2]} newLanguages={['flask', 'tailwind']}/>
                </div>
            </section>
        </>
    )
}