"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useLocomotiveScroll(containerRef) {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- reset scroll to top on refresh ---
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      scrollCallback: ({ scroll, limit, velocity, direction, progress }) => {
        ScrollTrigger.update();
      },
    });

    locomotiveScroll.scrollTo(0, { duration: 0, disableLerp: true });

    setScroll(locomotiveScroll);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      locomotiveScroll.destroy();
    };
  }, [containerRef]);

  return scroll;
}
