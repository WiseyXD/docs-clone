import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

loadEnv(); // Load .env before Prisma reads anything

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
