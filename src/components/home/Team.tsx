'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { SectionContent } from '@/components/default/SectionContent';
import { SectionHeading } from '@/components/default/SectionHeading';
import { CircleBlur } from '@/components/patterns';
import { defaultImageBlurDataUrl } from '@/config/defaultImageBlur';
import {
  GITHUB_CONTRIBUTOS_API_LINK,
  ONE_DAY_IN_MILLISECONDS,
} from '@/config/site';
import { fallbackContributorsData, teamMembersData } from '@/config/data';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const excludedContributiorList = ['mimukit', 'alaminsahed', 'codealoyteam'];

const getFilteredContributorList = (args: {
  contributorList: Contributor[];
}) => {
  const { contributorList } = args;

  return contributorList.filter(
    (contributor: Contributor) =>
      !excludedContributiorList.includes(contributor?.login || ''),
  );
};

const SocialLinks = ({
  githubUrl = '#',
  linkedInUrl = '#',
  facebookUrl = '#',
}) => {
  const socialLinks = [
    { key: 'github', title: 'Github', url: githubUrl, icon: FaGithubSquare },
    { key: 'linkedIn', title: 'LinkedIn', url: linkedInUrl, icon: FaLinkedin },
    {
      key: 'facebook',
      title: 'Facebook',
      url: facebookUrl,
      icon: FaFacebookSquare,
    },
  ];

  return (
    <ul role="list" className="flex justify-center space-x-5">
      {socialLinks.map((socialLink) => (
        <li key={socialLink.key}>
          <Link
            title={socialLink.title}
            href={socialLink.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{socialLink.title}</span>
            <socialLink.icon className="h-5 w-5 transform text-slate-400 duration-300 ease-in-out hover:scale-110 hover:text-primary" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Team = () => {
  const { data: contributorList } = useQuery({
    queryKey: ['contributors'],
    queryFn: () => axios.get(GITHUB_CONTRIBUTOS_API_LINK),
    staleTime: ONE_DAY_IN_MILLISECONDS,
    placeholderData: {
      data: fallbackContributorsData,
    } as any,
  });

  const filteredContributorList = getFilteredContributorList({
    contributorList: contributorList?.data || fallbackContributorsData,
  });

  return (
    <section
      id="meet-team"
      className="relative bg-white/10 dark:bg-dark-light/30"
    >
      <div className="absolute left-0 top-1/2 -z-10 flex -translate-x-1/3 -translate-y-1/2">
        <CircleBlur />
      </div>
      <div className="absolute right-0 top-1/2 -z-10 flex -translate-y-1/2 translate-x-1/2">
        <CircleBlur />
      </div>
      <SectionContent>
        <div className="space-y-12 text-center">
          <SectionHeading
            heading="কোডালয় টিম"
            title="কোডালয় সদস্য পরিচিতি"
            tagline="মাতৃভাষা বাংলায় আধুনিক প্রোগ্রামিং ও ওয়েব ডেভেলপমেন্ট শেখার পূর্ণাঙ্গ গাইডলাইন সকলের কাছে বিনামূল্যে পৌঁছে দেওয়ার লক্ষ্যে যারা অবদান রাখছেন"
          />
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl"
          >
            {teamMembersData.map((member) => {
              return (
                <li key={member.name}>
                  <div className="space-y-6">
                    <div className="relative mx-auto h-40 w-40 scale-100 overflow-hidden rounded-full border border-green-500 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 xl:h-56 xl:w-56">
                      <Image
                        src={member.image}
                        alt={member.name}
                        placeholder="blur"
                        blurDataURL={defaultImageBlurDataUrl}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold leading-10 text-slate-600 dark:text-slate-200">
                          {member.name}
                        </h3>
                        <p className="font-medium text-primary">
                          {member.role}
                        </p>
                        <p className="text-sm font-normal text-slate-700 dark:text-slate-300">
                          {member.position}
                        </p>
                      </div>
                      <SocialLinks
                        githubUrl={member.githubUrl}
                        linkedInUrl={member.linkedinUrl}
                        facebookUrl={member.facebookUrl}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {filteredContributorList.length === 0 ? null : (
          <div className="mx-auto max-w-7xl px-4 pt-16 text-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <p className="text-2xl font-semibold tracking-tight text-slate-700 lg:text-3xl dark:text-slate-200">
                  অন্যান্য সদস্যবৃন্দ
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6 md:gap-y-16 lg:max-w-5xl lg:gap-x-8"
              >
                {filteredContributorList.map((contributor: Contributor) => (
                  <li key={contributor.id}>
                    <div className="space-y-4">
                      <div className="mx-auto h-20 w-20 scale-100 overflow-hidden rounded-full transition-all duration-300 hover:scale-110 hover:border hover:border-green-500 lg:h-24 lg:w-24">
                        <LazyLoadImage
                          className="h-20 w-20 rounded-full object-cover grayscale hover:grayscale-0 lg:h-24 lg:w-24"
                          src={contributor.avatar_url}
                          effect="blur"
                          alt={'contributor ' + contributor.login}
                          placeholderSrc={defaultImageBlurDataUrl}
                        />
                      </div>
                      <div className="space-y-2 text-xl font-medium text-white lg:text-sm">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300/80">
                          {contributor.login}
                        </h3>
                        <p className="text-sm text-primary">কন্ট্রিবিউটর</p>
                        <p className="text-sm font-normal text-slate-700 dark:text-slate-300">
                          সফটওয়্যার ইঞ্জিনিয়ার
                        </p>
                        <a
                          href={contributor.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center text-slate-400 hover:text-slate-500"
                        >
                          <FaGithubSquare />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </SectionContent>
    </section>
  );
};
