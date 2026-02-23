<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  // import the 10 png in assets
  import img1 from '$lib/assets/1.png';
  import img2 from '$lib/assets/2.png';
  import img3 from '$lib/assets/3.png';
  import img4 from '$lib/assets/4.png';
  import img5 from '$lib/assets/5.png';
  import img6 from '$lib/assets/6.png';
  import img7 from '$lib/assets/7.png';
  import img8 from '$lib/assets/8.png';
  import img9 from '$lib/assets/9.png';
  import img10 from '$lib/assets/10.png';

  export let data: PageData;

  const imagesByPic = {
    '1': img1,
    '2': img2,
    '3': img3,
    '4': img4,
    '5': img5,
    '6': img6,
    '7': img7,
    '8': img8,
    '9': img9,
    '10': img10,
  } as const;

  let activeFilter: string = 'tutti';

  // Group stories by pic number
  $: groupedStories = data.stories.reduce((acc: Record<string, any[]>, story: any) => {
    const pic = story.content.pic || '0';
    if (!acc[pic]) {
      acc[pic] = [];
    }
    acc[pic].push(story);
    return acc;
  }, {});

  // Filter stories based on selected filter
  $: filteredStories = (() => {
    let filtered = data.stories;
    if (activeFilter === '1-asse') {
      filtered = filtered.filter((s: any) => s.content.numero_assi === '1');
    } else if (activeFilter === '2-assi') {
      filtered = filtered.filter((s: any) => s.content.numero_assi === '2');
    } else if (activeFilter === 'furgonati') {
      filtered = filtered.filter((s: any) => s.content.furgonato === true);
    }

    // Group filtered stories by pic
    return filtered.reduce((acc: Record<string, any[]>, story: any) => {
      const pic = story.content.pic || '0';
      if (!acc[pic]) {
        acc[pic] = [];
      }
      acc[pic].push(story);
      return acc;
    }, {});
  })();
  // ...existing code...
</script>

<svelte:head>
  <title>Rimorchi - Gamma completa</title>
  <meta
    name="description"
    content="Scopri la gamma completa di rimorchi professionali disponibili sul nostro sito."
  />
  <meta name="keywords" content="rimorchi, trasporti, professionali, gamma, veicoli" />
</svelte:head>

<PageHeader
  title="I Nostri Rimorchi"
  subtitle="Scopri la gamma completa di rimorchi professionali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Rimorchi' }]}
/>

<!-- Main content with square pattern background -->
<div class="relative bg-linear-to-b from-white via-gray-50 to-white py-16">
  <!-- Decorative Square Pattern Background -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/5 absolute top-0 left-[50%] h-full w-full -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="rimorchi-pattern"
          width="200"
          height="200"
          x="50%"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rimorchi-pattern)" />
    </svg>
  </div>

  <div class="relative container mx-auto px-4">
    <!-- Filter buttons -->
    <div class="mb-16">
      <div class="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
        <h3 class="mb-4 text-center text-lg font-semibold text-gray-900">Filtra per categoria</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <button
            class={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
              activeFilter === 'tutti'
                ? 'bg-secondary ring-secondary/50 scale-105 text-white shadow-lg ring-2 ring-offset-2'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            on:click={() => (activeFilter = 'tutti')}
          >
            Tutti i Rimorchi
          </button>
          <button
            class={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
              activeFilter === '1-asse'
                ? 'bg-primary ring-primary/50 scale-105 text-white shadow-lg ring-2 ring-offset-2'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            on:click={() => (activeFilter = '1-asse')}
          >
            1 Asse
          </button>
          <button
            class={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
              activeFilter === '2-assi'
                ? 'bg-tertiary ring-tertiary/50 scale-105 text-white shadow-lg ring-2 ring-offset-2'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            on:click={() => (activeFilter = '2-assi')}
          >
            2 Assi
          </button>
          <button
            class={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
              activeFilter === 'furgonati'
                ? 'bg-secondary ring-secondary/50 scale-105 text-white shadow-lg ring-2 ring-offset-2'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            on:click={() => (activeFilter = 'furgonati')}
          >
            Furgonati
          </button>
        </div>
      </div>
    </div>

    <!-- Trailers grid - 2 cards per row on large screens -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {#each Object.entries(filteredStories) as [pic, trailers]}
        <div class="group relative">
          <!-- Card container -->
          <div
            class="hover:ring-secondary/20 flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl"
          >
            <!-- Image section - now on top -->
            <div class="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-8">
              <div
                class="relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition-transform duration-500 group-hover:scale-105"
              >
                <img
                  src={imagesByPic[pic as keyof typeof imagesByPic]}
                  alt="Rimorchio tipo {pic}"
                  class="mx-auto h-auto w-60"
                />
              </div>
              <!-- Decorative element -->
              <div
                class="bg-secondary/5 absolute -top-12 -right-12 h-48 w-48 rounded-full blur-3xl"
              ></div>
            </div>

            <!-- Details section - now below image -->
            <div class="flex flex-1 flex-col p-8">
              <div class="mb-4">
                <div
                  class="bg-secondary/10 text-secondary mb-2 inline-block rounded-lg px-4 py-1 text-sm font-semibold"
                >
                  Serie {pic}
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Modelli Disponibili</h3>
              </div>

              <!-- Models list -->
              <div class="flex-1 space-y-3">
                {#each trailers as trailer}
                  <a
                    href="/rimorchi/{trailer.slug}"
                    class="group/item hover:border-secondary/50 block rounded-xl border border-gray-200 bg-linear-to-br from-white to-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div class="mb-3 flex items-center justify-between">
                      <h4 class="group-hover/item:text-secondary text-lg font-bold text-gray-900">
                        {trailer.name}
                      </h4>
                      <svg
                        class="text-secondary h-5 w-5 transition-transform group-hover/item:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <!-- Specifications grid -->
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-500">Portata</span>
                        <span class="text-primary text-sm font-bold"
                          >{trailer.content.portata} kg</span
                        >
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-500">Tara</span>
                        <span class="text-sm font-semibold text-gray-900"
                          >{trailer.content.tara} kg</span
                        >
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-500">Larghezza</span>
                        <span class="text-sm font-semibold text-gray-900"
                          >{trailer.content.larghezza_utile} m</span
                        >
                      </div>
                      <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-500">Lunghezza</span>
                        <span class="text-sm font-semibold text-gray-900"
                          >{trailer.content.lunghezza_utile} m</span
                        >
                      </div>
                    </div>
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
