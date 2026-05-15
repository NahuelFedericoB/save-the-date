<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
  const mapsUrl = "https://maps.google.com/?q=Av.+Caseros+1750+Don+Bosco";
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  class:is-visible={reveal.visible}
  id="fiesta-location"
>
  <div class="grain"></div>
  <div class="ambient-light"></div>
  <div class="background-flower-right"></div>
  <div class="venue-grid">
    <div class="card-wrapper order-2 lg:order-1">
      <article class="venue-card">
        <div class="image-wrapper">
          <img
            src="https://diariolaciudadavellaneda.com.ar/wp-content/uploads/2026/03/MAQUINITA.quilmes.43-1.jpg"
            alt="Rooftop La Maquinita"
            class="venue-image"
          />
          <div class="image-overlay"></div>
          <div class="floating-label">Don Bosco · Buenos Aires</div>
        </div>
        <div class="card-content">
          <div class="content-header">
            <p class="mini-label">Recepción & Fiesta</p>
            <h3 class="card-title">
              Rooftop
              <br />
              La Maquinita
            </h3>
          </div>
          <div class="info-list">
            <div class="info-divider"></div>
            <div class="info-item">
              <span class="info-key">Dirección</span>
              <span class="info-value">Av. Caseros 1750 · Don Bosco</span>
            </div>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="map-card"
          >
            <div class="map-background"></div>
            <div class="map-content">
              <div>
                <p class="map-title">Cómo llegar</p>
              </div>
              <div class="map-arrow">→</div>
            </div>
          </a>
        </div>
      </article>
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
  .venue-section {
    @apply relative isolate overflow-hidden;
    background: linear-gradient(to bottom, #fcfaf7 0%, #f8f5f2 100%);
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    opacity: 0;
    transform: translateY(42px) scale(0.99);
    transition: opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1), transform 1800ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  @media (min-width: 768px) {
    .venue-section {
      padding-top: 10rem;
      padding-bottom: 10rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  .grain {
    @apply absolute inset-0 z-[1];
    pointer-events: none;
    opacity: 0.04;
    mix-blend-mode: multiply;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(0,0,0,0.06) 0.4px, transparent 0.5px),
      radial-gradient(circle at 75% 45%, rgba(0,0,0,0.05) 0.5px, transparent 0.6px);
    background-size: 180px 180px;
  }

  .ambient-light {
    @apply absolute inset-0 z-[2];
    pointer-events: none;
    background: radial-gradient(circle at center, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 40%, transparent 75%);
  }

  .background-flower-right {
    @apply absolute right-0 top-0 z-[3] h-full pointer-events-none bg-right bg-no-repeat;
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

  .venue-grid {
    @apply relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center;
    gap: 5rem;
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

  .title-decorator-box {
    @apply relative flex flex-col;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 768px) {
    .title-decorator-box {
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .corner {
    @apply absolute;
    width: 68px;
    height: 68px;
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

  @media (min-width: 768px) {
    .corner {
      width: 92px;
      height: 92px;
    }
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

  .venue-card {
    @apply relative overflow-hidden;
    width: 100%;
    max-width: 640px;
    background: rgba(255,255,255,0.62);
    border: 1px solid rgba(255,255,255,0.72);
    backdrop-filter: blur(18px);
    box-shadow: 0 45px 120px rgba(0,0,0,0.08), 0 15px 40px rgba(0,0,0,0.05);
    transition: transform 1000ms cubic-bezier(0.16,1,0.3,1), box-shadow 1000ms cubic-bezier(0.16,1,0.3,1);
    isolation: isolate;
  }

  .venue-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 60px 140px rgba(0,0,0,0.1), 0 20px 55px rgba(0,0,0,0.06);
  }

  .image-wrapper {
    @apply relative overflow-hidden;
    height: 340px;
  }

  .venue-image {
    @apply h-full w-full object-cover;
    transition: transform 1800ms cubic-bezier(0.16,1,0.3,1);
    filter: saturate(0.94) contrast(1.02) brightness(0.98);
  }

  .venue-card:hover .venue-image {
    transform: scale(1.035);
  }

  .image-overlay {
    @apply absolute inset-0;
    background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.04) 45%, transparent 72%);
  }

  .floating-label {
    @apply absolute;
    left: 2rem;
    bottom: 1.8rem;
    font-family: "Inter", sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.92);
  }

  .card-content {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .mini-label {
    font-family: "Inter", sans-serif;
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: #c1157b;
    margin-bottom: 1.4rem;
  }

  .card-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(2.7rem, 5vw, 4rem);
    font-weight: 300;
    line-height: 0.96;
    letter-spacing: -0.045em;
    color: #121212;
  }

  .info-list {
    margin-top: 2.8rem;
    margin-bottom: 3rem;
  }

  .info-item {
    @apply flex items-start justify-between gap-6;
  }

  .info-key {
    font-family: "Inter", sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.42);
  }

  .info-value {
    font-family: "Inter", sans-serif;
    font-size: 0.92rem;
    line-height: 1.8;
    color: rgba(0,0,0,0.74);
    text-align: right;
  }

  .info-divider {
    width: 100%;
    height: 1px;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    background: linear-gradient(90deg, rgba(0,0,0,0.08), transparent);
  }

  .map-card {
    @apply relative flex items-center justify-between overflow-hidden;
    min-height: 140px;
    padding: 2rem;
    text-decoration: none;
    background: linear-gradient(135deg, rgba(245,242,238,0.96), rgba(255,255,255,0.84));
    border: 1px solid rgba(0,0,0,0.05);
    transition: transform 900ms cubic-bezier(0.16,1,0.3,1), border-color 900ms cubic-bezier(0.16,1,0.3,1);
  }

  .map-card:hover {
    transform: translateY(-2px);
    border-color: rgba(193,21,123,0.18);
  }

  .map-background {
    @apply absolute inset-0;
    opacity: 0.06;
    background-image:
      radial-gradient(circle at 25% 35%, #c1157b 1px, transparent 1px),
      radial-gradient(circle at 75% 65%, #1456aa 1px, transparent 1px);
    background-size: 34px 34px;
  }

  .map-content {
    @apply relative z-10 flex w-full items-center justify-between;
  }

  .map-title {
    font-family: "Cormorant Garamond", serif;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -0.04em;
    color: #111111;
  }

  .map-arrow {
    font-size: 2rem;
    color: #c1157b;
    transition: transform 700ms cubic-bezier(0.16,1,0.3,1);
  }

  .map-card:hover .map-arrow {
    transform: translateX(6px);
  }

  @media (max-width: 768px) {
    .venue-section {
      padding-top: 7rem;
      padding-bottom: 7rem;
    }

    .section-title {
      font-size: 4.1rem;
    }

    .image-wrapper {
      height: 280px;
    }

    .card-content {
      padding-top: 2.2rem;
      padding-bottom: 2.2rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .map-card {
      min-height: 120px;
      padding: 1.6rem;
    }

    .map-title {
      font-size: 1.8rem;
    }
  }
</style>