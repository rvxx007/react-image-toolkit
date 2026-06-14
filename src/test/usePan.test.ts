import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePan } from '../hooks/usePan';

describe('usePan', () => {
  it('should initialize position', () => {
    const { result } = renderHook(() =>
      usePan()
    );

    expect(result.current.position).toEqual({
      x: 0,
      y: 0,
    });
  });

  it('should pan image', () => {
    const { result } = renderHook(() =>
      usePan()
    );

    act(() => {
      result.current.panBy(50, 20);
    });

    expect(result.current.position).toEqual({
      x: 50,
      y: 20,
    });
  });

  it('should reset pan', () => {
    const { result } = renderHook(() =>
      usePan()
    );

    act(() => {
      result.current.panBy(50, 20);
      result.current.resetPan();
    });

    expect(result.current.position).toEqual({
      x: 0,
      y: 0,
    });
  });
});