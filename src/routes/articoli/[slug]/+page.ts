import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ArticoloContent } from '../+page';

interface ArticoloDetailStory {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: ArticoloContent;
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: string | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: any;
}

export const load: PageLoad = async ({ params, parent }) => {
  const { storyblokAPI } = await parent();

  let articleResponse: Awaited<ReturnType<typeof storyblokAPI.get>>;
  let latestResponse: Awaited<ReturnType<typeof storyblokAPI.get>>;

  try {
    [articleResponse, latestResponse] = await Promise.all([
      storyblokAPI.get(`cdn/stories/articoli/${params.slug}`, {
        version: 'draft',
      }),
      storyblokAPI.get('cdn/stories', {
        version: 'draft',
        per_page: 4,
        sort_by: 'published_at:desc',
        filter_query: {
          component: {
            in: 'articolo',
          },
        },
      }),
    ]);
  } catch (e: any) {
    const status = e?.response?.status ?? e?.status;
    if (status === 404) throw error(404, 'Articolo non trovato');
    throw e;
  }

  if (!articleResponse.data?.story) throw error(404, 'Articolo non trovato');

  const articolo = articleResponse.data.story as ArticoloDetailStory;
  const latestArticoli = (latestResponse.data.stories as ArticoloDetailStory[]).filter(
    (s) => s.slug !== params.slug
  );

  return {
    articolo,
    latestArticoli,
  };
};
