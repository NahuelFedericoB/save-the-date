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
      <div class="info-group">
        <div class="info-row">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              /></svg
            >
          </div>
          <p class="info-text">A continuación de la ceremonia</p>
        </div>
        <div class="info-row">
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              /><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              /></svg
            >
          </div>
          <p class="info-text">
            Rooftop La Maquinita
          </p>
        </div>
      </div>
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
    @apply py-10 
    px-6 
    md:px-12 
    mx-4 
    md:mx-auto 
    max-w-6xl 
    bg-white 
    rounded-[2.5rem] 
    border-[2px] 
    border-aegean 
    shadow-[0_20px_60px_rgba(230,240,249,1)] 
    my-16 
    duration-700 
    ease-in-out 
    opacity-0 
    translate-y-12 
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
    gap-10 
    items-start;
  }

  .content-wrapper {
    @apply flex 
    flex-col 
    gap-6 
    text-left;
  }

  .cocktail-title {
    @apply text-3xl 
    md:text-4xl 
    font-serif 
    text-aegean 
    font-bold;
  }

  .info-group {
    @apply flex 
    flex-col 
    gap-4;
  }

  .info-row {
    @apply flex 
    items-center 
    gap-4;
  }

  .icon-circle {
    @apply flex 
    h-8 
    w-8 
    shrink-0 
    items-center 
    justify-center 
    rounded-full 
    bg-bougainvillea 
    text-white;
  }

  .info-text {
    @apply text-lg 
    text-zinc-600 
    font-medium 
    leading-tight;
  }

  .map-wrapper {
    @apply w-full 
    h-[200px] 
    md:h-[250px] 
    rounded-[1.5rem] 
    overflow-hidden 
    border 
    border-zinc-100 
    shadow-inner;
  }

  .image-wrapper {
    @apply w-full 
    static 
    md:sticky 
    md:top-0;
  }

  .venue-image {
    @apply w-full 
    h-[300px] 
    md:h-[420px] 
    object-cover 
    rounded-[2rem] 
    shadow-sm;
  }
</style>
