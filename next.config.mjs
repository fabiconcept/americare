/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "americare.sirv.com",
                pathname: "/**",
                port: ""
            }
        ]
    }
};

export default nextConfig;
