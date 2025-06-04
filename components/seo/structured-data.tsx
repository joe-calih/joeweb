import Script from "next/script"

interface StructuredDataProps {
  type: string
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export const organizationSchema = {
  name: "Joecalih",
  url: "https://joecalih.co.ke",
  logo: "https://joecalih.co.ke/logo.png",
  description: "Creative resources hub for music, visuals, and educational content",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-700-000-000",
    contactType: "customer service",
    email: "hello@joecalih.co.ke",
  },
  sameAs: ["https://twitter.com/joecalih", "https://instagram.com/joecalih", "https://youtube.com/joecalih"],
}

export const websiteSchema = {
  name: "Joecalih",
  url: "https://joecalih.co.ke",
  description: "Creative resources hub for music, visuals, and educational content",
  publisher: {
    "@type": "Organization",
    name: "Joecalih",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://joecalih.co.ke/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}
