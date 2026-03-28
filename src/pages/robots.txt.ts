import { activeSiteUrl } from "../config/site";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap-index.xml", activeSiteUrl).toString()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

