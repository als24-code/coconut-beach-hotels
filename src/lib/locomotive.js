let instance = null;

export async function initLocomotive(containerEl, scrollTriggerUpdate) {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;

  instance = new LocomotiveScroll({
    el: containerEl,
    smooth: true,
    multiplier: 0.9,
    lerp: 0.08,
    scrollCallback: ({ scroll, limit, velocity, direction, progress }) => {
      scrollTriggerUpdate();
    }
  });

  console.log(instance, "instance")

  return instance;
}

export function getLocomotiveInstance() {
  return instance;
}

export function destroyLocomotive() {
  if (instance) {
    instance.destroy();
    instance = null;
  }
}
