<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import UsatoCard from '$lib/components/elements/UsatoCard.svelte';
  import LatestWidget from '$lib/components/elements/LatestWidget.svelte';

  export let data: PageData;
</script>

<PageHeader
  title="Usato"
  subtitle="Scopri i nostri rimorchi usati"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Usato' }]}
/>

<div class="container mx-auto px-4 py-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 lg:col-span-9">
      {#if data.stories.length === 0}
        <!-- Empty state -->
        <div class="flex flex-col items-center justify-center rounded-2xl bg-gray-50 px-6 py-20 text-center">
          <div class="mb-6 flex size-24 items-center justify-center rounded-full bg-gray-100 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="size-12 fill-current"
              aria-hidden="true"
            >
              <path
                d="M32 160c0-17.7 14.3-32 32-32l352 0c17.7 0 32 14.3 32 32l0 224 74.6 0c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64s-28.7 64-64 64c-29.8 0-54.9-20.4-62-48l-92 0-56 0c-7.1 27.6-32.2 48-62 48s-54.9-20.4-62-48l-113.4 0c-17.7 0-32-14.3-32-32l0-192-32 0c-17.7 0-32-14.3-32-32zM192 464a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm384-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-2xl font-bold text-gray-900">Nessun usato disponibile al momento</h3>
          <p class="max-w-md text-gray-500">
            Al momento non abbiamo rimorchi usati in disponibilità. Torna a trovarci presto o
            contattaci per conoscere le prossime occasioni.
          </p>
        </div>
      {:else}
        <!-- Usato Grid -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {#each data.stories as story}
            <UsatoCard {story} />
          {/each}
        </div>
      {/if}
    </main>

    <aside
      class="col-span-12 mt-10 flex flex-col gap-6 lg:mt-0 lg:sticky lg:top-32 lg:col-span-3 lg:self-start"
    >
      <LatestWidget title="Ultimi Articoli" stories={data.latestArticoli} basePath="/articoli" />
      <LatestWidget title="Ultimi Accessori" stories={data.latestAccessori} showDate={false} />
    </aside>
  </div>
</div>
