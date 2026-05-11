<script>
  import { useReveal } from "../lib/utils/reveal.svelte.js";

  const reveal = useReveal();

  let name = $state("");
  let lastName = $state("");
  let mail = $state("");
  let attendance = $state(true);
  let formState = $state("idle");
  let errorMessage = $state("");

  const regexSoloLetras = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g;
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const cleanText = (value) => value.replace(regexSoloLetras, "");

  const handleInputName = (e) => {
    name = cleanText(e.target.value);
    e.target.value = name;
  };

  const handleInputLastName = (e) => {
    lastName = cleanText(e.target.value);
    e.target.value = lastName;
  };

  async function handleSubmit() {
    if (!regexMail.test(mail)) {
      formState = "error";
      errorMessage = "Por favor, ingresá un mail válido.";
      return;
    }

    formState = "loading";
    errorMessage = "";
    const scriptURL = "https://script.google.com/macros/s/AKfycbwjpjBSlb3pZVtTDLJr8VsZf-4od71rKeOkauEZfbUD3WX1-pfQVcKB2cPNHiJPGSKS/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ name, lastName, mail, attendance: attendance ? "Sí" : "No" }),
      });
      formState = "success";
    } catch (error) {
      console.error("Error:", error);
      formState = "error";
      errorMessage = "Hubo un problema. Intentá nuevamente.";
    }
  }
</script>

<section bind:this={reveal.element} class="rsvp-full-width" class:is-visible={reveal.visible}><div class="top-dotted-line"></div><div class="rsvp-content-limit"><div class="header-container"><h2 class="rsvp-title">Confirmar Asistencia</h2><p class="rsvp-subtitle">Nos ayudás un montón a tener todo mejor organizado.</p></div>{#if formState === "success"}<div class="success-container"><div class="success-icon-wrapper"><svg class="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div><h3 class="success-title">¡Gracias, {name}!</h3><p class="success-text">{attendance ? "Qué lindo que nos acompañes en este día." : "Qué mal que no puedas venir, gracias por avisar."}</p></div>{:else}<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="form-container"><div class="input-group"><label class="input-label">Nombre y Apellido</label><div class="grid-container"><input type="text" value={name} oninput={handleInputName} required placeholder="Ej: Donna Sheridan" class="text-input" disabled={formState === "loading"} /><input type="text" value={lastName} oninput={handleInputLastName} required placeholder="Apellido" class="text-input" disabled={formState === "loading"} /></div></div><div class="input-group"><label class="input-label">Correo Electrónico</label><input type="email" bind:value={mail} required placeholder="tu@email.com" class="text-input" disabled={formState === "loading"} /></div><div class="toggle-container"><span class="toggle-label-text">¿Confirmás tu asistencia?</span><button type="button" onclick={() => (attendance = !attendance)} class="toggle-switch" class:active={attendance} disabled={formState === "loading"}><div class="toggle-knob" class:knob-active={attendance}></div></button></div>{#if formState === "error"}<div class="error-message">{errorMessage}</div>{/if}<button type="submit" disabled={formState === "loading"} class="submit-button">{formState === "loading" ? "Guardando..." : "Enviar Confirmación"}</button></form>{/if}</div></section>

<style>
  .rsvp-full-width {
    @apply w-full 
    bg-white 
    pt-0 
    pb-0 
    duration-1000 
    opacity-0 
    translate-y-4 
    transition-all;
  }

  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }

  .top-dotted-line {
    @apply w-full 
    h-[4px] 
    mb-16;
    background-image: linear-gradient(to right, #CFD8DC 50%, rgba(255,255,255,0) 0%);
    background-position: top;
    background-size: 15px 4px;
    background-repeat: repeat-x;
  }

  .rsvp-content-limit {
    @apply max-w-3xl 
    mx-auto 
    px-6 
    pb-20;
  }

  .header-container {
    @apply text-center 
    mb-12;
  }

  .rsvp-title {
    @apply font-serif 
    text-4xl 
    md:text-5xl 
    text-aegean 
    font-bold 
    mb-4;
  }

  .rsvp-subtitle {
    @apply font-sans 
    text-zinc-500 
    italic 
    text-lg;
  }

  .form-container {
    @apply space-y-8;
  }

  .grid-container {
    @apply grid 
    md:grid-cols-2 
    gap-4;
  }

  .input-group {
    @apply flex 
    flex-col 
    gap-3;
  }

  .input-label {
    @apply text-xs 
    font-black 
    uppercase 
    tracking-widest 
    text-aegean;
  }

  .text-input {
    @apply w-full 
    bg-white 
    p-4 
    rounded-xl 
    border 
    border-zinc-200 
    text-zinc-700 
    placeholder:text-zinc-400 
    outline-none 
    focus:ring-2 
    focus:ring-aegean/10 
    focus:border-aegean/30 
    transition-all;
  }

  .toggle-container {
    @apply flex 
    items-center 
    justify-between 
    py-4;
  }

  .toggle-label-text {
    @apply text-aegean 
    font-bold 
    text-sm 
    uppercase 
    tracking-widest;
  }

  .toggle-switch {
    @apply relative 
    w-12 
    h-6 
    bg-zinc-200 
    rounded-full 
    transition-colors;
  }

  .toggle-switch.active {
    @apply bg-aegean;
  }

  .toggle-knob {
    @apply absolute 
    top-1 
    left-1 
    w-4 
    h-4 
    bg-white 
    rounded-full 
    transition-transform;
  }

  .knob-active {
    @apply translate-x-6;
  }

  .submit-button {
    @apply w-full 
    bg-bougainvillea 
    text-white 
    py-6 
    rounded-2xl 
    font-serif 
    text-2xl 
    font-semibold 
    shadow-lg 
    shadow-bougainvillea/20 
    hover:brightness-110 
    transition-all 
    active:scale-[0.98];
  }

  .success-container {
    @apply flex 
    flex-col 
    items-center 
    text-center;
  }

  .success-icon-wrapper {
    @apply w-16 
    h-16 
    bg-green-50 
    text-green-500 
    rounded-full 
    flex 
    items-center 
    justify-center 
    mb-6;
  }

  .success-icon {
    @apply w-8 
    h-8;
  }

  .success-title {
    @apply font-serif 
    text-3xl 
    text-aegean 
    mb-2;
  }

  .success-text {
    @apply text-zinc-500 
    text-lg;
  }

  .error-message {
    @apply text-red-500 
    text-sm 
    font-bold 
    text-center 
    bg-red-50 
    p-4 
    rounded-xl;
  }
</style>