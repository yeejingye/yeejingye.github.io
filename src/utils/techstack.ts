export function resolveTechStackLogo(logoFileName?: string): string | undefined {
  const trimmed = logoFileName?.trim();
  if (!trimmed) return undefined;
  return `/project/techstack/${trimmed}`;
}

export interface TechStackItem {
  name: string;
  logo?: string; // file name inside `public/project/techstack/` (optional)
  href?: string;
}
