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
      screen.getByRole('img');

    expect(image).toHaveStyle({
      transform:
        'scale(1.2) rotate(0deg)',
    });
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
      screen.getByRole('img');

    expect(image).toHaveStyle({
      transform:
        'scale(1) rotate(90deg)',
    });
  });
});