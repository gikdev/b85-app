// @ts-check

import { concurrently } from "concurrently"

concurrently([
  {
    command: "npm run dev",
    cwd: "apps/api",
    name: "API",
    prefixColor: "cyan",
  },
  {
    command: "npm run dev",
    cwd: "apps/web",
    name: "WEB",
    prefixColor: "green",
  },
])
