const isProd = process.env.NODE_ENV === "production";
const repo = "NoshApp";

const nextConfig = {
	output: "export",
	basePath: isProd ? `/${repo}` : "",
	assetPrefix: isProd ? `/${repo}/` : "",
	env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
	images: { unoptimized: true },
};
export default nextConfig;
