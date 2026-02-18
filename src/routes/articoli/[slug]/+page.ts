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

  const response = await storyblokAPI.get(`cdn/stories/articoli/${params.slug}`, {
    version: 'draft',
  });

  console.log('Articolo Detail Response:', response);

  return {
    articolo: response.data.story as ArticoloDetailStory,
  };
};
