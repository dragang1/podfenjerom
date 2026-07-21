"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal.
 * type: wipe | slide-x | slide-x-right | line-mask
 */
export default function RevealOnView({
  as: Tag = "div",
  type = "slide-x",
  className = "",
  children,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-revealed");
      return;
    }

    let done = false;
    let ticking = false;
    let observer = null;

    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-revealed");
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const check = () => {
      ticking = false;
      if (done) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Reveal once the element's top crosses the viewport threshold.
      // Do not require its bottom to still be visible: short elements can be
      // skipped between two scroll frames on fast wheels / mobile momentum.
      if (rect.top < vh * 0.9) {
        reveal();
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(check);
    };

    // initial check (covers content already in view on load)
    check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Observer handles normal scrolling; the manual check above is a fallback
    // for clipped, transformed and unusually tall elements.
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.01, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${type}${className ? ` ${className}` : ""}`}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
