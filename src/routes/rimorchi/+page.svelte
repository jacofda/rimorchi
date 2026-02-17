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
</script>

<PageHeader
  title="I Nostri Rimorchi"
  subtitle="Scopri la gamma completa di rimorchi professionali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Rimorchi' }]}
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
      <button
        class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
          activeFilter === '1-asse'
            ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
            : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
        }`}
        on:click={() => (activeFilter = '1-asse')}
      >
        1 Asse
      </button>
      <button
        class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
          activeFilter === '2-assi'
            ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
            : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
        }`}
        on:click={() => (activeFilter = '2-assi')}
      >
        2 Assi
      </button>
      <button
        class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
          activeFilter === 'furgonati'
            ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
            : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
        }`}
        on:click={() => (activeFilter = 'furgonati')}
      >
        Furgonati
      </button>
    </div>

    <!-- Trailers list with modern gradient design -->
    {#each Object.entries(filteredStories) as [pic, trailers]}
      <div
        class="mb-12 overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl"
      >
        <div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-12">
          <!-- Image -->
          <div class="flex items-center justify-center md:col-span-4">
            <div class="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
              <img
                src={imagesByPic[pic as keyof typeof imagesByPic]}
                alt="Rimorchio tipo {pic}"
                class="h-auto w-full"
              />
            </div>
          </div>

          <!-- Table -->
          <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm md:col-span-8">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr
                    class="from-secondary/10 to-primary/10 border-b-2 border-gray-200 bg-linear-to-r"
                  >
                    <th class="px-5 py-4 text-left text-sm font-bold text-gray-800"> Modello </th>
                    <th class="px-5 py-4 text-left text-sm font-bold text-gray-800">
                      Portata <span class="text-xs font-normal text-gray-600">(kg)</span>
                    </th>
                    <th
                      class="hidden px-5 py-4 text-left text-sm font-bold text-gray-800 sm:table-cell"
                    >
                      Tara <span class="text-xs font-normal text-gray-600">(kg)</span>
                    </th>
                    <th
                      class="hidden px-5 py-4 text-left text-sm font-bold text-gray-800 md:table-cell"
                    >
                      Larghezza <span class="text-xs font-normal text-gray-600">(m)</span>
                    </th>
                    <th
                      class="hidden px-5 py-4 text-left text-sm font-bold text-gray-800 md:table-cell"
                    >
                      Lunghezza <span class="text-xs font-normal text-gray-600">(m)</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {#each trailers as trailer}
                    <tr
                      class="hover:from-secondary/5 hover:to-primary/5 border-b border-gray-100 transition-all hover:bg-linear-to-r"
                    >
                      <td class="px-5 py-4 text-xs sm:text-sm lg:text-base">
                        <a
                          href="/rimorchi/{trailer.slug}"
                          class="from-secondary to-secondary/80 group inline-flex items-center gap-2 rounded-lg bg-linear-to-r px-4 py-2 font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg md:rounded-none md:bg-none md:px-0 md:py-0 md:text-gray-900 md:shadow-none md:hover:scale-100 md:hover:bg-linear-to-r md:hover:bg-clip-text md:hover:text-transparent hover:lg:shadow-none"
                        >
                          {trailer.name}
                          <svg
                            class="md:text-secondary h-5 w-5 transition-transform group-hover:translate-x-1 md:h-4 md:w-4"
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
                        </a>
                      </td>
                      <td class="px-5 py-4 font-medium text-gray-700">{trailer.content.portata}</td>
                      <td class="hidden px-5 py-4 font-medium text-gray-700 sm:table-cell"
                        >{trailer.content.tara}</td
                      >
                      <td class="hidden px-5 py-4 font-medium text-gray-700 md:table-cell"
                        >{trailer.content.larghezza_utile}</td
                      >
                      <td class="hidden px-5 py-4 font-medium text-gray-700 md:table-cell"
                        >{trailer.content.lunghezza_utile}</td
                      >
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </section>
</div>
