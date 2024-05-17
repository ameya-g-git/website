import { clsx } from "clsx"
import useMousePosition from "../hooks/useMousePosition"

interface props {
    src: string,
    top: string,
    right: string
    width: string
    z?: number
    delay?: number
}

export default function Shape( {src, top, right, z = 1, width, delay} : props ) {
    const mousePosition = useMousePosition()
    console.log(mousePosition)

    const delays = clsx({
        '[--delay:200ms]': delay === 0,
        '[--delay:400ms]': delay === 1,
        '[--delay:600ms]': delay === 2,
        '[--delay:800ms]': delay === 3,
        '[--delay:1000ms]': delay === 4,
        '[--delay:1200ms]': delay === 5,
        '[--delay:1400ms]': delay === 6,
        '[--delay:1600ms]': delay === 7,
        '[--delay:1800ms]': delay === 8,
        '[--delay:2000ms]': delay === 9
    })

    return (
        <div className={`absolute animate-float ${delays}`} style={{
            top: `calc(${top} + ${(mousePosition.y * z / 150)}px`,
            right: `calc(${right} - ${(mousePosition.x * z / 150)}px`,
            zIndex: z}}>
            <img src={src} style={{
                width: (width || 'auto')}}/>
        </div>
    )
}