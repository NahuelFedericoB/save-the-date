<script>
  const {
    imageSrc,
    imageAlt,
    location,
    eventLabel,
    titleLines,
    address,
    mapsUrl,
    time,
    variant = "ceremony",
  } = $props();
</script>

<article class="venue-card" class:ceremony={variant === "ceremony"}>
  <div class="image-wrapper">
    <img src={imageSrc} alt={imageAlt} class="venue-image" />
    <div class="image-overlay"></div>
    <div class="floating-label">{location}</div>
  </div>
  <div class="card-content">
    <div class="content-header">
      <p class="mini-label">{eventLabel}</p>
      <h3 class="card-title">
        {#each titleLines as line, index (index)}
          {#if index > 0}<br />{/if}{line}
        {/each}
      </h3>
    </div>
    <div class="info-list">
      {#if time}
        <div class="info-item">
          <span class="info-key">Horario</span>
          <span class="info-value">{time}</span>
        </div>
      {/if}
      <div class="info-divider"></div>
      <div class="info-item">
        <span class="info-key">Dirección</span>
        <span class="info-value">{address}</span>
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
        <div><p class="map-title">Cómo llegar</p></div>
        <div class="map-arrow">→</div>
      </div>
    </a>
  </div>
</article>

<style>
  .venue-card {
    @apply relative isolate w-full max-w-[640px] overflow-hidden border border-solid border-[rgba(255,255,255,0.72)] bg-[rgba(255,255,255,0.62)] backdrop-blur-[18px] transition-[transform,box-shadow] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)];
    box-shadow:
      0 45px 120px rgba(0, 0, 0, 0.08),
      0 15px 40px rgba(0, 0, 0, 0.05);
  }

  .venue-card:hover {
    @apply translate-y-[-4px];
    box-shadow:
      0 60px 140px rgba(0, 0, 0, 0.1),
      0 20px 55px rgba(0, 0, 0, 0.06);
  }

  .image-wrapper {
    @apply relative h-[340px] overflow-hidden;
  }

  .floating-label {
    @apply absolute bottom-[1.8rem] left-8 font-inter text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[rgba(255,255,255,0.92)];
  }

  .card-content {
    @apply px-8 py-12;
  }

  .mini-label {
    @apply mb-[1.4rem] font-inter text-[0.66rem] font-semibold uppercase tracking-[0.38em] text-[#c1157b];
  }

  .info-list {
    @apply mb-12 mt-[2.8rem];
  }

  .info-divider {
    @apply my-[1.3rem] h-px w-full;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.08), transparent);
  }

  .map-card {
    @apply relative flex min-h-[140px] items-center justify-between overflow-hidden border border-solid border-[rgba(0,0,0,0.05)] p-8 no-underline transition-[transform,border-color] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)];
    background: linear-gradient(
      135deg,
      rgba(245, 242, 238, 0.96),
      rgba(255, 255, 255, 0.84)
    );
  }

  .map-card:hover {
    @apply translate-y-[-2px] border-[rgba(193,21,123,0.18)];
  }

  .map-content {
    @apply relative z-10 flex w-full items-center justify-between;
  }

  .map-title {
    @apply font-cover text-[2rem] font-light tracking-[-0.04em] text-[#111111];
  }

  .map-arrow {
    @apply text-[2rem] text-[#c1157b] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)];
  }

  .map-card:hover .map-arrow {
    @apply translate-x-[6px];
  }

  @media (max-width: 768px) {
    .image-wrapper {
      @apply h-[280px];
    }
    .card-content {
      @apply px-6 py-[2.2rem];
    }
    .map-card {
      @apply min-h-[120px] p-[1.6rem];
    }
    .map-title {
      @apply text-[1.8rem];
    }
  }

  .venue-image {
    @apply h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)];
    filter: saturate(0.94) contrast(1.02) brightness(0.98);
  }

  .venue-card:hover .venue-image {
    @apply scale-[1.035];
  }

  .image-overlay {
    @apply absolute inset-0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.04) 45%,
      transparent 72%
    );
  }

  .ceremony .image-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.02) 40%,
      transparent 70%
    );
  }

  .card-title {
    @apply font-cover text-[clamp(2.7rem,5vw,4rem)] font-light leading-[0.96] tracking-[-0.045em] text-[#121212];
  }

  .ceremony .card-title {
    text-rendering: geometricPrecision;
  }

  .info-item {
    @apply flex items-center justify-between gap-6;
  }

  .ceremony .info-item {
    @apply gap-[normal];
  }

  .ceremony .info-key,
  .ceremony .info-value {
    @apply m-0 flex items-center;
  }

  .info-key {
    @apply font-inter text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[rgba(0,0,0,0.42)];
  }

  .ceremony .info-key {
    @apply leading-none;
  }

  .info-value {
    @apply text-right font-inter text-[0.92rem] leading-[1.8] text-[rgba(0,0,0,0.74)];
  }

  .ceremony .info-value {
    @apply leading-[1.4];
  }

  .map-background {
    @apply absolute inset-0 bg-[length:34px_34px] opacity-[0.06];
    background-image:
      radial-gradient(circle at 25% 35%, #c1157b 1px, transparent 1px),
      radial-gradient(circle at 75% 65%, #1456aa 1px, transparent 1px);
  }

  .ceremony .map-background {
    background-image:
      radial-gradient(circle at 20% 30%, #c1157b 1px, transparent 1px),
      radial-gradient(circle at 70% 60%, #1456aa 1px, transparent 1px);
  }
</style>
