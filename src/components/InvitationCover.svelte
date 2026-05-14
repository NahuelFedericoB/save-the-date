<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section bind:this={reveal.element} class="hero-container">
  <div class="hero-overlay"></div>
  <div class="content-z" class:is-visible={reveal.visible}>
     <p class="honey-text">
      Honey, Honey... ¡Nos casamos!
    </p>
    <h1 class="main-title">
      <span class="name-primary">Nahu</span>
      <span class="ampersand">&</span>
      <span class="name-secondary">Joy</span>
    </h1>
   <p class="subtitle">Save the Date</p>
    <p class="date-info">
      28 de Noviembre
      <span class="divider">•</span>
      2026
    </p>
    <div class="decorator-container">
      <div class="line"></div>
    </div>
  </div>
</section>

<style>
  .hero-container {
    @apply relative
    flex
    min-h-screen
    w-full
    items-center
    justify-center
    overflow-hidden
    bg-[#f7f3ef]
    bg-cover
    bg-center
    bg-no-repeat
    px-6
    py-24
    text-center;
    background-image: url("/herobackground.png");
  }

  .hero-overlay {
    @apply absolute inset-0;
    background:
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.72) 0%,
        rgba(255, 255, 255, 0.18) 100%
      );
  }

  .content-z {
    @apply relative
    z-10
    flex
    flex-col
    items-center
    opacity-0
    scale-[0.92]
    transition-all
    duration-[1800ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100
    scale-100;
  }

  .subtitle {
    @apply mb-4
    font-sans
    text-[20px]
    font-semibold
    uppercase
    tracking-[0.45em]
    text-bougainvillea
    mt-12
    md:text-[20px];
  }

  .main-title {
    @apply flex
    flex-col
    items-center
    leading-[0.88]
    tracking-[-0.05em]
    text-aegean;
  }

  .name-primary {
    @apply font-serif
    text-[5.5rem]
    md:text-[9rem]
    lg:text-[11rem];
  }

  .ampersand {
    @apply -my-3
    font-serif
    text-[4.5rem]
    leading-none
    text-bougainvillea
    md:text-[7rem]
    lg:text-[8rem];
  }

  .name-secondary {
    @apply -mt-2
    font-serif
    text-[5.5rem]
    md:text-[9rem]
    lg:text-[11rem];
  }

  .honey-text {
    @apply mt-8
    mb-8
    max-w-xl
    font-sans
    text-lg
    font-medium
    text-bougainvillea
    md:text-xl;
  }

  .date-info {
    @apply mb-12
    font-sans
    text-[22px]
    font-medium
    tracking-[0.12em]
    text-aegean/80
    md:text-xl;
  }

  .divider {
    @apply mx-3
    text-bougainvillea;
  }

  .decorator-container {
    @apply flex justify-center;
  }

  .line {
    @apply h-[2px]
    w-16
    rounded-full
    bg-aegean/80
    md:w-24;
  }
</style>