<script lang="ts">
  export let images: Array<{ filename: string; alt?: string }> = [];
  let lightboxOpen = false;
  let currentIndex = 0;

  function openLightbox(idx: number) {
    currentIndex = idx;
    lightboxOpen = true;
  }
  function closeLightbox() {
    lightboxOpen = false;
  }
  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }
</script>

{#if images.length > 0}
  <div>
    <h2
      class="from-secondary via-secondary/50 to-secondary mb-6 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent"
    >
      Galleria
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each images as img, idx}
        <button
          type="button"
          class="cursor-pointer overflow-hidden rounded-lg border-0 bg-transparent p-0 shadow-lg transition-transform hover:scale-105"
          on:click={() => openLightbox(idx)}
          aria-label="Apri immagine in lightbox"
        >
          <img src={img.filename} alt={img.alt} class="h-64 w-full object-cover" />
        </button>
      {/each}
    </div>
  </div>
{/if}

{#if lightboxOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <button
      class="absolute top-4 right-4 text-3xl text-white"
      on:click={closeLightbox}
      aria-label="Chiudi">&times;</button
    >
    <button class="absolute left-4 text-3xl text-white" on:click={prev} aria-label="Precedente"
      >&#8592;</button
    >
    <img
      src={images[currentIndex].filename}
      alt={images[currentIndex].alt}
      class="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
    />
    <button class="absolute right-4 text-3xl text-white" on:click={next} aria-label="Successivo"
      >&#8594;</button
    >
  </div>
{/if}
