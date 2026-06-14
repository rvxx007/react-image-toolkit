export interface ImageViewerProps {
  src: string;
  alt?: string;

  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;

  enableMagnifier?: boolean;
  magnifierSize?: number;

  className?: string;
}