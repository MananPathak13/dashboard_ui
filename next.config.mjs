/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'], // Allow Cloudinary
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com', // Add other domains if needed
        },
      ],
    },
  };
  
  export default nextConfig;
  