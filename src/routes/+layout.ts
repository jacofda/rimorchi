import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
  const token = import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN;

  storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
      region: 'eu', // Choose the correct region from your Space.
    },
    use: [apiPlugin],
  });

  const storyblokAPI = await useStoryblokApi();

  return {
    storyblokAPI,
  };
}
