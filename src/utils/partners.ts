export function resolvePartnerLogo(logoFileName?: string): string | undefined {
  const trimmed = logoFileName?.trim();
  if (!trimmed) return undefined;
  return `/project/partner/${trimmed}`;
}

export interface PartnerItem {
  name: string;
  logo?: string; // file name inside `public/project/partner/` (optional)
  href?: string;
}
