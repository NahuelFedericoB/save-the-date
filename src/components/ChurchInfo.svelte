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
        alt="Iglesia Loreto"
        class="church-image"
      />
    </div>
    <div class="content-wrapper">
      <h2 class="church-title">Ceremonia Religiosa</h2>
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
          <p class="info-text">16:00 hs</p>
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
          <p class="info-text">Nuestra Señora del Loreto, Sarandí</p>
        </div>
      </div>
      <div class="map-container">
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
    transition-[opacity,transform];
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

  .image-wrapper {
    /* El fix: static en mobile, sticky en md */
    @apply w-full 
    static 
    md:sticky 
    md:top-0;
  }

  .church-image {
    @apply w-full 
    h-[300px] 
    md:h-[420px] 
    object-cover 
    rounded-[2rem] 
    shadow-sm;
  }

  .content-wrapper {
    @apply flex 
    flex-col 
    gap-6 
    text-left;
  }

  .church-title {
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

  .map-container {
    @apply w-full 
    h-[200px] 
    md:h-[250px] 
    rounded-[1.5rem] 
    overflow-hidden 
    border 
    border-zinc-100 
    shadow-inner;
  }
</style>
