<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import AccessorioCard from '$lib/components/elements/AccessorioCard.svelte';
  import LatestWidget from '$lib/components/elements/LatestWidget.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>Accessori per rimorchi | Valugana | Officine Meccanica Giacomella</title>
  <meta
    name="description"
    content="Scopri i nostri accessori per rimorchi: ricambi e componenti per completare e personalizzare il tuo rimorchio."
  />
  <meta name="keywords" content="accessori, rimorchi, ricambi, componenti, personalizzazione" />
</svelte:head>

<PageHeader
  title="Accessori"
  subtitle="Scopri i nostri accessori per rimorchi"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Accessori' }]}
/>

<div class="container mx-auto px-4 py-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 lg:col-span-9">
      <!-- Accessori Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        {#each data.stories as story}
          <AccessorioCard {story} />
        {/each}
      </div>

      {#if data.stories.length === 0}
        <div class="py-12 text-center text-gray-500">
          <p class="text-xl">Nessun accessorio trovato.</p>
        </div>
      {/if}
    </main>

    <aside
      class="col-span-12 mt-10 flex flex-col gap-6 lg:mt-0 lg:sticky lg:top-32 lg:col-span-3 lg:self-start"
    >
      <LatestWidget title="Ultimi Articoli" stories={data.latestArticoli} basePath="/articoli" />
      <LatestWidget title="Ultimo Usato" stories={data.latestUsato} basePath="/usato" />
    </aside>
  </div>
</div>
