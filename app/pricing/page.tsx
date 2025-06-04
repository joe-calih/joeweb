import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { PricingHero } from "@/components/sections/pricing-hero"
import { PricingPlans } from "@/components/sections/pricing-plans"
import { PricingResources } from "@/components/sections/pricing-resources"
import { PricingComparison } from "@/components/sections/pricing-comparison"
import { PricingTestimonials } from "@/components/sections/pricing-testimonials"
import { PricingFAQ } from "@/components/sections/pricing-faq"
import { PricingCTA } from "@/components/sections/pricing-cta"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Pricing Plans - Premium Creative Resources Membership",
  description:
    "Access thousands of music samples, Lightroom presets, LUTs, vocals, plugins, and tutorials. Flexible pricing plans for creators, professionals, and enterprises starting at $0/month.",
  keywords: [
    "creative resources pricing",
    "music samples subscription",
    "lightroom presets membership",
    "LUTs pricing",
    "creative tools subscription",
  ],
  url: "https://artists.apple.com/pricing",
})

const pricingSchema = {
  "@type": "Product",
  name: "Creative Resources Membership",
  description: "Premium creative resources subscription with music samples, presets, LUTs, and tutorials",
  offers: [
    {
      "@type": "Offer",
      name: "Free Plan",
      price: "0",
      priceCurrency: "USD",
      availability: "InStock",
      description: "Basic access to creative resources",
    },
    {
      "@type": "Offer",
      name: "Creator Plan",
      price: "19.99",
      priceCurrency: "USD",
      availability: "InStock",
      description: "Full access for content creators and hobbyists",
    },
    {
      "@type": "Offer",
      name: "Professional Plan",
      price: "49.99",
      priceCurrency: "USD",
      availability: "InStock",
      description: "Premium access for serious creators and studios",
    },
    {
      "@type": "Offer",
      name: "Enterprise Plan",
      price: "99.99",
      priceCurrency: "USD",
      availability: "InStock",
      description: "Unlimited access for agencies and large teams",
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <StructuredData type="Product" data={pricingSchema} />

      <main>
        <Breadcrumbs />
        <PricingHero />
        <PricingPlans />
        <PricingResources />
        <PricingComparison />
        <PricingTestimonials />
        <PricingFAQ />
        <PricingCTA />
      </main>
    </>
  )
}
