import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Custom hook to safely instantiate and clean up GSAP contexts.
 * Prevents memory leaks and ghost ScrollTriggers on component unmounts.
 * * @param {React.RefObject} scope - The parent container element serving as the animation scope.
 */
export const useGsapContext = (scope) => {
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    // Create the scoped GSAP context
    ctxRef.current = gsap.context(() => {}, scope);

    // Revert all animations inside this context when the component unmounts
    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [scope]);

  return ctxRef.current;
};