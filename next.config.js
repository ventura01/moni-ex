/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "res.cloudinary.com", "cloudflare-ipfs.com"],
      },
      output: 'export',
      trailingSlash: true,
}

module.exports = nextConfig
