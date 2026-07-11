<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import ArticoloCard from '$lib/components/elements/ArticoloCard.svelte';
  import LatestWidget from '$lib/components/elements/LatestWidget.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>Articoli e progetti speciali | Officine Meccaniche Giacomella</title>
  <meta
    name="description"
    content="Scopri i nostri articoli e progetti speciali dedicati al mondo dei rimorchi delle Officine Meccaniche Giacomella."
  />
  <meta name="keywords" content="articoli, progetti speciali, rimorchi, giacomella, valsugana" />
</svelte:head>

<PageHeader
  title="Articoli"
  subtitle="Scopri i nostri articoli e progetti speciali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Articoli' }]}
/>

<div class="container mx-auto px-4 py-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 lg:col-span-9">
      <!-- Articles Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {#each data.stories as story}
          <ArticoloCard {story} />
        {/each}
      </div>

      {#if data.stories.length === 0}
        <div class="py-12 text-center text-gray-500">
          <p class="text-xl">Nessun articolo trovato.</p>
        </div>
      {/if}
    </main>

    <aside
      class="col-span-12 mt-10 flex flex-col gap-6 lg:mt-0 lg:sticky lg:top-32 lg:col-span-3 lg:self-start"
    >
      <LatestWidget title="Ultimi Accessori" stories={data.latestAccessori} showDate={false} />
      <LatestWidget title="Ultimo Usato" stories={data.latestUsato} basePath="/usato" />
    </aside>
  </div>
</div>
