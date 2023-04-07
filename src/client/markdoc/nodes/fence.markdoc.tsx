import { Fence } from '~/client/components/Fence';

export const fence = {
  render: Fence,
  attributes: {
    content: { type: String },
    language: {
      type: String,
      description:
        'The programming language of the code block. Place it after the backticks.',
    },
  },
};
