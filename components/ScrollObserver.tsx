"use client";

import { useEffect, useState } from "react";

export default function ScrollObserver() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Reading progress indicator calculation
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. IntersectionObserver for scroll reveals
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    const observeElements = () => {
      const targets = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-visible), .reveal-fade:not(.is-visible), .reveal-scale:not(.is-visible)"
      );
      targets.forEach((el) => observer.observe(el));
    };

    // Initial pass
    observeElements();

    // In case content renders or hydrates shortly after
    const timeoutId = setTimeout(observeElements, 250);

    // MutationObserver to catch dynamically rendered elements
    const mutObserver = new MutationObserver(() => {
      observeElements();
    });

    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Ventriloc subtle ember reading progress bar at top of viewport */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-ember-orange z-[60] transition-all duration-75 pointer-events-none opacity-85"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </>
  );
}
