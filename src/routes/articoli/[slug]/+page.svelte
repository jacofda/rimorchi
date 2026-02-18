<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import { richTextResolver } from '@storyblok/richtext';

  export let data: PageData;

  const resolver = richTextResolver();
</script>

<PageHeader
  title={data.articolo.content.titolo}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Articoli', href: '/articoli' },
    { label: data.articolo.content.titolo },
  ]}
/>

<div class="container mx-auto px-4 py-16">
  <main class="mx-auto max-w-4xl">
    {#if data.articolo.content.tag}
      <div class="mb-6 flex justify-start">
        <span
          class="from-secondary via-secondary/90 to-secondary inline-block rounded-full bg-linear-to-r px-6 py-2 text-sm font-semibold text-white shadow-lg"
        >
          {data.articolo.content.tag}
        </span>
      </div>
    {/if}

    {#if data.articolo.content.immagine?.filename}
      <div class="mb-8 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={data.articolo.content.immagine.filename}
          alt={data.articolo.content.immagine.alt || data.articolo.content.titolo}
          class="h-auto w-full object-cover"
        />
      </div>
    {/if}

    {#if data.articolo.content.abstract}
      <div class="mb-8 rounded-lg bg-gray-50 p-6 shadow-lg">
        <p class="text-lg leading-relaxed text-gray-700">
          {data.articolo.content.abstract}
        </p>
      </div>
    {/if}

    {#if data.articolo.content.descrizione}
      <div class="mb-8 rounded-lg bg-white p-8 shadow-lg">
        <div class="prose prose-gray max-w-none text-base leading-relaxed text-gray-700">
          {@html resolver.render(data.articolo.content.descrizione)}
        </div>
      </div>
    {/if}

    {#if data.articolo.content.galleria && data.articolo.content.galleria.length > 0}
      <div class="mb-8">
        <h2
          class="from-secondary via-secondary/50 to-secondary mb-6 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent"
        >
          Galleria
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {#each data.articolo.content.galleria as immagine}
            <div class="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <img
                src={immagine.filename}
                alt={immagine.alt || data.articolo.content.titolo}
                class="h-64 w-full object-cover"
              />
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <div class="mt-12 flex justify-center">
      <a
        href="/articoli"
        class="from-secondary via-secondary/50 to-secondary rounded-full bg-linear-to-r px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        ← Torna agli Articoli
      </a>
    </div>
  </main>
</div>
