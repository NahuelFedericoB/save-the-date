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
    @apply relative
    flex
    min-h-[100svh]
    w-full
    items-center
    justify-center
    overflow-hidden
    px-7
    py-32
    text-center;

    background-color: #f8f5f2;
    background-image: url("/hero-mobile.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    isolation: isolate;
  }

  @media (min-width: 768px) {
    .hero-container {
      background-image: url("/hero-desktop.png");
      min-height: 100vh;
      padding-top: 5.5rem;
      padding-bottom: 5.5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      align-items: center;
    }
  }

  .grain {
    @apply absolute inset-0 z-[1];

    opacity: 0.045;
    pointer-events: none;
    mix-blend-mode: multiply;
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

    background-size: 170px 170px;
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
    @apply absolute inset-0 z-[3];

    pointer-events: none;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 35%,
      transparent 75%
    );
    opacity: 0.9;
  }

  .content-z {
    @apply relative
    z-10
    flex
    flex-col
    items-center;

    opacity: 0;
    transform: translateY(34px) scale(0.985);
    transition:
      opacity 2200ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 2200ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }

  .is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .intro-text {
    @apply mb-12
    max-w-[270px]
    font-sans;

    font-size: 0.78rem;
    font-weight: 500;
    line-height: 1.9;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #c1157b;
    opacity: 0;
    transform: translateY(12px);
    animation: luxuryFade 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 500ms;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 768px) {
    .intro-text {
      max-width: 700px;
      font-size: 0.92rem;
      letter-spacing: 0.34em;
    }
  }
  .main-title {
    @apply flex
    flex-col
    items-center;

    line-height: 0.86;
    user-select: none;
  }

  .name-primary,
  .name-secondary {
    font-family: "Cormorant Garamond", serif;

    font-weight: 300;
    letter-spacing: -0.06em;
    color: #121212;
    text-rendering: geometricPrecision;
    opacity: 0;
    filter: blur(12px);
    animation: luxuryReveal 2400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .name-primary {
    font-size: clamp(4.8rem, 13vw, 11rem);
    animation-delay: 700ms;
  }

  .name-secondary {
    margin-top: -0.25rem;
    font-size: clamp(4.8rem, 13vw, 11rem);
    animation-delay: 1100ms;
  }
  .ampersand {
    margin-top: -0.35rem;
    margin-bottom: -0.15rem;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(3.4rem, 8vw, 7rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1;
    color: #c1157b;
    opacity: 0;
    transform: scale(0.92) translateY(10px);
    animation: ampReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 950ms;
  }

  .meta-wrapper {
    @apply flex
    flex-col
    items-center;

    margin-top: 2.8rem;
    opacity: 0;
    transform: translateY(20px);
    animation: luxuryFade 2000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1400ms;
  }

  .subtitle {
    @apply font-sans uppercase;

    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.62em;
    color: #c1157b;
  }

  @media (min-width: 768px) {
    .subtitle {
      font-size: 0.82rem;
    }
  }

  .date-row {
    @apply mt-7
    flex
    items-center
    justify-center
    gap-5
    font-sans;

    font-size: 0.92rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #232323;
  }

  @media (min-width: 768px) {
    .date-row {
      font-size: 1rem;
      gap: 1.6rem;
    }
  }

  .divider {
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: #c1157b;
    opacity: 0.85;
  }

  .decorator-container {
    @apply mt-10 flex justify-center;
  }

  .line {
    width: 76px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(24, 24, 24, 0.78) 50%,
      transparent 100%
    );
    opacity: 0;
    transform: scaleX(0.4);
    animation: lineReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1900ms;
  }
  @media (max-width: 380px) {
    .name-primary,
    .name-secondary {
      font-size: 4.2rem;
    }

    .ampersand {
      font-size: 3rem;
    }

    .intro-text {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
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
