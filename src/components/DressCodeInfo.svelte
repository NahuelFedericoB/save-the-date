<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();

  const dresscodeOptions = [
    {
      title: "Hombres",
      description:
        "Traje completo o ambo. Corbata o moño a elección. ¡Bien facheros!",
      iconPath: `<path d="M6.5 8L11 12L6.5 16V8Z" fill="#D4AF37" stroke="#D4AF37" stroke-width="1.5" stroke-linejoin="round"/><path d="M17.5 8L13 12L17.5 16V8Z" fill="#D4AF37" stroke="#D4AF37" stroke-width="1.5" stroke-linejoin="round"/><rect x="10" y="10.5" width="4" height="3" rx="1" fill="#D4AF37" />`,
    },
    {
      title: "Mujeres",
      description:
        "Vestido largo o de cocktail. ¡Los colores vivos son más que bienvenidos!",
      iconPath: `<path d="M9 4L7.5 8.5L5 11L8.5 20H15.5L19 11L16.5 8.5L15 4H9Z" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 11.5H15.5" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round"/>`,
    },
  ];
</script>

<section
  bind:this={reveal.element}
  class="dresscode-section"
  class:is-visible={reveal.visible}
>
  <div class="header-container">
    <h2 class="dresscode-title">Dresscode</h2>
    <p class="dresscode-subtitle">Elegante</p>
  </div>
  <div class="cards-grid">
    {#each dresscodeOptions as option}
      <div class="gender-card">
        <div class="icon-wrapper">
          <svg
            class="icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">{@html option.iconPath}</svg
          >
        </div>
        <h3 class="gender-title">
          {option.title}
        </h3>
        <p class="gender-description">
          {option.description}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  .dresscode-section {
    @apply py-20 
    px-6 
    bg-white 
    rounded-[2rem] 
    border-2 
    border-white 
    shadow-2xl 
    shadow-zinc-200/50 
    duration-1000 
    ease-in-out 
    opacity-0 
    translate-y-20 
    transition-[opacity,transform] 
    will-change-transform;
  }
  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }
  .header-container {
    @apply text-center 
    mb-16;
  }
  .dresscode-title {
    @apply font-serif 
    text-4xl 
    text-zinc-900 
    mb-4 
    tracking-tight;
  }
  .dresscode-subtitle {
    @apply font-sans 
    text-xl 
    uppercase 
    tracking-[0.3em] 
    text-zinc-400 
    font-light;
  }
  .cards-grid {
    @apply grid 
    md:grid-cols-2 
    gap-10 
    max-w-4xl 
    mx-auto;
  }
  .gender-card {
    @apply bg-[#FDFBF7] 
    p-10 
    rounded-[1.5rem] 
    border 
    border-white 
    shadow-sm 
    flex 
    flex-col 
    items-center 
    text-center;
  }
  .icon-wrapper {
    @apply w-16 
    h-16 
    bg-white 
    rounded-full 
    flex 
    items-center 
    justify-center 
    mb-6 
    shadow-sm 
    border 
    border-zinc-100;
  }
  .icon-svg {
    @apply w-8 
    h-8;
  }
  .gender-title {
    @apply font-serif 
    text-2xl 
    text-zinc-800 
    mb-4;
  }
  .gender-description {
    @apply font-sans 
    text-zinc-500 
    leading-relaxed;
  }
</style>
