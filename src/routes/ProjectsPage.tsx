import planet_curve from "../assets/planet_curve.svg"
import wave from "../assets/wave.svg"
import ScrollingImage from "../components/ScrollingImage"
import useWindowSize from "../hooks/useWindowSize"
import clsx from "clsx"

export default function Projects() {
    const {screenWidth} = useWindowSize()

    const languages = ['javascript', 'python', 'c++', 'html', 'css', 'typescript']
    const tools = ['git', 'vite', 'npm', 'python', 'figma']
    const frameworks = ['react', 'vue', 'tailwind', 'bootstrap', 'flask', 'numpy', 'matplotlib']

    const widths = [1400, 1625, 1850]
    const strokeWidth = 5

    const languageIcons = languages.map((lang, i) => {
        const delays = clsx({
            'absolute brightness-0 [--radius:700px] <stroke-yellow></stroke-yellow> -ml-6 -mt-6 animate-orbit-rev': true,
            '[--delay:3333ms]': i === 1,
            '[--delay:6666ms]': i === 2,
            '[--delay:9999ms]': i === 3,
            '[--delay:13332ms]': i === 4,
            '[--delay:16665ms]': i === 5,
        })
        return (
            <object key={lang} width={50} height={50} className={delays} data={`./src/assets/icons/${lang}.svg`} />
        )
    })

    const toolIcons = tools.map((tool, i) => {
        const delays = clsx({
            'absolute brightness-0 [--radius:812.5px] <stroke-yellow></stroke-yellow> -ml-6 -mt-6 animate-orbit': true,
            '[--delay:4000ms]': i === 1,
            '[--delay:8000ms]': i === 2,
            '[--delay:12000ms]': i === 3,
            '[--delay:16000ms]': i === 4,
        })
        return (
            <object key={tool} width={50} height={50} className={delays} data={`./src/assets/icons/${tool}.svg`} />
        )
    })

    const frameworkIcons = frameworks.map((framework, i) => {
        const delays = clsx({
            'absolute brightness-0 [--radius:925px] <stroke-yellow></stroke-yellow> -ml-6 -mt-6 animate-orbit-rev': true,
            '[--delay:2850ms]': i === 1,
            '[--delay:5700ms]': i === 2,
            '[--delay:8550ms]': i === 3,
            '[--delay:11400ms]': i === 4,
            '[--delay:13990ms]': i === 5,
            '[--delay:17100ms]': i === 6,
        })
        return (
            <object key={framework} width={50} height={50} className={delays} data={`./src/assets/icons/${framework}.svg`} />
        )
    })

    const circleElements = widths.map(width => {
        return (
            <svg key={width} className="absolute select-none" width={Math.min(width, screenWidth) + (strokeWidth * 2)} height={width + (strokeWidth * 2)} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth={strokeWidth}>
                <circle r={width / 2} cx={width / 2 + strokeWidth} cy={(width / 2) + strokeWidth} />
            </svg>
        )
    })

    return (
        <>
            <section id="banner" className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                <div id="orbit" className="absolute flex items-center justify-center w-full h-full">
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
                <div className="bg-yellow z-50 flex justify-center items-center text-[20rem] font-page-heading text-black">
                    <h1>projects</h1>
                    <img src={planet_curve} className="absolute h-56 mr-20"/>
                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} img={wave} width='full'/>
                </div>
            </section>
        </>
    )
}