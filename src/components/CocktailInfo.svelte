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
    <div class="card-wrapper">
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
    <div class="title-side">
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
    @apply pointer-events-none absolute inset-0 z-[1] bg-[length:180px_180px] opacity-[0.04] mix-blend-multiply;
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
  }

  .ambient-light {
    @apply pointer-events-none absolute inset-0 z-[2];
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.34) 0%,
      rgba(255, 255, 255, 0.08) 40%,
      transparent 75%
    );
  }

  .background-flower-right {
    @apply pointer-events-none absolute right-0 top-0 z-[3] h-full w-[360px] bg-[url('/mesa.jpg')] bg-cover bg-right bg-no-repeat opacity-[0.14] mix-blend-multiply blur-[0.4px] saturate-[0.92];
    mask-image: linear-gradient(to left, black 28%, transparent 100%);
  }

  @media (min-width: 768px) {
    .background-flower-right {
      @apply w-[620px];
    }
  }

  @media (min-width: 1100px) {
    .venue-grid {
      @apply grid-cols-[1.05fr_0.95fr] gap-28;
    }
  }

  .title-side {
    @apply order-1 flex justify-center lg:order-2 lg:justify-end;
  }

  .top-right {
    @apply right-0 top-0 border-r-[1.5px] border-t-[1.5px] border-solid border-r-[rgba(193,21,123,0.92)] border-t-[rgba(193,21,123,0.92)];
  }

  .bottom-left {
    @apply bottom-0 left-0 border-b-[1.5px] border-l-[1.5px] border-solid border-b-[rgba(20,86,170,0.92)] border-l-[rgba(20,86,170,0.92)];
  }

  .section-title {
    @apply font-cover text-[clamp(3.8rem,8vw,5.8rem)] font-light leading-[0.95] tracking-[-0.055em] text-[#111111];
  }

  .subtitle-wrapper {
    @apply mt-[2.6rem] flex items-center gap-4;
  }

  .mini-line {
    @apply h-px w-[34px];
    background: linear-gradient(90deg, rgba(193, 21, 123, 0.92), transparent);
  }

  .card-wrapper {
    @apply order-2 flex w-full justify-center lg:order-1 lg:justify-start;
  }

  @media (max-width: 768px) {
    .section-title {
      @apply text-[4.1rem];
    }
  }
</style>
