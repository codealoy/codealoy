import Link from 'next/link';

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Docs</a>
        </Link>
      </li>
      <li>
        <a
          href="https://tailwindui.com/?ref=top"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Components
        </a>
      </li>
      <li>
        <Link href="/blog">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/showcase">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">
            Showcase
            <span className="ml-2 rounded-full bg-sky-400/10 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600  dark:text-sky-400">
              New
            </span>
          </a>
        </Link>
      </li>
    </>
  );
}
