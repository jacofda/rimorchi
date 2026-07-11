import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { UsatoContent } from '../+page';

interface UsatoDetailStory {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: UsatoContent;
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

  let usatoResponse: Awaited<ReturnType<typeof storyblokAPI.get>>;
  let latestResponse: Awaited<ReturnType<typeof storyblokAPI.get>>;

  try {
    [usatoResponse, latestResponse] = await Promise.all([
      storyblokAPI.get(`cdn/stories/usato/${params.slug}`, {
        version: 'draft',
      }),
      storyblokAPI.get('cdn/stories', {
        version: 'draft',
        per_page: 4,
        sort_by: 'published_at:desc',
        filter_query: {
          component: {
            in: 'Usato',
          },
          attivo: {
            is: true,
          },
        },
      }),
    ]);
  } catch (e: any) {
    const status = e?.response?.status ?? e?.status;
    if (status === 404) throw error(404, 'Usato non trovato');
    throw e;
  }

  if (!usatoResponse.data?.story) throw error(404, 'Usato non trovato');

  const usato = usatoResponse.data.story as UsatoDetailStory;

  // Non mostrare gli usati non attivi
  if (!usato.content.attivo) throw error(404, 'Usato non trovato');

  const latestUsato = (latestResponse.data.stories as UsatoDetailStory[])
    .filter((s) => s.content.attivo)
    .filter((s) => s.slug !== params.slug);

  return {
    usato,
    latestUsato,
  };
};
