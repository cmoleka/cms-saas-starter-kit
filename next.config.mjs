/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.clerk.com", "images.unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/dashboard/:userId/settings",
        destination: "/dashboard/:userId/settings/profile",
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

// module.exports = nextConfig
export default nextConfig
