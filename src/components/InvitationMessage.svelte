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
    <div class="divider-container">
      <div class="divider-line"></div>
    </div>
    <h2 class="invitation-title">
      Este es un día muy especial <br class="desktop-only" /> para nosotros
    </h2>
    <p class="invitation-text">
      ¡Y que mejor que compartirlo con ustedes! <br />
    </p>
    <div class="divider-container">
      <div class="divider-line"></div>
    </div>
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
    @apply max-w-2xl 
    mx-auto;
  }

  .divider-container {
    @apply flex 
    justify-center 
    mt-10
    mb-10;
  }

  .divider-line {
    @apply h-[1px] 
    w-12 
    bg-zinc-300;
  }

  .invitation-title {
    @apply font-serif 
    text-3xl 
    md:text-5xl 
    text-zinc-800 
    leading-tight 
    mb-8;
  }

  .invitation-text {
    @apply font-sans 
    text-lg 
    md:text-xl 
    text-zinc-500 
    tracking-wide 
    font-light 
    italic;
  }

  .desktop-only {
    @apply hidden 
    md:block;
  }
</style>
