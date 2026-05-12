<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section bind:this={reveal.element} class="hero-container">
  <div class="content-z" class:is-visible={reveal.visible}>
    <p class="subtitle">Save the Date</p>
    <h1 class="main-title">Nahu & Joy</h1>
    <p class="honey-text">Honey, Honey... ¡Nos casamos!</p>
    <p class="date-info">28 de Noviembre <span class="divider">•</span> 2026</p>
    <div class="decorator-container"><div class="line"></div></div>
  </div>
</section>

<style>
  .hero-container {
    @apply relative 
    flex 
    w-full 
    min-h-screen 
    flex-col 
    items-center 
    justify-center 
    overflow-hidden 
    bg-white 
    bg-cover 
    md:bg-[length:100%_100%] 
    bg-center 
    bg-no-repeat 
    p-6 
    text-center;
    background-image: url("/flowerBackground.jpg");
  }

  .content-z {
    @apply z-10 
    flex 
    flex-col 
    items-center
    duration-[1500ms] 
    ease-out /* Podés probar 'ease-[cubic-bezier(0.25,1,0.5,1)]' si querés que desacelere más lindo al final */
    opacity-0 
    scale-75 /* Arranca al 75% de su tamaño (más atrás) */
    transition-[opacity,transform] 
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100 
    scale-100; /* Crece hasta el 100% (se viene hacia la cámara) */
  }

  .subtitle {
    @apply mb-6 
    font-sans 
    text-xs 
    uppercase 
    tracking-[0.5em] 
    text-bougainvillea 
    font-bold 
    md:text-sm;
  }

  .main-title {
    @apply mb-4 
    font-serif 
    text-6xl 
    tracking-tight 
    text-aegean 
    md:text-8xl;
  }

  .honey-text {
    @apply mb-6 
    font-sans 
    text-lg 
    font-medium 
    text-bougainvillea 
    md:text-xl;
  }

  .date-info {
    @apply mb-10 
    font-sans 
    text-lg 
    tracking-wide 
    text-aegean/80 
    font-medium 
    md:text-xl;
  }

  .divider {
    @apply mx-2 
    text-bougainvillea;
  }

  .decorator-container {
    @apply flex 
    justify-center;
  }

  .line {
    @apply h-[2px] 
    w-16 
    bg-aegean 
    md:w-24;
  }
</style>
