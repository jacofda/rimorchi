import type { PageLoad } from './$types';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

const token = import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN;

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
  apiOptions: {
    region: 'eu', // Choose the correct region from your Space.
  },
  use: [apiPlugin],
});

const storyblokAPI = await useStoryblokApi();

export const load: PageLoad = async () => {
  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    per_page: 3,
    filter_query: {
      component: {
        in: 'articolo',
      },
    },
    sort_by: 'published_at:desc',
  });
  return {
    articoli: response.data.stories || [],
  };
};
