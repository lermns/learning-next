import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO About",
  description: "SEO description about",
  keywords: ["about", "page", "typescript", "nextjs"],
};

export default function aboutPage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  );
}
