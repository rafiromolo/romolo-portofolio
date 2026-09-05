import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: false,
    })
  : null;

/* SANITY STUDO: BLOGS */
export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  coverImageUrl: string | null;
  body?: unknown[]; // Portable Text array, cuma diambil di halaman detail
};

const POST_LIST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  "coverImageUrl": coverImage.asset->url
`;

export async function getAllPosts(): Promise<SanityPost[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
      ${POST_LIST_FIELDS}
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!sanityClient) return null;

  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      ${POST_LIST_FIELDS},
      body
    }`,
    { slug }
  );
}

/* SANITY STUDIO: PROJECTS */
export type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string | null;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  body?: unknown[];
  publishedAt: string;
};

const PROJECT_LIST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImageUrl": coverImage.asset->url,
  tech,
  githubUrl,
  liveUrl,
  body,
  publishedAt
`;

export async function getAllProjects(): Promise<SanityProject[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
      ${PROJECT_LIST_FIELDS}
    }`
  );
}

export async function getProjectBySlug(
  slug: string
): Promise<SanityProject | null> {
  if (!sanityClient) return null;

  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      ${PROJECT_LIST_FIELDS},
      body
    }`,
    { slug }
  );
}

/* SANITY STUDIO: CAREER */
export type SanityCareer = {
  _id: string;
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  summary: string[];
  details: string[];
};

const CAREER_LIST_FIELDS = `
  _id,
  role,
  company,
  period,
  isCurrent,
  summary,
  details
`;

export async function getAllCareers(): Promise<SanityCareer[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(`
    *[_type == "career"] | order(period desc) {
      ${CAREER_LIST_FIELDS}
    }
  `);
}
