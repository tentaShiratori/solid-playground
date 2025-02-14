FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN pnpm config set store-dir /workspaces/pnpm
RUN npm i -g pnpm @antfu/ni

COPY pnpm-lock.yaml ./

# pre-loads required packages from pnpm-lock.yaml into the store,
# ready to be installed with `pnpm install`
RUN pnpm fetch