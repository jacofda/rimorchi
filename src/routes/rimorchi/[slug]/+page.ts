import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
  const { storyblokAPI } = await parent();

  const response = await storyblokAPI.get(`cdn/stories/${params.slug}`, {
    version: 'draft',
  });

  return {
    story: response.data.story,
  };
};
