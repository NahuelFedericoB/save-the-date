<script>
  import InvitationCover from "./components/InvitationCover.svelte";
  import Countdown from "./components/Countdown.svelte";
  import ChurchInfo from "./components/ChurchInfo.svelte";
  import CocktailInfo from "./components/CocktailInfo.svelte";
  import AgendaInfo from "./components/AgendaInfo.svelte";
  import DressCodeInfo from "./components/DressCodeInfo.svelte";
  import AssistanceForm from "./components/AssistanceForm.svelte";
  import InvitationMessage from "./components/InvitationMessage.svelte";
  import MusicPlayer from "./components/MusicPlayer.svelte";
</script>

<main>
  <InvitationCover />
  <div>
    <InvitationMessage />
    <Countdown />
    <ChurchInfo />
    <CocktailInfo />
    <DressCodeInfo />
    <AgendaInfo />
    <AssistanceForm />
  </div>
  <footer>
    <h2 class="footer-title">¡Te esperamos!</h2>
  </footer>
  <MusicPlayer />
</main>

<style>
  main {
    @apply min-h-screen bg-[#FAFAFA] font-sans text-zinc-800;
  }

  footer {
    @apply flex w-full flex-col items-center justify-center bg-aegean px-6 py-20 text-center md:py-24;
  }

  .footer-title {
    @apply font-serif text-2xl font-bold uppercase leading-tight tracking-[0.3em] text-white md:text-4xl;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }
</style>
