import React, { useEffect } from 'react'

export const useClickedOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e)
            e.stopPropagation()
        }
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}


