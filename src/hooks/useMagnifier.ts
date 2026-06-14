import { useState } from 'react';

export function useMagnifier() {
  const [isVisible, setVisible] = useState(false);

  return {
    isVisible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
}