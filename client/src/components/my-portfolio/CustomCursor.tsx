"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursor = useRef(null);

    useEffect(() => {

        const moveCursor = (e) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power3.out",
            });
        };


        window.addEventListener(
            "mousemove",
            moveCursor
        );


        return () => {
            window.removeEventListener(
                "mousemove",
                moveCursor
            );
        };


    }, []);


    return (
        <div
            ref={cursor}
            className="
            fixed 
            top-0 
            left-0 
            z-[9999]
            w-8
            h-8
            rounded-full
            bg-white
            pointer-events-none
            mix-blend-difference
            "
            style={{
                transform: "translate(-50%, -50%)"
            }}
        />
    );
};

export default CustomCursor;