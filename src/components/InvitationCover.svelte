<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section bind:this={reveal.element} class="hero-container">
  <div class="grain"></div>
  <div class="hero-overlay"></div>
  <div class="ambient-light"></div>
  <div class="content-z" class:is-visible={reveal.visible}>
    <p class="intro-text">Honey, Honey... ¡Nos casamos!</p>
    <h1 class="main-title">
      <span class="name-primary">Nahu</span>
      <span class="ampersand">&</span>
      <span class="name-secondary">Joy</span>
    </h1>
    <div class="meta-wrapper">
      <p class="subtitle">Save the Date</p>
      <div class="date-row">
        <span>21 de Noviembre</span>
        <span class="divider"></span>
        <span>2026</span>
      </div>
    </div>
    <div class="decorator-container">
      <div class="line"></div>
    </div>
  </div>
</section>

<style>
  .hero-container {
    @apply relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#f8f5f2] bg-[url('/hero-mobile.png')] bg-cover bg-center bg-no-repeat px-7 py-32 text-center;
  }

  @media (min-width: 768px) {
    .hero-container {
      @apply min-h-screen items-center bg-[url('/hero-desktop.png')] px-12 py-[5.5rem];
    }
  }

  .grain {
    @apply pointer-events-none absolute inset-0 z-[1] bg-[length:170px_170px] opacity-[0.045] mix-blend-multiply;
    background-image:
      radial-gradient(
        circle at 20% 20%,
        rgba(0, 0, 0, 0.08) 0.4px,
        transparent 0.5px
      ),
      radial-gradient(
        circle at 80% 30%,
        rgba(0, 0, 0, 0.05) 0.5px,
        transparent 0.6px
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(0, 0, 0, 0.05) 0.4px,
        transparent 0.5px
      );
  }

  .hero-overlay {
    @apply absolute inset-0 z-[2];

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.08) 35%,
      rgba(255, 255, 255, 0.14) 100%
    );
  }

  .ambient-light {
    @apply pointer-events-none absolute inset-0 z-[3] opacity-90;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 35%,
      transparent 75%
    );
  }

  .content-z {
    @apply relative z-10 flex translate-y-[34px] scale-[0.985] flex-col items-center opacity-0 transition-[opacity,transform] duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity];
  }

  .is-visible {
    @apply translate-y-[0] scale-[1] opacity-100;
  }

  .intro-text {
    @apply mb-12 max-w-[270px] translate-y-[12px] font-sans text-[0.78rem] font-medium uppercase leading-[1.9] tracking-[0.24em] text-[#c1157b] opacity-0;
    animation: luxuryFade 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 500ms;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 768px) {
    .intro-text {
      @apply max-w-[700px] text-[0.92rem] tracking-[0.34em];
    }
  }

  .main-title {
    @apply flex select-none flex-col items-center leading-[0.86];
  }

  .name-primary,
  .name-secondary {
    @apply font-cover font-light tracking-[-0.06em] text-[#121212] opacity-0 blur-[12px];
    text-rendering: geometricPrecision;
    animation: luxuryReveal 2400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .name-primary {
    @apply text-[clamp(4.8rem,13vw,11rem)];
    animation-delay: 700ms;
  }

  .name-secondary {
    @apply -mt-1 text-[clamp(4.8rem,13vw,11rem)];
    animation-delay: 1100ms;
  }
  
  .ampersand {
    @apply mb-[-0.15rem] mt-[-0.35rem] font-cover text-[clamp(3.4rem,8vw,7rem)] font-light italic leading-none text-[#c1157b] opacity-0;
    transform: scale(0.92) translateY(10px);
    animation: ampReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 950ms;
  }

  .meta-wrapper {
    @apply mt-[2.8rem] flex translate-y-[20px] flex-col items-center opacity-0;
    animation: luxuryFade 2000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1400ms;
  }

  .subtitle {
    @apply font-sans text-[0.7rem] font-semibold uppercase tracking-[0.62em] text-[#c1157b];
  }

  @media (min-width: 768px) {
    .subtitle {
      @apply text-[0.82rem];
    }
  }

  .date-row {
    @apply mt-7 flex items-center justify-center gap-5 font-sans text-[0.92rem] font-medium uppercase tracking-[0.22em] text-[#232323];
  }

  @media (min-width: 768px) {
    .date-row {
      @apply gap-[1.6rem] text-[1rem];
    }
  }

  .divider {
    @apply h-[4px] w-[4px] rounded-[999px] bg-[#c1157b] opacity-[0.85];
  }

  .decorator-container {
    @apply mt-10 flex justify-center;
  }

  .line {
    @apply h-px w-[76px] scale-x-[0.4] opacity-0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(24, 24, 24, 0.78) 50%,
      transparent 100%
    );
    animation: lineReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1900ms;
  }
  @media (max-width: 380px) {
    .name-primary,
    .name-secondary {
      @apply text-[4.2rem];
    }

    .ampersand {
      @apply text-[3rem];
    }

    .intro-text {
      @apply text-[0.72rem] tracking-[0.18em];
    }
  }

  @keyframes luxuryFade {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes luxuryReveal {
    from {
      opacity: 0;
      filter: blur(14px);
      transform: translateY(40px) scale(0.985);
    }

    to {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0) scale(1);
    }
  }

  @keyframes ampReveal {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.88);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes lineReveal {
    from {
      opacity: 0;
      transform: scaleX(0.2);
    }

    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }
</style>
