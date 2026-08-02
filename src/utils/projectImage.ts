export function resolveProjectImage(imageFileName?: string): string | undefined {
  const trimmed = imageFileName?.trim();
  if (!trimmed) return undefined;
  return `/project/image/${trimmed}`;
}

export interface ProjectImage {
  file: string; // file name inside `public/project/image/`
  alt: string;
}
