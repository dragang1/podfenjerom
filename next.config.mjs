/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dozvoli pristup sa telefona / LAN-a u developmentu
  allowedDevOrigins: [
    "192.168.100.27",
    "localhost",
    "127.0.0.1",
    "*.local",
  ],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
