import {
  FaFacebook,
  FaGithub,
  FaSitemap,
  FaTwitter,
  FaUsers,
} from 'react-icons/fa';
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineCash,
  HiOutlineCode,
  HiOutlineTerminal,
  HiOutlineUserGroup,
} from 'react-icons/hi';

import {
  FACEBOOK_GROUP_LINK,
  FACEBOOK_PAGE_LINK,
  FORUM_LINK,
  GITHUB_REPO_LINK,
  SUPPORT_EMAIL,
  TWITTER_PAGE_LINK,
} from '@/config/site';

export const featuresData = [
  {
    id: 1,
    title: `ফ্রি এবং ওপেনসোর্স প্লাটফর্ম`,
    description: `এজেন্টিক ডেভেলপমেন্টের সেরা রিসোর্সগুলো প্রায় সবই ইংরেজিতে, আর AI টুলগুলো বদলাচ্ছে প্রতিনিয়ত, ফলে বাংলাভাষী ডেভেলপারদের কাছে নির্ভরযোগ্য, হালনাগাদ গাইডলাইন পৌঁছায় না। কোডালয়ের লক্ষ্য হলো এজেন্টিক ডেভেলপমেন্টের জন্য মাতৃভাষা বাংলায় প্রথম পূর্ণাঙ্গ, বিশ্বাসযোগ্য নলেজ-বেইজ তৈরি করা, যা সম্পূর্ণ বিনামূল্যে এবং ওপেনসোর্স। সবাই এই কনটেন্টের পরিবর্তন, পরিবর্ধন ও ভুল সংশোধনে অবদান রাখতে পারবে।`,
    icon: HiOutlineCash,
  },
  {
    id: 2,
    title: `হাতে কলমে শিক্ষা`,
    description: `AI দিয়ে কোড করা শুধু "টিউটোরিয়াল দেখে শেখার" বিষয় নয়, এটা একটা "নিজের হাতে করে শেখার" বিষয়। প্রম্পটিং, কনটেক্সট ম্যানেজমেন্ট, AI-এর আউটপুট পড়া ও বুঝা, ভুল ধরা এবং যাচাই করা, এই সবকিছু নিজে হাতে না করলে শেখা হয় না। ঘণ্টার পর ঘণ্টা ভিডিও দেখে এই দক্ষতা গড়ে ওঠে না। তাই কোডালয়ের প্রতিটি বিষয়ই ইন্টারঅ্যাকটিভ এক্সারসাইজ আর বাস্তব টাস্কের মাধ্যমে হাতে কলমে শেখানো হয়।`,
    icon: HiOutlineBeaker,
  },
  {
    id: 3,
    title: `বাস্তবসম্মত প্রজেক্টস`,
    description: `পুঁথিগত বিদ্যা আর বাস্তব দক্ষতার মাঝে যে ব্যবধান, তা পূরণে কোডালয়ের প্রতিটি টাস্কই একটি বাস্তব প্রজেক্ট। প্রতিটি টাস্ক এবং প্রজেক্ট শেষে তৈরি হবে একটি পোর্টফোলিও-রেডি গিটহাব রেপো, যা চাকরির ইন্টারভিউ বা প্রথম Upwork কন্ট্রাক্টে আপনার দক্ষতার জলজ্যান্ত প্রমাণ হিসেবে কাজ করবে। একজন AI-নেটিভ ডেভেলপারকে প্রতিদিন যে ধরনের কাজ করতে হয়, এসব টাস্ক ঠিক সেটারই অনুশীলন।`,
    icon: HiOutlineCode,
  },
  {
    id: 4,
    title: `আধুনিক পাঠ্যসুচি`,
    description: `AI টুলের জগৎ প্রতিনিয়ত বদলায়, প্রতি মাসেই আসে নতুন মডেল আর ফিচার। ভিডিও টিউটোরিয়াল আপডেট হতে মাস লেগে যায়, ততদিনে কনটেন্ট পুরনো। টেক্সট-ভিত্তিক কনটেন্টের সবচেয়ে বড় সুবিধা এখানেই: কোনো টুল ব্রেকিং চেঞ্জ আনলে কোডালয় কয়েক ঘণ্টার মধ্যেই বাংলায় হালনাগাদ ফিক্স দিতে পারে। সম্পূর্ণ ওপেনসোর্স হওয়ায় কমিউনিটিও এই দ্রুত আপডেটে অবদান রাখতে পারে। এমনকি কনটেন্ট রিভিউ এবং আপডেটে অবদান রাখতে পারেন আপনিও।`,
    icon: HiOutlineAcademicCap,
  },
  {
    id: 5,
    title: `নিজের পছন্দের টুলেই কাজ`,
    description: `এজেন্টিক ডেভেলপমেন্টের আসল দক্ষতা হলো বাস্তব পরিবেশে AI-কে অর্কেস্ট্রেট করা, তাই আপনি কাজ করবেন আপনার নিজের পছন্দের টুলে (VS Code, Cursor, Claude Code কিংবা Codex), নিজের মেশিনে। আর Codealoy CLI আপনার টাস্কের ফলাফল লোকালি যাচাই করে আপনাকে দেবে পরিপূর্ণ রিপোর্ট। প্রতিটি টাস্ক শেষে তৈরি হবে একটি পোর্টফোলিও-রেডি গিটহাব রেপো। তাই আপনার এজেন্টিক ডেভেলপার হওয়ার জার্নিটা হবে একদম বাস্তব এবং প্রোডাক্টিভ।`,
    icon: HiOutlineTerminal,
  },
  {
    id: 6,
    title: `সকলের তরে সকলে আমরা`,
    description: `কোডালয়ের মিশন হচ্ছে বাংলা ভাষাভাষী শিক্ষার্থীদের জন্য প্রোগ্রামিং এবং AI-নেটিভ সফটওয়্যার ডেভেলপমেন্টে প্রবেশপথ সহজ ও সুগম করা। বিশেষ করে নতুনদের জন্য ভাষা যেন প্রতিবন্ধক না হয়, কেউ যেন আগ্রহ থাকা সত্ত্বেও পূর্ণাঙ্গ গাইডলাইনের অভাবে ঝরে না পড়ে। এই মিশন সফল করতে সমমনা মানুষগুলোকে এক কমিউনিটিতে আনার প্রচেষ্টা কোডালয়, যেখানে সবাই নিজের কাজ শেয়ার করবে, একে অপরকে সহযোগিতা করবে এবং পুরো জার্নিটাকে আনন্দময় করে তুলবে।`,
    icon: HiOutlineUserGroup,
  },
];

