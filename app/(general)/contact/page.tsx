import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Contact",
  description: "SEO description contact",
  keywords: ["contact", "page", "typescript", "nextjs"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact Page</span>
    </>
  );
}
