import { useState, useEffect } from "react";

export default function useScrollLength() {
    const [scrollLength, setScrollLength] = useState(0);

    useEffect( () => {
        function handleScroll() {
            const currentScrollPos : number = window.scrollY;
            setScrollLength(currentScrollPos - prevScrollPos)
            prevScrollPos = currentScrollPos
        }

        let prevScrollPos : number = window.scrollY;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])

    return scrollLength
}