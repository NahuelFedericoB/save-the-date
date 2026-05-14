<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  class:is-visible={reveal.visible}
>
  <div class="background-flower"></div>
  <div class="venue-grid">
    <div class="title-side">
      <div class="title-decorator-box">
        <div class="corner top-left"></div>
        <h2 class="section-title">
          ¿Dónde<br />
          daremos<br />
          el sí?
        </h2>
        <div class="corner bottom-right"></div>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="venue-card">
        <div class="image-wrapper">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a5/8b/79/fachada-frontal.jpg?w=1400&h=-1&s=1"
            alt="Iglesia Loreto"
            class="church-image"
          />
        </div> 
        <div class="card-content">
          <h3 class="card-title">Ceremonia Religiosa</h3>          
          <div class="info-list">
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
              </svg>
              <span>16:00 hs</span>
            </div>           
            <div class="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span>Nuestra Señora del Loreto, Sarandí</span>
            </div>
          </div>
          <div class="map-wrapper">
            <div class="map-overlay pointer-events-none absolute inset-0 z-10"></div>
            <iframe
              title="Mapa Iglesia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3364955761355!2d-58.3444004!3d-34.6714004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3331a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sAv.%20Bartolom%C3%A9%20Mitre%203779%2C%20Sarand%C3%AD!5e0!3m2!1ses!2sar!4v1610000000000!5m2!1ses!2sar"
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

  /* --- FIX DE LA IMAGEN DE FONDO --- */
  .background-flower {
    @apply absolute 
    left-0 
    top-0 
    w-[300px] 
    /* Hacemos el contenedor un poco más ancho en desktop para que el difuminado tenga espacio */
    md:w-[600px] 
    h-full 
    opacity-85 
    pointer-events-none 
    bg-cover 
    bg-left 
    bg-no-repeat;
    
    background-image: url("/venue-flowers.png");
    
    /* 1. Mezcla los colores: el blanco de la imagen se vuelve transparente */
    mix-blend-mode: multiply; 
    
    /* 2. Máscara de gradiente: Difumina el borde derecho hacia la nada */
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
    lg:justify-start;
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

  .top-left {
    @apply top-0 
    left-0 
    border-t-[2px] 
    border-l-[2px] 
    border-bougainvillea;
  }

  .bottom-right {
    @apply bottom-0 
    right-0 
    border-b-[2px] 
    border-r-[2px] 
    border-aegean;
  }

  .section-title {
    @apply font-serif 
    text-[3.5rem] 
    md:text-[4.5rem] 
    lg:text-[5rem] 
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

  .church-image {
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