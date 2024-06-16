import { useState, useEffect, useRef } from 'react';

const useInView = (options, delay = 1000) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const timeoutRef = useRef(null);
    const lastOutOfViewTime = useRef(null);
    const hasBeenInView = useRef(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (!hasBeenInView.current || Date.now() - lastOutOfViewTime.current > delay) {
                setInView(true);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
                hasBeenInView.current = true;
              }
            } else {
              lastOutOfViewTime.current = Date.now();
              if (!timeoutRef.current) {
                timeoutRef.current = setTimeout(() => {
                  setInView(false);
                }, delay);
              }
            }
          });
        },
        options
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [ref, options, delay]);
  
    return [ref, inView];
  };
  

export default useInView;
