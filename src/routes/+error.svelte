<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} – Rimorchi OMG</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
  <!-- Big status number -->
  <p
    class="from-primary to-secondary bg-linear-to-br bg-clip-text text-[10rem] leading-none font-black text-transparent opacity-90 select-none"
  >
    {$page.status}
  </p>

  <!-- Divider -->
  <div class="from-primary to-secondary my-6 h-1 w-24 rounded-xl bg-linear-to-r"></div>

  <!-- Message -->
  <h1 class="mb-3 text-3xl font-bold text-gray-800">
    {#if $page.status === 404}
      Pagina non trovata
    {:else}
      Qualcosa è andato storto
    {/if}
  </h1>

  <p class="mt-8 mb-10 max-w-md text-gray-500">
    {#if $page.status === 404}
      La pagina che cerchi non esiste o è stata spostata. Controlla l'URL o torna alla home.
    {:else}
      Si è verificato un errore inatteso. Riprova tra qualche istante.
    {/if}
  </p>

  <!-- CTA buttons -->
  <div class="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="/"
      class="bg-primary rounded-xl px-8 py-3 font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
    >
      Torna alla Home
    </a>
    <a
      href="/rimorchi"
      class="border-secondary text-secondary hover:bg-secondary rounded-xl border-2 px-8 py-3 font-semibold transition hover:text-white"
    >
      Scopri i Rimorchi
    </a>
  </div>
</div>
