import React from 'react';

interface ToolbarProps {
  zoomIn: () => void;
  zoomOut: () => void;
  rotateLeft: () => void;
  rotateRight: () => void;
  reset: () => void;
}

export function Toolbar({
  zoomIn,
  zoomOut,
  rotateLeft,
  rotateRight,
  reset,
}: ToolbarProps) {
  return (
    <div className="rit-toolbar">
      <button onClick={zoomIn}>+</button>

      <button onClick={zoomOut}>−</button>

      <button onClick={rotateLeft}>
        ↺
      </button>

      <button onClick={rotateRight}>
        ↻
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}