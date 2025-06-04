import type { Metadata } from "next"

interface MetadataProps {
  title: string
  description: string
  keywords?: string[]
  url?: string
  image?: string
  type?: "website" | "article" | "product"
  author?: string
  publishedTime?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  url = "https://joecalih.co.ke",
  image = "https://joecalih.co.ke/og-image.jpg",
  type = "website",
  author,
  publishedTime,
}: MetadataProps): Metadata {
  const siteName = "Joecalih"
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: author ? [{ name: author }] : [{ name: "Joecalih Team" }],
    creator: "Joecalih",
    publisher: "Joecalih",
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@joecalih",
      site: "@joecalih",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
      yandex: "YOUR_YANDEX_VERIFICATION_CODE",
      other: {
        "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
        "p:domain_verify": "YOUR_PINTEREST_VERIFICATION_CODE",
      },
    },
    other: {
      "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "yandex-verification": "YOUR_YANDEX_VERIFICATION_CODE",
      "p:domain_verify": "YOUR_PINTEREST_VERIFICATION_CODE",
    },
  }
}
