<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import { richTextResolver } from '@storyblok/richtext';
  import Gallery from '$lib/components/Gallery.svelte';
  import { sbImg } from '$lib/storyblok';
  import ContactCTA from '$lib/components/elements/ContactCTA.svelte';

  export let data: PageData;

  const resolver = richTextResolver();

  const MIN_DESC = 120;
  const base = data.articolo.content.sottotitolo
    ? `${data.articolo.content.titolo} - ${data.articolo.content.sottotitolo}`
    : data.articolo.content.titolo;
  const fallback = ' | Scopri dettagli, immagini e informazioni complete sul nostro sito Caravan.';
  const seoDescription = base.length >= MIN_DESC ? base : (base + fallback).slice(0, 160);

  const categories = [
    {
      label: 'Tutte',
      href: '/articoli',
      color: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    },
    {
      label: 'Articoli',
      href: '/articoli?activeFilter=Articoli',
      color: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    },
    {
      label: 'Mezzi Speciali',
      href: '/articoli?activeFilter=mezzi%20speciali',
      color: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    },
  ];
</script>

<svelte:head>
  <title>{data.articolo.content.titolo}</title>
  <meta name="description" content={seoDescription} />
  <meta name="keywords" content="articoli, rimorchi, trasporti, {data.articolo.content.titolo}" />

  <!-- Open Graph (Facebook) -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.articolo.content.titolo} />
  <meta property="og:description" content={seoDescription} />
  {#if data.articolo.content.immagine?.filename}
    <meta property="og:image" content={sbImg(data.articolo.content.immagine.filename, 1200, 630)} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content={data.articolo.content.immagine.alt || data.articolo.content.titolo}
    />
  {/if}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.articolo.content.titolo} />
  <meta name="twitter:description" content={seoDescription} />
  {#if data.articolo.content.immagine?.filename}
    <meta
      name="twitter:image"
      content={sbImg(data.articolo.content.immagine.filename, 1200, 630)}
    />
    <meta
      name="twitter:image:alt"
      content={data.articolo.content.immagine.alt || data.articolo.content.titolo}
    />
  {/if}
</svelte:head>

<PageHeader
  title={data.articolo.content.titolo}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Articoli', href: '/articoli' },
    { label: data.articolo.content.titolo },
  ]}
/>

<div class="container mx-auto px-4 pt-8 pb-16 lg:pt-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 overflow-hidden lg:col-span-9">
      {#if data.articolo.content.immagine?.filename}
        <div class="overflow-hidden rounded-xl">
          <img
            src={sbImg(data.articolo.content.immagine.filename, 900, 450)}
            alt={data.articolo.content.immagine.alt || data.articolo.content.titolo}
            class="aspect-2/1 h-auto w-full object-cover"
          />
        </div>
      {/if}

      {#if data.articolo.content.abstract}
        <h2 class="my-8 px-2 text-2xl font-semibold text-gray-600">
          {data.articolo.content.abstract}
        </h2>
      {/if}

      {#if data.articolo.content.descrizione}
        <div class=" mb-8 rounded-xl px-2 lg:py-8">
          <div
            class="prose prose-gray html max-w-none overflow-x-auto text-base leading-relaxed text-gray-700 [&_img]:max-w-full [&_pre]:overflow-x-auto [&_table]:w-full"
          >
            {@html resolver.render(data.articolo.content.descrizione)}
          </div>
        </div>
      {/if}

      {#if data.articolo.content.galleria && data.articolo.content.galleria.length > 0}
        <div class="mb-8">
          <Gallery
            images={data.articolo.content.galleria.map((img) => ({
              filename: img.filename,
              alt: img.alt || data.articolo.content.titolo,
            }))}
          />
        </div>
      {/if}

      <div class="mt-12 mb-12 flex lg:mb-0">
        <a
          href="/articoli"
          class="bg-secondary rounded-xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
        >
          ← Torna agli Articoli
        </a>
      </div>
    </main>

    <aside class="col-span-12 flex flex-col gap-6 lg:sticky lg:top-32 lg:col-span-3 lg:self-start">
      <div class="overflow-hidden rounded-xl bg-white shadow-lg">
        <div class="bg-secondary px-5 py-3">
          <h3 class="text-lg font-bold text-white">Ultimi Articoli</h3>
        </div>
        <div class="divide-y divide-gray-100 p-4">
          {#each data.latestArticoli as story}
            <a href="/articoli/{story.slug}" class="group flex gap-3 py-3">
              {#if story.content.immagine?.filename}
                <img
                  src={sbImg(story.content.immagine.filename, 120, 80)}
                  alt={story.content.immagine.alt || story.content.titolo}
                  class="h-16 w-20 shrink-0 rounded object-cover"
                />
              {/if}
              <div>
                <p
                  class="group-hover:text-secondary line-clamp-2 text-sm font-semibold text-gray-800 transition-colors"
                >
                  {story.content.titolo}
                </p>
                {#if story.published_at}
                  <span class="mt-1 inline-block text-xs text-gray-400">
                    {new Date(story.published_at).toLocaleDateString('it-IT', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                {/if}
              </div>
            </a>
          {/each}
        </div>
      </div>

      <div class="overflow-hidden rounded-xl bg-white shadow-lg">
        <div class="bg-secondary px-5 py-3">
          <h3 class="text-lg font-bold text-white">Categorie</h3>
        </div>
        <div class="flex flex-wrap gap-2 p-4">
          {#each categories as cat}
            <a
              href={cat.href}
              class={`w-fit rounded-xl px-4 py-2 text-center text-xs font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md ${cat.color}`}
            >
              {cat.label}
            </a>
          {/each}
        </div>
      </div>
    </aside>
  </div>
</div>
<ContactCTA />
