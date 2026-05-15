<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="dresscode-section"
  class:is-visible={reveal.visible}
>
  <div class="background-texture"></div>
  <div class="content-wrapper">
    <div class="decorator-box">
      <div class="corner top-left"></div>
      <p class="eyebrow">
        Una noche especial
      </p>
      <h2 class="section-title">
        Dresscode
      </h2>
      <div class="subtitle-wrapper">
        <span class="mini-line"></span>
        <p class="section-subtitle">
          Elegante / Elegante Sport
        </p>
        <span class="mini-line"></span>
      </div>
      <p class="description">
        Queremos que te sientas increíble para celebrar
        y disfrutar con nosotros esta noche.
      </p>
      <div class="corner bottom-right"></div>
    </div>
  </div>
</section>

<style>
  .dresscode-section {
    @apply relative
    w-full
    overflow-hidden
    bg-[#fcfaf7]
    px-6
    py-24
    md:px-10
    md:py-32
    flex
    items-center
    justify-center
    opacity-0
    translate-y-10
    transition-[opacity,transform]
    duration-1000
    ease-in-out;

    will-change: transform, opacity;
  }

  .is-visible {
    @apply opacity-100
    translate-y-0;
  }
  .background-texture {
    @apply absolute
    inset-0
    pointer-events-none;

    background:
      radial-gradient(
        circle at top left,
        rgba(230,0,154,0.045),
        transparent 32%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(15,79,168,0.05),
        transparent 34%
      );

    opacity: 0.9;
  }

  .content-wrapper {
    @apply relative
    z-10
    w-full
    max-w-4xl
    mx-auto
    flex
    justify-center;
  }

  .decorator-box {
    @apply relative
    flex
    flex-col
    items-center
    text-center
    w-full
    rounded-[34px]
    px-8
    py-14
    md:px-16
    md:py-20;
  }
  .corner {
    @apply absolute;

    width: 52px;
    height: 52px;
  }

  .top-left {
    top: 22px;
    left: 22px;
    border-top: 2px solid #e10095;
    border-left: 2px solid #e10095;
  }

  .bottom-right {
    bottom: 22px;
    right: 22px;
    border-bottom: 2px solid rgba(15,79,168,0.92);
    border-right: 2px solid rgba(15,79,168,0.92);
  }
  .eyebrow {
    @apply mb-5
    font-sans
    text-[11px]
    md:text-[12px]
    font-semibold
    uppercase
    tracking-[0.42em];

    color: rgba(17,17,17,0.42);
  }
  .section-title {
    @apply mb-8
    font-serif
    text-[4rem]
    md:text-[5.2rem]
    leading-[0.95];

    letter-spacing: -0.045em;
    color: #111111;
  }


  .subtitle-wrapper {
    @apply flex
    items-center
    justify-center
    gap-4
    mb-7;
  }

  .mini-line {
    @apply h-[1.5px]
    w-8
    md:w-12;

    background:
      linear-gradient(
        to right,
        transparent,
        #e10095,
        transparent
      );
  }

  .section-subtitle {
    @apply font-sans
    text-[11px]
    md:text-[13px]
    font-bold
    uppercase;

    letter-spacing: 0.34em;
    color: #e10095;
  }

  .description {
    @apply max-w-[520px]
    mx-auto
    font-sans
    text-[1rem]
    md:text-[1.12rem]
    italic
    leading-relaxed;

    color: rgba(17,17,17,0.66);
  }

  @media (max-width: 768px) {

    .dresscode-section {
      @apply py-20;
    }


    .corner {
      width: 46px;
      height: 46px;
    }

    .top-left {
      top: 18px;
      left: 18px;
    }

    .bottom-right {
      bottom: 18px;
      right: 18px;
    }

    .section-title {
      font-size: 3.6rem;
    }

    .section-subtitle {
      letter-spacing: 0.24em;
    }

    .description {
      font-size: 0.98rem;
      line-height: 1.9;
    }
  }
  @media (max-width: 380px) {

    .section-title {
      font-size: 3.2rem;
    }

    .subtitle-wrapper {
      gap: 0.75rem;
    }

    .section-subtitle {
      font-size: 10px;
    }
  }
  @media (min-width: 768px) {

    .corner {
      width: 74px;
      height: 74px;
    }
  }
</style>