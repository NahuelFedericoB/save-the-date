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
        <p class="section-subtitle">Elegante o Elegante Sport</p>
        <span class="mini-line"></span>
      </div>
      <p class="description">
        Si querés ponerte todas las lentejuelas, ¡podés! Y si querés venir más
        sencillo, ¡también! Queremos que te sientas cómodo.
      </p>
      <div class="soft-highlight"></div>
    </div>
  </div>
</section>

<style>
  .dresscode-section {
    @apply relative isolate flex translate-y-[42px] scale-[0.99] items-center justify-center overflow-hidden px-6 py-32 opacity-0 transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity];
    background: linear-gradient(to bottom, #fcfaf7 0%, #f8f5f2 100%);
  }

  .is-visible {
    @apply translate-y-[0] scale-[1] opacity-100;
  }

  @media (min-width: 768px) {
    .dresscode-section {
      @apply px-12 py-36;
    }
  }

  .grain {
    @apply pointer-events-none absolute inset-0 z-[1] bg-[length:180px_180px] opacity-[0.04] mix-blend-multiply;
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
  }

  .ambient-light {
    @apply pointer-events-none absolute inset-0 z-[2];
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.38) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }

  .background-texture {
    @apply pointer-events-none absolute inset-0 z-[3] opacity-[0.95];
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
  }

  .content-wrapper {
    @apply relative z-10 mx-auto flex w-full max-w-5xl justify-center;
  }

  .decorator-box {
    @apply relative isolate flex w-full flex-col items-center overflow-hidden border-[1px] border-solid border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.52)] px-10 py-[5.2rem] text-center backdrop-blur-[18px];
    box-shadow:
      0 40px 120px rgba(0, 0, 0, 0.06),
      0 15px 35px rgba(0, 0, 0, 0.04);
  }

  @media (min-width: 768px) {
    .decorator-box {
      @apply px-24 py-[5.2rem];
    }
  }

  .soft-highlight {
    @apply pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-[999px];
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.24),
      transparent 70%
    );
  }

  .corner {
    @apply absolute h-[72px] w-[72px];
  }

  .top-left {
    @apply left-[28px] top-[28px] border-l-[1.5px] border-t-[1.5px] border-l-[rgba(193,21,123,0.92)] border-t-[rgba(193,21,123,0.92)];
  }

  .bottom-right {
    @apply bottom-[28px] right-[28px] border-b-[1.5px] border-r-[1.5px] border-b-[rgba(20,86,170,0.92)] border-r-[rgba(20,86,170,0.92)];
  }

  @media (max-width: 768px) {
    .corner {
      @apply h-[52px] w-[52px];
    }
    .top-left {
      @apply left-[20px] top-[20px];
    }
    .bottom-right {
      @apply bottom-[20px] right-[20px];
    }
  }

  .section-title {
    @apply font-cover text-[clamp(3.2rem,6vw,5rem)] font-[250] leading-[0.92] tracking-[-0.04em] text-[#111111];
    text-rendering: geometricPrecision;
  }

  .divider {
    @apply mb-[2.8rem] mt-[2.2rem] h-px w-[62px];
    background: linear-gradient(
      90deg,
      transparent,
      rgba(193, 21, 123, 0.95),
      transparent
    );
  }

  .subtitle-wrapper {
    @apply mb-[3.2rem] flex items-center justify-center gap-4;
  }

  .mini-line {
    @apply h-px w-[34px];
    background: linear-gradient(
      90deg,
      transparent,
      rgba(193, 21, 123, 0.92),
      transparent
    );
  }

  .section-subtitle {
    @apply font-inter text-[0.78rem] font-[650] uppercase tracking-[0.42em] text-[#c1157b];
  }

  @media (min-width: 768px) {
    .section-subtitle {
      @apply text-[0.82rem];
    }
  }

  .description {
    @apply max-w-[560px] font-inter text-[1rem] font-normal leading-[1.95] text-[rgba(17,17,17,0.66)];
  }

  @media (min-width: 768px) {
    .description {
      @apply text-[1.06rem] leading-[2];
    }
  }

  @media (max-width: 768px) {
    .dresscode-section {
      @apply pb-28 pt-28;
    }
    .decorator-box {
      @apply pb-[4.5rem] pl-8 pr-8 pt-[4.5rem];
    }
    .section-title {
      @apply text-[3.6rem];
    }
    .subtitle-wrapper {
      @apply mb-[2.8rem] gap-[0.8rem];
    }
    .section-subtitle {
      @apply text-[0.68rem] tracking-[0.28em];
    }
    .description {
      @apply text-[0.96rem] leading-[1.9];
    }
    .divider {
      @apply mb-[2.2rem] mt-[1.9rem] w-[54px];
    }
  }

  @media (max-width: 380px) {
    .section-title {
      @apply text-[3.2rem];
    }
    .section-subtitle {
      @apply text-[0.6rem];
    }
  }
</style>
