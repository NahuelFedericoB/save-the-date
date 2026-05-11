<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="invitation-section"
  class:is-visible={reveal.visible}
>
  <div class="message-container">
    <div class="divider-container"><div class="divider-line"></div></div>
    <h2 class="invitation-title">
      Este es un día muy especial <br class="desktop-only" /> para nosotros
    </h2>
    <p class="invitation-text">
      ¡Y que mejor que compartirlo con ustedes! <br />
    </p>
    <div class="divider-container"><div class="divider-line"></div></div>
  </div>
</section>

<style>
  .invitation-section {
    @apply py-28 
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

  .message-container {
    @apply relative 
    max-w-6xl 
    mx-auto 
    p-8 
    md:p-12;
  }

  .message-container::before {
    content: "";
    @apply absolute 
    top-0 
    right-0 
    h-16 
    w-16 
    border-t-[3px] 
    border-r-[3px] 
    border-aegean 
    md:h-24 
    md:w-24;
  }

  .message-container::after {
    content: "";
    @apply absolute 
    bottom-0 
    left-0 
    h-16 
    w-16 
    border-b-[3px] 
    border-l-[3px] 
    border-aegean 
    md:h-24 
    md:w-24;
  }

  .divider-container {
    @apply flex 
    justify-center 
    mt-6 
    mb-6;
  }

  .divider-line {
    @apply h-[2px] 
    w-12 
    bg-bougainvillea;
  }

  .invitation-title {
    @apply font-serif 
    text-3xl 
    md:text-5xl 
    text-aegean 
    leading-tight 
    mb-8;
  }

  .invitation-text {
    @apply font-sans 
    text-lg 
    md:text-xl 
    text-aegean/80 
    tracking-wide 
    font-medium 
    italic;
  }

  .desktop-only {
    @apply hidden 
    md:block;
  }
</style>
