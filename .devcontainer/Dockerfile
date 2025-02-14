FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN npm i -g pnpm @antfu/ni
RUN mkdir -p /workspaces/pnpm
RUN chmod 777 /workspaces/pnpm

USER node
RUN pnpm config set store-dir /workspaces/pnpm