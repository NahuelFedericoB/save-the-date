<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="church-card"
  class:is-visible={reveal.visible}
>
  <div class="grid-container">
    <div class="image-wrapper">
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a5/8b/79/fachada-frontal.jpg?w=1400&h=-1&s=1"
        alt="Iglesia"
        class="church-image"
      />
    </div>
    <div class="content-wrapper">
      <h2 class="church-title">Ceremonia Religiosa</h2>
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
        <p class="time-text">16:00 hs</p>
      </div>
      <p class="address-text">
        Nuestra Señora del Loreto <br /> Av. Bartolomé Mitre 3779, Sarandí
      </p>
      <div class="map-wrapper">
        <iframe
          title="Mapa Iglesia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3364955761355!2d-58.3444004!3d-34.6714004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3331a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sAv.%20Bartolom%C3%A9%20Mitre%203779%2C%20Sarand%C3%AD!5e0!3m2!1ses!2sar!4v1610000000000!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>

<style>
  .church-card {
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

  .image-wrapper {
    @apply order-2 
    md:order-1;
  }

  .church-image {
    @apply w-full 
    h-[400px] 
    object-cover 
    rounded-2xl 
    shadow-lg 
    border 
    border-zinc-100;
  }

  .content-wrapper {
    @apply text-center 
    md:text-left 
    order-1 
    md:order-2;
  }

  .church-title {
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
</style>
