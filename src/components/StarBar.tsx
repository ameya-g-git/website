import starbar from '../assets/starbar.png'

export default function StarBar({ ltr } : { ltr : boolean }) {
    return (
        <div className={`flex flex-row items-center w-60 h-full overflow-hidden ${ltr ? '' : '-scale-x-100'}`}>
            <div className='relative w-full'>
                <div className='relative flex flex-row justify-end w-60 animate-infinite-scroll'>
                    <img src={starbar} alt="" className='object-cover max-w-full '/>
                    <img src={starbar} alt="" className='object-cover max-w-full '/>
                </div>
            </div>
        </div>
    )
}