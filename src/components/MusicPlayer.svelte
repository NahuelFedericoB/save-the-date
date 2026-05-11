<script>
  import { onMount } from "svelte";

  let isMuted = true;
  let iframeRef;
  let hasInteracted = false;

  const youtubeUrl =
    "https://www.youtube.com/embed/XEjLoHdbVeE?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=XEjLoHdbVeE";

  function startParty() {
    // Verificamos que sea un scroll down real (más de 20px) o un click/touch
    if (!hasInteracted && window.scrollY > 20 && iframeRef) {
      iframeRef.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*",
      );
      iframeRef.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*",
      );
      isMuted = false;
      hasInteracted = true;

      // Limpiamos la basura: ya arrancó, no necesitamos escuchar más esto
      window.removeEventListener("scroll", startParty);
      window.removeEventListener("touchstart", startParty);
      window.removeEventListener("click", startParty);
    }
  }

  onMount(() => {
    // Escuchamos el scroll, pero mantenemos los otros de backup por las políticas de Chrome
    window.addEventListener("scroll", startParty);
    window.addEventListener("touchstart", startParty);
    window.addEventListener("click", startParty);

    return () => {
      window.removeEventListener("scroll", startParty);
      window.removeEventListener("touchstart", startParty);
      window.removeEventListener("click", startParty);
    };
  });

  function toggleMute(event) {
    event.stopPropagation();

    if (isMuted) {
      iframeRef.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*",
      );
      iframeRef.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*",
      );
    } else {
      iframeRef.contentWindow.postMessage(
        '{"event":"command","func":"mute","args":""}',
        "*",
      );
    }

    isMuted = !isMuted;
    hasInteracted = true;

    // Si el usuario tocó el botón antes de scrollear, cancelamos el auto-play del scroll
    window.removeEventListener("scroll", startParty);
    window.removeEventListener("touchstart", startParty);
    window.removeEventListener("click", startParty);
  }
</script>

<div class="music-wrapper">
  <iframe
    bind:this={iframeRef}
    class="hidden-player"
    src={youtubeUrl}
    allow="autoplay"
    title="Audio de fondo"
  ></iframe><button
    class="music-btn"
    on:click={toggleMute}
    aria-label="Control de volumen"
    >{#if isMuted}<i class="fa-solid fa-volume-xmark"></i>{:else}<i
        class="fa-solid fa-volume-high"
      ></i>{/if}</button
  >
</div>

<style>
  .music-wrapper {
    @apply fixed 
    bottom-6 
    right-6 
    z-50;
  }

  .hidden-player {
    @apply absolute 
    h-0 
    w-0 
    opacity-0 
    pointer-events-none;
  }

  .music-btn {
    @apply flex 
    h-14 
    w-14 
    items-center 
    justify-center 
    rounded-full 
    bg-bougainvillea 
    text-xl 
    text-white 
    shadow-lg 
    shadow-bougainvillea/40 
    transition-all 
    hover:scale-110 
    active:scale-95;
  }
</style>
