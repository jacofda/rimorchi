<script lang="ts">
  import { richTextResolver } from '@storyblok/richtext';

  export let story: any;

  const resolver = richTextResolver();
</script>

<div
  class="group flex items-stretch overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-md"
>
  <!-- Image -->
  <div class="relative w-32 flex-shrink-0 self-stretch bg-gray-200 sm:w-40">
    {#if story.content.immagine?.filename}
      <img
        src={story.content.immagine.filename}
        alt={story.content.immagine.alt || story.content.titolo}
        class="absolute inset-0 h-full w-full object-cover"
      />
    {/if}
  </div>

  <!-- Content -->
  <div class="flex min-w-0 flex-col justify-center p-4 sm:p-6">
    <h3 class="mb-1 text-lg font-bold text-gray-900">
      {story.content.titolo}
    </h3>
    {#if story.content.descrizione}
      <div class="prose prose-sm max-w-none text-gray-600">
        {@html resolver.render(story.content.descrizione)}
      </div>
    {/if}
  </div>
</div>
