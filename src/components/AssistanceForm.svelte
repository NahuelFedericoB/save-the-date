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
          <p class="rsvp-subtitle">
            Nos ayudas un monton a tener todo mejor organizado
          </p>
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
          <h3 class="success-title">
            ¡Gracias, {name}!
          </h3>
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
              <label for="guest-name" class="input-label"> Nombre </label>
              <input
                id="guest-name"
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
              <label for="guest-last-name" class="input-label">
                Apellido
              </label>
              <input
                id="guest-last-name"
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
            <label for="guest-email" class="input-label">
              Correo Electrónico
            </label>
            <input
              id="guest-email"
              type="email"
              bind:value={mail}
              required
              placeholder="tu@email.com"
              class="text-input"
              disabled={formState === "loading"}
            />
          </div>
          <div class="attendance-group">
            <span id="attendance-label" class="input-label attendance-label">
              ¿Vas a venir?
            </span>
            <div
              class="attendance-selector"
              role="group"
              aria-labelledby="attendance-label"
            >
              <button
                type="button"
                class="attendance-btn {attendance ? 'active-yes' : 'inactive'}"
                onclick={() => (attendance = true)}
                aria-pressed={attendance}
                disabled={formState === "loading"}
              >
                Sí voy
              </button>
              <button
                type="button"
                class="attendance-btn {!attendance ? 'active-no' : 'inactive'}"
                onclick={() => (attendance = false)}
                aria-pressed={!attendance}
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
    @apply relative flex w-full translate-y-10 items-center justify-center bg-[#fdfbf8] px-6 py-24 opacity-0 transition-[opacity,transform] duration-1000 ease-in-out will-change-transform md:py-32;
  }

  .is-visible {
    @apply translate-y-0 opacity-100;
  }

  .rsvp-wrapper {
    @apply mx-auto w-full max-w-3xl;
  }
  .decorator-box {
    @apply relative isolate rounded-[30px] border border-white/70 p-8 backdrop-blur-[14px] transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:p-16;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92),
      rgba(255, 255, 255, 0.82)
    );

    box-shadow:
      0 45px 140px rgba(0, 0, 0, 0.1),
      0 20px 50px rgba(0, 0, 0, 0.06),
      0 2px 12px rgba(255, 255, 255, 0.72) inset;
  }
  .decorator-box::before {
    @apply pointer-events-none absolute inset-0 rounded-[30px] opacity-90 content-[''];
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
  }

  .decorator-box:hover {
    @apply translate-y-[-6px];
    box-shadow:
      0 60px 160px rgba(0, 0, 0, 0.14),
      0 30px 70px rgba(0, 0, 0, 0.08),
      0 2px 12px rgba(255, 255, 255, 0.78) inset;
  }

  .corner {
    @apply pointer-events-none absolute h-[52px] w-[52px];
  }

  .top-left {
    @apply left-[18px] top-[18px] border-l-2 border-t-2 border-l-[#e10095]/[0.88] border-t-[#e10095]/[0.88];
  }

  .bottom-right {
    @apply bottom-[18px] right-[18px] border-b-2 border-r-2 border-b-[#1456aa]/[0.88] border-r-[#1456aa]/[0.88];
  }
  .header-container {
    @apply mb-12 flex flex-col items-center text-center;
  }

  .rsvp-title {
    @apply mb-6 font-serif text-[2.5rem] leading-none tracking-tight text-[#111111] md:text-[3.5rem];
  }

  .subtitle-wrapper {
    @apply flex items-center justify-center gap-4;
  }

  .mini-line {
    @apply h-[1px] w-6 bg-[#e10095]/[0.45] md:w-10;
  }

  .rsvp-subtitle {
    @apply font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#111111]/[0.72] md:text-xs;
  }

  .form-container {
    @apply flex flex-col gap-6;
  }

  .grid-container {
    @apply grid gap-6 md:grid-cols-2;
  }

  .input-group {
    @apply flex flex-col gap-2;
  }

  .input-label {
    @apply ml-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/[0.72];
  }

  .attendance-label {
    @apply mb-3 block w-full text-center;
  }

  .text-input {
    @apply w-full rounded-[16px] border border-black/[0.06] bg-white/[0.72] px-5 py-3.5 font-sans text-[0.95rem] text-[#111111]/[0.88] shadow-[0_4px_14px_rgba(0,0,0,0.03)] outline-none backdrop-blur-[8px] transition-all duration-300;
  }

  .text-input::placeholder {
    @apply text-[#111111]/[0.34];
  }

  .text-input:focus {
    @apply border-[#e10095]/[0.26] bg-white/[0.92] shadow-[0_0_0_4px_rgba(225,0,149,0.06)];
  }
  .attendance-group {
    @apply mb-2 mt-4;
  }

  .attendance-selector {
    @apply flex flex-col gap-3 md:flex-row;
  }

  .attendance-btn {
    @apply flex-1 rounded-[16px] border py-3.5 font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300;
  }

  .active-yes {
    @apply border-[#e10095]/[0.2] text-white shadow-[0_14px_30px_rgba(225,0,149,0.22)];

    background: linear-gradient(135deg, #e10095, #ff4db5);
  }

  .active-no {
    @apply border-[#111111]/[0.18] text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)];

    background: linear-gradient(135deg, #111111, #1f1f1f);
  }

  .inactive {
    @apply border-zinc-200 bg-transparent text-[#111111]/[0.46];
  }

  .inactive:hover {
    @apply border-[#111111]/[0.16] text-[#111111]/[0.72];
  }
  .error-message {
    @apply rounded-[16px] bg-[#e10095]/[0.05] p-4 text-center text-xs font-bold uppercase tracking-widest text-[#e10095];
  }

  .submit-button {
    @apply mt-4 w-full rounded-[18px] py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_20px_40px_rgba(0,0,0,0.16)] transition-all duration-500 active:scale-[0.98] md:text-sm;

    background: linear-gradient(135deg, #111111, #1b1b1b);
  }

  .submit-button:hover {
    @apply shadow-[0_28px_55px_rgba(0,0,0,0.2)];
    transform: translateY(-2px);
  }
  .success-container {
    @apply flex flex-col items-center py-10 text-center;
  }

  .success-icon-wrapper {
    @apply mb-6 text-[#111111];
  }

  .success-icon {
    @apply h-16 w-16;
  }

  .success-title {
    @apply mb-3 font-serif text-3xl text-[#111111] md:text-4xl;
  }

  .success-text {
    @apply font-sans text-base text-[#111111]/[0.62] md:text-lg;
  }

  @media (max-width: 768px) {
    .rsvp-section {
      @apply py-20;
    }

    .decorator-box {
      @apply rounded-[26px];
      box-shadow:
        0 35px 90px rgba(0, 0, 0, 0.1),
        0 15px 35px rgba(0, 0, 0, 0.05),
        0 2px 10px rgba(255, 255, 255, 0.65) inset;
    }

    .decorator-box::before {
      @apply rounded-[26px];
    }

    .corner {
      @apply h-[44px] w-[44px];
    }

    .top-left {
      @apply left-[16px] top-[16px];
    }

    .bottom-right {
      @apply bottom-[16px] right-[16px];
    }

    .rsvp-title {
      @apply text-[2.9rem];
    }
  }
</style>
