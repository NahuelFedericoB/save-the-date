<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="location-header"
  class:is-visible={reveal.visible}
>
  <h2 class="location-title">¿Dónde daremos el sí?</h2>
  <div class="subtitle-wrapper">
    <div class="line"></div>
    <p class="subtitle-text">Ceremonia & Fiesta</p>
    <div class="line"></div>
  </div>
</section>

<style>
  .location-header {
    @apply pt-32 
    pb-8 
    px-6 
    text-center 
    duration-1000 
    ease-in-out
    opacity-0 
    translate-y-10
    transition-[opacity,transform]
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }

  .location-title {
    @apply font-serif 
    text-5xl 
    md:text-6xl 
    text-aegean 
    mb-6 
    font-bold
    tracking-tight;
  }

  .subtitle-wrapper {
    @apply flex 
    items-center 
    justify-center 
    gap-4;
  }

  .line {
    @apply h-[2px] 
    w-10
    md:w-16 
    bg-bougainvillea;
  }

  .subtitle-text {
    @apply font-sans 
    text-aegean 
    font-bold
    tracking-widest 
    uppercase 
    text-sm;
  }
</style>