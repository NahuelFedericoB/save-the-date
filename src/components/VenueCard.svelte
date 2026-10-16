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
    @apply relative overflow-hidden;
    width: 100%;
    max-width: 640px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(18px);
    box-shadow:
      0 45px 120px rgba(0, 0, 0, 0.08),
      0 15px 40px rgba(0, 0, 0, 0.05);
    transition:
      transform 1000ms cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 1000ms cubic-bezier(0.16, 1, 0.3, 1);
    isolation: isolate;
  }

  .venue-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 60px 140px rgba(0, 0, 0, 0.1),
      0 20px 55px rgba(0, 0, 0, 0.06);
  }

  .image-wrapper {
    @apply relative overflow-hidden;
    height: 340px;
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
    color: rgba(255, 255, 255, 0.92);
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

  .info-list {
    margin-top: 2.8rem;
    margin-bottom: 3rem;
  }

  .info-divider {
    width: 100%;
    height: 1px;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.08), transparent);
  }

  .map-card {
    @apply relative flex items-center justify-between overflow-hidden;
    min-height: 140px;
    padding: 2rem;
    text-decoration: none;
    background: linear-gradient(
      135deg,
      rgba(245, 242, 238, 0.96),
      rgba(255, 255, 255, 0.84)
    );
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition:
      transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
      border-color 900ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .map-card:hover {
    transform: translateY(-2px);
    border-color: rgba(193, 21, 123, 0.18);
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
    transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .map-card:hover .map-arrow {
    transform: translateX(6px);
  }

  @media (max-width: 768px) {
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

  .venue-image {
    @apply h-full w-full object-cover;
    transition: transform 1800ms cubic-bezier(0.16, 1, 0.3, 1);
    filter: saturate(0.94) contrast(1.02) brightness(0.98);
  }

  .venue-card:hover .venue-image {
    transform: scale(1.035);
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
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(2.7rem, 5vw, 4rem);
    font-weight: 300;
    line-height: 0.96;
    letter-spacing: -0.045em;
    color: #121212;
  }

  .ceremony .card-title {
    text-rendering: geometricPrecision;
  }

  .info-item {
    @apply flex items-center justify-between gap-6;
  }

  .ceremony .info-item {
    gap: normal;
  }

  .ceremony .info-key,
  .ceremony .info-value {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .info-key {
    font-family: "Inter", sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.42);
  }

  .ceremony .info-key {
    line-height: 1;
  }

  .info-value {
    font-family: "Inter", sans-serif;
    font-size: 0.92rem;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.74);
    text-align: right;
  }

  .ceremony .info-value {
    line-height: 1.4;
  }

  .map-background {
    @apply absolute inset-0;
    opacity: 0.06;
    background-image:
      radial-gradient(circle at 25% 35%, #c1157b 1px, transparent 1px),
      radial-gradient(circle at 75% 65%, #1456aa 1px, transparent 1px);
    background-size: 34px 34px;
  }

  .ceremony .map-background {
    background-image:
      radial-gradient(circle at 20% 30%, #c1157b 1px, transparent 1px),
      radial-gradient(circle at 70% 60%, #1456aa 1px, transparent 1px);
  }
</style>
