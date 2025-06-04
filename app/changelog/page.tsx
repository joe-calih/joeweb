import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { ChangelogHero } from "@/components/sections/changelog-hero"
import { ChangelogUpdates } from "@/components/sections/changelog-updates"
import { ChangelogRoadmap } from "@/components/sections/changelog-roadmap"
import { ChangelogSubscribe } from "@/components/sections/changelog-subscribe"
import { ChangelogArchive } from "@/components/sections/changelog-archive"
import { ChangelogFeatures } from "@/components/sections/changelog-features"
import { ChangelogCommunity } from "@/components/sections/changelog-community"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Changelog - Latest Updates & Features | Joecalih Creative Platform",
  description:
    "Stay updated with the latest features, improvements, and bug fixes for Joecalih creative platform. See what's new in music samples, LUTs, presets, and upcoming features in our comprehensive changelog.",
  keywords: [
    "changelog",
    "updates",
    "new features",
    "improvements",
    "release notes",
    "platform updates",
    "music samples updates",
    "LUT updates",
    "preset updates",
    "bug fixes",
    "feature releases",
    "product roadmap",
  ],
  url: "https://joecalih.co.ke/changelog",
  type: "website",
})

const changelogSchema = {
  "@type": "WebPage",
  name: "Platform Changelog",
  description: "Latest updates and features for Joecalih creative platform",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Joecalih Creative Platform",
    applicationCategory: "CreativeWork",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
}

export default function ChangelogPage() {
  return (
    <>
      <StructuredData type="WebPage" data={changelogSchema} />

      <main>
        <Breadcrumbs />
        <ChangelogHero />
        <ChangelogUpdates />
        <ChangelogFeatures />
        <ChangelogRoadmap />
        <ChangelogCommunity />
        <ChangelogSubscribe />
        <ChangelogArchive />
      </main>
    </>
  )
}
