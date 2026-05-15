<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="venue-section"
  class:is-visible={reveal.visible}
  id="fiesta-location"
>
  <div class="background-flower-right"></div>
  <div class="venue-grid">
    <div class="card-wrapper order-2 lg:order-1">
      <div class="venue-card">
        <div class="image-wrapper">
          <img
            src="https://diariolaciudadavellaneda.com.ar/wp-content/uploads/2026/03/MAQUINITA.quilmes.43-1.jpg"
            alt="Salón de Fiesta Rooftop La Maquinita"
            class="venue-image"
          />
        </div>
        <div class="card-content">
          <h3 class="card-title">Fiesta</h3>
          <div class="info-list">
            <div class="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Rooftop La Maquinita</span>
            </div>
          </div>
          <div class="map-wrapper">
            <div
              class="map-overlay pointer-events-none absolute inset-0 z-10"
            ></div>
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
      </div>
    </div>
    <div class="title-side order-1 lg:order-2">
      <div class="title-decorator-box">
        <div class="corner top-right"></div>
        <h2 class="section-title">
          A continuación<br />
          de la<br />
          ceremonia
        </h2>
        <div class="subtitle-wrapper">
          <span class="mini-line"></span>
          <p class="section-subtitle">Recepción & Fiesta</p>
        </div>
        <div class="corner bottom-left"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .venue-section {
    @apply relative
    w-full
    overflow-hidden
    bg-[#fdfbf8]
    py-24
    md:py-28
    px-6
    md:px-12
    duration-1000
    ease-in-out
    opacity-0
    translate-y-10
    transition-[opacity,transform]
    will-change-transform;
  }

  .is-visible {
    @apply opacity-100
    translate-y-0;
  }

  .background-flower-right {
    @apply absolute
    right-0
    top-0
    h-full
    w-[260px]
    md:w-[520px]
    pointer-events-none
    bg-cover
    bg-right
    bg-no-repeat
    scale-x-[-1];

    background-image: url("/mesa.jpg");
    opacity: 0.58;
    mix-blend-mode: multiply;

    -webkit-mask-image: linear-gradient(to right, black 30%, transparent 100%);

    mask-image: linear-gradient(to right, black 30%, transparent 100%);
  }

  .venue-grid {
    @apply relative
    z-10
    mx-auto
    max-w-6xl
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-14
    lg:gap-20;
  }

  .title-side {
    @apply flex
    justify-center
    lg:justify-end;
  }

  .title-decorator-box {
    @apply relative
    flex
    flex-col
    items-center
    text-center
    lg:items-start
    lg:text-left
    px-8
    py-10
    md:px-12
    md:py-14;
  }
  .corner {
    @apply absolute
    w-16
    h-16
    md:w-24
    md:h-24;
  }

  .top-right {
    @apply top-0
    right-0
    border-t-[2px]
    border-r-[2px];

    border-color: #e10095;
  }

  .bottom-left {
    @apply bottom-0
    left-0
    border-b-[2px]
    border-l-[2px];

    border-color: rgba(20, 86, 170, 0.92);
  }

  .section-title {
    @apply font-serif
    text-[3.5rem]
    md:text-[4.6rem]
    lg:text-[4.2rem]
    leading-[1.02];

    letter-spacing: -0.035em;
    color: #111111;
  }

  .subtitle-wrapper {
    @apply mt-8
    flex
    items-center
    gap-4;
  }

  .mini-line {
    @apply h-[2px]
    w-8;

    background: #e10095;
  }

  .section-subtitle {
    @apply font-sans
    text-xs
    font-bold
    uppercase
    tracking-[0.3em];

    color: rgba(17, 17, 17, 0.72);
  }

  .card-wrapper {
    @apply flex
    justify-center
    lg:justify-start
    w-full;
  }

  .venue-card {
    @apply relative
    w-full
    max-w-[560px]
    rounded-[30px]
    border
    border-white/70
    p-4
    md:p-5;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92),
      rgba(255, 255, 255, 0.82)
    );
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition:
      transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 600ms cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow:
      0 45px 140px rgba(0, 0, 0, 0.1),
      0 20px 50px rgba(0, 0, 0, 0.06),
      0 2px 12px rgba(255, 255, 255, 0.72) inset;

    isolation: isolate;
  }

  .venue-card::before {
    content: "";

    @apply absolute
    inset-0
    rounded-[30px]
    pointer-events-none;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
    opacity: 0.9;
  }
  .venue-card:hover {
    transform: translateY(-6px);
    box-shadow:
      0 60px 160px rgba(0, 0, 0, 0.14),
      0 30px 70px rgba(0, 0, 0, 0.08),
      0 2px 12px rgba(255, 255, 255, 0.78) inset;
  }
  .image-wrapper {
    @apply relative
    w-full
    h-[220px]
    md:h-[240px]
    rounded-[24px]
    overflow-hidden;
  }

  .image-wrapper::after {
    content: "";

    @apply absolute
    inset-0;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.12), transparent 40%);
  }

  .venue-image {
    @apply w-full
    h-full
    object-cover;

    transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .venue-card:hover .venue-image {
    transform: scale(1.04);
  }
  .card-content {
    @apply pt-8
    pb-2
    px-1;
  }

  .card-title {
    @apply mb-7
    font-serif
    text-[2.15rem];

    color: #111111;
  }

  .info-list {
    @apply mb-8
    flex
    flex-col
    gap-5;
  }

  .info-item {
    @apply flex
    items-start
    gap-3
    font-sans
    text-[0.98rem]
    leading-relaxed;

    color: rgba(17, 17, 17, 0.72);
  }

  .icon-svg {
    @apply w-5
    h-5
    shrink-0
    mt-[2px];

    color: #e10095;
  }
  .map-wrapper {
    @apply relative
    h-[170px]
    w-full
    overflow-hidden
    rounded-[22px]
    border;

    border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
  }

  .map-overlay {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0)
    );
  }
  @media (max-width: 768px) {
    .venue-section {
      @apply py-20;
    }

    .section-title {
      font-size: 3.6rem;
    }

    .venue-card {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.88),
        rgba(255, 255, 255, 0.74)
      );

      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-color: rgba(255, 255, 255, 0.72);
      box-shadow:
        0 35px 90px rgba(0, 0, 0, 0.1),
        0 15px 35px rgba(0, 0, 0, 0.05),
        0 2px 10px rgba(255, 255, 255, 0.65) inset;
      border-radius: 26px;
    }

    .venue-card::before {
      border-radius: 26px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.48),
        rgba(255, 255, 255, 0)
      );
    }

    .image-wrapper {
      height: 210px;
      border-radius: 22px;
    }

    .card-title {
      font-size: 2rem;
    }
  }
</style>
