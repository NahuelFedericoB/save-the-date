<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="cocktail-card"
  class:is-visible={reveal.visible}
>
  <div class="grid-container">
    <div class="content-wrapper">
      <h2 class="cocktail-title">Cocktail</h2>
      <div class="time-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="clock-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p class="time-text">A continuación de la ceremonia</p>
      </div>
      <p class="address-text">
        Rooftop La Maquinita <br /> Av. Caseros 1750, B1876 Don Bosco
      </p>
      <div class="map-wrapper">
        <iframe
          title="Mapa Fiesta"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.123456789!2d-58.300000!3d-34.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Caseros%201750%2C%20Don%20Bosco!5e0!3m2!1ses!2sar!4v1610000000000!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="image-wrapper">
      <img
        src="https://diariolaciudadavellaneda.com.ar/wp-content/uploads/2026/03/MAQUINITA.quilmes.43-1.jpg"
        alt="Salón de Fiesta"
        class="venue-image"
      />
    </div>
  </div>
</section>

<style>
  .cocktail-card {
    @apply py-16 
    px-6 
    md:px-12 
    bg-white 
    rounded-[2rem] 
    border-2 
    border-white 
    shadow-2xl 
    shadow-zinc-200/50 
    duration-700 
    ease-in-out 
    opacity-0 
    translate-y-24 
    transition-[opacity,transform]
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }

  .grid-container {
    @apply grid 
    md:grid-cols-2 
    gap-12 
    items-center;
  }

  .content-wrapper {
    @apply text-center 
    md:text-left;
  }

  .cocktail-title {
    @apply text-4xl 
    font-serif 
    text-zinc-900 
    mb-4;
  }

  .time-container {
    @apply flex 
    items-center 
    justify-center 
    md:justify-start 
    gap-2 
    mb-2 
    text-zinc-800;
  }

  .clock-icon {
    @apply w-5 
    h-5;
  }

  .time-text {
    @apply text-xl 
    font-medium;
  }

  .address-text {
    @apply text-zinc-500 
    mb-8 
    text-lg;
  }

  .map-wrapper {
    @apply w-full 
    h-64 
    overflow-hidden 
    rounded-xl 
    shadow-md 
    border 
    border-zinc-100;
  }

  .image-wrapper {
    @apply w-full;
  }

  .venue-image {
    @apply w-full 
    h-[500px] 
    object-cover 
    rounded-2xl 
    shadow-lg 
    border 
    border-zinc-100;
  }
</style>
