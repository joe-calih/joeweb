import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

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
    google: "LSRpF_oK5HgGFFqiwtIxtl_EZV-0VbcvCkvIrncY-hM",
    yandex: "e8c5015c48a5adb4",
    yahoo: "YAHOO_VERIFICATION_CODE_HERE",
    other: {
      "msvalidate.01": "66D54DB1A92E531DE760D7B860BD9849",
      "p:domain_verify": "7aea570bfdd6e651a594a46fff06247e",
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
        <meta name="google-site-verification" content="LSRpF_oK5HgGFFqiwtIxtl_EZV-0VbcvCkvIrncY-hM" />
        <meta name="msvalidate.01" content="66D54DB1A92E531DE760D7B860BD9849" />
        <meta name="yandex-verification" content="e8c5015c48a5adb4" />
        <meta name="p:domain_verify" content="7aea570bfdd6e651a594a46fff06247e" />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#121212" />
        <meta name="color-scheme" content="dark light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />

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
        {/* Google AdSense Script - Using Next.js Script component for better performance */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9986560445421982"
          crossOrigin="anonymous"
        />

        {/* Auto Ads Configuration */}
        <Script
          id="adsense-auto-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-9986560445421982",
                enable_page_level_ads: true
              });
            `,
          }}
        />

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
