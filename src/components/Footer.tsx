import { Link } from 'react-router-dom'

import arrow_smiley from '../assets/arrow_smiley.png'
import nameFill from '../assets/ameyaGupta_fill.png'
import nameOutline from '../assets/ameyaGupta_outline.png'
import downarrow from '../assets/downarrow.svg'
import email from '../assets/icons/email.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import resume from '../assets/icons/resume.png'
import { Fragment } from 'react/jsx-runtime'

interface footerButtonProps {
    icon : string, 
    link : string, 
    alt : string
}

function FooterButton( {icon, link, alt} : footerButtonProps) {
    
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-12 h-12 p-2 transition-all border-2 rounded-lg bg-card-black/50 hover:bg-card-hover border-white/20'>
            <img src={icon} alt={alt} className='h-full' />
        </Link>
    )
}

export default function Footer() {
    // const layer = (height) => {
    //     return (
    //      <div className='flex flex-row items-center gap-1'>
    //         { Array(10).fill('ameyaGupta').map( (name, id) => {
    //             return (
    //                 (id == 6) ?
    //                 <p className='text-2xl text-yellow text-nowrap font-footer'>© Ameya Gupta</p> :
    //                 <img src={id % 2 === 0 ? nameFill : nameOutline} className='h-12 opacity-20' alt="" />
                    
    //             )}) 
    //         }
    //     </div>)
    // }


    const firstLayer = 
        <div className='flex flex-row items-center justify-end gap-1'>
            { Array(10).fill('ameyaGupta').map( (_name, id) => {
                return (
                    (id === 8) ?
                    <p key={`${id}p`} className='text-2xl text-yellow text-nowrap font-footer'>© Ameya Gupta</p> :
                    <img key={`${id}img`} src={id % 2 === 0 ? nameFill : nameOutline} className='h-12 opacity-20' alt="" />
                )}) 
            }
        </div>
    
    const secondLayer = 
        <div className='flex flex-row items-center gap-2 -ml-80'>
            { Array(10).fill('ameyaGupta')
                .map( (_name, id) => {
                return (
                    (id === 1) ?
                    <p key={id} className='text-5xl text-yellow text-nowrap font-footer'>let's work together!</p> :
                    <img key={id} src={id % 2 === 0 ? nameFill : nameOutline} className='h-24 opacity-20' alt="" />
                )}) 
            }
        </div>

    const thirdLayer = 
        <div className='flex flex-row items-center gap-4 -ml-[31.5rem]'>
            { Array(10).fill('ameyaGupta').map( (name, id) => {
                return (
                    (id === 1) 
                    ? <Fragment key={id}>
                        <p className='text-8xl text-yellow text-nowrap font-footer'>contact me</p>
                        <img src={downarrow} className='flex w-30'/>
                    </Fragment> 
                    : <img key={id} src={id % 2 === 0 ? nameFill : nameOutline} className='h-32 opacity-20' alt="" />
                )}) 
            }
        </div>
        

    return (
        <footer id='footer' className="overflow-x-hidden bg-[#0A0A00] h-fit">
            <div className='w-[120%] shadow-footer flex flex-col items-center -ml-[9%] gap-4'>
                <img src={arrow_smiley} className='my-2 mt-8 w-28' alt="" />
                <div className='flex flex-col [&>*]:-my-0.5'>
                    {firstLayer}
                    {secondLayer}
                    {thirdLayer}
                </div>
                <div className='flex flex-row items-center justify-between w-full px-56 mb-8 h-fit'>
                    <div className='flex flex-row items-center w-full my-2 gap-[17rem]'>
                        <p>looking for entry-level positions to expand my skillset and make valuable connections!</p>
                        <div className='flex flex-row items-center gap-1 '>
                            <FooterButton icon={email} link='mailto:ameya.guptag@gmail.com?subject=hi%20from%20your%20website!' alt='email'/>
                            <FooterButton icon={github} link='https://github.com/ameya-g-git' alt='github'/>
                            <FooterButton icon={linkedin} link='https://linkedin.com/in/ameya-g' alt='linkedin'/>
                            <FooterButton icon={resume} link='../src/assets/AG_fullresume.pdf' alt='resume'/>
                        </div>
                    </div>
                    <p className='w-56 -mr-4 text-nowrap'>created with ❤︎/✒︎ on <a className='underline' href='https://github.com/ameya-g-git/website'>github</a></p>
                </div>
            </div>
        </footer>
    )
}