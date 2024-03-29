import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import coverImageBlurDataUrl from '~/client/images/common/cover-image-blur';
import imageOfMukit from '~/client/images/home/codealoy-team-mukit.png';
import imageOfShahed from '~/client/images/home/codealoy-team-shahed.png';
import { convertDateToBangla } from '~/client/utils/dayjs';

interface BlogPostsProps {
  limit?: number;
}

const authorList = {
  mukit: {
    name: 'মুকিতুল ইসলাম মুকিত',
    href: 'https://github.com/mimukit',
    avatarImageUrl: imageOfMukit,
  },
  sumon: {
    name: 'আল-আমিন শাহেদ সুমন',
    href: 'https://github.com/alaminsahed',
    avatarImageUrl: imageOfShahed,
  },
};

const posts = [
  {
    title: 'হ্যালো ওয়ার্ল্ড',
    href: '/blog/1-welcome-to-codealoy',
    category: { name: 'বিবৃতি', href: 'announement' },
    description: `স্বাগতম। অনেক প্রত্যাশা ও আনন্দের সাথে আমরা "কোডালয়" প্লাটফরমের যাত্রা শুরু করছি। কোডালয় বাংলা ভাষাভাষী শিক্ষার্থীদের জন্য একটি প্রোগ্রামিং শেখার ওপেন সোর্স প্ল্যাটফর্ম। নতুনদের ডেভেলপমেন্ট ক্যারিয়ার সমৃদ্ধ করার লক্ষ্যে আমাদের এই সন্মিলিত প্রচেষ্টা।`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1633989464004-1aada5ed6702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    readingTime: '৫ মিনিট',
    author: [authorList.sumon, authorList.mukit],
    publishedAt: '2022-12-01',
    isPublished: true,
  },
  {
    title: '১০০ দিনের কোডিং চ্যালেঞ্জ',
    href: '/blog/2-100-days-of-coding-challenge',
    category: { name: 'ক্যারিয়ার', href: 'career' },
    description: `প্রোগ্রামিং শেখার জন্য দুইটি বিষয় সব থেকে প্রয়োজন: আগ্রহ আর অধ্যবসায়। কোন কিছু শেখা শুরু করার সব থেকে কঠিন বাপারটা হচ্ছে হতাশ না হয়ে প্রতিদিন লেগে থাকা। ১০০ দিনের কোডিং চ্যালেঞ্জ আমাদের অধ্যবসায়ের প্রথম ধাপ।`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1633158834806-766387547d2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    readingTime: '১২ মিনিট',
    author: [authorList.mukit],
    publishedAt: 'TBD',
    isPublished: false,
  },
  {
    title: 'কেন, কিভাবে কন্ট্রিবিউট করবেন কোডালয় প্ল্যাটফর্মে',
    href: '/blog/3-how-to-contribute-to-codealoy',
    category: { name: 'টিউটোরিয়াল', href: 'tutorial' },
    description: `কোডালয় প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শেখার সম্পূর্ণ ফ্রি এবং ওপেনসোর্স প্লাটফর্ম। সকল সফটওয়্যার ইঞ্জিনিরদের জন্য এই সন্মিলিত প্রচেষ্টায় আপনিও সংযুক্ত হতে পারেন কোডালয়ের সাথে।`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    readingTime: '১০ মিনিট',
    author: [authorList.mukit],
    publishedAt: 'TBD',
    isPublished: false,
  },
];

export const BlogPosts: React.FC<BlogPostsProps> = ({ limit }) => {
  const [filteredPosts, setFilteredPosts] = React.useState<typeof posts>([]);
  const [hoveredAuthorId, setHoveredAuthorId] = React.useState<number | null>(
    null,
  );
  const [hoveredPostHref, setHoveredPostHref] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    const newFilteredPosts = limit ? posts.slice(0, limit) : posts;
    setFilteredPosts(newFilteredPosts);
  }, [limit]);

  const onAuthorMouseEnter = (args: {
    authorIndex: number;
    postHref: string;
  }) => {
    setHoveredAuthorId(args.authorIndex);
    setHoveredPostHref(args.postHref);
  };

  const onAuthorMouseLeave = () => {
    setHoveredAuthorId(null);
    setHoveredPostHref(null);
  };

  const isHoveredAuthorOfPost = (args: {
    index: number;
    post: (typeof posts)[0];
  }) => {
    const { index, post } = args;

    return index === hoveredAuthorId && post.href === hoveredPostHref;
  };

  return (
    <div className="mx-auto grid max-w-lg place-items-center gap-10 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <div
          key={post.title}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={500}
            height={250}
            className="flex-shrink-0 object-cover"
            placeholder="blur"
            loading="lazy"
            blurDataURL={coverImageBlurDataUrl}
          />

          <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-slate-800">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                {post.isPublished ? post.category.name : 'শীঘ্রই আসছে'}
              </p>
              <Link href={post.isPublished ? post.href : '#'}>
                <div className="mt-2 inline-block max-h-52 overflow-hidden">
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-slate-800 line-clamp-5 dark:text-slate-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <span className="flex -space-x-4">
                  {post.author.map((author, index) => (
                    <Link
                      key={author.href}
                      href={author.href}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() =>
                        onAuthorMouseEnter({
                          authorIndex: index,
                          postHref: post.href,
                        })
                      }
                      onMouseLeave={() => onAuthorMouseLeave()}
                    >
                      <Image
                        className={clsx([
                          'relative h-10 w-10 transform cursor-pointer rounded-full border border-slate-200 object-cover grayscale transition duration-300 ease-in-out',
                          ,
                          isHoveredAuthorOfPost({ index, post })
                            ? 'z-50 scale-110 grayscale-0'
                            : index === 0
                            ? 'z-40'
                            : 'z-30',
                        ])}
                        src={author.avatarImageUrl}
                        alt={author.name}
                        title={author.name}
                        width={40}
                        height={40}
                        placeholder="blur"
                        loading="lazy"
                        blurDataURL={coverImageBlurDataUrl}
                      />
                    </Link>
                  ))}
                </span>
                <span className="ml-3">
                  {post.author.map((author, index) => (
                    <p
                      key={author.href}
                      className="text-sm font-medium text-slate-900 dark:text-slate-400"
                    >
                      <Link
                        href={author.href}
                        target="_blank"
                        rel="noreferrer"
                        className={clsx([
                          isHoveredAuthorOfPost({ index, post }) &&
                            'text-white',
                        ])}
                        onMouseEnter={() =>
                          onAuthorMouseEnter({
                            authorIndex: index,
                            postHref: post.href,
                          })
                        }
                        onMouseLeave={() => onAuthorMouseLeave()}
                      >
                        {author.name}
                      </Link>
                    </p>
                  ))}
                </span>
              </div>

              <div className="text-sm text-slate-400">
                {post.isPublished ? (
                  <>
                    <time dateTime={post.publishedAt}>
                      <CalendarDaysIcon
                        title="তারিখ"
                        className="mr-1 inline-block h-5 w-5 cursor-pointer"
                      />
                      {convertDateToBangla(post.publishedAt)}
                    </time>
                    <br />
                    <span>
                      <ClockIcon className="mr-1 inline-block h-5 w-5 cursor-pointer" />
                      {post.readingTime}
                    </span>
                  </>
                ) : (
                  <p>শীঘ্রই আসছে</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
