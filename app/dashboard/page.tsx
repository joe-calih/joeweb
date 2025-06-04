import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { DashboardHero } from "@/components/sections/dashboard-hero"
import { DashboardStats } from "@/components/sections/dashboard-stats"
import { DashboardCharts } from "@/components/sections/dashboard-charts"
import { DashboardRecentActivity } from "@/components/sections/dashboard-recent-activity"
import { DashboardQuickActions } from "@/components/sections/dashboard-quick-actions"
import { DashboardInsights } from "@/components/sections/dashboard-insights"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Artist Dashboard - Real-Time Music Analytics & Performance Tracking",
  description:
    "Monitor your music performance with comprehensive analytics dashboard. Track streaming data, revenue, audience insights, and growth metrics. Make data-driven decisions to grow your music career with detailed charts and real-time statistics.",
  keywords: [
    "music analytics dashboard",
    "artist performance tracking",
    "streaming data analytics",
    "music revenue tracking",
    "audience insights",
    "music career analytics",
    "real-time music stats",
    "artist dashboard",
    "music business intelligence",
    "streaming platform analytics",
    "music industry metrics",
    "artist growth tracking",
  ],
  url: "https://artists.apple.com/dashboard",
  type: "website",
})

const dashboardSchema = {
  "@type": "WebApplication",
  name: "Artist Analytics Dashboard",
  description: "Comprehensive analytics dashboard for music artists to track performance and growth",
  applicationCategory: "MusicApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Real-time streaming analytics",
    "Revenue tracking",
    "Audience demographics",
    "Performance charts",
    "Growth insights",
  ],
}

export default function DashboardPage() {
  return (
    <>
      <StructuredData type="WebApplication" data={dashboardSchema} />

      <main>
        <Breadcrumbs />
        <DashboardHero />
        <DashboardStats />
        <DashboardCharts />
        <DashboardRecentActivity />
        <DashboardQuickActions />
        <DashboardInsights />
      </main>
    </>
  )
}
