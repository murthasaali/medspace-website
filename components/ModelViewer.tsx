"use client";
import { useEffect } from "react";

let scriptLoaded = false;

function loadModelViewerScript() {
  return new Promise<void>((resolve) => {
    if (scriptLoaded) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    document.head.appendChild(script);
  });
}

interface ModelViewerProps {
  src: string;
  alt?: string;
  className?: string;
  exposure?: string;
  rotate?: string;
}

export default function ModelViewer({
  src,
  alt = "3D model",
  className = "",
  exposure = "0.9",
  rotate = "0deg 0deg auto",
}: ModelViewerProps) {
  useEffect(() => {
    loadModelViewerScript();
  }, []);

  return (
    <model-viewer
      className={className}
      src={src}
      alt={alt}
      auto-rotate
      camera-controls
      disable-zoom
      tone-mapping="neutral"
      exposure={exposure}
      shadow-intensity="0.2"
      camera-orbit={rotate}
      interaction-prompt="none"
      style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
    />
  );
}