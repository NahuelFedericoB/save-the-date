<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  import "../styles/venue.css";

  import VenueCard from "./VenueCard.svelte";

  const reveal = useReveal();
  const mapsUrl =
    "https://www.google.com/maps?vet=10CAAQoqAOahcKEwig_Z2n0JmWAxUAAAAAHQAAAAAQCg..i&cshid=1786487433924878&pvq=CgwvZy8xaGMydzRxajc&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&ftid=0x95a33219803b0c3f:0x7d4cef6aaa009018";
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  data-venue
  class:is-visible={reveal.visible}
  id="fiesta-location"
>
  <div class="grain"></div>
  <div class="ambient-light"></div>
  <div class="background-flower-right"></div>
  <div class="venue-grid">
    <div class="card-wrapper order-2 lg:order-1">
      <VenueCard
        variant="reception"
        imageSrc="/mykonos.jpg"
        imageAlt="Club House Nuevo Quilmes"
        location="Don Bosco · Buenos Aires"
        eventLabel="Recepción & Fiesta"
        titleLines={["Club House", "Nuevo Quilmes"]}
        address="Av. Caseros 1750 · Don Bosco"
        {mapsUrl}
      />
    </div>
    <div class="title-side order-1 lg:order-2">
      <div class="title-decorator-box">
        <div class="corner top-right"></div>
        <h2 class="section-title">
          A continuación
          <br />
          de la
          <br />
          ceremonia
        </h2>
        <div class="subtitle-wrapper">
          <span class="mini-line"></span>
        </div>
        <div class="corner bottom-left"></div>
      </div>
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
        circle at 20% 20%,
        rgba(0, 0, 0, 0.06) 0.4px,
        transparent 0.5px
      ),
      radial-gradient(
        circle at 75% 45%,
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
      rgba(255, 255, 255, 0.34) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }

  .background-flower-right {
    @apply pointer-events-none absolute right-0 top-0 z-[3] h-full bg-right bg-no-repeat;
    width: 360px;
    background-image: url("/mesa.jpg");
    background-size: cover;
    opacity: 0.14;
    mix-blend-mode: multiply;
    filter: blur(0.4px) saturate(0.92);
    mask-image: linear-gradient(to left, black 28%, transparent 100%);
  }

  @media (min-width: 768px) {
    .background-flower-right {
      width: 620px;
    }
  }

  @media (min-width: 1100px) {
    .venue-grid {
      grid-template-columns: 1.05fr 0.95fr;
      gap: 7rem;
    }
  }

  .title-side {
    @apply flex justify-center lg:justify-end;
  }

  .top-right {
    top: 0;
    right: 0;
    border-top: 1.5px solid rgba(193, 21, 123, 0.92);
    border-right: 1.5px solid rgba(193, 21, 123, 0.92);
  }

  .bottom-left {
    left: 0;
    bottom: 0;
    border-bottom: 1.5px solid rgba(20, 86, 170, 0.92);
    border-left: 1.5px solid rgba(20, 86, 170, 0.92);
  }

  .section-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(3.8rem, 8vw, 5.8rem);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -0.055em;
    color: #111111;
  }

  .subtitle-wrapper {
    @apply flex items-center;
    gap: 1rem;
    margin-top: 2.6rem;
  }

  .mini-line {
    width: 34px;
    height: 1px;
    background: linear-gradient(90deg, rgba(193, 21, 123, 0.92), transparent);
  }

  .card-wrapper {
    @apply flex w-full justify-center lg:justify-start;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 4.1rem;
    }
  }
</style>
