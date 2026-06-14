import { useCallback, useState } from 'react';

export function useZoom(
  min = 1,
  max = 5,
  step = 0.2
) {
  const [scale, setScale] = useState(1);

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + step, max));
  }, [step, max]);

  const zoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - step, min));
  }, [step, min]);

  const resetZoom = useCallback(() => {
    setScale(1);
  }, []);

  return {
    scale,
    zoomIn,
    zoomOut,
    resetZoom,
    setScale,
  };
}