import type { PageLoad } from './$types';

export interface TrailerContent {
  pic: string;
  _uid: string;
  tara: number;
  ruote: string;
  altezza: number | null;
  portata: number;
  component: string;
  furgonato: boolean;
  description: string | null;
  numero_assi: string;
  larghezza_utile: number;
  lunghezza_utile: number;
  _editable: string;
}

export const load: PageLoad = async ({ parent }) => {
  const { storyblokAPI } = await parent();

  interface TrailerStory {
    name: string;
    slug: string;
    content: TrailerContent;
  }

  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    per_page: 40,
    filter_query: {
      component: {
        in: 'trailer',
      },
    },
  });

  return {
    stories: response.data.stories as TrailerStory[],
  };
};
