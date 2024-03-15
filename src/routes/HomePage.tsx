import clsx from 'clsx'
import starCurve from '../assets/star_curve.svg'
import useWindowSize from '../hooks/useWindowSize'

// ok so im gonna need to research what css units mean again so that this entire layout doesnt fuck up on resizing
// TODO: figure out a way to load the fonts elsewhere so the fonts   work on github pages
// TODO: ok so    turns out a shit ton of images is really hard to load So   i will try to host all my assets in an S3 bucket and see if that improves load times !!

// ok might as well use top: and left: to position the star curve graphic and then use breakpoints to size it, potentially could use for the rest

interface windowSize {
    width: number,
    height: number
}

export default function Home() {
    const windowSize : windowSize = useWindowSize();
    
    const nameStyles = clsx(
        'relative font-page-heading leading-none -my-[4vh]',
        (windowSize.width > 768 ? 'text-[33vh] -my-[8vh]' : 'text-[33vw] -mb-[2vh]')
    )
    
    const lastNameStyles = clsx([
        'font-page-heading leading-none -my-[2vh]',
        (windowSize.width > 768 ? 'text-[22vh]' : 'text-[22vw]')
    ])

    return (
       <div 
        className="w-full h-full p-[7.5vw] pt-[10vw] 
        md:p-20 md:pt-30">
            <div>
                <img src="" alt="" /> { /* this is where the lottie wave anim will go */ }
                <h2 className="text-3xl">hi! i'm</h2>
            </div>
            <div>
                <img src={starCurve} alt="" className='fixed hidden md:block max-h-[32vh] mt-[3vh] -ml-[1vw]' /> { /* this is where the star orbit thing will go */ }
                <h1 className={nameStyles}>ameya</h1>
                <div className="inline-flex items-end gap-2">
                    <h1 className={lastNameStyles}>gupta</h1>
                    <h2 className="text-lg md:mb-[2vh]">(he/him)</h2>
                </div>
            </div>
       </div>
    )
}