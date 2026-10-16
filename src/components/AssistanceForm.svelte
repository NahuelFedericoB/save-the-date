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
            <span
              id="attendance-label"
              class="input-label mb-3 block w-full text-center"
            >
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
    @apply relative rounded-[30px] border border-white/70 p-8 md:p-16;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92),
      rgba(255, 255, 255, 0.82)
    );

    backdrop-filter: blur(14px);
    box-shadow:
      0 45px 140px rgba(0, 0, 0, 0.1),
      0 20px 50px rgba(0, 0, 0, 0.06),
      0 2px 12px rgba(255, 255, 255, 0.72) inset;
    isolation: isolate;
    transition:
      transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 600ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .decorator-box::before {
    content: "";
    @apply pointer-events-none absolute inset-0 rounded-[30px];
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
    opacity: 0.9;
  }

  .decorator-box:hover {
    transform: translateY(-6px);
    box-shadow:
      0 60px 160px rgba(0, 0, 0, 0.14),
      0 30px 70px rgba(0, 0, 0, 0.08),
      0 2px 12px rgba(255, 255, 255, 0.78) inset;
  }

  .corner {
    @apply pointer-events-none absolute;

    width: 52px;
    height: 52px;
  }

  .top-left {
    top: 18px;
    left: 18px;
    border-top: 2px solid rgba(225, 0, 149, 0.88);
    border-left: 2px solid rgba(225, 0, 149, 0.88);
  }

  .bottom-right {
    bottom: 18px;
    right: 18px;
    border-bottom: 2px solid rgba(20, 86, 170, 0.88);
    border-right: 2px solid rgba(20, 86, 170, 0.88);
  }
  .header-container {
    @apply mb-12 flex flex-col items-center text-center;
  }

  .rsvp-title {
    @apply mb-6 font-serif text-[2.5rem] leading-none tracking-tight md:text-[3.5rem];

    color: #111111;
  }

  .subtitle-wrapper {
    @apply flex items-center justify-center gap-4;
  }

  .mini-line {
    @apply h-[1px] w-6 md:w-10;

    background: rgba(225, 0, 149, 0.45);
  }

  .rsvp-subtitle {
    @apply font-sans text-[10px] font-bold uppercase tracking-[0.25em] md:text-xs;

    color: rgba(17, 17, 17, 0.72);
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
    @apply ml-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em];

    color: rgba(17, 17, 17, 0.72);
  }

  .text-input {
    @apply w-full rounded-[16px] border px-5 py-3.5 font-sans text-[0.95rem] outline-none transition-all duration-300;

    background: rgba(255, 255, 255, 0.72);
    border-color: rgba(0, 0, 0, 0.06);
    color: rgba(17, 17, 17, 0.88);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  }

  .text-input::placeholder {
    color: rgba(17, 17, 17, 0.34);
  }

  .text-input:focus {
    background: rgba(255, 255, 255, 0.92);
    border-color: rgba(225, 0, 149, 0.26);
    box-shadow: 0 0 0 4px rgba(225, 0, 149, 0.06);
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
    @apply text-white;

    background: linear-gradient(135deg, #e10095, #ff4db5);
    border-color: rgba(225, 0, 149, 0.2);
    box-shadow: 0 14px 30px rgba(225, 0, 149, 0.22);
  }

  .active-no {
    @apply text-white;

    background: linear-gradient(135deg, #111111, #1f1f1f);
    border-color: rgba(17, 17, 17, 0.18);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  }

  .inactive {
    @apply border-zinc-200 bg-transparent;

    color: rgba(17, 17, 17, 0.46);
  }

  .inactive:hover {
    border-color: rgba(17, 17, 17, 0.16);
    color: rgba(17, 17, 17, 0.72);
  }
  .error-message {
    @apply rounded-[16px] p-4 text-center text-xs font-bold uppercase tracking-widest;

    color: #e10095;

    background: rgba(225, 0, 149, 0.05);
  }

  .submit-button {
    @apply mt-4 w-full rounded-[18px] py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 active:scale-[0.98] md:text-sm;

    background: linear-gradient(135deg, #111111, #1b1b1b);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.16);
  }

  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 28px 55px rgba(0, 0, 0, 0.2);
  }
  .success-container {
    @apply flex flex-col items-center py-10 text-center;
  }

  .success-icon-wrapper {
    @apply mb-6;

    color: #111111;
  }

  .success-icon {
    @apply h-16 w-16;
  }

  .success-title {
    @apply mb-3 font-serif text-3xl md:text-4xl;

    color: #111111;
  }

  .success-text {
    @apply font-sans text-base md:text-lg;

    color: rgba(17, 17, 17, 0.62);
  }

  @media (max-width: 768px) {
    .rsvp-section {
      @apply py-20;
    }

    .decorator-box {
      border-radius: 26px;
      box-shadow:
        0 35px 90px rgba(0, 0, 0, 0.1),
        0 15px 35px rgba(0, 0, 0, 0.05),
        0 2px 10px rgba(255, 255, 255, 0.65) inset;
    }

    .decorator-box::before {
      border-radius: 26px;
    }

    .corner {
      width: 44px;
      height: 44px;
    }

    .top-left {
      top: 16px;
      left: 16px;
    }

    .bottom-right {
      bottom: 16px;
      right: 16px;
    }

    .rsvp-title {
      font-size: 2.9rem;
    }
  }
</style>
