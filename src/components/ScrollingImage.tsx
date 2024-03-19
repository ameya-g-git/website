import clsx from "clsx"

interface props {
    ltr : boolean,
    width : string,
    img : string
}

export default function ScrollingImage({ ltr, width, img } : props) {
    const elementWidth = clsx({
        'w-full': width === 'full',
        'w-60': width === 'starbar'
    })

    const containerStyles = clsx(
        `flex flex-row items-center ${elementWidth} h-full overflow-hidden ${ltr ? '' : '-scale-x-100'}`
    )

    const imageStyles = clsx(
        `relative flex flex-row justify-end ${elementWidth} animate-infinite-scroll`
    )

    return (
        <div className={containerStyles}>
            <div className="relative w-full">
                <div className={imageStyles}>
                    <img src={img} className='object-cover h-full'/>
                    <img src={img} className='object-cover h-full'/>
                </div>
            </div>
        </div>
    )
}