<script lang="ts">
  import { StoryblokComponent } from '@storyblok/svelte';
  export let data;

  // This is a reactive shortcut to the story data
  $: story = data.story;
</script>

<main style="padding: 2rem; font-family: sans-serif;">
  {#if story}
    <h1>Testing: {story.name}</h1>
    <p>Status: <strong>Connected</strong></p>
    <p>Slug: {story.full_slug}</p>

    <hr />

    <h3>Content Preview:</h3>
    <StoryblokComponent bloks={story.content} />

    <details style="margin-top: 2rem; background: #f4f4f4; padding: 1rem;">
      <summary>View Raw JSON Data (Verify Migration Fields)</summary>
      <pre>{JSON.stringify(story.content, null, 2)}</pre>
    </details>
  {:else}
    <p>Loading story...</p>
  {/if}
</main>
