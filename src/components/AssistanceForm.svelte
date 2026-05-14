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
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwjpjBSlb3pZVtTDLJr8VsZf-4od71rKeOkauEZfbUD3WX1-pfQVcKB2cPNHiJPGSKS/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name,
          lastName,
          mail,
          attendance: attendance ? "Sí" : "No",
        }),
      });
      formState = "success";
    } catch (error) {
      console.error("Error:", error);
      formState = "error";
      errorMessage = "Hubo un problema. Intentá nuevamente.";
    }
  }
</script>

<section
  bind:this={reveal.element}
  class="rsvp-section"
  class:is-visible={reveal.visible}
>
  <div class="rsvp-wrapper">
    <div class="decorator-box">
      <div class="corner top-left"></div>
      <div class="corner bottom-right"></div>
      <div class="header-container">
        <h2 class="rsvp-title">Confirmar Asistencia</h2>
        <div class="subtitle-wrapper">
          <span class="mini-line"></span>
          <p class="rsvp-subtitle">Tu presencia es nuestro mejor regalo</p>
          <span class="mini-line"></span>
        </div>
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
                stroke-width="1.5"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="success-title">¡Gracias, {name}!</h3>
          <p class="success-text">
            {attendance
              ? "Qué lindo que nos acompañes en este día."
              : "Qué pena que no puedas venir, gracias por avisar."}
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
              <label class="input-label">Nombre</label>
              <input
                type="text"
                value={name}
                oninput={handleInputName}
                required
                placeholder="Tu nombre"
                class="text-input"
                disabled={formState === "loading"}
              />
            </div>
            <div class="input-group">
              <label class="input-label">Apellido</label>
              <input
                type="text"
                value={lastName}
                oninput={handleInputLastName}
                required
                placeholder="Tu apellido"
                class="text-input"
                disabled={formState === "loading"}
              />
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">Correo Electrónico</label>
            <input
              type="email"
              bind:value={mail}
              required
              placeholder="tu@email.com"
              class="text-input"
              disabled={formState === "loading"}
            />
          </div>
          <div class="attendance-group">
            <label class="input-label text-center w-full mb-3 block"
              >¿Vas a venir?</label
            >
            <div class="attendance-selector">
              <button
                type="button"
                class="attendance-btn {attendance ? 'active-yes' : 'inactive'}"
                onclick={() => (attendance = true)}
                disabled={formState === "loading"}
              >
                Sí voy
              </button>
              <button
                type="button"
                class="attendance-btn {!attendance ? 'active-no' : 'inactive'}"
                onclick={() => (attendance = false)}
                disabled={formState === "loading"}
              >
                No puedo asistir
              </button>
            </div>
          </div>
          {#if formState === "error"}
            <div class="error-message">
              {errorMessage}
            </div>
          {/if}
          <button
            type="submit"
            disabled={formState === "loading"}
            class="submit-button"
          >
            {formState === "loading" ? "Enviando..." : "Confirmar"}
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>

<style>
  .rsvp-section {
    @apply relative 
    w-full 
    bg-[#fdfbf8] 
    py-24 
    md:py-32 
    px-6 
    flex 
    justify-center 
    items-center
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

  .rsvp-wrapper {
    @apply w-full 
    max-w-3xl 
    mx-auto;
  }

  .decorator-box {
    @apply relative 
    bg-white
    shadow-[0_20px_50px_rgba(0,0,0,0.03)]
    border border-zinc-100
    p-8 
    md:p-16;
  }

  /* --- ESQUINAS EDITORIALES --- */
  .corner {
    @apply absolute 
    w-12 
    md:w-16 
    h-12 
    md:h-16;
  }

  .top-left {
    @apply top-0 
    left-0 
    border-t-[2px] 
    border-l-[2px] 
    border-bougainvillea;
  }

  .bottom-right {
    @apply bottom-0 
    right-0 
    border-b-[2px] 
    border-r-[2px] 
    border-aegean;
  }
  .header-container {
    @apply flex 
    flex-col 
    items-center 
    text-center 
    mb-12;
  }
  .rsvp-title {
    @apply font-serif 
    text-[2.5rem] 
    md:text-[3.5rem] 
    leading-none 
    tracking-tight 
    text-aegean 
    mb-6;
  }
  .subtitle-wrapper {
    @apply flex 
    items-center 
    justify-center 
    gap-4;
  }
  .mini-line {
    @apply h-[1px] 
    w-6 
    md:w-10 
    bg-bougainvillea/50;
  }

  .rsvp-subtitle {
    @apply font-sans 
    text-[10px] 
    md:text-xs 
    font-bold 
    uppercase 
    tracking-[0.25em] 
    text-aegean;
  }
  .form-container {
    @apply flex 
    flex-col 
    gap-6;
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
    @apply font-sans 
    text-[10px] 
    font-bold 
    uppercase 
    tracking-[0.2em] 
    text-aegean/80 
    ml-1;
  }

  .text-input {
    @apply w-full 
    bg-zinc-50/50 
    px-5 
    py-3.5 
    rounded-lg 
    border 
    border-zinc-200 
    font-sans
    text-[0.95rem]
    text-zinc-800 
    placeholder:text-zinc-400 
    outline-none 
    focus:bg-white
    focus:ring-1 
    focus:ring-aegean 
    focus:border-aegean 
    transition-all
    duration-300;
  }

  .attendance-group {
    @apply mt-4 
    mb-2;
  }

  .attendance-selector {
    @apply flex 
    flex-col 
    md:flex-row 
    gap-3;
  }

  .attendance-btn {
    @apply flex-1 
    py-3.5 
    rounded-lg 
    font-sans 
    text-xs 
    font-bold 
    uppercase 
    tracking-[0.15em] 
    border 
    transition-all 
    duration-300;
  }

  .active-yes {
    @apply bg-bougainvillea 
    text-white 
    border-bougainvillea 
    shadow-md 
    shadow-bougainvillea/20;
  }

  .active-no {
    @apply bg-aegean 
    text-white 
    border-aegean 
    shadow-md 
    shadow-aegean/20;
  }

  .inactive {
    @apply bg-transparent 
    text-zinc-400 
    border-zinc-200 
    hover:border-zinc-300 
    hover:text-zinc-600;
  }

  .error-message {
    @apply text-bougainvillea 
    text-xs 
    font-bold 
    uppercase
    tracking-widest
    text-center 
    bg-bougainvillea/5 
    p-4 
    rounded-lg;
  }

  .submit-button {
    @apply w-full 
    mt-4
    bg-aegean 
    text-white 
    py-4 
    rounded-lg 
    font-sans 
    text-xs 
    md:text-sm 
    font-bold 
    uppercase 
    tracking-[0.2em] 
    shadow-lg 
    shadow-aegean/20 
    hover:bg-aegean/90 
    transition-all 
    active:scale-[0.98];
  }
  .success-container {
    @apply flex 
    flex-col 
    items-center 
    text-center
    py-10;
  }

  .success-icon-wrapper {
    @apply mb-6 
    text-aegean;
  }

  .success-icon {
    @apply w-16 
    h-16;
  }

  .success-title {
    @apply font-serif 
    text-3xl 
    md:text-4xl 
    text-aegean 
    mb-3;
  }

  .success-text {
    @apply font-sans
    text-zinc-500 
    text-base
    md:text-lg;
  }
</style>
