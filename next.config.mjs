/** @type {import('next').NextConfig} */
const nextConfig = {
  // OneDrive can expose .next as a reparse point, which prevents Next's dev
  // server from clearing stale output. Set NEXT_DIST_DIR to a local path when
  // developing from a synced folder.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
