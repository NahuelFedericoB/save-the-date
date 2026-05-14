<script>
  import { onMount } from "svelte";

  // Usamos $state para que la UI reaccione al cambio de mute/play
  let isMuted = $state(true);
  let audioRef = $state(null);
  let hasInteracted = $state(false);

  const audioUrl = "/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight).mp3";

  function startParty(event) {
    if (hasInteracted) return;

    if (event.type === 'scroll') {
      if (window.scrollY > 5) {
        executePlay();
      }
    } else {

      executePlay();
    }
  }

  function executePlay() {
    if (!audioRef || hasInteracted) return;

    audioRef.muted = false;
    audioRef.play().then(() => {
      isMuted = false;
      hasInteracted = true;
      cleanEvents();
    }).catch(error => {
      console.log("Autoplay pendiente de interacción directa:", error);
    });
  }

  function cleanEvents() {
    window.removeEventListener("scroll", startParty);
    window.removeEventListener("click", startParty);
    window.removeEventListener("touchstart", startParty);
  }

  onMount(() => {
    window.addEventListener("scroll", startParty, { passive: true });
    window.addEventListener("click", startParty);
    window.addEventListener("touchstart", startParty, { passive: true });

    return () => cleanEvents();
  });

  function toggleMute(event) {
    event.stopPropagation();
    if (!audioRef) return;

    if (isMuted) {
      audioRef.muted = false;
      audioRef.play();
    } else {
      audioRef.pause();
    }
    
    isMuted = !isMuted;
    hasInteracted = true;
    cleanEvents();
  }
</script>

<div class="music-wrapper">
  <audio
    bind:this={audioRef}
    src={audioUrl}
    loop
    muted
    class="hidden"
  ></audio>

  <button
    class="music-btn"
    class:is-playing={!isMuted}
    onclick={toggleMute}
    aria-label="Control de música"
  >
    {#if isMuted}
      <i class="fa-solid fa-volume-xmark"></i>
    {:else}
      <i class="fa-solid fa-music"></i>
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
    duration-300
    hover:scale-110 
    active:scale-95;
  }
  .is-playing {
    animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse-ring {
    0% {
      box-shadow: 0 0 0 0 rgba(230, 48, 119, 0.7);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(230, 48, 119, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(230, 48, 119, 0);
    }
  }
</style>