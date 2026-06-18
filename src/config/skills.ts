// Registry of installable Codealoy skill artifacts.
//
// The skills themselves live in a dedicated public repository so they can be
// versioned and installed independently of the site. `skills.md` (served at the
// site root) is generated from this list — keep the list as the single source
// of truth rather than editing the generated file by hand.

export const SKILLS_REPO_URL = 'https://github.com/codealoy/skills';

export type SkillStatus = 'available' | 'planned';

export type SkillArtifact = {
  /** Slash command users invoke, e.g. '/bujhiye-bolo'. */
  command: string;
  /** Bangla name. */
  name: string;
  /** Short Bangla description. */
  description: string;
  /** Short English description. */
  descriptionEn: string;
  status: SkillStatus;
  /** Link to the skill inside the skills repo (or the repo itself). */
  url: string;
};

export const SKILLS: SkillArtifact[] = [
  {
    command: '/bujho',
    name: 'বুঝিয়ে বলো',
    description:
      'যেকোনো কোড বা এরর সহজ বাংলায় বুঝিয়ে বলে — প্রতিটি লাইন, উদাহরণসহ।',
    descriptionEn:
      'Explains any code or error in plain Bangla, line by line, with examples.',
    status: 'planned',
    url: SKILLS_REPO_URL,
  },
];
