import ScrollingImage from "../components/ScrollingImage";
import wave from "../assets/wave.svg"
import banner from "../assets/portfolio banner.png"
import scribble from "../assets/portfolio_icons/scribble_title.svg"
import smiley from "../assets/portfolio_icons/smiley_title.svg"
import eye from "../assets/portfolio_icons/eye_title.svg"
import useMousePosition from "../hooks/useMousePosition";
import Shape from "../components/Shape";
// import boom from "../assets/portfolio_icons/boom.svg"
// import eye from "../assets/portfolio_icons/eye.svg"
// import glaggle from "../assets/portfolio_icons/glaggle.svg"
// import head from "../assets/portfolio_icons/head.svg"
// import scribble from "../assets/portfolio_icons/scribble.svg"
// import sparkle from "../assets/portfolio_icons/sparkle.svg"
// import star from "../assets/portfolio_icons/star.svg"

export default function PortfolioPage() {
    const mousePosition = useMousePosition()

    return (
        <>
            <section id="banner" className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
                <div className="z-50 flex items-center justify-center text-black font-page-heading">
                    <h1 className="md:text-[18rem] text-[25vw]">portfolio</h1>
                    <img src={scribble} className="absolute h-24 pr-[33rem] mt-5" alt="" />
                    <img src={smiley} className="absolute h-[4.5rem] mt-6 ml-[6.5rem] left-1/2" alt="" />
                    <img src={eye} className="absolute h-16 mt-6 ml-[51rem]" alt="" />
                    <div className="absolute w-full h-full pointer-events-none select-none">
                        <Shape src= />
                    </div>
                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} width="full">
                        <img src={wave} alt="" className="object-cover w-full" />
                    </ScrollingImage>
                </div>
            </section>
        </>
    )
} 