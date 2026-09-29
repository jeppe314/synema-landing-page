export const siteUrl = "https://synemaapp.com";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
