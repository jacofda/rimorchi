<script lang="ts">
  import type { PageData } from './$types';
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
    '10': img10
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

<div class="container mx-auto px-4 py-8">
  <section>
    <!-- Filter buttons -->
    <div class="mb-12 flex justify-center gap-3">
      <button
        class={`rounded-lg px-6 py-2 font-medium transition-all ${
          activeFilter === 'tutti'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        on:click={() => (activeFilter = 'tutti')}
      >
        Tutti
      </button>
      <button
        class={`rounded-lg px-6 py-2 font-medium transition-all ${
          activeFilter === '1-asse'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        on:click={() => (activeFilter = '1-asse')}
      >
        1 Asse
      </button>
      <button
        class={`rounded-lg px-6 py-2 font-medium transition-all ${
          activeFilter === '2-assi'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        on:click={() => (activeFilter = '2-assi')}
      >
        2 Assi
      </button>
      <button
        class={`rounded-lg px-6 py-2 font-medium transition-all ${
          activeFilter === 'furgonati'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        on:click={() => (activeFilter = 'furgonati')}
      >
        Furgonati
      </button>
    </div>

    <!-- Trailers list -->
    {#each Object.entries(filteredStories) as [pic, trailers]}
      <div class="mb-12 overflow-hidden rounded-xl bg-white shadow-md">
        <div class="grid grid-cols-1 gap-6 p-6 md:grid-cols-12">
          <!-- Image -->
          <div class="flex items-center justify-center md:col-span-4">
            <img
              src={imagesByPic[pic]}
              alt="Rimorchio tipo {pic}"
              class="h-auto max-w-full rounded-lg"
            />
          </div>

          <!-- Table -->
          <div class="overflow-x-auto md:col-span-8">
            <table class="w-full">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="px-4 py-3 text-left font-semibold text-gray-700">Modello</th>
                  <th class="px-4 py-3 text-left font-semibold text-gray-700">
                    Portata <span class="text-xs font-normal">(kg)</span>
                  </th>
                  <th class="px-4 py-3 text-left font-semibold text-gray-700">
                    Tara <span class="text-xs font-normal">(kg)</span>
                  </th>
                  <th class="px-4 py-3 text-left font-semibold text-gray-700">
                    Larghezza <span class="text-xs font-normal">(m)</span>
                  </th>
                  <th class="px-4 py-3 text-left font-semibold text-gray-700">
                    Lunghezza <span class="text-xs font-normal">(m)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {#each trailers as trailer}
                  <tr class="border-b border-gray-100 transition-colors hover:bg-gray-50">
                    <td class="px-4 py-3">
                      <a
                        href="/rimorchi/{trailer.slug}"
                        class="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {trailer.name}
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="px-4 py-3">{trailer.content.portata}</td>
                    <td class="px-4 py-3">{trailer.content.tara}</td>
                    <td class="px-4 py-3">{trailer.content.larghezza_utile}</td>
                    <td class="px-4 py-3">{trailer.content.lunghezza_utile}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/each}
  </section>
</div>
