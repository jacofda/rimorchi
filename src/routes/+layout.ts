import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
  const token = import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN;

  console.log('--- DEBUG LAYOUT ---');
  console.log('Token exists?', !!token); // Stampa true se il token c'è

  storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
      region: 'eu', // Choose the correct region from your Space.
    },
    use: [apiPlugin],
  });

  const storyblokAPI = await useStoryblokApi();

  console.log('Storyblok API initialized?', !!storyblokAPI); // Stampa true se l'API è stata inizializzata

  return {
    storyblokAPI,
  };
}
