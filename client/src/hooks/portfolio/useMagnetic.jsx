import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Creates a magnetic attraction effect on an element when the mouse gets close.
 * @param {number} range - The distance in pixels from the element center where attraction begins.
 * @param {number} speed - The speed multiplier for the attraction movement.
 */
export const useMagnetic = (range = 35, speed = 1) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        // Smoothly track mouse position relative to element center
        gsap.to(element, {
          x: distanceX * speed * 0.4,
          y: distanceY * speed * 0.4,
          ease: "power2.out",
          duration: 0.4
        });
      } else {
        handleReset();
      }
    };

    const handleReset = () => {
      // Snaps the element back to its original position with an elegant spring bounce
      gsap.to(element, { 
        x: 0, 
        y: 0, 
        ease: "elastic.out(1, 0.3)", 
        duration: 0.8 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleReset);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleReset);
    };
  }, [range, speed]);

  return ref;
};