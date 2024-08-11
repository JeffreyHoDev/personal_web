/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: "/personal_web" 
};

module.exports = nextConfig;
