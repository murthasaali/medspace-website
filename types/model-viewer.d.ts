declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "tone-mapping"?: string;
      exposure?: string;
      "shadow-intensity"?: string;
      "background-color"?: string;
      "reveal"?: string;
      "interaction-prompt"?: string;
      "ar"?: boolean;
      "ar-modes"?: string;
      "camera-orbit"?: string;
      "field-of-view"?: string;
      "min-camera-orbit"?: string;
      "max-camera-orbit"?: string;
    };
  }
}