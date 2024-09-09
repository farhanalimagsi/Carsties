/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable logging of fetches with full URLs (for debugging purposes)
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    // Configure image domains to allow loading images from specific remote patterns
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pixabay.com', // Allows images from pixabay.com
        },
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com', // Allows images from cdn.pixabay.com
        },
      ],
    },
  };
  
  export default nextConfig;