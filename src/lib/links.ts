import { activeBasePath } from "../config/site";

export const isExternalHref = (value: string): boolean =>
  value.startsWith("http://") ||
  value.startsWith("https://") ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:");

export const withBase = (path: string): string => {
  if (isExternalHref(path)) {
    return path;
  }

  if (path.startsWith("#") || path.startsWith("?")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return activeBasePath === "/" ? normalizedPath : `${activeBasePath}${normalizedPath}`;
};
