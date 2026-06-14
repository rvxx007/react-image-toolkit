import React from 'react';

interface MagnifierProps {
  src: string;
  x: number;
  y: number;
  size: number;
}

export function Magnifier({
  src,
  x,
  y,
  size,
}: MagnifierProps) {
  return (
    <div
      className="rit-magnifier"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
        backgroundPosition: `${-x}px ${-y}px`,
      }}
    />
  );
}