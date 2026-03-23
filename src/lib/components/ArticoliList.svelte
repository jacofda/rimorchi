<script lang="ts">
  import ArticoloCard from '$lib/components/elements/ArticoloCard.svelte';
  export let articoli: any[];
</script>

<section class="latest-articles mt-16 mb-24">
  <h3 class="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    Ultimi <span class="text-secondary">Articoli</span>
  </h3>
  {#if articoli.length}
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {#each articoli as articolo}
        <ArticoloCard story={articolo} showtag={false} />
      {/each}
    </div>
  {:else}
    <p class="text-center text-gray-500">Nessun articolo trovato.</p>
  {/if}
  <div class="mt-10 text-center">
    <a
      href="/articoli"
      class="bg-secondary inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white shadow transition-all duration-200 hover:opacity-90"
    >
      Vedi tutti gli articoli
    </a>
  </div>
</section>
