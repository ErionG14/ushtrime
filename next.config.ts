import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    MONGODB_URI:"mongodb+srv://dev-api:23Ew9LubnV8QYUzu@myapplication.apjhfmg.mongodb.net",
  },
};

export default nextConfig;
