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
  <h2 class="title">Faltan</h2>
  <div class="timer-grid">
    <div class="unit-box">
      <span>{days}</span>
      <span class="label">Días</span>
    </div>
    <span class="separator">:</span>
    <div class="unit-box">
      <span>{hours}</span>
      <span class="label">Hs</span>
    </div>
    <span class="separator">:</span>
    <div class="unit-box">
      <span>{minutes}</span>
      <span class="label">Min</span>
    </div>
    <span class="separator">:</span>
    <div class="unit-box">
      <span>{seconds}</span>
      <span class="label">Seg</span>
    </div>
  </div>
</section>

<style>
  .countdown-container {
    @apply py-14 
    mx-4 
    md:mx-auto 
    max-w-6xl 
    bg-[#FDFBF7] 
    text-center 
    rounded-[2rem] 
    border-2 
    border-white 
    shadow-2xl 
    shadow-zinc-200/50 
    my-12;
  }

  .title {
    @apply text-2xl 
    font-serif 
    mb-10 
    text-zinc-800;
  }

  .timer-grid {
    @apply flex 
    justify-center 
    gap-4 
    md:gap-8 
    text-4xl 
    md:text-6xl 
    font-serif 
    text-zinc-900;
  }

  .unit-box {
    @apply flex 
    flex-col 
    items-center;
  }

  .label {
    @apply text-xs 
    tracking-widest 
    uppercase 
    mt-4 
    text-zinc-500 
    font-sans;
  }

  .separator {
    @apply text-zinc-300 
    font-light;
  }
</style>
