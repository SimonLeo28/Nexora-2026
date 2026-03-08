import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const isTouch = useRef(false);

    useEffect(() => {
        isTouch.current = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch.current) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.08,
                ease: "power2.out",
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.02,
                ease: "none",
            });
        };

        const onMouseEnter = () => {
            gsap.to([cursor, cursorDot], {
                opacity: 1,
                duration: 0.3,
            });
        };

        const onMouseLeave = () => {
            gsap.to([cursor, cursorDot], {
                opacity: 0,
                duration: 0.3,
            });
        };

        const magneticElements = document.querySelectorAll("[data-magnetic]");

        const onMagneticEnter = (e) => {
            const target = e.currentTarget;

            gsap.to(cursor, {
                scale: 2,
                duration: 0.3,
            });

            target.addEventListener("mousemove", onMagneticMove);
        };

        const onMagneticLeave = (e) => {
            const target = e.currentTarget;

            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
            });

            gsap.to(target, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1,0.3)",
            });

            target.removeEventListener("mousemove", onMagneticMove);
        };

        const onMagneticMove = (e) => {
            const target = e.currentTarget;

            const rect = target.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * 0.3;
            const deltaY = (e.clientY - centerY) * 0.3;

            gsap.to(target, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
            });
        };

        magneticElements.forEach((el) => {
            el.addEventListener("mouseenter", onMagneticEnter);
            el.addEventListener("mouseleave", onMagneticLeave);
        });

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);

            magneticElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMagneticEnter);
                el.removeEventListener("mouseleave", onMagneticLeave);
            });
        };
    }, []);

    if (
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return null;
    }

    return (
        <>
            {/* Cursor ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference -ml-4 -mt-4 opacity-0"
            >
                <div className="w-full h-full rounded-full border-2 border-blue"></div>
            </div>

            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] mix-blend-difference -ml-[3px] -mt-[3px] opacity-0"
            >
                <div className="w-full h-full rounded-full bg-blue"></div>
            </div>
        </>
    );
};

export default CustomCursor;