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
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<section bind:this={reveal.element} class="countdown-container" class:is-visible={reveal.visible}>
  <div class="grain"></div>
  <div class="overlay"></div>
  <div class="ambient-light"></div>
  <div class="content">
    <p class="eyebrow" class:animate={reveal.visible}>Cada vez falta menos</p>
    <div class="decorator" class:animate={reveal.visible}></div>
    <div class="timer-grid">
      <div class="time-block" class:animate={reveal.visible} style="--d:0ms">
        <span class="number">{days}</span>
        <span class="label">Días</span>
      </div>
      <span class="separator" class:animate={reveal.visible} style="--d:150ms">•</span>
      <div class="time-block" class:animate={reveal.visible} style="--d:300ms">
        <span class="number">{hours}</span>
        <span class="label">Horas</span>
      </div>
      <span class="separator" class:animate={reveal.visible} style="--d:450ms">•</span>
      <div class="time-block" class:animate={reveal.visible} style="--d:600ms">
        <span class="number">{minutes}</span>
        <span class="label">Minutos</span>
      </div>
      <span class="separator" class:animate={reveal.visible} style="--d:750ms">•</span>
      <div class="time-block" class:animate={reveal.visible} style="--d:900ms">
        <span class="number">{seconds}</span>
        <span class="label">Segundos</span>
      </div>
    </div>
  </div>
</section>

<style>
.countdown-container {
  @apply relative isolate w-full overflow-hidden;
  background-image: url("/mykonos.jpg");
  background-size: cover;
  background-position: center;
  aspect-ratio: 16 / 4.4;
}

.grain {
  @apply absolute inset-0 z-[1];
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: soft-light;
  background-image:
    radial-gradient(circle at 25% 20%, rgba(255,255,255,0.12) 0.4px, transparent 0.5px),
    radial-gradient(circle at 75% 35%, rgba(255,255,255,0.08) 0.5px, transparent 0.6px),
    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.07) 0.4px, transparent 0.5px);
  background-size: 180px 180px;
}

.overlay {
  @apply absolute inset-0 z-[2];
  background: linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.34) 100%);
}

.ambient-light {
  @apply absolute inset-0 z-[3];
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 35%, transparent 75%);
}

.content {
  @apply absolute inset-0 z-10 flex flex-col items-center justify-center text-center;
  padding-inline: 1.5rem;
}

.eyebrow {
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.84);
  margin-bottom: 1.8rem;
  opacity: 0;
  transform: translateY(18px);
}

.decorator {
  width: 84px;
  height: 1px;
  margin-bottom: 3.2rem;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent);
  opacity: 0;
  transform: scaleX(0.4);
}

.timer-grid {
  @apply flex items-end justify-center;
  gap: 4rem;
}

.time-block {
  @apply flex flex-col items-center;
  opacity: 0;
  transform: translateY(26px) scale(0.98);
}

.number {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(4rem, 7vw, 7.5rem);
  font-weight: 300;
  line-height: 0.88;
  letter-spacing: -0.055em;
  color: rgba(255,255,255,0.98);
  text-shadow: 0 10px 35px rgba(0,0,0,0.24);
  transition: transform 1200ms cubic-bezier(0.16,1,0.3,1);
}

.time-block:hover .number {
  transform: translateY(-2px);
}

.label {
  margin-top: 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.76);
}

.separator {
  @apply self-center;
  margin-top: -1.2rem;
  font-size: 5rem;
  color: rgba(255,255,255,0.45);
  opacity: 0;
}

.animate.eyebrow {
  animation: fadeUp 1400ms cubic-bezier(0.16,1,0.3,1) forwards;
  animation-delay: 200ms;
}

.animate.decorator {
  animation: lineReveal 1400ms cubic-bezier(0.16,1,0.3,1) forwards;
  animation-delay: 400ms;
}

.animate.time-block {
  animation: blockReveal 1600ms cubic-bezier(0.16,1,0.3,1) forwards;
  animation-delay: var(--d);
}

.animate.separator {
  animation: fadeUp 1400ms cubic-bezier(0.16,1,0.3,1) forwards;
  animation-delay: var(--d);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes lineReveal {
  from { opacity: 0; transform: scaleX(0.3); }
  to { opacity: 1; transform: scaleX(1); }
}

@keyframes blockReveal {
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 768px) {
  .countdown-container {
    aspect-ratio: 4 / 5.4;
  }

  .timer-grid {
    @apply grid grid-cols-2;
    gap: 3.6rem 2.2rem;
  }

  .separator {
    display: none;
  }

  .number {
    font-size: 4.2rem;
  }

  .label {
    font-size: 0.62rem;
    letter-spacing: 0.34em;
  }
}
</style>