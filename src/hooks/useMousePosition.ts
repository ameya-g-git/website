import { useState, useEffect } from 'react';

interface position {
    x: number | null,
    y: number | null
}

export default function useMousePosition({e} : {e : Event}) {
    const [mousePosition, setMousePosition] = useState<position>({ x: null, y: null });
  
    useEffect(() => {
        const updateMousePosition = (e : MouseEvent) => {
            setMousePosition({ x: e.offsetX, y: e.offsetY });
        };
    
        window.addEventListener('mousemove', updateMousePosition);
        
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
  
  return mousePosition;
}