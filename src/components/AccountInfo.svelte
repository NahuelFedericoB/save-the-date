<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();
</script>

<section
  bind:this={reveal.element}
  class="account-section"
  class:is-visible={reveal.visible}
  aria-labelledby="account-title"
>
  <div class="account-wrapper">
    <h2 id="account-title" class="section-title">Un detalle</h2>
    <div class="divider" aria-hidden="true"></div>
    <p class="description">
      Nos preguntaron mucho sobre esto. Si querés hacernos una atención, podés
      hacerlo a esta cuenta:
    </p>
    <dl class="account-details">
      <div class="account-item">
        <dt class="account-label">CBU</dt>
        <dd class="account-value">0000168300000009197671</dd>
      </div>
      <div class="account-item">
        <dt class="account-label">Alias</dt>
        <dd class="account-value">funche.oste.LEMON</dd>
      </div>
    </dl>
    <p class="thank-you">Estamos más que agradecidos.</p>
  </div>
</section>

<style>
  .account-section {
    @apply relative w-full translate-y-10 bg-[#fdfbf8] px-6 py-20 text-center opacity-0 transition-[opacity,transform] duration-1000 ease-in-out will-change-transform md:px-12 md:py-28;
  }

  .is-visible {
    @apply translate-y-0 opacity-100;
  }

  .account-wrapper {
    @apply mx-auto flex w-full max-w-3xl flex-col items-center;
  }

  .section-title {
    @apply font-serif text-[2.5rem] leading-tight tracking-[-0.04em] text-[#111111] md:text-[3.5rem];
  }

  .divider {
    @apply my-7 h-px w-16 bg-[#c1157b]/50;
  }

  .description {
    @apply max-w-xl font-sans text-[0.95rem] leading-[1.9] text-[#111111]/70 md:text-base;
  }

  .account-details {
    @apply mt-10 flex w-full max-w-xl flex-col gap-7 rounded-[26px] border border-white/70 bg-white/60 px-5 py-9 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:px-10 md:py-10;
  }

  .account-item {
    @apply flex min-w-0 flex-col items-center gap-3;
  }

  .account-label {
    @apply font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c1157b];
  }

  .account-value {
    @apply m-0 max-w-full select-all break-all font-sans text-[clamp(0.8rem,3.4vw,1.05rem)] font-medium leading-relaxed tracking-[0.04em] text-[#111111]/85;
  }

  .thank-you {
    @apply mt-9 font-serif text-xl italic leading-relaxed text-[#111111]/75 md:text-2xl;
  }
</style>
