<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  import "../styles/venue.css";

  import VenueCard from "./VenueCard.svelte";

  const reveal = useReveal();
  const mapsUrl = "https://maps.google.com/?q=Av.+Bartolomé+Mitre+3779+Sarandí";
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  data-venue
  class:is-visible={reveal.visible}
>
  <div class="grain"></div>
  <div class="ambient-light"></div>
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
        <div class="title-line"></div>
        <div class="corner bottom-right"></div>
      </div>
    </div>
    <div class="card-wrapper">
      <VenueCard
        variant="ceremony"
        imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a5/8b/79/fachada-frontal.jpg?w=1400&h=-1&s=1"
        imageAlt="Nuestra Señora del Loreto"
        location="Sarandí · Buenos Aires"
        eventLabel="Ceremonia Religiosa"
        titleLines={["Nuestra Señora", "del Loreto"]}
        time="16:00 hs"
        address="Av. Bartolomé Mitre 3779"
        {mapsUrl}
      />
    </div>
  </div>
</section>

<style>
  .grain {
    @apply pointer-events-none absolute inset-0 z-[1] bg-[length:180px_180px] opacity-[0.04] mix-blend-multiply;
    background-image:
      radial-gradient(
        circle at 25% 20%,
        rgba(0, 0, 0, 0.07) 0.4px,
        transparent 0.5px
      ),
      radial-gradient(
        circle at 75% 35%,
        rgba(0, 0, 0, 0.05) 0.5px,
        transparent 0.6px
      );
  }
  .ambient-light {
    @apply pointer-events-none absolute inset-0 z-[2];
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.38) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }
  .background-flower {
    @apply pointer-events-none absolute left-0 top-0 z-[3] h-full w-[320px] bg-[url('/venue-flowers.png')] bg-contain bg-left bg-no-repeat opacity-[0.22] mix-blend-multiply blur-[0.4px] saturate-[0.92];
    mask-image: linear-gradient(to right, black 40%, transparent 100%);
  }
  @media (min-width: 768px) {
    .background-flower {
      @apply w-[560px];
    }
  }
  @media (min-width: 1100px) {
    .venue-grid {
      @apply grid-cols-[0.95fr_1.05fr] gap-28;
    }
  }
  .title-side {
    @apply flex justify-center lg:justify-start;
  }
  .top-left {
    @apply left-0 top-0 border-l-[1.5px] border-t-[1.5px] border-solid border-l-[rgba(20,86,170,0.92)] border-t-[rgba(20,86,170,0.92)];
  }
  .bottom-right {
    @apply bottom-0 right-0 border-b-[1.5px] border-r-[1.5px] border-solid border-b-[rgba(20,86,170,0.92)] border-r-[rgba(20,86,170,0.92)];
  }
  .section-title {
    @apply font-cover text-[clamp(4rem,8vw,6.4rem)] font-light leading-[0.94] tracking-[-0.055em] text-[#111111];
    text-rendering: geometricPrecision;
  }
  .title-line {
    @apply mt-[2.8rem] h-px w-[86px];
    background: linear-gradient(90deg, rgba(193, 21, 123, 0.95), transparent);
  }
  .card-wrapper {
    @apply flex w-full justify-center;
  }
  @media (max-width: 768px) {
    .section-title {
      @apply text-[4.3rem];
    }
  }
</style>
