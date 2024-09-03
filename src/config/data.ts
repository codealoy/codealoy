import imageOfMukit from '~/public/images/team/codealoy-team-mukit-yiu0yn8teti9f2nnnp1nk.webp';
import imageOfShahed from '~/public/images/team/codealoy-team-shahed-eql2q62sebdvpba1uk6fd.webp';
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
  HiOutlineDesktopComputer,
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
    description: `আমাদের অনেকেরই প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট সেক্টরে ক্যারিয়ার গড়ার ইচ্ছা থাকলেও পূর্ণাঙ্গ গাইডলাইনের অভাবে আগাতে পারি না। ইউটিউবের শত শত ছন্নছাড়া ভিডিও টিউটোরিয়ালের ভিড়ে আমরা দিশেহারা। কি শিখবো, কতটুকু শিখবো, নতুন হিসাবে চাকরি পেতে ন্যূনতম কতটুকু দক্ষতা থাকা দরকার, এমন হাজারটা প্রশ্ন মাথায় ঘুরপাক খায়। তাই একেবারে জিরো থেকে পরিপূর্ণ এবং দক্ষ ডেভেলপার হওয়ার স্টেপ বাই স্টেপ গাইডলাইন প্রদানের জন্য 'কোডালয়' মাতৃভাষা বাংলায় বিনামূল্যে আমাদের একটি ক্ষুদ্র একটি প্রচেষ্টা।`,
    icon: HiOutlineCash,
  },
  {
    id: 2,
    title: `হাতে কলমে শিক্ষা`,
    description: `প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট এর মতো বিষয়গুলো শুধুমাত্র পুঁথিগত বিদ্যা দিয়ে আয়ত্ত করা সম্ভব নয়। দক্ষ ডেভেলপার হওয়ার জন্য এই বিষয়গুলোর বাস্তব জগতে ব্যবহার হাতে কলমে শেখা ও বোঝা সবথেকে বেশি গুরুত্বপূর্ণ। তাই কোডালয়ের প্রতিটি কোর্সেই হাতে কলমে শেখার বিষয়টি সবথেকে বেশি গুরত্ব দেওয়া হয়েছে। প্রতিটা বিষয় শেখার আগে কেন আমাদের সেটা শেখা দরকার, কোথায় কাজে লাগবে, অন্য কোন বিকল্প সল্যুশন আছে কিনা, সবকিছু সম্পর্কেই পূর্ণ ধারণা পাওয়া যাবে।`,
    icon: HiOutlineBeaker,
  },
  {
    id: 3,
    title: `বাস্তবসম্মত প্রজেক্টস`,
    description: `ছোটবেলা থেকেই আমরা দেখে আসছি, পুঁথিগত বিদ্যা আর বাস্তব জীবনে কাজে লাগানোর মতো দক্ষতা, দুইটার ভিতরে অধিকাংশ সময়েই অনেকটা ব্যবধান থেকে যায়। এই ব্যবধান নিরসনে কোডালয়ের প্রতিটি কোর্সে বাস্তবসম্মত প্রোজেক্ট অন্তরভূক্ত করা হয়েছে। চাকরি জীবনে প্রতিদিন একজন ডেভলপারকে যেধরনের কাজ করতে হয়, সেগুলো সর্ম্পকে আগে থেকেই পরিপূর্ণ ধারণা দেবে এসব প্রজেক্ট। তাছাড়া চাকরির ইন্টারভিউয়ের সময় এসকল রিয়েল ওয়ার্ল্ড পোর্টফোলিও প্রোজেক্ট নতুনদের দক্ষতা উপস্থাপনেও সহায়তা করবে।`,
    icon: HiOutlineCode,
  },
  {
    id: 4,
    title: `আধুনিক পাঠ্যসুচি`,
    description: `সফটওয়্যার ডেভেলপমেন্ট সেক্টর প্রতিনিয়ত পরিবর্তনশীল। প্রতিদিনই নতুন নতুন লাইব্রেরি, ফ্রেমওয়ার্ক আর টেকনলজির আবির্ভাব হচ্ছে। কিন্তু সেই পরিবর্তনের সাথে তাল মিলিয়ে অধিকাংশ টিউটোরিয়াল কনটেন্টগুলো আপডেট হয় না। আর ইউটিউবের ভিডিও টিউটোরিয়ালগুলোর ক্ষেত্রে এই সমস্যা আরও প্রকট। সমাধান আমাদের কোডালয়ের ওপেনসোর্স ভিত্তিক আধুনিক পাঠ্যসূচি ও কোর্স কারিকুলাম। সম্পূর্ণ ওপেনসোর্স হওয়ায় সকলেই কনটেন্টগুলোর পরিবর্তন, পরিবর্ধন এবং ভুল সংশোধনে অবদান রাখতে পরে।
    `,
    icon: HiOutlineAcademicCap,
  },
  {
    id: 5,
    title: `লোকাল সেটআপের ঝামেলামুক্ত`,
    description: `কোন কিছু নতুন বা প্রথমবারের মতো শেখা এমনিতেই বেশ কঠিন একটা ব্যাপার। তার উপর প্রোগ্রামিং শেখার শুরুতেই লোকাল কম্পিউটার বা ল্যাপটপে একগাদা সফটওয়্যার, লাইব্রেরি, টুলস ইত্যাদি ইনস্টল করতে হয়। আবার অনেক সময় টিউটোরিয়ালে দেখানো পদ্ধতিতে আমাদের লোকাল মেশিনে ঠিকভাবে সবকিছু ইনস্টল হয় না। নতুনদের জন্য সেটা মরার উপর খাড়ার ঘায়ের মতো। কোডালয় ইন্টারঅ্যাকটিভ ক্লাউড এডিটর এনভায়রনমেন্ট দিবে শেখার শুরুতেই এসকল অনাকাঙ্খিত ঝামেলা থেকে মুক্তি।`,
    icon: HiOutlineDesktopComputer,
  },
  {
    id: 6,
    title: `সকলের তরে সকলে আমরা`,
    description: `কোডালয়ের মিশন হচ্ছে বাংলা ভাষাভাষী শিক্ষার্থীদের জন্য সফটওয়্যার ডেভেলপমেন্ট ইন্ডাস্ট্রিতে প্রবেশপথ সহজ ও সুগম করা। বিশেষ করে নতুনদের জন্য ভাষা যেন প্রতিবন্ধক না হয়। কেউ যেন আগ্রহ থাকা সত্ত্বেও পূর্ণাঙ্গ গাইডলাইনের অভাবে ঝরে না পড়ে। আর এই মিশন সফল করতে সমমনা মানুষগুলোকে একই কমিউনিটি প্লাটফরমের নিচে আনার একটি প্রচেষ্টা কোডালয়, যেখানে তারা পরস্পরকে উৎসাহ দিবে, সহযোগিতা করবে, মোটিভেশনাল রাখবে, সর্বোপরি পুরো জার্নিটাকে আনন্দময় করে তুলবে।`,
    icon: HiOutlineUserGroup,
  },
];

export const counterData = [
  {
    id: 1,
    number: '১০',
    text: 'প্রফেশনাল কোর্স',
    subText: 'শীঘ্রই আসছে',
  },
  {
    id: 2,
    number: '২৫',
    text: 'লাইভ প্রোজেক্ট',
    subText: 'শীঘ্রই আসছে',
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
    position: `সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার`,
    image: imageOfMukit,
    githubUrl: 'https://github.com/mimukit',
    linkedinUrl: 'https://www.linkedin.com/in/mimukit/',
    facebookUrl: 'https://www.facebook.com/mimukit',
  },
  {
    name: `আল-আমিন শাহেদ সুমন`,
    role: `কোর্স কোর্ডিনেটর এবং কো-মেইনটেইনার`,
    position: `সফটওয়্যার ইঞ্জিনিয়ার`,
    image: imageOfShahed,
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
