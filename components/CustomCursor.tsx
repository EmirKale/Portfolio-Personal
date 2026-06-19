'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);

    // Track hover on interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Initial + observe DOM changes
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border transition-all duration-300 ease-out mix-blend-difference ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${hovering ? 'w-14 h-14 border-cream/60' : 'w-8 h-8 border-cream/30'}`}
        style={{
          transform: `translate3d(${position.x - (hovering ? 28 : 16)}px, ${position.y - (hovering ? 28 : 16)}px, 0)`,
        }}
      />
      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-cream transition-all duration-150 ease-out mix-blend-difference ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${hovering ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}
        style={{
          transform: `translate3d(${position.x - (hovering ? 2 : 3)}px, ${position.y - (hovering ? 2 : 3)}px, 0)`,
        }}
      />
    </>
  );
}
