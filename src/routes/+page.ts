import { useStoryblokApi } from '@storyblok/svelte';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  console.log('--- DEBUG START: Loading Page ---');

  const storyblokApi = useStoryblokApi();

  // LOG 1: Verifica se l'API è stata inizializzata
  if (!storyblokApi) {
    console.error('LOG 1 ERROR: Storyblok API is NOT initialized. Check layout.ts');
    throw error(500, 'Storyblok API missing');
  }

  try {
    console.log("LOG 2: Attempting to fetch 'home'...");

    const response = await storyblokApi.get('cdn/stories/home', {
      version: 'draft',
    });

    // LOG 3: Verifica la risposta grezza
    console.log('LOG 3 SUCCESS: Data received', response.status);

    if (!response.data || !response.data.story) {
      console.warn("LOG 3.5 WARNING: Response OK but 'story' object is empty.");
    }

    return {
      story: response.data.story,
    };
  } catch (err: any) {
    // LOG 4: Cattura l'errore esatto (404, 401, ecc)
    console.error('LOG 4 FETCH ERROR:');
    console.error('Status:', err?.status);
    console.error('Message:', err?.message);
    console.error('Full Error Object:', JSON.stringify(err, null, 2));

    throw error(err?.status || 500, err?.message || 'Errore sconosciuto nel caricamento');
  }
};
