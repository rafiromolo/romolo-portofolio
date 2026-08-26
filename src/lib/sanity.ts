import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Kalau env var belum diisi (misal saat pertama kali clone project ini),
// client sengaja dibuat null supaya build tidak crash — halaman blog
// akan tampil kosong dengan pesan "belum ada artikel" alih-alih error.
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

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
