import { gsap, ScrollTrigger } from "@/lib/gsap";

export function animateComponents(sectionRef, selector, containerRef, opts = {}) {
  const el = sectionRef.current;
  if (!el) return;
  const items = el.querySelectorAll(selector);
  if (!items.length) return;

  return gsap.fromTo(
    items,
    { autoAlpha: 0, y: 40 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        scroller: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}