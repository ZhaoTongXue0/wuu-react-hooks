import { renderHook, act } from '@testing-library/react';
import useBoolean from '../index';

describe('useBoolean hooks', () => {
  it('should work as expected', () => {
    const { result } = renderHook(() => useBoolean());

    // Check the initial state
    expect(result.current[0]).toBe(false);

    // Toggle the state
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true);

    // Set the state to false
    act(() => {
      result.current[1].setFalse();
    });
    expect(result.current[0]).toBe(false);

    // Set the state to true
    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).toBe(true);

    // Set the state using set method
    act(() => {
      result.current[1].set(false);
    });
    expect(result.current[0]).toBe(false);
  });
});
