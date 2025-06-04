import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { DisclaimerHero } from "@/components/sections/disclaimer-hero"
import { DisclaimerTerms } from "@/components/sections/disclaimer-terms"
import { DisclaimerLiability } from "@/components/sections/disclaimer-liability"
import { DisclaimerIntellectual } from "@/components/sections/disclaimer-intellectual"
import { DisclaimerContact } from "@/components/sections/disclaimer-contact"
import { DisclaimerUsage } from "@/components/sections/disclaimer-usage"
import { DisclaimerUpdates } from "@/components/sections/disclaimer-updates"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Disclaimer & Terms of Service | Joecalih Creative Platform Legal Information",
  description:
    "Read our comprehensive disclaimer, terms of service, and legal information for Joecalih creative platform. Understand your rights, responsibilities, and usage terms for music samples, LUTs, and presets.",
  keywords: [
    "disclaimer",
    "terms of service",
    "legal information",
    "terms and conditions",
    "user agreement",
    "liability disclaimer",
    "intellectual property",
    "usage rights",
    "creative commons",
    "licensing terms",
    "platform rules",
    "legal compliance",
  ],
  url: "https://joecalih.co.ke/disclaimer",
  type: "website",
})

const disclaimerSchema = {
  "@type": "WebPage",
  name: "Disclaimer and Terms of Service",
  description: "Legal disclaimer and terms of service for Joecalih creative platform",
  dateModified: "2025-01-03",
  publisher: {
    "@type": "Organization",
    name: "Joecalih",
    url: "https://joecalih.co.ke",
  },
  mainEntity: {
    "@type": "TermsOfService",
    name: "Joecalih Terms of Service",
    dateModified: "2025-01-03",
  },
}

export default function DisclaimerPage() {
  return (
    <>
      <StructuredData type="WebPage" data={disclaimerSchema} />

      <main>
        <Breadcrumbs />
        <DisclaimerHero />
        <DisclaimerTerms />
        <DisclaimerUsage />
        <DisclaimerLiability />
        <DisclaimerIntellectual />
        <DisclaimerUpdates />
        <DisclaimerContact />
      </main>
    </>
  )
}
