import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutStory } from "@/components/sections/about-story"
import { AboutMission } from "@/components/sections/about-mission"
import { AboutTeam } from "@/components/sections/about-team"
import { AboutValues } from "@/components/sections/about-values"
import { AboutAchievements } from "@/components/sections/about-achievements"
import { AboutCTA } from "@/components/sections/about-cta"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "About Joecalih - Creative Resources & Digital Content Platform",
  description:
    "Learn about Joecalih's mission to empower creators with professional music samples, LUTs, Lightroom presets, and creative resources. Founded by passionate creators for the global creative community.",
  keywords: [
    "about joecalih",
    "creative platform",
    "music samples company",
    "digital content creators",
    "creative resources platform",
    "sample pack creators",
    "LUT creators",
    "lightroom preset makers",
    "creative community",
    "digital content platform",
    "music production company",
    "creative tools provider",
  ],
  url: "https://joecalih.co.ke/about",
  type: "website",
})

const aboutSchema = {
  "@type": "Organization",
  name: "Joecalih",
  description: "Professional creative resources platform for music producers, photographers, and content creators",
  url: "https://joecalih.co.ke",
  logo: "https://joecalih.co.ke/logo.png",
  foundingDate: "2020",
  founders: [
    {
      "@type": "Person",
      name: "Joe Calih",
      jobTitle: "Founder & Creative Director",
    },
  ],
  sameAs: ["https://twitter.com/joecalih", "https://instagram.com/joecalih", "https://youtube.com/joecalih"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-700-000-000",
    contactType: "customer service",
    email: "hello@joecalih.co.ke",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData type="Organization" data={aboutSchema} />

      <main>
        <Breadcrumbs />
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutValues />
        <AboutTeam />
        <AboutAchievements />
        <AboutCTA />
      </main>
    </>
  )
}
