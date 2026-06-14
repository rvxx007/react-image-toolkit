'use client';

import React, {
  useCallback,
  useState,
} from 'react';

import { useZoom } from '../../hooks/useZoom';
import { useRotate } from '../../hooks/useRotate';
import { Toolbar } from '../Toolbar/Toolbar';
import { Magnifier } from '../Magnifier/Magnifier';

import type { ImageViewerProps } from '../../types';

export function ImageViewer({
  src,
  alt,
  minZoom = 1,
  maxZoom = 5,
  zoomStep = 0.2,
  enableMagnifier = true,
  magnifierSize = 150,
}: ImageViewerProps) {
  const {
    scale,
    zoomIn,
    zoomOut,
    resetZoom,
  } = useZoom(
    minZoom,
    maxZoom,
    zoomStep
  );

  const {
    rotation,
    rotateLeft,
    rotateRight,
    resetRotation,
  } = useRotate();

  const [showMag, setShowMag] =
    useState(false);

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (event.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    },
    [zoomIn, zoomOut]
  );

  return (
    <div className="rit-container">
      <Toolbar
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        reset={() => {
          resetZoom();
          resetRotation();
        }}
      />

      <div
        className="rit-viewer"
        onWheel={handleWheel}
        onMouseEnter={() =>
          setShowMag(true)
        }
        onMouseLeave={() =>
          setShowMag(false)
        }
        onMouseMove={e => {
          const rect =
            e.currentTarget.getBoundingClientRect();

          setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="rit-image"
          style={{
            transform: `
            scale(${scale})
            rotate(${rotation}deg)
          `,
          }}
        />

        {enableMagnifier &&
          showMag && (
            <Magnifier
              src={src}
              x={position.x}
              y={position.y}
              size={magnifierSize}
            />
          )}
      </div>
    </div>
  );
}