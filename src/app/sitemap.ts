// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { categoryMap } from '@/app/category/[slug]/page';
const BASE_URL = 'https://www.thevvibe.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '/',
    '/about',
    '/privacy',
    '/terms',
    '/blog',
  ];
  const blogPosts = getAllPosts();

  const categoryRoutes = Object.keys(categoryMap).map((slug) => ({
    url: `${BASE_URL}/category/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as 'daily',
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8,
  }));

  const routes = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as 'daily',
    priority: route === '/' ? 1.0 : 0.7,
  }));

  return [...routes, ...blogRoutes, ...categoryRoutes];
}

export const dynamic = 'force-static';