import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Pricing",
  description: "SEO description pricing",
  keywords: ["pricing", "page", "typescript", "nextjs"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">Pricing Page</span>
    </>
  );
}
