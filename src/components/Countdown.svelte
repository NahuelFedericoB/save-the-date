<script>
  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);

  const targetDate = new Date("November 28, 2026 16:00:00").getTime();

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

<section class="countdown-container">
  <div class="grain"></div>
  <div class="overlay"></div>
  <div class="ambient-light"></div>
  <div class="content">
    <p class="eyebrow">Cada vez falta menos</p>
    <div class="decorator"></div>
    <div class="timer-grid">
      <div class="time-block">
        <span class="number">{days}</span>
        <span class="label">Días</span>
      </div>
      <span class="separator">•</span>
      <div class="time-block">
        <span class="number">{hours}</span>
        <span class="label">Horas</span>
      </div>
      <span class="separator">•</span>
      <div class="time-block">
        <span class="number">{minutes}</span>
        <span class="label">Minutos</span>
      </div>
      <span class="separator">•</span>
      <div class="time-block">
        <span class="number">{seconds}</span>
        <span class="label">Segundos</span>
      </div>
    </div>
  </div>
</section>

<style>
.countdown-container {
  @apply relative
  isolate
  w-full
  overflow-hidden;
  background-image: url("/mykonos.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  aspect-ratio: 16 / 4.4;
}

.grain {
  @apply absolute inset-0 z-[1];
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: soft-light;
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
  background-size: 180px 180px;
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
  @apply absolute inset-0 z-[3];
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.04) 35%,
    transparent 75%
  );
}

.content {
  @apply absolute
  inset-0
  z-10
  flex
  flex-col
  items-center
  justify-center
  text-center;
  padding-inline: 1.5rem;
}

.eyebrow {
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.84);
  margin-bottom: 1.8rem;
  opacity: 0;
  transform: translateY(16px);
  animation: fadeReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 300ms;
}

@media (min-width: 768px) {
  .eyebrow {
    font-size: 0.82rem;
    letter-spacing: 0.58em;
    margin-bottom: 2.2rem;
  }
}

.decorator {
  width: 84px;
  height: 1px;
  margin-bottom: 3.2rem;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.75) 50%,
    transparent 100%
  );
  opacity: 0;
  transform: scaleX(0.4);
  animation: lineReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 700ms;
}

.timer-grid {
  @apply flex
  items-end
  justify-center;
  gap: 2.2rem;
}

@media (min-width: 768px) {
  .timer-grid {
    gap: 3.8rem;
  }
}

@media (min-width: 1280px) {
  .timer-grid {
    gap: 5rem;
  }
}

.time-block {
  @apply flex
  flex-col
  items-center;
  opacity: 0;
  transform: translateY(24px) scale(0.98);
  animation: blockReveal 2000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.time-block:nth-child(1) {
  animation-delay: 900ms;
}

.time-block:nth-child(3) {
  animation-delay: 1150ms;
}

.time-block:nth-child(5) {
  animation-delay: 1400ms;
}

.time-block:nth-child(7) {
  animation-delay: 1650ms;
}

.number {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(4rem, 7vw, 7.5rem);
  font-weight: 300;
  line-height: 0.88;
  letter-spacing: -0.055em;
  color: rgba(255, 255, 255, 0.98);
  text-rendering: geometricPrecision;
  text-shadow: 0 10px 35px rgba(0, 0, 0, 0.24);
  transition: transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
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
  color: rgba(255, 255, 255, 0.76);
}

@media (min-width: 768px) {
  .label {
    margin-top: 1.8rem;
    font-size: 0.72rem;
    letter-spacing: 0.48em;
  }
}

.separator {
  @apply self-center;
  margin-top: -1.2rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.45);
  opacity: 0;
  animation: fadeReveal 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.separator:nth-of-type(1) {
  animation-delay: 1050ms;
}

.separator:nth-of-type(2) {
  animation-delay: 1300ms;
}

.separator:nth-of-type(3) {
  animation-delay: 1550ms;
}

@media (max-width: 768px) {
  .countdown-container {
    aspect-ratio: 4 / 5.4;
    background-position: center center;
  }
  .timer-grid {
    @apply grid grid-cols-2;
    gap-row: 3.6rem;
    gap-column: 2.2rem;
  }
  .separator {
    display: none;
  }
  .content {
    padding-inline: 2rem;
  }
  .number {
    font-size: 4.2rem;
  }
  .label {
    font-size: 0.62rem;
    letter-spacing: 0.34em;
  }
}

@keyframes fadeReveal {
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
    transform: scaleX(0.25);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes blockReveal {
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
