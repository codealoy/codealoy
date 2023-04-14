/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How the best thing about Switzerland?',
    answer:
      'I  know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best (and quickest) way to get help on a challenge is in our Slack community. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated  channel! If you haven't joined yet, you can get an invite to our Slack community here..",
  },
  {
    question: 'Can I use these projects in my portfolio?',
    answer:
      'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
  },
  {
    question: 'Do I get a code review when I post my solution?',
    answer:
      "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others.",
  },
  {
    question:
      'Can I use these challenges within my own free or commercial content/tutorials/projects?',
    answer:
      "Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions.",
  },
  {
    question: 'How often are new challenges added?',
    answer:
      'We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.',
  },
  // More questions...
];

export default function ChallengePage3() {
  return (
    <div className=" bg-white shadow-md border-t rounded-md dark:bg-gray-900 dark:border dark:border-slate-500">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold text-center leading-10 tracking-tight dark:text-white">
            CHALLENGE FAQS
          </h2>
          <dl className="mt-10 space-y-6 divide-y dark:divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left dark:text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
