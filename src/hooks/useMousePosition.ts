import { useState, useEffect } from 'react';

export interface position {
    x: number | null,
    y: number | null
}

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<position>({ x: null, y: null });
  
    useEffect(() => {
        const updateMousePosition = (e : MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
    
        window.addEventListener('mousemove', updateMousePosition);
        
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
  
  return mousePosition;
}