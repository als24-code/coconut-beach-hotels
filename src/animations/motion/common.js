import { gsap } from "@/lib/gsap";

export const commonAnimation = {
  fadeIn(el, delay = 0) {
    gsap.set(el, { opacity: 0 });
    return gsap.to(el, {
      opacity: 1,
      delay,
      duration: 0.7,
      ease: "power2.out",
    });
  },

  slideUp(el, delay = 0) {
    gsap.set(el, { y: 80, opacity: 0 });
    return gsap.to(el, {
      y: 0,
      opacity: 1,
      delay,
      duration: 0.7,
      ease: "power3.out",
    });
  },

  slideDown(el, delay = 0) {
    gsap.set(el, { y: -30, opacity: 0 });
    return gsap.to(el, {
      y: 0,
      opacity: 1,
      delay,
      duration: 0.7,
      ease: "power3.out",
    });
  },

  slideLeft(el, delay = 0) {
    gsap.set(el, { x: 80, opacity: 0 });
    return gsap.to(el, {
      x: 0,
      opacity: 1,
      delay,
      duration: 0.7,
      ease: "power3.out",
    });
  },

  slideRight(el, delay = 0) {
    gsap.set(el, { x: -80, opacity: 0 });
    return gsap.to(el, {
      x: 0,
      opacity: 1,
      delay,
      duration: 0.7,
      ease: "power3.out",
    });
  },
};