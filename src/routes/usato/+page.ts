import type { PageLoad } from './$types';

export interface UsatoContent {
  _uid: string;
  anno: string;
  marca: string;
  attivo: boolean;
  titolo: string;
  sottotitolo?: string;
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

  interface UsatoStory {
    name: string;
    slug: string;
    content: UsatoContent;
  }

  const [response, articoliResponse, accessoriResponse] = await Promise.all([
    storyblokAPI.get('cdn/stories', {
      version: 'draft',
      per_page: 40,
      filter_query: {
        component: {
          in: 'Usato',
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
          in: 'Accessori',
        },
        attivo: {
          is: true,
        },
      },
    }),
  ]);

  const stories = (response.data.stories as UsatoStory[]).filter((s) => s.content.attivo);

  return {
    stories,
    latestArticoli: articoliResponse.data.stories,
    latestAccessori: accessoriResponse.data.stories,
  };
};
