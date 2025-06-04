import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { PrivacyHero } from "@/components/sections/privacy-hero"
import { PrivacyCollection } from "@/components/sections/privacy-collection"
import { PrivacyUsage } from "@/components/sections/privacy-usage"
import { PrivacyRights } from "@/components/sections/privacy-rights"
import { PrivacyContact } from "@/components/sections/privacy-contact"
import { PrivacySecurity } from "@/components/sections/privacy-security"
import { PrivacyCookies } from "@/components/sections/privacy-cookies"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy | Joecalih - How We Protect Your Personal Data & Information",
  description:
    "Learn how Joecalih collects, uses, and protects your personal information. Read our comprehensive privacy policy covering data protection, GDPR compliance, cookies, and your privacy rights on our creative platform.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal information",
    "data security",
    "privacy rights",
    "cookie policy",
    "data collection",
    "user privacy",
    "information security",
    "data processing",
    "privacy controls",
  ],
  url: "https://joecalih.co.ke/privacy",
  type: "website",
})

const privacySchema = {
  "@type": "WebPage",
  name: "Privacy Policy",
  description: "Privacy policy for Joecalih creative platform",
  dateModified: "2025-01-03",
  publisher: {
    "@type": "Organization",
    name: "Joecalih",
    url: "https://joecalih.co.ke",
  },
  mainEntity: {
    "@type": "PrivacyPolicy",
    name: "Joecalih Privacy Policy",
    dateModified: "2025-01-03",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <StructuredData type="WebPage" data={privacySchema} />

      <main>
        <Breadcrumbs />
        <PrivacyHero />
        <PrivacyCollection />
        <PrivacyUsage />
        <PrivacySecurity />
        <PrivacyCookies />
        <PrivacyRights />
        <PrivacyContact />
      </main>
    </>
  )
}
