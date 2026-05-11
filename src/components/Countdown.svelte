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
  <div class="overlay">
    <h2 class="title">Faltan</h2>
    <div class="timer-grid">
      <div class="unit-box">
        <span class="number">{days}</span><span class="label">Días</span>
      </div>
      <span class="separator">:</span>
      <div class="unit-box">
        <span class="number">{hours}</span><span class="label">Hs</span>
      </div>
      <span class="separator">:</span>
      <div class="unit-box">
        <span class="number">{minutes}</span><span class="label">Min</span>
      </div>
      <span class="separator">:</span>
      <div class="unit-box">
        <span class="number">{seconds}</span><span class="label">Seg</span>
      </div>
    </div>
  </div>
</section>

<style>
  .countdown-container {
    @apply relative 
    mx-4 
    md:mx-auto 
    max-w-6xl 
    overflow-hidden 
    rounded-[2rem] 
    border-[3px] 
    border-bougainvillea 
    shadow-2xl 
    shadow-bougainvillea/20 
    my-12 
    bg-cover 
    bg-center 
    bg-no-repeat;
    background-image: url("/mykonos.jpg");
  }

  .countdown-container::before {
    content: "";
    @apply absolute 
    inset-0 
    bg-gradient-to-b 
    from-black/60 
    via-black/30 
    to-black/70 
    z-0;
  }

  .overlay {
    @apply relative 
    z-10 
    py-12 
    px-2 
    md:py-24 
    text-center;
  }

  .title {
    @apply text-lg 
    md:text-2xl 
    font-serif 
    mb-8 
    text-white 
    font-bold 
    uppercase 
    tracking-[0.4em];
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
  }

  .timer-grid {
    @apply flex 
    justify-center 
    items-start 
    gap-2 
    md:gap-8 
    font-serif;
  }

  .number {
    @apply text-3xl 
    md:text-8xl 
    text-white 
    font-bold 
    leading-none;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
  }

  .unit-box {
    @apply flex 
    flex-col 
    items-center 
    w-auto;
  }

  .label {
    @apply text-[10px] 
    md:text-xs 
    tracking-[0.2em] 
    uppercase 
    mt-4 
    px-3 
    py-1 
    rounded-full 
    bg-aegean/90 
    text-white 
    font-sans 
    font-bold;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .separator {
    @apply text-2xl 
    md:text-6xl 
    text-white 
    font-bold 
    pt-1 
    md:pt-4;
    filter: drop-shadow(0 0 5px theme("colors.bougainvillea"));
  }
</style>
