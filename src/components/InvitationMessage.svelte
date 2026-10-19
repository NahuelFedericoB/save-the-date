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
      Este es un día muy especial
      <br class="desktop-only" />
      para nosotros
    </h2>
    <p class="invitation-text">¡Y que mejor que compartirlo con vos!</p>
    <div class="divider-container">
      <div class="divider-line"></div>
    </div>
  </div>
</section>

<style>
  .invitation-section {
    @apply translate-y-10 px-6 py-24 text-center opacity-0 transition-[opacity,transform] duration-1000 ease-in-out will-change-transform;
  }

  .is-visible {
    @apply translate-y-0 opacity-100;
  }

  .message-container {
    @apply relative mx-auto max-w-5xl px-8 py-14 md:px-14 md:py-16;
  }
  .message-container::before {
    @apply absolute right-0 top-0 h-14 w-14 border-r-[2px] border-t-[2px] border-r-[rgba(20,86,170,0.92)] border-t-[rgba(20,86,170,0.92)] content-[''] md:h-20 md:w-20;
  }

  .message-container::after {
    @apply absolute bottom-0 left-0 h-14 w-14 border-b-[2px] border-l-[2px] border-b-[rgba(20,86,170,0.92)] border-l-[rgba(20,86,170,0.92)] content-[''] md:h-20 md:w-20;
  }
  .divider-container {
    @apply my-7 flex justify-center;
  }

  .divider-line {
    @apply h-[2px] w-16 bg-[#d6008f];
  }

  .invitation-title {
    @apply mb-8 font-serif text-[2.7rem] leading-[1.12] tracking-[-0.035em] text-[#181818];
  }

  @media (min-width: 768px) {
    .invitation-title {
      @apply text-[4.6rem] leading-[1.05];
    }
  }

  .invitation-text {
    @apply font-sans text-[1.25rem] font-medium italic leading-[1.65] tracking-[0.01em] text-[rgba(30,30,30,0.72)] md:text-[1.6rem];
  }
  .desktop-only {
    @apply hidden md:block;
  }
</style>