export const counterData = [
  {
    id: 1,
    number: '৫০',
    text: 'এজেন্টিক টাস্ক',
    subText: 'শীঘ্রই আসছে',
  },
  {
    id: 2,
    number: '৬',
    text: 'কারিকুলাম ট্র্যাক',
    subText: 'প্রম্পটিং থেকে অর্কেস্ট্রেশন',
  },
  {
    id: 3,
    number: '৫০০',
    text: 'শিক্ষার্থী',
    subText: 'ক্রমবর্ধমান',
  },
];

export const teamMembersData = [
  {
    name: `মুকিতুল ইসলাম মুকিত`,
    role: `প্রতিষ্ঠাতা এবং লিড মেইনটেইনার`,
    position: `সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার`,
    image: '/images/team/codealoy-team-mukit-WHknolDUa8oabBuu7ShA3.webp',
    githubUrl: 'https://github.com/mimukit',
    linkedinUrl: 'https://www.linkedin.com/in/mimukit/',
    facebookUrl: 'https://www.facebook.com/mimukit',
  },
  {
    name: `আল-আমিন শাহেদ সুমন`,
    role: `কোর্স কোর্ডিনেটর এবং কো-মেইনটেইনার`,
    position: `সফটওয়্যার ইঞ্জিনিয়ার`,
    image: '/images/team/codealoy-team-shahed-rigBmJTxFV.webp',
    githubUrl: 'https://github.com/alaminsahed',
    linkedinUrl: 'https://www.linkedin.com/in/md-al-amin-sahed/',
    facebookUrl: 'https://www.facebook.com/sahed.sumon.2',
  },
];

export const fallbackContributorsData = [
  {
    id: 89186547,
    login: 'imdhabib',
    avatar_url: 'https://avatars.githubusercontent.com/u/89186547?v=4',
    html_url: 'https://github.com/imdhabib',
  },
  {
    id: 94992456,
    login: 'meshkat-hossain',
    avatar_url: 'https://avatars.githubusercontent.com/u/94992456?v=4',
    html_url: 'https://github.com/meshkat-hossain',
  },
  {
    id: 44520484,
    login: 'sakilk130',
    avatar_url: 'https://avatars.githubusercontent.com/u/44520484?v=4',
    html_url: 'https://github.com/sakilk130',
  },
  {
    id: 32912877,
    login: 'minhazurrony',
    avatar_url: 'https://avatars.githubusercontent.com/u/32912877?v=4',
    html_url: 'https://github.com/minhazurrony',
  },
];

export const footerNavigationData = {
  links: [
    { name: 'কোর্সসমুহ', href: '/courses' },
    { name: 'ব্লগ', href: '/blog' },
    {
      name: 'যোগাযোগ',
      href: SUPPORT_EMAIL,
      target: '_blank',
    },
  ],
  social: [
    {
      name: 'ফেসবুক পেইজ',
      href: FACEBOOK_PAGE_LINK,
      icon: FaFacebook,
    },
    {
      name: 'ফেসবুক গ্রুপ',
      href: FACEBOOK_GROUP_LINK,
      icon: FaUsers,
    },
    {
      name: 'টুইটার',
      href: TWITTER_PAGE_LINK,
      icon: FaTwitter,
    },
    {
      name: 'ফোরাম',
      href: FORUM_LINK,
      icon: FaSitemap,
    },
    {
      name: 'গিঁটহাব',
      href: GITHUB_REPO_LINK,
      icon: FaGithub,
    },
  ],
};
