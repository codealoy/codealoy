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

### Ensure required version of `nodejs` and `pnpm`. We use `pnpm` as the package manager for this project

Required versions:

```bash
node >= 20 (LTS)
pnpm >= 9
```

- Check nodejs version: `node --version`
- Check pnpm version: `pnpm --version`

If your system versions are not meet the required versions above, then you need to update the versions.

- To update nodejs, we can download the latest **LTS** version from the [official nodejs site](https://nodejs.org/en/) or use any type of node package manager like [nvm](https://github.com/nvm-sh/nvm), [fnm](https://github.com/Schniz/fnm) or [Volta JS](https://volta.sh/).
- To update pnpm version, we can use: `pnpm self-update`

_Note: if you don't already have `pnpm` installed, you can follow the [official documentation](https://pnpm.io/installation) for installation guide._

### Install dependencies

```bash
pnpm install
```

### Configure `.env` file

Copy `.env.example` to `.env` file, and fill up necessary values. You can just copy/paste manually or use the following terminal command.

```bash
cp .env.example .env
```

### Start the server

```bash
pnpm run dev
```

After the server started, you can visit the site at [http://localhost:3000](http://localhost:3000)

---

### Step 2: Implement your changes

Here are some useful scripts for when you are developing:

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `pnpm run dev`   | Starts the development server with HMR |
| `pnpm run build` | Build the projet                       |
| `pnpm run start` | Start the project built version        |
| `pnpm run lint`  | Lints the code                         |

Other scripts can be found in the `package.json` file.

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with prefixes like `feat, fix, chore, docs`, etc... You can use `git status` to double-check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

---

### Step 3: When you're done

Check that your code follows the project's style guidelines by running:

```bash
pnpm run lint
```

Please also make a manual, functional test of your changes. When all that's done, it's time to file a pull request to the upstream.

**NOTE**: All pull requests should target the `main` branch. Here is a guide on how to create a new [pull request on Github](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).

Fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

---

### Step 4: Update hosts file (only for custom domain; optional otherwise)

#### MacOS

- Run this on your terminal

  ```bash
  sudo nano /etc/hosts
  ```

- Add this line

  ```bash
  127.0.0.1 codealoy.local
  ```

- Save and Exit

---

### Step 5: Use custom domain (optional)

You can optionally use `https://codealoy.local` instead of `http://localhost:3000` as the domain name of the Codealoy server during development. As an extra benefit, this will automatically add an `SSL` certificate to the local domain, so you can use `HTTPS` with the domain. Here are the custom domain setup instructions:

- Install [Caddy Server](https://caddyserver.com/docs/install) on your machine

- Start Codealoy server: `pnpm run dev`

  > This will start the server at `http://localhost:3000`

- Start Caddy server: `caddy reverse-proxy --change-host-header --from codealoy.local --to http://localhost:3000`

  > This will start a reverse proxy at `codealoy.local` domain, which will forward requests to `localhost:3000`

- Done. Now you can visit the site from your browser using `https://codealoy.local`
