import { useCallback, useState } from 'react';

export interface GalleryItem {
  src: string;
  alt?: string;
}

export function useGallery(
  images: GalleryItem[]
) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const next = useCallback(() => {
    setCurrentIndex(prev =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  }, [images.length]);

  const previous = useCallback(() => {
    setCurrentIndex(prev =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  }, [images.length]);

  const goTo = useCallback(
    (index: number) => {
      if (
        index >= 0 &&
        index < images.length
      ) {
        setCurrentIndex(index);
      }
    },
    [images.length]
  );

  return {
    currentIndex,
    currentImage:
      images[currentIndex] ?? null,
    next,
    previous,
    goTo,
  };
}