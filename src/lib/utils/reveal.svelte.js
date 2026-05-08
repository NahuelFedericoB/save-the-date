export function useReveal() {
  let visible = $state(false);
  let element = $state(null);

  $effect(() => {
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
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
