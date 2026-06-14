import { useCallback, useState } from 'react';

export function useRotate() {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = useCallback(() => {
    setRotation(prev => prev - 90);
  }, []);

  const rotateRight = useCallback(() => {
    setRotation(prev => prev + 90);
  }, []);

  const resetRotation = useCallback(() => {
    setRotation(0);
  }, []);

  return {
    rotation,
    rotateLeft,
    rotateRight,
    resetRotation,
  };
}