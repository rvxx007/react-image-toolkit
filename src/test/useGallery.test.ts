import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useGallery } from '../hooks/useGallery';

const images = [
  { src: '1.jpg' },
  { src: '2.jpg' },
  { src: '3.jpg' },
];

describe('useGallery', () => {
  it('should start with first image', () => {
    const { result } = renderHook(() =>
      useGallery(images)
    );

    expect(result.current.currentIndex).toBe(0);
  });

  it('should go next', () => {
    const { result } = renderHook(() =>
      useGallery(images)
    );

    act(() => {
      result.current.next();
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it('should go previous from first image', () => {
    const { result } = renderHook(() =>
      useGallery(images)
    );

    act(() => {
      result.current.previous();
    });

    expect(result.current.currentIndex).toBe(2);
  });

  it('should go to specific image', () => {
    const { result } = renderHook(() =>
      useGallery(images)
    );

    act(() => {
      result.current.goTo(2);
    });

    expect(result.current.currentIndex).toBe(2);
  });
});