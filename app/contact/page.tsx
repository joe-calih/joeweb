import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { ContactFAQ } from "@/components/sections/contact-faq"
import { ContactMap } from "@/components/sections/contact-map"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Contact Us - Get in Touch",
  description:
    "Have questions? Need support? Contact our team for help with your music career, technical issues, or partnership opportunities.",
  keywords: ["contact", "support", "help", "customer service", "music support"],
  url: "https://artists.apple.com/contact",
})

const contactSchema = {
  "@type": "ContactPage",
  name: "Contact Apple Music for Artists",
  description: "Contact page for Apple Music for Artists platform",
  mainEntity: {
    "@type": "Organization",
    name: "Apple Music for Artists",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-APL-MUSIC",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish", "French"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        email: "support@artists.apple.com",
        contactType: "customer service",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <StructuredData type="ContactPage" data={contactSchema} />

      <main>
        <Breadcrumbs />
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactFAQ />
        <ContactMap />
      </main>
    </>
  )
}
