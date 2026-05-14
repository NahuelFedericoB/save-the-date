<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="dresscode-section"
  class:is-visible={reveal.visible}
>
  <div class="content-wrapper">
    <div class="decorator-box">
      <div class="corner top-left"></div>
      <h2 class="section-title">Dresscode</h2>
      <div class="subtitle-wrapper">
        <span class="mini-line"></span>
        <p class="section-subtitle">Elegante / Elegante Sport</p>
        <span class="mini-line"></span>
      </div>
      <p class="description">
        Queremos que te sientas increíble para celebrar y disfrutar con nosotros esta noche.
      </p>
      <div class="corner bottom-right"></div>
    </div>
  </div>
</section>

<style>
  .dresscode-section {
    @apply relative 
    w-full 
    bg-white
    py-24 
    md:py-32 
    px-6 
    flex 
    justify-center 
    items-center
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

  .content-wrapper {
    @apply w-full 
    max-w-4xl 
    mx-auto 
    flex 
    justify-center;
  }

  .decorator-box {
    @apply relative 
    flex 
    flex-col 
    items-center 
    text-center 
    p-10 
    md:p-16;
  }

  .corner {
    @apply absolute 
    w-12 
    md:w-20 
    h-12 
    md:h-20;
  }

  .top-left {
    @apply top-0 
    left-0 
    border-t-[2px] 
    border-l-[2px] 
    border-bougainvillea;
  }

  .bottom-right {
    @apply bottom-0 
    right-0 
    border-b-[2px] 
    border-r-[2px] 
    border-aegean;
  }
  .section-title {
    @apply font-serif 
    text-5xl 
    md:text-[4.5rem] 
    leading-none 
    tracking-tight 
    text-aegean 
    mb-8;
  }

  .subtitle-wrapper {
    @apply flex 
    items-center 
    justify-center 
    gap-4 
    mb-6;
  }

  .mini-line {
    @apply h-[2px] 
    w-8 
    md:w-12 
    bg-bougainvillea;
  }

  .section-subtitle {
    @apply font-sans 
    text-sm 
    md:text-base 
    font-bold 
    uppercase 
    tracking-[0.25em] 
    text-bougainvillea;
  }

  .description {
    @apply font-sans 
    text-base 
    md:text-lg 
    text-aegean/70 
    max-w-md 
    mx-auto 
    italic;
  }
</style>