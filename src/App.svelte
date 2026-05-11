<script>
  import InvitationCover from "./components/InvitationCover.svelte";
  import Countdown from "./components/Countdown.svelte";
  import ChurchInfo from "./components/ChurchInfo.svelte";
  import CocktailInfo from "./components/CocktailInfo.svelte";
  import AgendaInfo from "./components/AgendaInfo.svelte";
  import DressCodeInfo from "./components/DressCodeInfo.svelte";
  import AssistanceForm from "./components/AssistanceForm.svelte";
  import InvitationMessage from "./components/InvitationMessage.svelte";
  import Bridge from "./components/Bridge.svelte";
  import MusicPlayer from "./components/MusicPlayer.svelte";
</script>

<main>
  <InvitationCover />
  <div>
    <InvitationMessage />
    <Countdown />
    <Bridge />
    <ChurchInfo />
    <CocktailInfo />
    <DressCodeInfo />
    <AgendaInfo />
    <AssistanceForm />
  </div>
  <footer>
    <h2 class="footer-title">¡Los esperamos!</h2>
  </footer>
  <MusicPlayer />
</main>

<style>
  main {
    @apply min-h-screen 
    bg-[#FAFAFA] 
    font-sans 
    text-zinc-800;
  }

  footer {
    @apply w-full 
    bg-aegean 
    py-20 
    md:py-24
    px-6 
    flex 
    flex-col 
    items-center 
    justify-center 
    text-center;
  }

  .footer-title {
    @apply font-serif 
    text-2xl 
    md:text-4xl 
    text-white 
    uppercase
    font-bold
    tracking-[0.3em] 
    leading-tight;
    /* Mantenemos la sombra sutil para el contraste */
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
  }
</style>
