<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section bind:this={reveal.element} class="hero-container">
  <div class="hero-overlay"></div>
  <div class="content-z" class:is-visible={reveal.visible}>
    <p class="honey-text">Honey, Honey... ¡Nos casamos!</p>
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
    min-h-[100svh]
    w-full
    items-center
    justify-center
    overflow-hidden
    px-6
    py-24
    text-center;

    background-color: #f8f5f2;
    background-image: url("/hero-mobile.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (min-width: 768px) {
    .hero-container {
      background-image: url("/hero-desktop.png");
      background-position: center center;
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
  }

  .hero-overlay {
    @apply absolute inset-0 z-[1];

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.04) 45%,
      rgba(255, 255, 255, 0.08) 100%
    );
  }

  .content-z {
    @apply relative
    z-10
    flex
    flex-col
    items-center
    opacity-0
    translate-y-6
    scale-[0.985]
    transition-all
    duration-[1800ms]
    ease-[cubic-bezier(0.16,1,0.3,1)];

    will-change: transform, opacity;
  }

  .is-visible {
    @apply opacity-100
    translate-y-0
    scale-100;
  }

  .honey-text {
    @apply mb-10 
    mt-8 
    max-w-[240px] 
    font-sans 
    text-[15px] 
    font-medium 
    tracking-[0.04em] 
    text-[#d91c8f];
    line-height: 1.55;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
  }
  @media (min-width: 768px) {
    .honey-text {
      max-width: 520px;
      font-size: 1.05rem;
      letter-spacing: 0.08em;
      line-height: 1.7;
    }
  }

  .main-title {
    @apply flex
    flex-col
    items-center
    leading-[0.90]
    tracking-[-0.065em];
  }

  .name-primary {
    @apply font-serif
    text-[4.6rem]
    text-[#161616]
    md:text-[8.7rem]
    lg:text-[10.8rem];
  }

  .ampersand {
    @apply -my-2
    font-serif
    text-[3.9rem]
    leading-none
    text-[#d6008f]
    md:text-[6.3rem]
    lg:text-[7.2rem];
  }

  .name-secondary {
    @apply -mt-1
    font-serif
    text-[4.6rem]
    text-[#161616]
    md:text-[8.7rem]
    lg:text-[10.8rem];
  }

  .subtitle {
    @apply mt-8
    mb-5
    font-sans
    text-[13px]
    font-semibold
    uppercase
    tracking-[0.42em]
    text-[#d6008f];

    letter-spacing: 0.42em;
  }

  @media (min-width: 768px) {
    .subtitle {
      font-size: 0.95rem;
    }
  }
  .date-info {
    @apply mb-10
    font-sans
    text-[16px]
    font-medium
    tracking-[0.18em]
    text-[#2e2e2e]
    md:text-[19px];
  }

  .divider {
    @apply mx-2
    text-[#d6008f];
  }

  .decorator-container {
    @apply flex justify-center;
  }

  .line {
    @apply h-[1.5px]
    w-14
    rounded-full
    bg-[#2e2e2e]/70
    md:w-20;
  }
  @media (max-width: 380px) {
    .name-primary,
    .name-secondary {
      font-size: 4.1rem;
    }

    .ampersand {
      font-size: 3.3rem;
    }
  }
</style>
