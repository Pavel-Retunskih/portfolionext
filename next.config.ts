import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/hello',
        permanent: true,
      },
      {
        source: '/about_me',
        destination: '/about_me/who_i_am',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
