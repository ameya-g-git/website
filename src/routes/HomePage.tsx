import clsx from 'clsx'
import starCurve from '../assets/star_curve.svg'
import useWindowSize from '../hooks/useWindowSize'
import { Player } from '@lottiefiles/react-lottie-player';
import useScrollLength from '../hooks/useScrollLength';

// ok so im gonna need to research what css units mean again so that this entire layout doesnt fuck up on resizing
// TODO: figure out a way to load the fonts elsewhere so the fonts   work on github pages
// TODO: ok so    turns out a shit ton of images is really hard to load So   i will try to host all my assets in an S3 bucket and see if that improves load times !!
// TODO: deploy this on github pages just to see how things go :D

interface windowSize {
    width: number,
    height: number
}

export default function Home() {
    const { width } : windowSize = useWindowSize();
    const scrollLength : number = useScrollLength();

    console.log(scrollLength)
    
    const nameStyles = clsx(
        'relative font-page-heading leading-none',
        (width >= 768 ? 'text-[33vh] -my-[10vh] -mb-[8vh]' : 'text-[33vw] -my-[5vh] -mb-[3vh]')
    )
    
    const lastNameStyles = clsx([
        'font-page-heading leading-none -my-[2vh]',
        (width >= 768 ? 'text-[22vh]' : 'text-[22vw]')
    ])

    return (
        <>
            <div className='h-[100vh] top-1/2 my- box-border px-10 py-20 md:py-32 md:px-24'>
                <div className='inline-flex items-center gap-[1vw]'>
                    <Player 
                        src="https://lottie.host/1dd41cb5-2633-4dc5-99ba-03b545ea86ce/5x9D1FO1SB.json"
                        loop
                        autoplay
                        className='h-8 md:h-12'
                        />
                    <h2 className="text-xl md:text-3xl">hi! i'm</h2>
                </div>
                <div>
                    {width > 768 && <img src={starCurve} alt="" className='absolute max-h-[32vh] mt-[3vh] -ml-[1vw]' />}
                    <h1 className={nameStyles}>ameya</h1>
                    <div className="inline-flex items-end gap-2">
                        <h1 className={lastNameStyles}>gupta</h1>
                        <h2 className="text-sm md:text-lg md:mb-[2vh]">(he/him)</h2>
                    </div>
                </div>
            </div>
        </>
    )
}