<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();

  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);

  const targetDate = new Date("November 21, 2026 16:00:00").getTime();

  $effect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<section
  bind:this={reveal.element}
  class="countdown-container"
  class:is-visible={reveal.visible}
>
  <div class="grain"></div>
  <div class="overlay"></div>
  <div class="ambient-light"></div>
  <div class="content">
    <p class="eyebrow" class:animate={reveal.visible}>Cada vez falta menos</p>
    <div class="decorator" class:animate={reveal.visible}></div>
    <div class="timer-grid">
      <div class="time-block time-days" class:animate={reveal.visible}>
        <span class="number">{days}</span>
        <span class="label">Días</span>
      </div>
      <span class="separator separator-first" class:animate={reveal.visible}
        >•</span
      >
      <div class="time-block time-hours" class:animate={reveal.visible}>
        <span class="number">{hours}</span>
        <span class="label">Horas</span>
      </div>
      <span class="separator separator-second" class:animate={reveal.visible}
        >•</span
      >
      <div class="time-block time-minutes" class:animate={reveal.visible}>
        <span class="number">{minutes}</span>
        <span class="label">Minutos</span>
      </div>
      <span class="separator separator-third" class:animate={reveal.visible}
        >•</span
      >
      <div class="time-block time-seconds" class:animate={reveal.visible}>
        <span class="number">{seconds}</span>
        <span class="label">Segundos</span>
      </div>
    </div>
  </div>
</section>

<style>
  .countdown-container {
    @apply relative isolate aspect-[16/4.4] w-full overflow-hidden bg-[url('/mykonos.jpg')] bg-cover bg-center;
  }

  .grain {
    @apply pointer-events-none absolute inset-0 z-[1] bg-[length:180px_180px] opacity-5 mix-blend-soft-light;
    background-image:
      radial-gradient(
        circle at 25% 20%,
        rgba(255, 255, 255, 0.12) 0.4px,
        transparent 0.5px
      ),
      radial-gradient(
        circle at 75% 35%,
        rgba(255, 255, 255, 0.08) 0.5px,
        transparent 0.6px
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(255, 255, 255, 0.07) 0.4px,
        transparent 0.5px
      );
  }

  .overlay {
    @apply absolute inset-0 z-[2];
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.28) 0%,
      rgba(0, 0, 0, 0.18) 40%,
      rgba(0, 0, 0, 0.34) 100%
    );
  }

  .ambient-light {
    @apply pointer-events-none absolute inset-0 z-[3];
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.14) 0%,
      rgba(255, 255, 255, 0.04) 35%,
      transparent 75%
    );
  }

  .content {
    @apply absolute inset-0 z-10 flex flex-col items-center justify-center pe-6 ps-6 text-center;
  }

  .eyebrow {
    @apply mb-[1.8rem] translate-y-[18px] font-inter text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-white/[0.84] opacity-0;
  }

  .decorator {
    @apply mb-[3.2rem] h-px w-[84px] scale-x-[0.4] opacity-0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.75),
      transparent
    );
  }

  .timer-grid {
    @apply flex items-end justify-center gap-16;
  }

  .time-block {
    @apply flex translate-y-[26px] scale-[0.98] flex-col items-center opacity-0;
  }

  .number {
    @apply font-cover text-[clamp(4rem,7vw,7.5rem)] font-light leading-[0.88] tracking-[-0.055em] text-white/[0.98] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)];
    text-shadow: 0 10px 35px rgba(0, 0, 0, 0.24);
  }

  .time-block:hover .number {
    @apply -translate-y-[2px];
  }

  .label {
    @apply mt-6 font-inter text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-white/[0.76];
  }

  .separator {
    @apply mt-[-1.2rem] self-center text-[5rem] text-white/[0.45] opacity-0;
  }

  .time-days {
    --d: 0ms;
  }

  .separator-first {
    --d: 150ms;
  }

  .time-hours {
    --d: 300ms;
  }

  .separator-second {
    --d: 450ms;
  }

  .time-minutes {
    --d: 600ms;
  }

  .separator-third {
    --d: 750ms;
  }

  .time-seconds {
    --d: 900ms;
  }

  .animate.eyebrow {
    animation: fadeUp 1400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 200ms;
  }

  .animate.decorator {
    animation: lineReveal 1400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 400ms;
  }

  .animate.time-block {
    animation: blockReveal 1600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: var(--d);
  }

  .animate.separator {
    animation: fadeUp 1400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: var(--d);
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes lineReveal {
    from {
      opacity: 0;
      transform: scaleX(0.3);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes blockReveal {
    from {
      opacity: 0;
      transform: translateY(28px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    .countdown-container {
      @apply aspect-[4/5.4];
    }

    .timer-grid {
      @apply grid grid-cols-2 gap-x-[2.2rem] gap-y-[3.6rem];
    }

    .separator {
      @apply hidden;
    }

    .number {
      @apply text-[4.2rem];
    }

    .label {
      @apply text-[0.62rem] tracking-[0.34em];
    }
  }
</style>
