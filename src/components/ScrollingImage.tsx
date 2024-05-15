import clsx from "clsx"

interface props {
    ltr : boolean,
    width : string,
    img : string
}

export default function ScrollingImage({ ltr, width, children }) {
    const elementWidth = clsx({
        'w-full': width === 'full',
        'w-60': width === 'starbar'
    })

    const containerStyles = clsx(
        `flex flex-row items-center ${elementWidth} h-full overflow-hidden ${ltr ? '' : '-scale-x-100'}`
    )

    const imageStyles = clsx(
        `relative flex flex-row justify-end ${elementWidth} animate-infinite-scroll w-[200%]`
    )

    return (
        <div className={containerStyles}>
            <div className={imageStyles}>
                {children}
                {children}
            </div>
        </div>
    )
}