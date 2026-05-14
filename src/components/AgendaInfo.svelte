<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="timeline-section"
  class:is-visible={reveal.visible}
>
  <div class="header-container">
    <h2 class="section-title">Itinerario</h2>
  </div>
  <div class="timeline-container">
    <div class="connector-line"></div>
    <div class="events-wrapper">
      <div class="event-item">
        <div class="icon-box">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v6" />
            <path d="M10 5h4" />
            <path d="M12 8L4 14v8h16v-8l-8-6z" />
            <path d="M10 22v-6h4v6" />
          </svg>
        </div>
        <div class="event-content">
          <h3 class="event-title">CEREMONIA</h3>
          <span class="event-time">16:00 HS</span>
          <p class="event-location">Nuestra Señora del Loreto<br/>Sarandí</p>
        </div>
      </div>
      <div class="event-item">
        <div class="icon-box">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 3h6l-1 7a2 2 0 0 1-4 0Z" />
            <path d="M7 10v9" />
            <path d="M5 19h4" />
            <path d="M14 3h6l-1 7a2 2 0 0 1-4 0Z" />
            <path d="M17 10v9" />
            <path d="M15 19h4" />
          </svg>
        </div>
        <div class="event-content">
          <h3 class="event-title">RECEPCIÓN</h3>
          <span class="event-time">A CONTINUACIÓN</span>
          <p class="event-location">Rooftop La Maquinita<br/>Quilmes</p>
          <a
            href="#fiesta-location"
            class="location-btn"
          >
            VER UBICACIÓN
          </a>
        </div>
      </div>

      <div class="event-item">
        <div class="icon-box">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <div class="event-content">
          <h3 class="event-title">FIESTA</h3>
          <span class="event-time">HASTA APROX 1:30 HS</span>
          <p class="event-location">Rooftop La Maquinita<br/>Quilmes</p>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .timeline-section {
    @apply relative 
    w-full 
    bg-[#fdfbf8] 
    py-20 
    md:py-28 
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

  .header-container {
    @apply flex 
    justify-center 
    mb-16 
    md:mb-20;
  }

  .section-title {
    @apply font-serif 
    text-[3.5rem] 
    md:text-[4.5rem] 
    leading-none 
    tracking-tight 
    text-aegean; 
  }

  .timeline-container {
    @apply relative 
    max-w-5xl 
    mx-auto;
  }

  .connector-line {
    @apply absolute 
    bg-bougainvillea/30 
    z-0;    
    /* Configuración Mobile: Vertical y en el centro */
    @apply top-8 
    bottom-10 
    left-1/2 
    w-[1px] 
    -translate-x-1/2;
    /* Configuración Desktop: Horizontal exacta por el centro del ícono */
    @apply md:top-[26px] 
    md:left-[10%] 
    md:right-[10%] 
    md:w-auto 
    md:h-[1px] 
    md:bottom-auto
    md:translate-x-0;
  }

  .events-wrapper {
    @apply relative 
    z-10 
    flex 
    flex-col 
    md:flex-row 
    justify-between 
    items-center /* Mobile: Todo centrado */
    md:items-start /* DESKTOP FIX: Alinea todos los contenedores desde arriba para que los íconos no se muevan */
    gap-12 /* Mobile gap */
    md:gap-4; /* Desktop gap */
  }

  .event-item {
    @apply flex 
    flex-col 
    items-center 
    text-center 
    w-full 
    md:w-1/3 
    gap-4;
  }
  .icon-box {
    @apply bg-[#fdfbf8] 
    px-4 
    py-2 
    relative 
    z-10 
    shrink-0;
  }

  .icon-svg {
    @apply w-8 
    h-8 
    md:w-9 
    md:h-9 
    text-bougainvillea 
    stroke-[1.5px];
  }
  .event-content {
    @apply flex 
    flex-col 
    items-center 
    w-full
    /* MOBILE FIX: Fondo sólido con Z-index y padding para "borrar" la línea vertical */
    bg-[#fdfbf8] 
    relative 
    z-10 
    py-2;
  }

  .event-title {
    @apply font-sans 
    text-sm 
    md:text-[15px] 
    font-bold 
    uppercase 
    tracking-[0.25em] 
    text-aegean 
    mb-1;
  }

  .event-time {
    @apply font-sans 
    text-[11px] 
    md:text-xs 
    font-bold 
    text-zinc-500 
    mb-3;
  }

  .event-location {
    @apply font-sans 
    text-[11px] 
    md:text-xs 
    leading-relaxed 
    text-zinc-600;
  }
  .location-btn {
    @apply mt-4 
    inline-block 
    rounded-full 
    border-[1.5px] 
    border-bougainvillea/40 
    px-6 
    py-2.5 
    font-sans 
    text-[10px] 
    font-bold 
    uppercase 
    tracking-[0.15em] 
    text-bougainvillea 
    transition-all 
    duration-300 
    hover:bg-bougainvillea 
    hover:text-white 
    hover:border-bougainvillea
    cursor-pointer;
  }
</style>