/**
 * Returns a resized Storyblok image URL using the Storyblok Image Service.
 * @param filename - The original Storyblok asset URL
 * @param width - Desired width in pixels
 * @param height - Desired height in pixels
 */
export function sbImg(
  url: string,
  width = 0,
  height = 0,
  format: 'webp' | 'jpeg' | 'png' | null = 'webp'
): string {
  if (!url) return '';
  const size = `${width}x${height}`;
  const filters = format ? `/filters:format(${format})` : '';
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  return `https://img2.storyblok.com/${size}${filters}${path}`;
}
