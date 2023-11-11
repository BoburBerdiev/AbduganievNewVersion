/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}`],
    unoptimized:true
  },

}
module.exports = nextConfig

