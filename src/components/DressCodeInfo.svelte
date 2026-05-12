<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="dresscode-section"
  class:is-visible={reveal.visible}
>
  <img
    src="/vibrant-pink-right.png"
    alt="Flores decorativas"
    class="flower-top-right"
  />
  <img
    src="/vibrant-pink-right.png"
    alt="Flores decorativas"
    class="flower-bottom-left"
  />
  <div class="content-wrapper">
    <div class="header-container">
      <h2 class="dresscode-title">Dresscode</h2>
      <p class="dresscode-subtitle">MAMMA MIA!</p>
    </div>
    <div class="text-container">
      <p class="dresscode-text">
        Como bien se dieron cuenta la paleta de colores está presente en toda la
        tarjeta, si quieren pueden unirse o traer su propio estilo, 
        <span class="highlight-text">¡sean libres!</span>
      </p>
    </div>
  </div>
</section>

<style>
  .dresscode-section {
    @apply relative 
    max-w-6xl 
    mx-4 
    md:mx-auto 
    py-16 
    md:py-32 
    px-6 
    md:px-20
    border-[3px] 
    border-dotted 
    border-bougainvillea 
    rounded-[3rem] 
    shadow-2xl 
    shadow-bougainvillea/20 
    bg-white/40 
    backdrop-blur-sm
    overflow-hidden 
    duration-1000 
    ease-in-out 
    opacity-0 
    translate-y-20 
    transition-[opacity,transform] 
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }

  .flower-top-right {
    @apply absolute 
    top-0 
    right-0 
    w-32 
    md:w-80 
    -translate-y-2
    md:-translate-y-4 
    translate-x-2
    md:translate-x-6 
    opacity-95 
    pointer-events-none;
  }

  .flower-bottom-left {
    @apply absolute 
    bottom-0 
    left-0 
    w-32 
    md:w-80 
    translate-y-2
    md:translate-y-4 
    -translate-x-2
    md:-translate-x-6 
    rotate-180 
    opacity-95 
    pointer-events-none;
  }

  .content-wrapper {
    @apply relative 
    z-10 
    flex 
    flex-col 
    items-center 
    text-center
    py-8 
    md:py-0;
  }

  .header-container {
    @apply mb-8
    md:mb-10;
  }

  .dresscode-title {
    @apply font-serif 
    text-4xl 
    md:text-5xl 
    text-bougainvillea 
    mb-2
    md:mb-4 
    font-bold
    tracking-tight;
  }

  .dresscode-subtitle {
    @apply font-sans 
    text-xl
    md:text-3xl
    uppercase 
    tracking-[0.2em] 
    text-aegean 
    font-black;
  }

  .text-container {
    @apply max-w-xl 
    mx-auto
    px-2;
  }
  .dresscode-text {
    @apply font-sans 
    text-base 
    md:text-xl 
    text-aegean/90
    leading-relaxed;
  }
  .highlight-text {
    @apply font-serif 
    font-bold 
    italic 
    text-bougainvillea 
    text-lg
    md:text-2xl;
  }
</style>
