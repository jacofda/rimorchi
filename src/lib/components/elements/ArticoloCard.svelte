<script lang="ts">
  export let story: any;
  export let showtag: boolean = true;
</script>

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
    {#if showtag && story.content.tag}
      <div
        class="from-secondary via-secondary/90 to-secondary absolute top-4 right-4 rounded-full bg-linear-to-r px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        {story.content.tag}
      </div>
    {/if}
  </div>

  <!-- Content -->
  <div class="p-6">
    <h3 class="group-hover:text-secondary mb-2 text-xl font-bold text-gray-900 transition-colors">
      {story.content.titolo}
    </h3>
    {#if story.content.abstract}
      <p class="line-clamp-1 text-gray-600">
        {story.content.abstract}
      </p>
    {/if}
  </div>
</a>
