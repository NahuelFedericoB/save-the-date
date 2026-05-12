export function useReveal() {
  let visible = $state(false);
  let element = $state(null);

  $effect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  });

  return {
    get visible() {
      return visible;
    },
    set element(val) {
      element = val;
    },
  };
}
