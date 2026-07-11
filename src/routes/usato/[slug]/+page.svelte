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
  const base = data.usato.content.sottotitolo
    ? `${data.usato.content.titolo} - ${data.usato.content.sottotitolo}`
    : data.usato.content.titolo;
  const fallback = ' | Scopri dettagli, immagini e informazioni complete sul nostro sito Caravan.';
  const seoDescription = base.length >= MIN_DESC ? base : (base + fallback).slice(0, 160);

  $: specs = [
    { label: 'Marca', value: data.usato.content.marca },
    { label: 'Anno', value: data.usato.content.anno },
  ].filter((s) => s.value);
</script>

<svelte:head>
  <title>{data.usato.content.titolo}</title>
  <meta name="description" content={seoDescription} />
  <meta name="keywords" content="usato, rimorchi, trasporti, {data.usato.content.titolo}" />

  <!-- Open Graph (Facebook) -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.usato.content.titolo} />
  <meta property="og:description" content={seoDescription} />
  {#if data.usato.content.immagine?.filename}
    <meta property="og:image" content={sbImg(data.usato.content.immagine.filename, 1200, 630)} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content={data.usato.content.immagine.alt || data.usato.content.titolo}
    />
  {/if}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.usato.content.titolo} />
  <meta name="twitter:description" content={seoDescription} />
  {#if data.usato.content.immagine?.filename}
    <meta name="twitter:image" content={sbImg(data.usato.content.immagine.filename, 1200, 630)} />
    <meta
      name="twitter:image:alt"
      content={data.usato.content.immagine.alt || data.usato.content.titolo}
    />
  {/if}
</svelte:head>

<PageHeader
  title={data.usato.content.titolo}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Usato', href: '/usato' },
    { label: data.usato.content.titolo },
  ]}
/>

<div class="container mx-auto px-4 pt-8 pb-16 lg:pt-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 overflow-hidden lg:col-span-9">
      {#if data.usato.content.immagine?.filename}
        <div class="overflow-hidden rounded-xl">
          <img
            src={sbImg(data.usato.content.immagine.filename, 900, 450)}
            alt={data.usato.content.immagine.alt || data.usato.content.titolo}
            class="aspect-2/1 h-auto w-full object-cover"
          />
        </div>
      {/if}

      {#if data.usato.content.sottotitolo}
        <h2 class="my-8 px-2 text-2xl font-semibold text-gray-600">
          {data.usato.content.sottotitolo}
        </h2>
      {/if}

      {#if data.usato.content.descrizione}
        <div class=" mb-8 rounded-xl px-2 lg:py-8">
          <div
            class="prose prose-gray html max-w-none overflow-x-auto text-base leading-relaxed text-gray-700 [&_img]:max-w-full [&_pre]:overflow-x-auto [&_table]:w-full"
          >
            {@html resolver.render(data.usato.content.descrizione)}
          </div>
        </div>
      {/if}

      {#if data.usato.content.galleria && data.usato.content.galleria.length > 0}
        <div class="mb-8">
          <Gallery
            images={data.usato.content.galleria.map((img) => ({
              filename: img.filename,
              alt: img.alt || data.usato.content.titolo,
            }))}
          />
        </div>
      {/if}

      <div class="mt-12 mb-12 flex lg:mb-0">
        <a
          href="/usato"
          class="bg-secondary rounded-xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
        >
          ← Torna all'Usato
        </a>
      </div>
    </main>

    <aside class="col-span-12 flex flex-col gap-6 lg:sticky lg:top-32 lg:col-span-3 lg:self-start">
      {#if specs.length > 0}
        <div class="overflow-hidden rounded-xl bg-white shadow-lg">
          <div class="bg-secondary px-5 py-3">
            <h3 class="text-lg font-bold text-white">Caratteristiche</h3>
          </div>
          <div class="divide-y divide-gray-100 p-4">
            {#each specs as spec}
              <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-500">{spec.label}</span>
                <span class="font-semibold text-gray-800">{spec.value}</span>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      {#if data.latestUsato.length > 0}
        <div class="overflow-hidden rounded-xl bg-white shadow-lg">
          <div class="bg-secondary px-5 py-3">
            <h3 class="text-lg font-bold text-white">Altri Usati</h3>
          </div>
          <div class="divide-y divide-gray-100 p-4">
            {#each data.latestUsato as story}
              <a href="/usato/{story.slug}" class="group flex gap-3 py-3">
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
                  {#if story.content.marca}
                    <span class="mt-1 inline-block text-xs text-gray-400">
                      {story.content.marca}
                    </span>
                  {/if}
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </aside>
  </div>
</div>
<ContactCTA />
