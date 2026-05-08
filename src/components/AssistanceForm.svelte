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

  const cleanText = (value) => {
    return value.replace(regexSoloLetras, "");
  };

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
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwjpjBSlb3pZVtTDLJr8VsZf-4od71rKeOkauEZfbUD3WX1-pfQVcKB2cPNHiJPGSKS/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          name,
          lastName,
          mail,
          attendance: attendance ? "Sí" : "No",
        }),
      });

      // En lugar del alert, cambiamos el estado para renderizar el mensaje
      formState = "success";
    } catch (error) {
      console.error("Error:", error);
      formState = "error";
      errorMessage =
        "Hubo un problema al enviar tu confirmación. Intentá nuevamente.";
    }
  }
</script>

<section
  bind:this={reveal.element}
  class="rsvp-section"
  class:is-visible={reveal.visible}
>
  <div class="header-container">
    <h2 class="rsvp-title">Confirmar Asistencia</h2>
    <p class="rsvp-subtitle">
      Nos ayudás un monton a tener todo mejor organizado
    </p>
  </div>
  {#if formState === "success"}
    <div class="success-container">
      <div class="success-icon-wrapper">
        <svg
          class="success-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 class="success-title">¡Gracias, {name}!</h3>
      <p class="success-text">
        {attendance
          ? "Qué lindo que nos acompañes en este día."
          : "Que mal que no puedas venir, gracias por avisar."}
      </p>
    </div>
  {:else}
    <form
      onsubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      class="form-container"
    >
      <div class="grid-container">
        <div class="input-group">
          <label class="input-label">Nombre</label><input
            type="text"
            value={name}
            oninput={handleInputName}
            required
            placeholder="Nombre"
            class="text-input"
            disabled={formState === "loading"}
          />
        </div>
        <div class="input-group">
          <label class="input-label">Apellido</label><input
            type="text"
            value={lastName}
            oninput={handleInputLastName}
            required
            placeholder="Apellido"
            class="text-input"
            disabled={formState === "loading"}
          />
        </div>
      </div>
      <div class="input-group">
        <label class="input-label">Correo Electrónico</label><input
          type="email"
          bind:value={mail}
          required
          placeholder="tu@email.com"
          class="text-input"
          disabled={formState === "loading"}
        />
      </div>
      <div class="toggle-container">
        <div class="toggle-text-wrapper">
          <span class="toggle-label-text">¿Confirmás tu asistencia?</span>
          <span class="toggle-status">
            {attendance ? "¡Sí, estaré ahí!" : "No podré asistir"}
          </span>
        </div>
        <button
          type="button"
          onclick={() => (attendance = !attendance)}
          class="toggle-button"
          class:toggle-active={attendance}
          class:toggle-inactive={!attendance}
          disabled={formState === "loading"}
          ><div
            class="toggle-knob"
            class:knob-active={attendance}
            class:knob-inactive={!attendance}
          ></div></button
        >
      </div>
      {#if formState === "error"}
        <div class="error-message">{errorMessage}</div>
      {/if}<button
        type="submit"
        disabled={formState === "loading"}
        class="submit-button"
      >
        {formState === "loading" ? "Guardando..." : "Enviar Confirmación"}
      </button>
    </form>
  {/if}
</section>

<style>
  .rsvp-section {
    @apply max-w-3xl 
    mx-auto 
    py-20 
    px-8 
    bg-white 
    rounded-[2rem] 
    border-2 
    border-white 
    shadow-2xl 
    shadow-zinc-200/50 
    duration-1000 
    opacity-0 
    translate-y-20 
    transition-[opacity,transform] 
    will-change-transform;
  }
  .is-visible {
    @apply opacity-100 
    translate-y-0;
  }
  .header-container {
    @apply text-center 
    mb-12;
  }
  .rsvp-title {
    @apply font-serif 
    text-4xl 
    text-zinc-900 
    mb-4 
    tracking-tight;
  }
  .rsvp-subtitle {
    @apply font-sans 
    text-zinc-500 
    italic 
    text-lg;
  }
  .form-container {
    @apply space-y-6;
  }
  .grid-container {
    @apply grid 
    md:grid-cols-2 
    gap-6;
  }
  .input-group {
    @apply flex 
    flex-col 
    gap-2;
  }
  .input-label {
    @apply text-xs 
    uppercase 
    tracking-widest 
    text-zinc-400 
    ml-2;
  }
  .text-input {
    @apply bg-[#FDFBF7] 
    p-4 
    rounded-2xl 
    outline-none 
    border-none 
    focus:ring-2 
    focus:ring-[#D4AF37]/20 
    disabled:opacity-50;
  }
  .toggle-container {
    @apply flex 
    items-center 
    justify-between 
    bg-[#FDFBF7] 
    p-6 
    rounded-2xl 
    border 
    border-white 
    shadow-sm;
  }
  .toggle-text-wrapper {
    @apply flex 
    flex-col;
  }
  .toggle-label-text {
    @apply text-zinc-800 
    font-medium;
  }
  .toggle-status {
    @apply text-xs 
    text-zinc-400 
    uppercase 
    tracking-tighter;
  }
  .toggle-button {
    @apply relative 
    w-14 
    h-8 
    rounded-full 
    transition-colors 
    duration-300 
    disabled:opacity-50;
  }
  .toggle-active {
    @apply bg-[#D4AF37];
  }
  .toggle-inactive {
    @apply bg-zinc-300;
  }
  .toggle-knob {
    @apply absolute 
    top-1 
    left-1 
    bg-white 
    w-6 
    h-6 
    rounded-full 
    shadow-sm 
    transition-transform 
    duration-300;
  }
  .knob-active {
    @apply translate-x-6;
  }
  .knob-inactive {
    @apply translate-x-0;
  }
  .submit-button {
    @apply w-full 
    bg-zinc-900 
    text-white 
    py-5 
    rounded-2xl 
    font-serif 
    text-xl 
    hover:bg-black 
    transition-all 
    shadow-lg 
    active:scale-[0.98] 
    disabled:opacity-50;
  }
  .success-container {
    @apply flex 
    flex-col 
    items-center 
    justify-center 
    py-10 
    text-center 
    animate-[fadeIn_0.5s_ease-out];
  }
  .success-icon-wrapper {
    @apply w-16 
    h-16 
    bg-[#D4AF37]/10 
    text-[#D4AF37] 
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
    text-zinc-900 
    mb-2;
  }
  .success-text {
    @apply font-sans 
    text-zinc-500 
    text-lg;
  }
  .error-message {
    @apply text-red-500 
    text-sm 
    text-center 
    font-medium 
    bg-red-50 
    p-3 
    rounded-xl;
  }
</style>
