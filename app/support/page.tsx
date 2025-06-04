import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { SupportHero } from "@/components/sections/support-hero"
import { SupportCategories } from "@/components/sections/support-categories"
import { SupportFAQ } from "@/components/sections/support-faq"
import { SupportContact } from "@/components/sections/support-contact"
import { SupportResources } from "@/components/sections/support-resources"
import { SupportCommunity } from "@/components/sections/support-community"
import { SupportTickets } from "@/components/sections/support-tickets"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Support Center | Joecalih - 24/7 Help, Documentation & Customer Service",
  description:
    "Get instant help with our comprehensive support center. Access tutorials, documentation, FAQs, and 24/7 customer support for music samples, LUTs, presets, and creative resources. Expert assistance for creators.",
  keywords: [
    "customer support",
    "help center",
    "technical support",
    "documentation",
    "tutorials",
    "FAQ",
    "customer service",
    "user guides",
    "troubleshooting",
    "platform help",
    "creative support",
    "24/7 support",
  ],
  url: "https://joecalih.co.ke/support",
  type: "website",
})

const supportSchema = {
  "@type": "WebPage",
  name: "Support Center",
  description: "Comprehensive help and support center for Joecalih users",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download purchased content?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After purchase, you can download your content from your account dashboard or the download link sent to your email.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide multiple formats including WAV, AIFF for audio, and various video formats for LUTs and presets.",
        },
      },
    ],
  },
}

export default function SupportPage() {
  return (
    <>
      <StructuredData type="WebPage" data={supportSchema} />

      <main>
        <Breadcrumbs />
        <SupportHero />
        <SupportCategories />
        <SupportTickets />
        <SupportFAQ />
        <SupportCommunity />
        <SupportResources />
        <SupportContact />
      </main>
    </>
  )
}
