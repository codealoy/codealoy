# Contribution Guidelines

When contributing to `codealoy`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/codealoy/codealoy/issues) for known issues or fixes.

## How to Contribute

### Prerequisites

In order to not waste your time implementing changes that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/codealoy/codealoy/issues/new) describing the problem you would like to solve.

### Setup your environment

Clone the project

```bash
git clone https://github.com/codealoy/codealoy
```

Go to the project directory

```bash
cd codealoy
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

### Implement your changes

This project is built on top of the _"T3 Stack"_. To learn more about the _"T3 Stack"_, you can visit the official [github repo](https://github.com/t3-oss/create-t3-app).

Here are some useful scripts for when you are developing:

| Command               | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| `npm run dev`         | Starts the development server with HMR                                     |
| `npm run build`       | Build the projet                                                           |
| `npm run start`       | Start the project built version                                            |
| `npm run lint`        | Lints the code                                                             |
| `npm run postinstall` | Generate prisma client codes. Automatically runs after every `npm install` |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

Check that your code follows the project's style guidelines by running:

```bash
npm run lint
```

Please also make a manual, functional test of your changes. When all that's done, it's time to file a pull request to upstream.

**NOTE**: All pull requests should target the `main` branch. Here is a guide on how to create new [pull request on github](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).

Fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.
