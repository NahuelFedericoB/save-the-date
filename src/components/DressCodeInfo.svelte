<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="dresscode-section"
  class:is-visible={reveal.visible}
>
  <div class="grain"></div>
  <div class="ambient-light"></div>
  <div class="background-texture"></div>
  <div class="content-wrapper">
    <div class="decorator-box">
      <div class="corner top-left"></div>
      <div class="corner bottom-right"></div>
      <h2 class="section-title">Dresscode</h2>
      <div class="divider"></div>
      <div class="subtitle-wrapper">
        <span class="mini-line"></span>
        <p class="section-subtitle">Elegante · Elegante Sport</p>
        <span class="mini-line"></span>
      </div>
      <p class="description">
        Queremos que te sientas increíble para celebrar, disfrutar y compartir
        con nosotros una noche inolvidable.
      </p>
      <div class="soft-highlight"></div>
    </div>
  </div>
</section>

<style>
  .dresscode-section {
    @apply relative
     isolate
     flex
     items-center
     justify-center
     overflow-hidden;
    background: linear-gradient(to bottom, #fcfaf7 0%, #f8f5f2 100%);
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    opacity: 0;
    transform: translateY(42px) scale(0.99);
    transition:
      opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 1800ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  }

  .is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  @media (min-width: 768px) {
    .dresscode-section {
      padding-top: 9rem;
      padding-bottom: 9rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  .grain {
    @apply absolute
     inset-0
     z-[1];
    pointer-events: none;
    opacity: 0.04;
    mix-blend-mode: multiply;
    background-image:
      radial-gradient(
        circle at 20% 20%,
        rgba(0, 0, 0, 0.06) 0.4px,
        transparent 0.5px
      ),
      radial-gradient(
        circle at 75% 45%,
        rgba(0, 0, 0, 0.05) 0.5px,
        transparent 0.6px
      );
    background-size: 180px 180px;
  }

  .ambient-light {
    @apply absolute
     inset-0
     z-[2];
    pointer-events: none;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.38) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }

  .background-texture {
    @apply absolute
     inset-0
     z-[3]
     pointer-events-none;
    background:
      radial-gradient(
        circle at top left,
        rgba(225, 0, 149, 0.05),
        transparent 32%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(15, 79, 168, 0.05),
        transparent 34%
      );
    opacity: 0.95;
  }

  .content-wrapper {
    @apply relative
     z-10
     mx-auto
     flex
     w-full
     max-w-5xl
     justify-center;
  }

  .decorator-box {
    @apply relative
     flex
     w-full
     flex-col
     items-center
     text-center
     overflow-hidden;
    padding-top: 5.2rem;
    padding-bottom: 5.2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    background: rgba(255, 255, 255, 0.52);
    border: 1px solid rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(18px);
    box-shadow:
      0 40px 120px rgba(0, 0, 0, 0.06),
      0 15px 35px rgba(0, 0, 0, 0.04);
    isolation: isolate;
  }

  @media (min-width: 768px) {
    .decorator-box {
      padding-top: 5.2rem;
      padding-bottom: 5.2rem;
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }

  .soft-highlight {
    @apply absolute;
    width: 420px;
    height: 420px;
    border-radius: 999px;
    right: -180px;
    top: -180px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.24),
      transparent 70%
    );
    pointer-events: none;
  }

  .corner {
    @apply absolute;
    width: 72px;
    height: 72px;
  }

  .top-left {
    top: 28px;
    left: 28px;
    border-top: 1.5px solid rgba(193, 21, 123, 0.92);
    border-left: 1.5px solid rgba(193, 21, 123, 0.92);
  }

  .bottom-right {
    right: 28px;
    bottom: 28px;
    border-right: 1.5px solid rgba(20, 86, 170, 0.92);
    border-bottom: 1.5px solid rgba(20, 86, 170, 0.92);
  }

  @media (max-width: 768px) {
    .corner {
      width: 52px;
      height: 52px;
    }
    .top-left {
      top: 20px;
      left: 20px;
    }
    .bottom-right {
      right: 20px;
      bottom: 20px;
    }
  }

  .section-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(3.2rem, 6vw, 5rem);
    font-weight: 250;
    line-height: 0.92;
    letter-spacing: -0.04em;
    color: #111111;
    text-rendering: geometricPrecision;
  }

  .divider {
    width: 62px;
    height: 1px;
    margin-top: 2.2rem;
    margin-bottom: 2.8rem;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(193, 21, 123, 0.95),
      transparent
    );
  }

  .subtitle-wrapper {
    @apply flex
     items-center
     justify-center;
    gap: 1rem;
    margin-bottom: 3.2rem;
  }

  .mini-line {
    width: 34px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(193, 21, 123, 0.92),
      transparent
    );
  }

  .section-subtitle {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 650;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: #c1157b;
  }

  @media (min-width: 768px) {
    .section-subtitle {
      font-size: 0.82rem;
    }
  }

  .description {
    max-width: 560px;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.95;
    color: rgba(17, 17, 17, 0.66);
  }

  @media (min-width: 768px) {
    .description {
      font-size: 1.06rem;
      line-height: 2;
    }
  }

  @media (max-width: 768px) {
    .dresscode-section {
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
    .decorator-box {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .section-title {
      font-size: 3.6rem;
    }
    .subtitle-wrapper {
      gap: 0.8rem;
      margin-bottom: 2.8rem;
    }
    .section-subtitle {
      font-size: 0.68rem;
      letter-spacing: 0.28em;
    }
    .description {
      font-size: 0.96rem;
      line-height: 1.9;
    }
    .divider {
      width: 54px;
      margin-top: 1.9rem;
      margin-bottom: 2.2rem;
    }
  }

  @media (max-width: 380px) {
    .section-title {
      font-size: 3.2rem;
    }
    .section-subtitle {
      font-size: 0.6rem;
    }
  }
</style>
