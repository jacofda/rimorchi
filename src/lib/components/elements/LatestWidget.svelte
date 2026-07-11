<script lang="ts">
  import { sbImg } from '$lib/storyblok';

  export let title: string;
  export let stories: any[] = [];
  export let basePath: string | null = null;
  export let showDate = true;
</script>

{#if stories.length > 0}
  <div class="overflow-hidden rounded-xl bg-white shadow-lg">
    <div class="bg-secondary px-5 py-3">
      <h3 class="text-lg font-bold text-white">{title}</h3>
    </div>
    <div class="divide-y divide-gray-100 p-4">
      {#each stories as story}
        <svelte:element
          this={basePath ? 'a' : 'div'}
          href={basePath ? `${basePath}/${story.slug}` : undefined}
          class="group flex gap-3 py-3"
        >
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
            {#if showDate && story.published_at}
              <span class="mt-1 inline-block text-xs text-gray-400">
                {new Date(story.published_at).toLocaleDateString('it-IT', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            {/if}
          </div>
        </svelte:element>
      {/each}
    </div>
  </div>
{/if}
