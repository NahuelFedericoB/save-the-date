<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  class:is-visible={reveal.visible}
  id="fiesta-location"
>
  <div class="background-flower-right"></div>
  <div class="venue-grid">
    <div class="card-wrapper order-2 lg:order-1">
      <div class="venue-card">
        <div class="image-wrapper">
          <img
            src="https://diariolaciudadavellaneda.com.ar/wp-content/uploads/2026/03/MAQUINITA.quilmes.43-1.jpg"
            alt="Salón de Fiesta Rooftop La Maquinita"
            class="venue-image"
          />
        </div>
        <div class="card-content">
          <h3 class="card-title">Fiesta</h3>
          
          <div class="info-list">
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span>Rooftop La Maquinita</span>
            </div>
          </div>
          <div class="map-wrapper">
            <div class="map-overlay pointer-events-none absolute inset-0 z-10"></div>
            <iframe
              title="Mapa Fiesta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.123456789!2d-58.300000!3d-34.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Caseros%201750%2C%20Don%20Bosco!5e0!3m2!1ses!2sar!4v1610000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen={true}
              loading="lazy"
              class="absolute inset-0 z-0 opacity-50 grayscale"
            ></iframe>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              class="maps-button"
            >
              Ver en Maps
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18m0 0v4.5M18 6 10.5 13.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5v4.125c0 .621-.504 1.125-1.125 1.125H6.375A1.125 1.125 0 0 1 5.25 17.625V10.125C5.25 9.504 5.754 9 6.375 9H10.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="title-side order-1 lg:order-2">
      <div class="title-decorator-box">
        <div class="corner top-right"></div>   
        <h2 class="section-title">
          A continuación<br />
          de la<br />
          ceremonia
        </h2>
        <div class="subtitle-wrapper">
          <span class="mini-line"></span>
          <p class="section-subtitle">Recepción & Fiesta</p>
        </div>
        <div class="corner bottom-left"></div>
      </div>
    </div>

  </div>
</section>

<style>
  .venue-section {
    @apply relative 
    w-full 
    overflow-hidden 
    bg-[#fdfbf8] 
    py-20 
    md:py-32 
    px-6 
    md:px-12
    duration-1000 
    ease-in-out 
    opacity-0 
    translate-y-10 
    transition-[opacity,transform] 
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }

  .background-flower-right {
    @apply absolute 
    right-0 
    top-0 
    w-[300px] 
    md:w-[600px] 
    h-full 
    opacity-85 
    pointer-events-none 
    bg-cover 
    bg-left
    bg-no-repeat
    scale-x-[-1];
    background-image: url("/mesa.jpg");
    mix-blend-mode: multiply; 
    -webkit-mask-image: linear-gradient(to right, black 40%, transparent 100%);
    mask-image: linear-gradient(to right, black 40%, transparent 100%);
  }

  .venue-grid {
    @apply relative 
    z-10 
    mx-auto 
    max-w-6xl 
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center 
    gap-12 
    lg:gap-20;
  }

  .title-side {
    @apply flex 
    justify-center 
    lg:justify-end;
  }

  .title-decorator-box {
    @apply relative 
    flex 
    flex-col 
    items-center 
    text-center 
    lg:items-start 
    lg:text-left
    p-8 
    md:p-12;
  }
  .corner {
    @apply absolute 
    w-16 
    md:w-24 
    h-16 
    md:h-24;
  }

  .top-right {
    @apply top-0 
    right-0 
    border-t-[2px] 
    border-r-[2px] 
    border-bougainvillea;
  }

  .bottom-left {
    @apply bottom-0 
    left-0 
    border-b-[2px] 
    border-l-[2px] 
    border-aegean;
  }

  .section-title {
    @apply font-serif 
    text-[3.5rem] 
    md:text-[4.5rem] 
    lg:text-[4rem] 
    leading-[1.05] 
    tracking-tight 
    text-aegean;
  }

  .subtitle-wrapper {
    @apply mt-8 
    flex 
    items-center 
    gap-4;
  }

  .mini-line {
    @apply h-[2px] 
    w-8 
    bg-bougainvillea;
  }

  .section-subtitle {
    @apply font-sans 
    text-xs 
    font-bold 
    uppercase 
    tracking-[0.3em] 
    text-aegean;
  }

  .card-wrapper {
    @apply flex 
    justify-center 
    lg:justify-start 
    w-full;
  }

  .venue-card {
    @apply w-full 
    max-w-[550px] 
    bg-white 
    rounded-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.05)]
    border
    border-zinc-100
    p-4 
    md:p-6;
  }

  .image-wrapper {
    @apply w-full
    h-[200px] 
    md:h-[240px] 
    rounded-lg
    overflow-hidden;
  }

  .venue-image {
    @apply w-full 
    h-full 
    object-cover;
  }

  .card-content {
    @apply pt-8 
    pb-2 
    px-0; 
  }

  .card-title {
    @apply mb-6 
    font-serif 
    text-3xl 
    text-aegean;
  }

  .info-list {
    @apply mb-8 
    flex
    flex-col
    md:flex-row
    md:justify-between
    gap-5
    md:gap-8;
  }

  .info-item {
    @apply flex 
    items-start 
    gap-3 
    font-sans 
    text-[0.95rem] 
    leading-snug
    text-zinc-600
    md:flex-1; 
  }

  .icon-svg {
    @apply w-6 
    h-6 
    text-bougainvillea 
    shrink-0;
  }

  .map-wrapper {
    @apply relative 
    h-[160px] 
    w-full 
    overflow-hidden 
    rounded-xl 
    border 
    border-zinc-200 
    bg-zinc-50;
  }

  .maps-button {
    @apply absolute 
    bottom-4 
    right-4 
    z-20 
    flex 
    items-center 
    gap-2 
    w-max 
    whitespace-nowrap 
    rounded-md 
    border 
    border-bougainvillea/40 
    bg-white/95 
    px-4 
    py-2.5 
    font-sans 
    text-[11px] 
    font-bold 
    uppercase 
    tracking-[0.1em] 
    text-bougainvillea 
    shadow-sm
    transition-all 
    duration-300 
    hover:bg-bougainvillea 
    hover:text-white;
  }
</style>