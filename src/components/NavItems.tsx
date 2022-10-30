import Link from 'next/link';

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/courses">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Courses</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Login</a>
        </Link>
      </li>
    </>
  );
}
