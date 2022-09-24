import { Fence } from "../../components/Fence";

export const fence = {
  render: Fence,
  attributes: {
    language: {
      type: String,
      description:
        "The programming language of the code block. Place it after the backticks.",
    },
  },
};
