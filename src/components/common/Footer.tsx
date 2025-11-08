import { footerNavigationData } from '@/config/data';

import { Logo } from '@/components/common/Logo';
import { CircleBlur } from '@/components/patterns/CircleBlur';

export default function Footer() {
  return (
    <div className="shadow-primary/10 shadow-inner">
      <footer className="relative mx-auto w-full max-w-7xl space-y-10 overflow-hidden py-16 lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <Logo variant="icon" className="h-16" />
            </div>
            <nav
              className="mt-8 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {footerNavigationData.links.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a
                    title={item.name}
                    href={item.href}
                    target={item.target ? item.target : '_self'}
                    className="hover:text-primary text-base text-slate-500 dark:text-white"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNavigationData.social.map((item) => (
                <a
                  key={item.name}
                  title={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary cursor-pointer text-slate-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-slate-400">
              কপিরাইট © ২০২২-{new Date().getFullYear()} কোডালয় - সর্বস্বত্ব
              সংরক্ষিত
              <br />
              পরিচালনায়{' '}
              <a
                href="/#meet-team"
                className="text-primary font-bold hover:underline hover:underline-offset-4"
              >
                কোডালয় টিম
              </a>
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -z-10 flex -translate-x-1/2 translate-y-2/3">
          <CircleBlur className="border border-red-500" />
        </div>
      </footer>
    </div>
  );
}
