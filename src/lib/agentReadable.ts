import { BASE_URL } from '@/config/site';

/**
 * Build an absolute URL from a site-relative path.
 * Example: absoluteUrl('/blog/welcome.md') -> 'https://www.codealoy.com/blog/welcome.md'
 */
export function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).href;
}

type ContentMarkdownInput = {
  title: string;
  description?: string;
  body: string;
  canonicalPath: string;
  meta?: Record<string, string | undefined>;
};

/**
 * Wrap a raw markdown body with a small, human-readable header (title,
 * description and a few metadata lines) for AI/agent consumption.
 */
export function buildContentMarkdown({
  title,
  description,
  body,
  canonicalPath,
  meta = {},
}: ContentMarkdownInput): string {
  const lines: string[] = [`# ${title}`, ''];

  if (description) {
    lines.push(`> ${description}`, '');
  }

  for (const [key, value] of Object.entries(meta)) {
    if (value) {
      lines.push(`- **${key}:** ${value}`);
    }
  }
  lines.push(`- **মূল পেজ:** ${absoluteUrl(canonicalPath)}`);

  lines.push('', '---', '', body.trim(), '');

  return lines.join('\n');
}

/** Build a markdown (`text/markdown`) response. */
export function markdownResponse(content: string): Response {
  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}

/** Build a plain-text (`text/plain`) response, used for llms.txt. */
export function plainTextResponse(content: string): Response {
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
