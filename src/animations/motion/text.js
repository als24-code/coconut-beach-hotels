import { gsap, SplitText } from "@/lib/gsap";

export function blurTextReveal(el) {
  const myText = new SplitText(el, { type: "words" });

  return gsap.fromTo(
    myText.words,
    { filter: "blur(12px)", opacity: 0 },
    { filter: "blur(0px)", opacity: 1, stagger: 0.15 },
  );
}
