import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useZoom } from '../hooks/useZoom';

describe('useZoom', () => {
  it('should initialize with scale 1', () => {
    const { result } = renderHook(() => useZoom());

    expect(result.current.scale).toBe(1);
  });

  it('should zoom in', () => {
    const { result } = renderHook(() =>
      useZoom(1, 5, 0.5)
    );

    act(() => {
      result.current.zoomIn();
    });

    expect(result.current.scale).toBe(1.5);
  });

  it('should zoom out', () => {
    const { result } = renderHook(() =>
      useZoom(1, 5, 0.5)
    );

    act(() => {
      result.current.zoomIn();
      result.current.zoomOut();
    });

    expect(result.current.scale).toBe(1);
  });

  it('should not exceed max zoom', () => {
    const { result } = renderHook(() =>
      useZoom(1, 2, 1)
    );

    act(() => {
      result.current.zoomIn();
      result.current.zoomIn();
      result.current.zoomIn();
    });

    expect(result.current.scale).toBe(2);
  });

  it('should reset zoom', () => {
    const { result } = renderHook(() =>
      useZoom()
    );

    act(() => {
      result.current.zoomIn();
      result.current.resetZoom();
    });

    expect(result.current.scale).toBe(1);
  });
});