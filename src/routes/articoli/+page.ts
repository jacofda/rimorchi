import type { PageLoad } from './$types';

export interface ArticoloContent {
  tag: string;
  _uid: string;
  titolo: string;
  abstract: string;
  galleria: Immagine[];
  immagine: Immagine;
  component: string;
  descrizione: any;
  _editable?: string;
}

export interface Immagine {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: any;
  is_external_url: boolean;
}

export const load: PageLoad = async ({ parent }) => {
  const { storyblokAPI } = await parent();

  interface ArticoloStory {
    name: string;
    slug: string;
    content: ArticoloContent;
  }

  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    per_page: 40,
    filter_query: {
      component: {
        in: 'articolo',
      },
    },
  });

  return {
    stories: response.data.stories as ArticoloStory[],
  };
};
