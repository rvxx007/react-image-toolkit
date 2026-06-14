# react-image-toolkit

A lightweight and powerful React image viewer toolkit with built-in:

* 🔍 Zoom In / Zoom Out
* 🔄 Image Rotation
* 🔎 Magnifier Lens
* 🎯 TypeScript Support
* ⚡ SSR Friendly
* 📦 Tree Shakable
* 🚀 Next.js Compatible

Future Releases:

* Drag & Pan
* Thumbnail Gallery
* Fullscreen Viewer
* Touch Gestures
* Lightbox
* Carousel

---

# Installation

## npm

```bash
npm install react-image-toolkit
```

## yarn

```bash
yarn add react-image-toolkit
```

## pnpm

```bash
pnpm add react-image-toolkit
```

---

# Quick Start

```tsx
import { ImageViewer } from 'react-image-toolkit';

function App() {
  return (
    <ImageViewer
      src="/images/sample.jpg"
      alt="Sample Image"
    />
  );
}

export default App;
```

---

# Import Styles

Import styles once in your application entry point.

## Next.js

```tsx
import 'react-image-toolkit/styles.css';
```

## React Vite

```tsx
import 'react-image-toolkit/styles.css';
```

---

# Basic Usage

```tsx
import { ImageViewer } from 'react-image-toolkit';

export default function App() {
  return (
    <ImageViewer
      src="/images/mountain.jpg"
      alt="Mountain"
    />
  );
}
```

---

# Zoom Configuration

```tsx
<ImageViewer
  src="/image.jpg"
  minZoom={1}
  maxZoom={8}
  zoomStep={0.5}
/>
```

## Props

| Property | Type   | Default |
| -------- | ------ | ------- |
| minZoom  | number | 1       |
| maxZoom  | number | 5       |
| zoomStep | number | 0.2     |

---

# Magnifier

Enable magnifier functionality.

```tsx
<ImageViewer
  src="/image.jpg"
  enableMagnifier
/>
```

## Custom Magnifier Size

```tsx
<ImageViewer
  src="/image.jpg"
  enableMagnifier
  magnifierSize={200}
/>
```

---

# Complete Example

```tsx
import {
  ImageViewer,
} from 'react-image-toolkit';

export default function ProductPage() {
  return (
    <div
      style={{
        width: '700px',
        margin: '0 auto',
      }}
    >
      <ImageViewer
        src="/products/laptop.jpg"
        alt="Laptop"
        minZoom={1}
        maxZoom={10}
        zoomStep={0.25}
        enableMagnifier
        magnifierSize={180}
      />
    </div>
  );
}
```

---

# Available Hooks

The package exposes reusable hooks.

## useZoom

```tsx
import { useZoom } from 'react-image-toolkit';

function Demo() {
  const {
    scale,
    zoomIn,
    zoomOut,
    resetZoom,
  } = useZoom();

  return (
    <>
      <button onClick={zoomIn}>
        Zoom In
      </button>

      <button onClick={zoomOut}>
        Zoom Out
      </button>

      <button onClick={resetZoom}>
        Reset
      </button>

      <p>Scale: {scale}</p>
    </>
  );
}
```

---

## useRotate

```tsx
import { useRotate } from 'react-image-toolkit';

function Demo() {
  const {
    rotation,
    rotateLeft,
    rotateRight,
    resetRotation,
  } = useRotate();

  return (
    <>
      <button onClick={rotateLeft}>
        Left
      </button>

      <button onClick={rotateRight}>
        Right
      </button>

      <button onClick={resetRotation}>
        Reset
      </button>

      <p>{rotation}</p>
    </>
  );
}
```

---

## useMagnifier

```tsx
import {
  useMagnifier,
} from 'react-image-toolkit';

function Demo() {
  const {
    isVisible,
    show,
    hide,
  } = useMagnifier();

  return (
    <>
      <button onClick={show}>
        Show
      </button>

      <button onClick={hide}>
        Hide
      </button>

      <p>
        {isVisible
          ? 'Visible'
          : 'Hidden'}
      </p>
    </>
  );
}
```

---

# API Reference

## ImageViewer

| Prop            | Type    | Default   | Description          |
| --------------- | ------- | --------- | -------------------- |
| src             | string  | required  | Image source         |
| alt             | string  | undefined | Alt text             |
| minZoom         | number  | 1         | Minimum zoom level   |
| maxZoom         | number  | 5         | Maximum zoom level   |
| zoomStep        | number  | 0.2       | Zoom increment       |
| enableMagnifier | boolean | true      | Enable magnifier     |
| magnifierSize   | number  | 150       | Magnifier diameter   |
| className       | string  | undefined | Additional CSS class |

---

# Toolbar

The toolbar includes:

* Zoom In
* Zoom Out
* Rotate Left
* Rotate Right
* Reset Transform

These controls are automatically rendered by the ImageViewer component.

---

# TypeScript Support

All components and hooks are fully typed.

```tsx
import type {
  ImageViewerProps,
} from 'react-image-toolkit';
```

---

# Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅         |
| Firefox | ✅         |
| Safari  | ✅         |
| Edge    | ✅         |

---

# Roadmap

## v1.1

* Drag To Pan
* Pan Hook

## v1.2

* Thumbnail Gallery
* Gallery Hook

## v1.3

* Fullscreen Support

## v1.4

* Keyboard Navigation

## v2.0

* Lightbox
* Carousel
* Touch Gestures
* Image Compare

---

# Contributing

Contributions are welcome.

```bash
git clone <repository-url>

cd react-image-toolkit

npm install

npm run build

npm run test
```

---

# License

MIT License

---

Made with ❤️ for the React community.
