import ScrollingImage from "../components/ScrollingImage";
import wave from "../assets/wave.svg"
import boom from "../assets/portfolio_icons/boom.svg"
import eye from "../assets/portfolio_icons/eye.svg"
import glaggle from "../assets/portfolio_icons/glaggle.svg"
import head from "../assets/portfolio_icons/head.svg"
import scribble from "../assets/portfolio_icons/scribble.svg"
import sparkle from "../assets/portfolio_icons/sparkle.svg"
import star from "../assets/portfolio_icons/star.svg"

function PortfolioIcons() {
    return (
        <>
            <img src={boom} alt="" />
            <img src={eye} alt="" />
            <img src={glaggle} alt="" />
            <img src={head} alt="" />
            <img src={scribble} alt="" />
            <img src={sparkle} alt="" />
            <img src={star} alt="" />
        </>
    )
}

export default function PortfolioPage() {
    return (
        <>
            <section id="banner" className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                <div className="z-50 flex items-center justify-center text-black bg-yellow font-page-heading">
                    <h1 className="md:text-[18rem] text-[25vw]">portfolio</h1>
                </div>
                <div id="banner" className="absolute border-black border-y-8 top-24 animate-infinite-scroll">
                    <div className="flex flex-row gap-12 p-10 my-8 bg-black">
                        <PortfolioIcons />
                        <PortfolioIcons />
                    </div>
                </div>
                <div className='absolute bottom-0 scale-150 md:scale-100'>
                    <ScrollingImage ltr={true} img={wave} width='full'/>
                </div>
            </section>
        </>
    )
} 