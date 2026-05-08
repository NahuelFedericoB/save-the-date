<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();

  const eventos = [
    { hora: "16:00", titulo: "Ceremonia" },
    { hora: "18:00", titulo: "Cocktail" },
    { hora: "20:00", titulo: "Cena & Fiesta" },
    { hora: "01:30", titulo: "Fin de Fiesta" },
  ];
</script>

<section
  bind:this={reveal.element}
  class="itinerary-section"
  class:is-visible={reveal.visible}
>
  <h2 class="itinerary-title">Itinerario</h2>
  <div class="timeline-container">
    <div class="timeline-line"></div>
    <div class="events-wrapper">
      {#each eventos as evento, i}
        <div class="event-item">
          <div class="desktop-label top" class:invisible={i % 2 !== 0}>
            <span class="time-text">{evento.hora}</span>
            <span class="title-text">{evento.titulo}</span>
          </div>
          <div class="timeline-dot">
            <div
              class="mobile-label"
              class:mobile-right={i % 2 === 0}
              class:mobile-left={i % 2 !== 0}
            >
              <span class="mobile-time">{evento.hora}</span>
              <span class="mobile-title">{evento.titulo}</span>
            </div>
          </div>
          <div class="desktop-label bottom" class:invisible={i % 2 === 0}>
            <span class="time-text">{evento.hora}</span>
            <span class="title-text">{evento.titulo}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .itinerary-section {
    @apply py-24 
    px-6 
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
  .itinerary-title {
    @apply font-serif 
    text-4xl 
    text-zinc-900 
    text-center 
    mb-20 
    tracking-tight;
  }
  .timeline-container {
    @apply relative 
    max-w-5xl 
    mx-auto;
  }
  .timeline-line {
    @apply absolute 
    left-1/2 
    md:left-0 
    md:top-1/2 
    w-[1px] 
    md:w-full 
    h-full 
    md:h-[1px] 
    bg-zinc-200 
    -translate-x-1/2 
    md:translate-x-0 
    md:-translate-y-1/2 
    z-0;
  }
  .events-wrapper {
    @apply relative 
    z-10 
    flex 
    flex-col 
    md:flex-row 
    justify-between 
    items-center 
    gap-12 
    md:gap-0;
  }
  .event-item {
    @apply flex 
    flex-col 
    items-center 
    w-full 
    md:w-1/4;
  }
  .desktop-label {
    @apply hidden 
    md:flex 
    flex-col 
    items-center 
    h-24;
  }
  .desktop-label.top {
    @apply justify-end 
    mb-6;
  }
  .desktop-label.bottom {
    @apply justify-start 
    mt-6;
  }
  .time-text {
    @apply font-serif 
    text-2xl 
    text-zinc-800;
  }
  .title-text {
    @apply font-sans 
    text-sm 
    uppercase 
    tracking-widest 
    text-zinc-400 
    mt-1;
  }
  .timeline-dot {
    @apply w-4 
    h-4 
    rounded-full 
    bg-white 
    border-2 
    border-zinc-400 
    shadow-sm 
    relative;
  }
  .mobile-label {
    @apply md:hidden 
    absolute 
    top-1/2 
    -translate-y-1/2 
    w-36;
  }
  .mobile-right {
    @apply left-6 
    text-left;
  }
  .mobile-left {
    @apply right-6 
    text-right;
  }
  .mobile-time {
    @apply font-serif 
    text-xl 
    text-zinc-800 
    block;
  }
  .mobile-title {
    @apply font-sans 
    text-xs 
    uppercase 
    tracking-widest 
    text-zinc-400;
  }
</style>
