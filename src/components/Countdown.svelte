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
  <div class="countdown-overlay"></div>
  <div class="content">
    <p class="eyebrow">Faltan</p>
    <div class="timer-grid">
      <div class="time-block">
        <span class="number">{days}</span>
        <span class="label">Días</span>
      </div>
      <span class="separator">:</span>
      <div class="time-block">
        <span class="number">{hours}</span>
        <span class="label">Horas</span>
      </div>
      <span class="separator">:</span>
      <div class="time-block">
        <span class="number">{minutes}</span>
        <span class="label">Minutos</span>
      </div>
      <span class="separator">:</span>
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
    w-full
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat;
    background-image: url("/mykonos.jpg");
    aspect-ratio: 16 / 5;
  }

  .countdown-overlay {
    @apply absolute inset-0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.18),
      rgba(0, 0, 0, 0.32)
    );
    backdrop-filter: blur(1px);
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
  }

  .eyebrow {
    @apply mb-8
    font-serif
    text-[20px]
    uppercase
    tracking-[0.45em]
    text-white/90
    md:text-[30px];
  }

  .timer-grid {
    @apply flex
    items-end
    justify-center
    gap-4
    md:gap-10
    lg:gap-14;
  }

  .time-block {
    @apply flex
    flex-col
    items-center;
  }

  .number {
    @apply font-serif
    text-[4.5rem]
    leading-[0.9]
    tracking-[-0.04em]
    text-white
    md:text-[7rem]
    lg:text-[9rem];
    text-shadow: 0 6px 30px rgba(0, 0, 0, 0.22);
  }

  .label {
    @apply mt-4
  font-sans
  text-[15px]
  font-semibold
  uppercase
  tracking-[0.38em]
  text-white
  opacity-80
  md:text-lg;
  }

  .separator {
    @apply pb-5
    font-serif
    text-4xl
    leading-none
    text-bougainvillea
    md:pb-8
    md:text-6xl
    lg:text-7xl;
    text-shadow: 0 0 18px rgba(255, 0, 140, 0.45);
  }

  @media (max-width: 768px) {
    .countdown-container {
      aspect-ratio: 4 / 5;
      background-position: center;
    }

    .timer-grid {
      @apply grid
      grid-cols-2
      gap-x-8
      gap-y-10;
    }

    .separator {
      @apply hidden;
    }

    .number {
      @apply text-[4rem];
    }
  }
</style>
