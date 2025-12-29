import { useEffect, useRef, cloneElement, isValidElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealItem = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.1,
  baseRotation = 0,
  baseY = 30,
  className = ''
}) => {
  const itemRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    // Find the scroll container
    let scroller = window;
    if (scrollContainerRef && scrollContainerRef.current) {
      scroller = scrollContainerRef.current;
    } else {
      const appElement = document.querySelector('.app');
      if (appElement) {
        scroller = appElement;
      }
    }

    // Set initial state
    gsap.set(el, {
      opacity: baseOpacity,
      y: baseY
    });

    // Create the animation - faster and more visible
    const animation = gsap.fromTo(
      el,
      { 
        opacity: baseOpacity, 
        y: baseY,
        willChange: 'opacity, transform'
      },
      {
        ease: 'none',
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=50px',  // Closer start point for faster animation
          end: 'top center',          // Shorter range = faster completion
          scrub: 0.5,                 // Faster, more responsive scrub
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Debug: uncomment to see progress
            // console.log('Scroll progress:', self.progress);
          }
        }
      }
    );

    // Store the ScrollTrigger instance
    scrollTriggerRef.current = animation.scrollTrigger;

      // Optional rotation animation
      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { transformOrigin: '0% 50%', rotate: baseRotation },
          {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=50px',
              end: 'top center',
              scrub: 0.5,
              invalidateOnRefresh: true
            }
          }
        );
      }

    // Refresh ScrollTrigger after a short delay to ensure DOM is ready
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      // Kill any other triggers on this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, baseOpacity, baseRotation, baseY]);

  // Clone the child element and add ref and className
  if (isValidElement(children)) {
    const existingClassName = children.props?.className || '';
    const combinedClassName = className ? `${existingClassName} ${className}`.trim() : existingClassName;
    
    return cloneElement(children, {
      ref: itemRef,
      className: combinedClassName
    });
  }

  // Fallback for non-element children
  return (
    <div ref={itemRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealItem;
