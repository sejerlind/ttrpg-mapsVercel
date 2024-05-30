/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'aqsnrwyddavzrlfejsfp.supabase.co',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
