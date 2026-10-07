import { gsap, ScrollTrigger } from "@/lib/gsap";

export function animateSection(ref) {
  gsap.from(ref, {
    scrollTrigger: {
      trigger: ref,
      start: "top top",
      end: "top bottom",
    },
    opacity: 0,
    bottom: "200px",
    scale: 0.65,
    ease: "power3.Out",
  });
}
