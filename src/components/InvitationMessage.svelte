<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="invitation-section"
  class:is-visible={reveal.visible}
>
  <div class="message-container">
    <div class="divider-container">
      <div class="divider-line"></div>
    </div>
    <h2 class="invitation-title">
      Este es un día muy especial
      <br class="desktop-only" />
      para nosotros
    </h2>
    <p class="invitation-text">
      ¡Y que mejor que compartirlo con vos!
    </p>
    <div class="divider-container">
      <div class="divider-line"></div>
    </div>
  </div>
</section>

<style>
  .invitation-section {
    @apply py-24
    px-6
    text-center
    duration-1000
    ease-in-out
    opacity-0
    translate-y-10
    transition-[opacity,transform];

    will-change: transform;
  }

  .is-visible {
    @apply opacity-100
    translate-y-0;
  }

  .message-container {
    @apply relative
    max-w-5xl
    mx-auto
    px-8
    py-14
    md:px-14
    md:py-16;
  }
.message-container::before {
  content: "";

  @apply absolute
  top-0
  right-0
  h-14
  w-14
  md:h-20
  md:w-20;

  border-top: 2px solid rgba(20, 86, 170, 0.92);
  border-right: 2px solid rgba(20, 86, 170, 0.92);
}

.message-container::after {
  content: "";

  @apply absolute
  bottom-0
  left-0
  h-14
  w-14
  md:h-20
  md:w-20;

  border-bottom: 2px solid rgba(20, 86, 170, 0.92);
  border-left: 2px solid rgba(20, 86, 170, 0.92);
}
  .divider-container {
    @apply flex
    justify-center
    my-7;
  }

  .divider-line {
    @apply h-[2px]
    w-16;

    background: #d6008f;
  }

  .invitation-title {
    @apply font-serif
    text-[2.7rem]
    leading-[1.12]
    tracking-[-0.035em]
    mb-8;

    color: #181818;
  }

  @media (min-width: 768px) {
    .invitation-title {
      font-size: 4.6rem;
      line-height: 1.05;
    }
  }

  .invitation-text {
    @apply font-sans
    text-[1.25rem]
    md:text-[1.6rem]
    tracking-[0.01em]
    font-medium
    italic;

    color: rgba(30,30,30,0.72);
    line-height: 1.65;
  }
  .desktop-only {
    @apply hidden md:block;
  }
</style>
