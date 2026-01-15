/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next to produce a static export into `out/`
  output: 'export',
  
  // Optional but usually needed for static export if you use <Image>
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

  