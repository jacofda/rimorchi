import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const { storyblokAPI } = await parent();

  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    filter_query: {
      component: {
        in: 'trailer',
      },
    },
  });

  return {
    stories: response.data.stories,
  };
};
