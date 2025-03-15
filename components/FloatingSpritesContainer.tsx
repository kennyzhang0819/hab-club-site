'use client'

import { useState, useEffect } from 'react'
import { Sprite, sprites } from '@/data/sprites'
import { FloatingSprite } from './FloatingSprite'

export interface SpriteInstance extends Sprite {
  id: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  scale: number;
  rotate: number;
}

interface FloatingSpritesContainerProps {
  containerWidth?: number;
  baseScale?: number;
  count?: number;
}

export function FloatingSpritesContainer({
  containerWidth = 400,
  baseScale = 0.4,
  count = 2
}: FloatingSpritesContainerProps) {
  const [spriteInstances, setSpriteInstances] = useState<SpriteInstance[]>([]);

  // Initialize sprite instances with deterministic positions
  useEffect(() => {
    const instances: SpriteInstance[] = [];
    
    // Create instances for each sprite type
    sprites.forEach((sprite, spriteIndex) => {
      // Create multiple instances of each sprite based on count
      for (let i = 0; i < count; i++) {
        const isFirstSet = i === 0;
        instances.push({
          ...sprite,
          id: spriteIndex * count + i,
          initialX: isFirstSet 
            ? 50 + (containerWidth / 4) * spriteIndex
            : 100 + (containerWidth / 4) * ((spriteIndex + 2) % 4),
          initialY: isFirstSet
            ? 80 + (spriteIndex % 2) * 20
            : 100 + ((spriteIndex + 1) % 2) * 20,
          duration: isFirstSet
            ? 2 + (spriteIndex * 0.2)
            : 2.5 + (spriteIndex * 0.2),
          delay: isFirstSet
            ? 0.2 * spriteIndex
            : 0.5 + 0.2 * spriteIndex,
          scale: isFirstSet ? baseScale : baseScale - 0.05,
          rotate: isFirstSet
            ? (spriteIndex % 2 === 0) ? 3 : -3
            : (spriteIndex % 2 === 0) ? -2 : 2,
        });
      }
    });
    
    setSpriteInstances(instances);
  }, [containerWidth, baseScale, count]);

  return (
    <>
      {spriteInstances.map((sprite) => (
        <FloatingSprite
          key={sprite.id}
          src={sprite.src}
          alt={sprite.alt}
          width={sprite.width}
          height={sprite.height}
          initialX={sprite.initialX}
          initialY={sprite.initialY}
          duration={sprite.duration}
          delay={sprite.delay}
          scale={sprite.scale}
          rotate={sprite.rotate}
        />
      ))}
    </>
  );
} 