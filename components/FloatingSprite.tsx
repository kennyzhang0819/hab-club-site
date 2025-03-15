'use client'

import Image from 'next/image'

export interface FloatingSpriteProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  scale: number;
  rotate: number;
}

export function FloatingSprite({ 
  src, 
  alt, 
  width, 
  height, 
  initialX, 
  initialY, 
  duration,
  delay,
  scale,
  rotate
}: FloatingSpriteProps) {
  return (
    <div 
      className="float-sprite"
      style={{ 
        left: `${initialX}px`, 
        bottom: `${initialY}px`,
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        '--float-duration': `${duration}s`,
        '--float-delay': `${delay}s`,
      } as React.CSSProperties}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
} 