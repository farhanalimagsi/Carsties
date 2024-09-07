/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl:true
        }
    },
    // cdn.pixabay image must define
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'cdn.pixabay.com'
            }
        ]
    }
};

export default nextConfig;
