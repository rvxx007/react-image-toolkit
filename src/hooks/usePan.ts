import { useCallback, useState } from 'react';

export interface PanPosition {
  x: number;
  y: number;
}

export function usePan(initial: PanPosition = { x: 0, y: 0 }) {
  const [position, setPosition] =
    useState<PanPosition>(initial);

  const panBy = useCallback(
    (dx: number, dy: number) => {
      setPosition(prev => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    },
    []
  );

  const resetPan = useCallback(() => {
    setPosition(initial);
  }, [initial]);

  return {
    position,
    setPosition,
    panBy,
    resetPan,
  };
}