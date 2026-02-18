<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';

  export let data: PageData;

  let activeFilter: string = 'tutti';

  // Get unique tags from all articles
  $: uniqueTags = Array.from(
    new Set(data.stories.map((story: any) => story.content.tag).filter(Boolean))
  );

  // Filter stories based on selected filter
  $: filteredStories = (() => {
    if (activeFilter === 'tutti') {
      return data.stories;
    }
    return data.stories.filter((s: any) => s.content.tag === activeFilter);
  })();
</script>

<PageHeader
  title="Articoli"
  subtitle="Scopri i nostri articoli e progetti speciali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Articoli' }]}
/>

<div class="container mx-auto px-4 py-16">
  <section>
    <!-- Filter buttons with gradient effects -->
    <div class="mb-12 flex flex-wrap justify-center gap-3">
      <button
        class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
          activeFilter === 'tutti'
            ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
            : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
        }`}
        on:click={() => (activeFilter = 'tutti')}
      >
        Tutti
      </button>
      {#each uniqueTags as tag}
        <button
          class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
            activeFilter === tag
              ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
              : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
          }`}
          on:click={() => (activeFilter = tag)}
        >
          {tag}
        </button>
      {/each}
    </div>

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredStories as story}
        <a
          href="/articoli/{story.slug}"
          class="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <!-- Image -->
          <div class="group relative h-72 bg-gray-200 md:h-60">
            {#if story.content.immagine?.filename}
              <img
                src={story.content.immagine.filename}
                alt={story.content.immagine.alt || story.content.titolo}
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            {/if}
            {#if story.content.tag}
              <div
                class="from-secondary via-secondary/90 to-secondary absolute top-4 right-4 rounded-full bg-linear-to-r px-4 py-2 text-sm font-semibold text-white shadow-lg"
              >
                {story.content.tag}
              </div>
            {/if}
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3
              class="group-hover:text-secondary mb-2 text-xl font-bold text-gray-900 transition-colors"
            >
              {story.content.titolo}
            </h3>
            {#if story.content.abstract}
              <p class="line-clamp-1 text-gray-600">
                {story.content.abstract}
              </p>
            {/if}
          </div>
        </a>
      {/each}
    </div>

    {#if filteredStories.length === 0}
      <div class="py-12 text-center text-gray-500">
        <p class="text-xl">Nessun articolo trovato per questo filtro.</p>
      </div>
    {/if}
  </section>
</div>
