export interface ImageViewerProps {
  src: string;
  alt?: string;

  zoom?: boolean;
  rotate?: boolean;
  magnifier?: boolean;

  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
}