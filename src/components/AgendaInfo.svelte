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
    leading-none;

    letter-spacing: -0.04em;
    color: #111111;
  }

  .timeline-container {
    @apply relative 
    max-w-5xl 
    mx-auto;
  }
  .connector-line {
    @apply absolute 
    z-0;

    background:
      linear-gradient(
        to bottom,
        rgba(225,0,149,0.10),
        rgba(225,0,149,0.35),
        rgba(225,0,149,0.10)
      );
    @apply top-8 
    bottom-10 
    left-1/2 
    w-[1px] 
    -translate-x-1/2;
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
    items-center 
    md:items-start
    gap-12 
    md:gap-4;
  }

  .event-item {
    @apply flex 
    flex-col 
    items-center 
    text-center 
    w-full 
    md:w-1/3 
    gap-5;
  }

  .icon-box {
    @apply relative 
    z-10 
    shrink-0
    px-4 
    py-2;

    background: #fdfbf8;
  }

  .icon-svg {
    @apply w-8 
    h-8 
    md:w-9 
    md:h-9 
    stroke-[1.45px];

    color: #d6008d;
  }
  .event-content {
    @apply relative 
    z-10 
    flex 
    flex-col 
    items-center 
    w-full 
    py-2;

    background: #fdfbf8;
  }

  .event-title {
    @apply font-sans 
    text-sm 
    md:text-[15px] 
    font-bold 
    uppercase 
    mb-1;

    letter-spacing: 0.26em;
    color: #111111;
  }

  .event-time {
    @apply font-sans 
    text-[11px] 
    md:text-xs 
    font-bold 
    mb-3;

    letter-spacing: 0.12em;

    color: rgba(17,17,17,0.46);
  }

  .event-location {
    @apply font-sans 
    text-[11px] 
    md:text-xs 
    leading-relaxed;

    color: rgba(17,17,17,0.68);
  }

  .location-btn {
    @apply mt-5 
    inline-flex
    items-center
    justify-center
    rounded-full 
    px-6 
    py-2.5 
    font-sans 
    text-[10px] 
    font-bold 
    uppercase 
    cursor-pointer
    transition-all 
    duration-500;

    letter-spacing: 0.18em;
    color: #d6008d;
    border:
      1px solid rgba(214,0,141,0.22);
    background:
      rgba(255,255,255,0.55);
    backdrop-filter:
      blur(10px);
    box-shadow:
      0 10px 24px rgba(0,0,0,0.04);
  }

  .location-btn:hover {
    transform:
      translateY(-2px);
    background:
      #d6008d;
    color:
      white;
    border-color:
      #d6008d;
    box-shadow:
      0 18px 34px rgba(214,0,141,0.20);
  }

  @media (max-width: 768px) {

    .section-title {
      font-size: 3.6rem;
    }

    .events-wrapper {
      gap: 3.5rem;
    }

    .event-item {
      gap: 1.1rem;
    }

    .location-btn {
      margin-top: 1.1rem;
    }
  }
</style>