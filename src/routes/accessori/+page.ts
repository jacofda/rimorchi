import type { PageLoad } from './$types';

export const ssr = true;

export interface AccessorioContent {
  _uid: string;
  attivo: boolean;
  titolo: string;
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

  interface AccessorioStory {
    name: string;
    slug: string;
    content: AccessorioContent;
  }

  const [response, articoliResponse, usatoResponse] = await Promise.all([
    storyblokAPI.get('cdn/stories', {
      version: 'draft',
      per_page: 40,
      filter_query: {
        component: {
          in: 'Accessori',
        },
        attivo: {
          is: true,
        },
      },
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

  return {
    stories: response.data.stories as AccessorioStory[],
    latestArticoli: articoliResponse.data.stories,
    latestUsato: usatoResponse.data.stories,
  };
};
