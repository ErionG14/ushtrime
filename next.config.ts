import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    MONGODB_URI:"mongodb+srv://dev-api:23Ew9LubnV8QYUzu@myapplication.apjhfmg.mongodb.net",
    NEXTAUTH_SECRET:"6twQsXK9GNklzxlEK6f/9mnpcHF6nqLyTBE1ASgPAwU="
  },
};

export default nextConfig;
