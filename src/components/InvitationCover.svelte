<section class="hero-container">
  <p class="subtitle animate-fade-in">Nuestra Boda</p>
  <h1 class="main-title">Nahu & Joy</h1>
  <p class="date-info">
    28 de Noviembre <span class="divider">•</span> 2026
  </p>
  <div class="decorator-container">
    <div class="line"></div>
  </div>
</section>

<style>
  .hero-container {
    @apply flex 
    min-h-screen 
    flex-col 
    items-center 
    justify-center 
    overflow-hidden 
    bg-white p-6 
    text-center;
  }

  .subtitle {
    @apply mb-6 
    font-sans 
    text-xs 
    uppercase 
    tracking-[0.5em] 
    text-zinc-400 
    md:text-sm;
  }

  .main-title {
    @apply mb-6 
    font-serif 
    text-6xl 
    tracking-tight 
    text-zinc-900 
    md:text-8xl;
  }

  .date-info {
    @apply mb-10 
    font-sans 
    text-lg 
    tracking-wide 
    text-zinc-500 
    md:text-xl;
  }

  .divider {
    @apply mx-2 
    text-zinc-300;
  }

  .decorator-container {
    @apply flex 
    justify-center;
  }

  .line {
    @apply h-[2px] 
    w-16 bg-zinc-200 md:w-24;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1.5s ease-out;
  }
</style>
