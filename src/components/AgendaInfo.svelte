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
          <svg
            class="icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 2v6" />
            <path d="M10 5h4" />
            <path d="M12 8L4 14v8h16v-8l-8-6z" />
            <path d="M10 22v-6h4v6" />
          </svg>
        </div>
        <div class="event-content">
          <h3 class="event-title">CEREMONIA</h3>
          <span class="event-time">16:00 HS</span>
          <p class="event-location">Nuestra Señora del Loreto</p>
        </div>
      </div>
      <div class="event-item">
        <div class="icon-box">
          <svg
            class="icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
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
          <p class="event-location">Club House Nuevo Quilmes</p>
          <a href="#fiesta-location" class="location-btn"> VER UBICACIÓN </a>
        </div>
      </div>

      <div class="event-item">
        <div class="icon-box">
          <svg
            class="icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <div class="event-content">
          <h3 class="event-title">FIESTA</h3>
          <span class="event-time">HASTA APROX 3:00 HS</span>
          <p class="event-location">Club House Nuevo Quilmes</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .timeline-section {
    @apply relative w-full translate-y-10 bg-[#fdfbf8] px-6 py-20 opacity-0 transition-[opacity,transform] duration-1000 ease-in-out will-change-transform md:px-12 md:py-28;
  }

  .is-visible {
    @apply translate-y-0 opacity-100;
  }

  .header-container {
    @apply mb-16 flex justify-center md:mb-20;
  }

  .section-title {
    @apply font-serif text-[3.5rem] leading-none tracking-[-0.04em] text-[#111111] md:text-[4.5rem];
  }

  .timeline-container {
    @apply relative mx-auto max-w-5xl;
  }
  .connector-line {
    @apply absolute bottom-10 left-1/2 top-8 z-0 w-[1px] -translate-x-1/2 md:bottom-auto md:left-[10%] md:right-[10%] md:top-[26px] md:h-[1px] md:w-auto md:translate-x-0;

    background: linear-gradient(
      to bottom,
      rgba(225, 0, 149, 0.1),
      rgba(225, 0, 149, 0.35),
      rgba(225, 0, 149, 0.1)
    );
  }

  .events-wrapper {
    @apply relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-4;
  }

  .event-item {
    @apply flex w-full flex-col items-center gap-5 text-center md:w-1/3;
  }

  .icon-box {
    @apply relative z-10 shrink-0 bg-[#fdfbf8] px-4 py-2;
  }

  .icon-svg {
    @apply h-8 w-8 stroke-[1.45px] text-[#d6008d] md:h-9 md:w-9;
  }
  .event-content {
    @apply relative z-10 flex w-full flex-col items-center bg-[#fdfbf8] py-2;
  }

  .event-title {
    @apply mb-1 font-sans text-sm font-bold uppercase tracking-[0.26em] text-[#111111] md:text-[15px];
  }

  .event-time {
    @apply mb-3 font-sans text-[11px] font-bold tracking-[0.12em] text-[#111111]/[0.46] md:text-xs;
  }

  .event-location {
    @apply font-sans text-[11px] leading-relaxed text-[#111111]/[0.68] md:text-xs;
  }

  .location-btn {
    @apply mt-5 inline-flex cursor-pointer items-center justify-center rounded-full border border-solid border-[#d6008d]/[0.22] bg-white/[0.55] px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#d6008d] shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur-[10px] transition-all duration-500;
  }

  .location-btn:hover {
    @apply translate-y-[-2px] border-[#d6008d] bg-[#d6008d] text-white shadow-[0_18px_34px_rgba(214,0,141,0.2)];
  }

  @media (max-width: 768px) {
    .section-title {
      @apply text-[3.6rem];
    }

    .events-wrapper {
      @apply gap-14;
    }

    .event-item {
      @apply gap-[1.1rem];
    }

    .location-btn {
      @apply mt-[1.1rem];
    }
  }
</style>
