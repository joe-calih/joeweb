import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesOfferings } from "@/components/sections/services-offerings"
import { ServicesProcess } from "@/components/sections/services-process"
import { ServicesTestimonials } from "@/components/sections/services-testimonials"
import { ServicesCTA } from "@/components/sections/services-cta"
import { ServicesPortfolio } from "@/components/sections/services-portfolio"
import { ServicesPricing } from "@/components/sections/services-pricing"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Professional Services | Joecalih - Music Production, Mastering & Creative Services",
  description:
    "Professional music production, audio mastering, video editing, and creative services. Expert support for independent artists, content creators, and businesses. Custom sample packs, mixing, and post-production services.",
  keywords: [
    "music production services",
    "audio mastering",
    "mixing services",
    "custom sample packs",
    "video editing services",
    "post-production",
    "creative services",
    "professional audio",
    "music marketing",
    "sound design",
    "audio engineering",
    "content creation services",
  ],
  url: "https://joecalih.co.ke/services",
  type: "website",
})

const servicesSchema = {
  "@type": "Service",
  name: "Professional Creative Services",
  description: "Comprehensive creative services for music production, video editing, and content creation",
  provider: {
    "@type": "Organization",
    name: "Joecalih",
    url: "https://joecalih.co.ke",
  },
  serviceType: "Creative Services",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Services Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Music Production",
          description: "Professional music production and arrangement services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audio Mastering",
          description: "Professional audio mastering for releases",
        },
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData type="Service" data={servicesSchema} />

      <main>
        <Breadcrumbs />
        <ServicesHero />
        <ServicesOfferings />
        <ServicesPortfolio />
        <ServicesProcess />
        <ServicesPricing />
        <ServicesTestimonials />
        <ServicesCTA />
      </main>
    </>
  )
}
