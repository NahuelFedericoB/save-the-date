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
</script>

<main>
  <InvitationCover />
  <div class="content-container">
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
</main>

<style>
  main {
    @apply min-h-screen 
    bg-[#FAFAFA] 
    pb-2 
    font-sans 
    text-zinc-800;
  }

  .content-container {
    @apply mx-auto 
    my-24 
    max-w-6xl 
    space-y-24 
    px-4;
  }

  footer {
    @apply border-t 
    border-zinc-100 
    bg-white py-16 
    text-center;
  }

  .footer-title {
    @apply font-serif 
    text-5xl 
    tracking-tight 
    text-zinc-900;
  }
</style>
