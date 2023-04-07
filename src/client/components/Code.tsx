export function Code({ content }) {
  return (
    <code className="rounded bg-gray-100 px-1.5 py-1 text-sm font-semibold text-gray-700 shadow-sm dark:bg-[#011627] dark:text-slate-300 dark:ring-1 dark:ring-slate-300/10">
      {content}
    </code>
  );
}
