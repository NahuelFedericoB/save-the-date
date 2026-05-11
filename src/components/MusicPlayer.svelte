<script>
  import { onMount } from "svelte";

  let isMuted = true;
  let iframeRef;
  let hasInteracted = false;
  let isIframeReady = false;

  const youtubeUrl =
    "https://www.youtube.com/embed/XEjLoHdbVeE?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=XEjLoHdbVeE";


  function sendCommand(func, args = "") {
    if (iframeRef && iframeRef.contentWindow) {
      iframeRef.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    }
  }

  function startParty() {
    if (!hasInteracted && isIframeReady && (window.scrollY > 10 || event?.type !== 'scroll')) {
      executePlay();
    }
  }

  function executePlay() {
    sendCommand("unMute");
    sendCommand("playVideo");
    isMuted = false;
    hasInteracted = true;

    ["scroll", "touchstart", "click"].forEach(ev => 
      window.removeEventListener(ev, startParty)
    );
  }

  function handleIframeLoad() {
    isIframeReady = true;

    if (window.scrollY > 10) {
      startParty();
    }
  }

  onMount(() => {
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
      sendCommand("unMute");
      sendCommand("playVideo");
    } else {
      sendCommand("mute");
    }
    isMuted = !isMuted;
    hasInteracted = true;
  }
</script>

<div class="music-wrapper">
  <iframe
    bind:this={iframeRef}
    on:load={handleIframeLoad} 
    class="hidden-player"
    src={youtubeUrl}
    allow="autoplay"
    title="Audio de fondo"
  ></iframe>

  <button
    class="music-btn"
    on:click={toggleMute}
    aria-label="Control de volumen"
  >
    {#if isMuted}
      <i class="fa-solid fa-volume-xmark"></i>
    {:else}
      <i class="fa-solid fa-volume-high"></i>
    {/if}
  </button>
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
