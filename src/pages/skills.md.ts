import type { APIRoute } from 'astro';

import { SKILLS, SKILLS_REPO_URL } from '@/config/skills';

import { markdownResponse } from '@/lib/agentReadable';

// skills.md — installable Codealoy skill artifacts. Served at /skills.md and
// generated from src/config/skills.ts.
export const GET: APIRoute = () => {
  const available = SKILLS.filter((s) => s.status === 'available');
  const planned = SKILLS.filter((s) => s.status === 'planned');

  const lines: string[] = [
    '# কোডালয় স্কিল (Codealoy Skills)',
    '',
    '> এজেন্টিক ডেভেলপমেন্টের জন্য কোডালয়ের ইনস্টলযোগ্য স্কিল আর্টিফ্যাক্ট। প্রতিটি স্কিল একটি স্ল্যাশ কমান্ড হিসেবে আপনার AI এজেন্টে (Claude Code, Codex, Cursor) যোগ করা যাবে।',
    '',
    `গিটহাব স্কিল রিপোজিটরি (Github Skills Repository): ${SKILLS_REPO_URL}`,
    '',
  ];

  if (available.length > 0) {
    lines.push('## উপলব্ধ (Available)', '');
    for (const skill of available) {
      lines.push(
        `### \`${skill.command}\` — ${skill.name}`,
        '',
        skill.description,
        '',
        `_${skill.descriptionEn}_`,
        '',
        `- ইনস্টল/সোর্স: ${skill.url}`,
        '',
      );
    }
  }

  if (planned.length > 0) {
    lines.push('## আসন্ন (Planned)', '');
    for (const skill of planned) {
      lines.push(
        `### \`${skill.command}\` — ${skill.name}`,
        '',
        skill.description,
        '',
        `${skill.descriptionEn}`,
        '',
        '- অবস্থা: তৈরি হচ্ছে (coming soon)',
        '',
      );
    }
  }

  return markdownResponse(lines.join('\n'));
};
