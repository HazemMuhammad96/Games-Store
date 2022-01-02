import React from "react";

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return scrollPosition;
}

export function useScrollPositionListener(onScroll) {
    const position = useScrollPosition();

    React.useEffect(() => onScroll(position), [position]);
}