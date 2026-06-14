import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ImageViewer } from '../components/ImageViewer/ImageViewer';

describe('ImageViewer', () => {
  it('renders image', () => {
    render(
      <ImageViewer
        src="test.jpg"
        alt="test-image"
      />
    );

    expect(
      screen.getByAltText('test-image')
    ).toBeInTheDocument();
  });

  it('zoom button changes scale', () => {
    render(
      <ImageViewer
        src="test.jpg"
      />
    );

    fireEvent.click(
      screen.getByText('+')
    );

    const image =
      screen.getByRole('img') as HTMLImageElement;

    expect(
      image.style.transform
    ).toContain('scale(1.2)');

    expect(
      image.style.transform
    ).toContain('rotate(0deg)');
  });

  it('rotate button changes rotation', () => {
    render(
      <ImageViewer
        src="test.jpg"
      />
    );

    fireEvent.click(
      screen.getByText('↻')
    );

    const image =
      screen.getByRole('img') as HTMLImageElement;

    expect(
      image.style.transform
    ).toContain('scale(1)');

    expect(
      image.style.transform
    ).toContain('rotate(90deg)');
  });

  it('reset button resets zoom and rotation', () => {
    render(
      <ImageViewer
        src="test.jpg"
      />
    );

    fireEvent.click(
      screen.getByText('+')
    );

    fireEvent.click(
      screen.getByText('↻')
    );

    fireEvent.click(
      screen.getByText('Reset')
    );

    const image =
      screen.getByRole('img') as HTMLImageElement;

    expect(
      image.style.transform
    ).toContain('scale(1)');

    expect(
      image.style.transform
    ).toContain('rotate(0deg)');
  });
});