import clsx from "clsx"

interface props {
    ltr : boolean,
    width : string,
    img : string
}

export default function ScrollingImage({ ltr, width, img } : props) {
    const elementWidth = clsx({
        'w-[100vw]': width === 'full',
        'w-60': width === 'starbar'
    })

    const containerStyles = clsx(
        `flex flex-row items-center ${elementWidth} h-full overflow-hidden ${ltr ? '' : '-scale-x-100'}`
    )

    const imageStyles = clsx(
        `relative flex flex-row justify-end ${elementWidth} animate-infinite-scroll-slow`
    )

    return (
        <div className={containerStyles}>
            <div className='relative w-full'>
                <div className={imageStyles}>
                    <img src={img} alt="" className='object-cover max-w-full '/>
                    <img src={img} alt="" className='object-cover max-w-full '/>
                </div>
            </div>
        </div>
    )
}