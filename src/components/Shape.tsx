import { clsx } from "clsx"
import useMousePosition, { position } from "../hooks/useMousePosition"

interface props {
    src: string,
    top: string,
    right: string
    width: string
    z?: number
    delay?: number
}

export default function Shape( {src, top, right, z = 1, width, delay = 0} : props ) {
    const mousePosition = useMousePosition();

    return (
        <div className="absolute animate-float" style={{
            top: `calc(${top} + ${(mousePosition.y * z / 150)}px`,
            right: `calc(${right} - ${(mousePosition.x * z / 150)}px`,
            zIndex: z,
            "--delay": `${delay * 200}ms`} as React.CSSProperties}>
            <img src={src} style={{
                width: (width || 'auto')}}/>
        </div>
    )
}