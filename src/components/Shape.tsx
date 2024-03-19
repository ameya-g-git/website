import { clsx } from "clsx"

interface props {
    src: string,
    top: string,
    right: string
    width: string
    z?: string
    delay?: number
}

export default function Shape( {src, top, right, z, width, delay} : props ) {
    const delays = clsx({
        '[--delay:100ms]': delay === 0,
        '[--delay:200ms]': delay === 1,
        '[--delay:300ms]': delay === 2,
        '[--delay:400ms]': delay === 3,
        '[--delay:500ms]': delay === 4,
        '[--delay:600ms]': delay === 5,
        '[--delay:700ms]': delay === 6,
        '[--delay:800ms]': delay === 7,
        '[--delay:900ms]': delay === 8,
        '[--delay:1000ms]': delay === 9
    })

    console.log(delays)

    return (
        <div className={`absolute animate-float ${delays}`} style={{
            top: top,
            right: right,
            zIndex: z}}>
            <img src={src} style={{
                width: (width || 'auto')}}/>
        </div>
    )
}