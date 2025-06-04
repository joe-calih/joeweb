import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joecalih - Creative Resources Hub",
  description: "Professional creative resources, music samples, presets, and tutorials",
  generator: "Next.js",
  applicationName: "Joecalih",
  referrer: "origin-when-cross-origin",
  keywords: ["music samples", "lightroom presets", "LUTs", "creative resources", "tutorials"],
  authors: [{ name: "Joecalih" }],
  creator: "Joecalih",
  publisher: "Joecalih",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joecalih.co.ke"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Joecalih - Creative Resources Hub",
    description: "Professional creative resources, music samples, presets, and tutorials",
    url: "https://joecalih.co.ke",
    siteName: "Joecalih",
    images: [
      {
        url: "https://joecalih.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Joecalih - Creative Resources Hub",
    description: "Professional creative resources, music samples, presets, and tutorials",
    creator: "@joecalih",
    images: ["https://joecalih.co.ke/twitter-image.jpg"],
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE_HERE",
    yandex: "YANDEX_VERIFICATION_CODE_HERE",
    yahoo: "YAHOO_VERIFICATION_CODE_HERE",
    other: {
      "msvalidate.01": "BING_VERIFICATION_CODE_HERE",
      "p:domain_verify": "PINTEREST_VERIFICATION_CODE_HERE",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional verification meta tags */}
        <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE_HERE" />
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE_HERE" />
        <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE_HERE" />
        <meta name="p:domain_verify" content="PINTEREST_VERIFICATION_CODE_HERE" />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#121212" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Joecalih",
              url: "https://joecalih.co.ke",
              logo: "https://joecalih.co.ke/logo.png",
              description: "Professional creative resources, music samples, presets, and tutorials",
              sameAs: [
                "https://twitter.com/joecalih",
                "https://instagram.com/joecalih",
                "https://youtube.com/joecalih",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
