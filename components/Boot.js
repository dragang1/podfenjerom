"use client";

import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

/** Minimalno koliko dugo ostaje preloader (ms) */
const MIN_LOAD_MS = 1100;
/** Pauza nakon što je stranica spremna, prije curtain reveal */
const READY_DELAY_MS = 180;

export default function Boot({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("is-loading");

    const onReady = () => {
      window.setTimeout(() => {
        root.classList.add("has-dom-ready");
        root.classList.remove("is-loading");

        window.setTimeout(() => {
          root.classList.remove("has-dom-set");
        }, 5000);
      }, READY_DELAY_MS);
    };

    const started = performance.now();

    const finish = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_LOAD_MS - elapsed);
      window.setTimeout(onReady, wait);
    };

    root.classList.add("has-dom-set");

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      root.classList.remove("is-loading", "has-dom-set", "has-dom-ready");
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
}
