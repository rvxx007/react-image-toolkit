import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useRotate } from '../hooks/useRotate';

describe('useRotate', () => {
  it('should initialize rotation at 0', () => {
    const { result } = renderHook(() =>
      useRotate()
    );

    expect(result.current.rotation).toBe(0);
  });

  it('should rotate right', () => {
    const { result } = renderHook(() =>
      useRotate()
    );

    act(() => {
      result.current.rotateRight();
    });

    expect(result.current.rotation).toBe(90);
  });

  it('should rotate left', () => {
    const { result } = renderHook(() =>
      useRotate()
    );

    act(() => {
      result.current.rotateLeft();
    });

    expect(result.current.rotation).toBe(-90);
  });

  it('should reset rotation', () => {
    const { result } = renderHook(() =>
      useRotate()
    );

    act(() => {
      result.current.rotateRight();
      result.current.resetRotation();
    });

    expect(result.current.rotation).toBe(0);
  });
});