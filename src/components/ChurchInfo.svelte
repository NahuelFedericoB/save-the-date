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
    @apply absolute inset-0 z-[1];
    pointer-events: none;
    opacity: 0.04;
    mix-blend-mode: multiply;
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
    background-size: 180px 180px;
  }
  .ambient-light {
    @apply absolute inset-0 z-[2];
    pointer-events: none;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.38) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }
  .background-flower {
    @apply pointer-events-none absolute left-0 top-0 z-[3] h-full bg-left bg-no-repeat;
    width: 320px;
    background-image: url("/venue-flowers.png");
    background-size: contain;
    opacity: 0.22;
    mix-blend-mode: multiply;
    filter: blur(0.4px) saturate(0.92);
    mask-image: linear-gradient(to right, black 40%, transparent 100%);
  }
  @media (min-width: 768px) {
    .background-flower {
      width: 560px;
    }
  }
  @media (min-width: 1100px) {
    .venue-grid {
      grid-template-columns: 0.95fr 1.05fr;
      gap: 7rem;
    }
  }
  .title-side {
    @apply flex justify-center lg:justify-start;
  }
  .top-left {
    top: 0;
    left: 0;
    border-top: 1.5px solid rgba(20, 86, 170, 0.92);
    border-left: 1.5px solid rgba(20, 86, 170, 0.92);
  }
  .bottom-right {
    right: 0;
    bottom: 0;
    border-right: 1.5px solid rgba(20, 86, 170, 0.92);
    border-bottom: 1.5px solid rgba(20, 86, 170, 0.92);
  }
  .section-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(4rem, 8vw, 6.4rem);
    font-weight: 300;
    line-height: 0.94;
    letter-spacing: -0.055em;
    color: #111111;
    text-rendering: geometricPrecision;
  }
  .title-line {
    width: 86px;
    height: 1px;
    margin-top: 2.8rem;
    background: linear-gradient(90deg, rgba(193, 21, 123, 0.95), transparent);
  }
  .card-wrapper {
    @apply flex w-full justify-center;
  }
  @media (max-width: 768px) {
    .section-title {
      font-size: 4.3rem;
    }
  }
</style>
