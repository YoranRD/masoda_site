const ensureTrailingSlash = (value: string): string => (value.endsWith("/") ? value : `${value}/`);

export const stagingSiteUrl = "https://yoranrd.github.io/masoda_site/";
export const productionDomain = "";
export const useProductionDomain = false;

export const activeSiteUrl = useProductionDomain
  ? `https://${productionDomain}/`
  : ensureTrailingSlash(stagingSiteUrl);

const activeSite = new URL(activeSiteUrl);

export const activeBasePath = activeSite.pathname === "/" ? "/" : activeSite.pathname.replace(/\/$/, "");

export const getCanonicalUrl = (pathname: string): string => {
  const cleanedPath = pathname === "/" ? "" : `${pathname.replace(/^\/+|\/+$/g, "")}/`;
  return new URL(cleanedPath, activeSiteUrl).toString();
};

export const getAbsoluteAssetUrl = (assetPath: string): string => {
  const cleanedPath = assetPath.replace(/^\/+/, "");
  return new URL(cleanedPath, activeSiteUrl).toString();
};

export const siteDefaultTitle = "Masoda | Ateliers créatifs afro-centrés et inspirations lifestyle";
export const siteDefaultDescription =
  "Masoda réunit des ateliers créatifs afro-centrés, un journal bien-être et une future boutique affiliée pensée avec soin.";

