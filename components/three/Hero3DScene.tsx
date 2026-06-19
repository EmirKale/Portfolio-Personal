'use client';

import { useEffect, useRef, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'torus' | 'diamond' | 'sphere' | 'ring' | 'cube';
  rotateSpeed: number;
  floatSpeed: number;
  floatAmount: number;
  delay: number;
  opacity: number;
}

const shapes: Shape[] = [
  { id: 1, x: 55, y: 30, size: 180, type: 'torus', rotateSpeed: 20, floatSpeed: 6, floatAmount: 25, delay: 0, opacity: 0.12 },
  { id: 2, x: 70, y: 55, size: 120, type: 'diamond', rotateSpeed: 15, floatSpeed: 8, floatAmount: 20, delay: 1, opacity: 0.08 },
  { id: 3, x: 80, y: 25, size: 80, type: 'sphere', rotateSpeed: 25, floatSpeed: 5, floatAmount: 15, delay: 2, opacity: 0.1 },
  { id: 4, x: 45, y: 60, size: 100, type: 'ring', rotateSpeed: 18, floatSpeed: 7, floatAmount: 18, delay: 0.5, opacity: 0.06 },
  { id: 5, x: 65, y: 75, size: 60, type: 'cube', rotateSpeed: 12, floatSpeed: 9, floatAmount: 12, delay: 1.5, opacity: 0.08 },
  { id: 6, x: 35, y: 40, size: 70, type: 'sphere', rotateSpeed: 22, floatSpeed: 6, floatAmount: 22, delay: 3, opacity: 0.05 },
];

function ShapeElement({ shape, mouseX, mouseY }: { shape: Shape; mouseX: number; mouseY: number }) {
  const parallaxX = (mouseX - 0.5) * 30 * (shape.size / 180);
  const parallaxY = (mouseY - 0.5) * 30 * (shape.size / 180);

  const renderShape = () => {
    const baseStyle = 'absolute inset-0 border rounded-full';
    
    switch (shape.type) {
      case 'torus':
        return (
          <div className="relative w-full h-full" style={{ perspective: '400px' }}>
            <div
              className="absolute inset-0 border-2 border-cream/20 rounded-full"
              style={{
                animation: `spin3d ${shape.rotateSpeed}s linear infinite`,
                transform: 'rotateX(60deg)',
              }}
            />
            <div
              className="absolute inset-[15%] border border-cream/10 rounded-full"
              style={{
                animation: `spin3d ${shape.rotateSpeed * 1.3}s linear infinite reverse`,
                transform: 'rotateX(60deg) rotateY(30deg)',
              }}
            />
          </div>
        );
      case 'diamond':
        return (
          <div className="relative w-full h-full" style={{ perspective: '400px' }}>
            <div
              className="absolute inset-[10%] border border-cream/15"
              style={{
                animation: `spin3d ${shape.rotateSpeed}s linear infinite`,
                transform: 'rotate(45deg)',
                background: 'linear-gradient(135deg, rgba(250,247,243,0.03) 0%, transparent 50%)',
              }}
            />
          </div>
        );
      case 'sphere':
        return (
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 rounded-full border border-cream/10"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(250,247,243,0.08) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute inset-[20%] rounded-full border border-cream/5"
              style={{
                animation: `spin3d ${shape.rotateSpeed}s linear infinite`,
              }}
            />
          </div>
        );
      case 'ring':
        return (
          <div className="relative w-full h-full" style={{ perspective: '500px' }}>
            <div
              className="absolute inset-0 border-2 border-cream/10 rounded-full"
              style={{
                animation: `spin3d ${shape.rotateSpeed}s linear infinite`,
                transform: 'rotateX(75deg)',
              }}
            />
            <div
              className="absolute inset-[25%] border border-cream/8 rounded-full"
              style={{
                animation: `spin3d ${shape.rotateSpeed * 0.8}s linear infinite reverse`,
                transform: 'rotateX(75deg)',
              }}
            />
          </div>
        );
      case 'cube':
        return (
          <div className="relative w-full h-full" style={{ perspective: '400px' }}>
            <div
              className="absolute inset-[10%] border border-cream/10"
              style={{
                animation: `spin3d ${shape.rotateSpeed}s linear infinite`,
                background: 'linear-gradient(135deg, rgba(250,247,243,0.04) 0%, transparent 100%)',
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="absolute transition-transform duration-1000 ease-out"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: shape.size,
        height: shape.size,
        opacity: shape.opacity,
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        animation: `heroFloat ${shape.floatSpeed}s ease-in-out ${shape.delay}s infinite`,
      }}
    >
      {renderShape()}
    </div>
  );
}

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cream/[0.02] blur-[100px]" />
      
      {/* 3D Shapes */}
      {shapes.map((shape) => (
        <ShapeElement
          key={shape.id}
          shape={shape}
          mouseX={mouse.x}
          mouseY={mouse.y}
        />
      ))}

      {/* Style tag for animations */}
      <style jsx>{`
        @keyframes spin3d {
          from { transform: rotateX(60deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(60deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-${20}px); }
        }
      `}</style>
    </div>
  );
}
