/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'gbimgrbuychcevvyqztt.supabase.co', // your Supabase project
      'source.unsplash.com',              // Unsplash dynamic image source
    ],
  },
};

module.exports = nextConfig;
