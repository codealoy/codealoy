import Image from 'next/image';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import coverImageBlurDataUrl from '../../images/common/cover-image-blur';

import imageOfMukit from '../../images/home/codealoy-team-mukit.png';
import imageOfShahed from '../../images/home/codealoy-team-shahed.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from 'axios';
import {QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient =new QueryClient();
const teamMembers = [
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
            className="text-slate-400 hover:text-slate-500"
            href={socialLink.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{socialLink.title}</span>
            <socialLink.icon className="h-5 w-5 transform text-slate-400 duration-200 ease-in-out hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Team = () => {
 const {data} = useQuery('teamMember',() => {
    return axios.get('https://api.github.com/repos/codealoy/codealoy/contributors')
  })
  const filteredMember = data?.data.filter(
    (name: any) => name.login !== 'mimukit' && name.login !== 'alaminsahed' && name.login !== 'codealoyteam'
   );
  return (
    <QueryClientProvider client={queryClient}>
    <section id="meet-team" className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight dark:text-white sm:text-4xl">
              কোডালয় সদস্য পরিচিতি
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              মাতৃভাষা বাংলায় আধুনিক প্রোগ্রামিং ও ওয়েব ডেভেলপমেন্ট শেখার
              পূর্ণাঙ্গ গাইডলাইন সকলের কাছে বিনামূল্যে পৌঁছে দেওয়ার লক্ষ্যে
              যারা অবদান রাখছেন
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl"
          >
            {teamMembers.map((member) => (
              <li key={member.name}>
                <div className="space-y-6">
                  <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-slate-200 grayscale dark:border-slate-900 xl:h-56 xl:w-56">
                    <Image
                      src={member.image}
                      alt={member.name}
                      placeholder="blur"
                      blurDataURL={coverImageBlurDataUrl}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold leading-10 text-slate-800 dark:text-slate-100">
                        {member.name}
                      </h3>
                      <p className="font-medium text-indigo-600 dark:text-indigo-400">
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
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <p className="text-2xl font-bold tracking-tight text-white ">
                কন্ট্রিবিউটর
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
            >
              {filteredMember && filteredMember.map((person: any) => (
                  <li key={person.id}>
                    <div className="space-y-4">
                      <LazyLoadImage
                        className="blue mx-auto h-20 w-20 rounded-full grayscale lg:h-24 lg:w-24"
                        src={person.avatar_url}
                        alt="person image"
                      />
                      <div className="space-y-2 text-xl font-medium text-white lg:text-sm ">
                        <h3 className="text-xl font-semibold leading-10 text-slate-800 dark:text-slate-100">{person.login}</h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                          কন্ট্রিবিউটর
                        </p>
                        <p className="text-sm font-normal text-slate-700 dark:text-slate-300">
                          সফটওয়্যার ইঞ্জিনিয়ার
                        </p>
                        <a
                          href={person.html_url}
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
      </div>
    </section>
    </QueryClientProvider>
  );
};
