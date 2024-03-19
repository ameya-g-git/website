import clsx from 'clsx'
import { Player } from '@lottiefiles/react-lottie-player';

import useWindowSize from '../hooks/useWindowSize'
import useScrollLength from '../hooks/useScrollLength';

import ScrollingImage from '../components/ScrollingImage';
import Shape from '../components/Shape';

import starCurve from '../assets/star_curve.svg'
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
            <section id='banner' className='relative w-screen h-screen overflow-hidden'>
                <div id='shapes' className='w-screen h-screen overflow-x-hidden [perspective:12px]'>
                    <Shape src={circle} top="8rem" right="0" z="3" width="325px" delay={9} />
                    <Shape src={circle2} top="6rem" right="0" z="2" width="75px" delay={4} />
                    <Shape src={curve} top="27rem" right="0.5rem" z="1" width="325px" delay={3} />
                    <Shape src={curve2} top="12rem" right="12.5rem" z="1" width="400px" delay={6}/>
                    <Shape src={curve3} top="39rem" right="55rem" width="500px" delay={2} />
                    <Shape src={hex} top="38rem" right="40rem" width="170px" delay={7}/>
                    <Shape src={nanner} top="32rem" right="16rem" width="100px" delay={1} />
                    <Shape src={square} top="7rem" right="25rem" width="170px" delay={4}/>
                    <Shape src={squiggle} top="37rem" right="22rem" width="250px" />
                    <Shape src={star} top="5rem" right="12rem" z="4" width="100px" delay={9} />
                    <Shape src={triangle} top="24rem" right="22rem" width="150px" delay={2} />
                    <Shape src={triangle2} top="26rem" right="36rem" z="60" width="70px" delay={3} />
                </div>
                
                <div className='box-border absolute px-8 -translate-y-1/2 md:pt-4 py-18 top-1/2 md:py-32 md:px-20'>


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
                        {width > 768 && <img src={starCurve} alt="" className='absolute max-h-[32vh] -mt-[7vh] -ml-[1vw]' />}
                        <div className='flex flex-row items-baseline h-full'>
                            <h1 className={nameStyles}>ameya</h1>
                            <p className='text-sm'>:3</p>
                        </div>
                        <div className="inline-flex items-end gap-2">
                            <h1 className={lastNameStyles}>gupta</h1>
                            <h2 className="text-sm md:text-lg md:mb-[2vh]">(he/him)</h2>
                        </div>
                    </div>

                    <div className='my-[4vh] md:my-[6vh] [&>*]:my-1 [&>h3]:text-[2vh] [&>h3]:md:text-lg'>
                        <h3>
                            aspiring software developer | multidisciplinary creative | graphic designer | 3d artist | ui designer
                        </h3>
                        <hr className='w-11/12 border-black' />
                        <h3 className=''>
                            passionate about bringing bold, unique design to software solutions
                        </h3>
                    </div>
                    
                </div>

                <div className='absolute bottom-0 scale-150 md:scale-100 z-[999]'>
                    <ScrollingImage ltr={true} img={wave} width='full'/>
                </div>

            </section>

            <section className='flex flex-col w-full h-screen bg-gradient-to-b from-[#0A0A00] via-[#222222] to-[#0A0A00] '>

            </section>
        </>
    )
}