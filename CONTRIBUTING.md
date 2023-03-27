# Contribution Guidelines: How to Contribute to Codealoy Project

When contributing to `Codealoy`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/codealoy/codealoy/issues) for known issues or fixes.

---

## Step 1: Setup Local Dev Environment

## Prerequisites

To save time and resources by not implementing changes that have already been declined, or are generally not needed, start by [opening an issue](https://github.com/codealoy/codealoy/issues/new) describing the problem you would like to solve.

## Setup your environment

### Clone the project

```bash
git clone https://github.com/codealoy/codealoy
```

### Go to the project directory

```bash
cd codealoy
```

### Ensure required version of `nodejs` and `npm`

Required versions:

```
node >= 18 (LTS)
npm >= 9
```

- Check nodejs version: `node --version`
- Check npm version: `npm --version`

If your system versions are not meet the required versions above, then you need to update the versions.

- To update nodejs, we can download the latest **LTS** version from the [official nodejs site](https://nodejs.org/en/) or use any type of node package manager like [Volta JS](https://volta.sh/) (preferred), [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm).
- To update npm version, we can use: `npm i -g npm`

### Install dependencies

```bash
npm install
```

### Configure `.env` file

Copy `.env.example` to `.env` file, and fill up necessary values. You can just copy/paste manually or use the following terminal command.

```bash
cp .env.sample .env
```

### Start the server

```bash
npm run dev
```

After the server started, you can visit the site at [http://localhost:3000](http://localhost:3000)

---

### Step 2: Implement your changes

This project is built on top of the _"T3 Stack"_. To learn more about the _"T3 Stack"_, you can visit the official GitHub repo](https://github.com/t3-oss/create-t3-app).

Here are some useful scripts for when you are developing:

| Command               | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| `npm run dev`         | Starts the development server with HMR                                     |
| `npm run build`       | Build the projet                                                           |
| `npm run start`       | Start the project built version                                            |
| `npm run lint`        | Lints the code                                                             |
| `npm run postinstall` | Generate prisma client codes. Automatically runs after every `npm install` |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with prefixes like `feat, fix, chore, docs`, etc... You can use `git status` to double-check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

---

### Step 3: When you're done

Check that your code follows the project's style guidelines by running:

```bash
npm run lint
```

Please also make a manual, functional test of your changes. When all that's done, it's time to file a pull request to the upstream.

**NOTE**: All pull requests should target the `main` branch. Here is a guide on how to create a new [pull request on Github](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).

Fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

---

### Step 4: Use custom domain (optional)

You can optionally use `https://codealoy.localhost` instead of `http://localhost:3000` as the domain name of the Codealoy server during development. As an extra benefit, this will automatically add an `SSL` certificate to the local domain, so you can use `HTTPS` with the domain. Here are the custom domain setup instructions:

- Install [Caddy Server](https://caddyserver.com/docs/install) on your machine

- Start Codealoy server: `npm run dev`

  > This will start the server at `http://localhost:3000`

- Start Caddy server: `caddy reverse-proxy --change-host-header --from codealoy.localhost --to http://localhost:3000`

  > This will start a reverse proxy at `codealoy.localhost` domain, which will forward requests to `localhost:3000`

- Done. Now you can visit the site from your browser using `https://codealoy.localhost`
