<script lang="ts">
  export let story: any;
</script>

<a
  href="/usato/{story.slug}"
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
    {#if story.content.marca}
      <div
        class="from-secondary via-secondary/90 to-secondary absolute top-4 right-4 rounded-xl bg-linear-to-r px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        {story.content.marca}
      </div>
    {/if}
  </div>

  <!-- Content -->
  <div class="p-6">
    {#if story.content.anno}
      <p class="mb-2 text-xs text-gray-400">{story.content.anno}</p>
    {/if}
    <h3 class="group-hover:text-secondary mb-2 text-xl font-bold text-gray-900 transition-colors">
      {story.content.titolo}
    </h3>
    {#if story.content.sottotitolo}
      <p class="line-clamp-1 text-gray-600">
        {story.content.sottotitolo}
      </p>
    {/if}
  </div>
</a>
