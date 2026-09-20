import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('button, a, [role="button"], input, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor') || '';
        setHoverLabel(label);
      } else {
        setIsHovered(false);
        setHoverLabel('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Precision Crosshair Dot */}
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 ${
          isHovered
            ? isLight
              ? 'w-10 h-10 border border-[#0E0E0E] bg-black/5 backdrop-blur-[1px]'
              : 'w-10 h-10 border border-[#FFFFFF] bg-white/10 backdrop-blur-[1px]'
            : isLight
            ? 'w-4 h-4 border border-[#0E0E0E]/50 bg-transparent'
            : 'w-4 h-4 border border-[#FFFFFF]/60 bg-transparent'
        }`}
      >
        <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#FFFFFF]'}`} />
      </div>

      {/* Label if hovered */}
      {hoverLabel && (
        <span className={`absolute top-5 left-5 whitespace-nowrap text-[9px] font-technical tracking-widest px-1.5 py-0.5 border shadow-sm ${
          isLight
            ? 'bg-[#FFFFFF] text-[#0E0E0E] border-[#D0D0CA]'
            : 'bg-[#0A0B0E] text-[#FFFFFF] border-[#3E4554]'
        }`}>
          {hoverLabel}
        </span>
      )}
    </div>
  );
};
