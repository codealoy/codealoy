import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { remark } from 'remark';

export interface HeadingData {
  id: string;
  text: string;
  level: number;
}

// Minimal AST types (compatible with remark's AST structure)
interface ASTNode {
  type: string;
  children?: ASTNode[];
  value?: string;
}

interface HeadingNode extends ASTNode {
  type: 'heading';
  depth: number;
  children: ASTNode[];
}

interface RootNode extends ASTNode {
  type: 'root';
  children: ASTNode[];
}

/**
 * Get the file path to a lesson's MDX file
 */
export function getLessonFilePath(
  courseSlug: string,
  lessonSlug: string,
): string {
  // Try .mdx first, then .md
  const mdxPath = join(
    process.cwd(),
    'src',
    'content',
    'courses',
    courseSlug,
    `${lessonSlug}.mdx`,
  );

  const mdPath = join(
    process.cwd(),
    'src',
    'content',
    'courses',
    courseSlug,
    `${lessonSlug}.md`,
  );

  try {
    // Check if .mdx exists
    readFileSync(mdxPath, 'utf-8');
    return mdxPath;
  } catch {
    // Fall back to .md
    return mdPath;
  }
}

/**
 * Extract headings from markdown/MDX content
 */
export async function extractHeadings(content: string): Promise<HeadingData[]> {
  const processor = remark();
  const tree = processor.parse(content) as RootNode;

  const headings: HeadingData[] = [];

  // Traverse the AST to find headings
  function traverse(node: ASTNode) {
    if (node.type === 'heading') {
      const heading = node as HeadingNode;
      if (heading.depth >= 2 && heading.depth <= 4) {
        // Extract text from heading children
        const text = extractTextFromNode(heading);

        if (text) {
          // Generate ID from text (same logic as rehype-slug)
          const id = text.replace(/[()]/g, '').replace(/ /g, '-');

          headings.push({
            id,
            text,
            level: heading.depth,
          });
        }
      }
    }

    // Recursively traverse children
    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }

  traverse(tree);

  return headings;
}

/**
 * Extract headings from a lesson file
 */
export async function extractHeadingsFromLesson(
  courseSlug: string,
  lessonSlug: string,
): Promise<HeadingData[]> {
  try {
    const filePath = getLessonFilePath(courseSlug, lessonSlug);
    const content = readFileSync(filePath, 'utf-8');

    // Remove frontmatter if present
    const contentWithoutFrontmatter = content.replace(
      /^---\s*[\s\S]*?---\s*/,
      '',
    );

    return await extractHeadings(contentWithoutFrontmatter);
  } catch (error) {
    console.error(
      `Failed to extract headings from lesson ${courseSlug}/${lessonSlug}:`,
      error,
    );
    return [];
  }
}

/**
 * Extract text content from a node and its children
 */
function extractTextFromNode(node: ASTNode): string {
  if (node.type === 'text') {
    return node.value ? String(node.value) : '';
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map((child) => extractTextFromNode(child)).join('');
  }

  return '';
}
