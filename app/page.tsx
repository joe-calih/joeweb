import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData, organizationSchema, websiteSchema } from "@/components/seo/structured-data"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeSamplePacks } from "@/components/sections/home-sample-packs"
import { HomeLUTs } from "@/components/sections/home-luts"
import { HomeBlog } from "@/components/sections/home-blog"
import { HomeAlbums } from "@/components/sections/home-albums"
import { HomeLightroomPresets } from "@/components/sections/home-lightroom-presets"
import { LandingTestimonials } from "@/components/sections/landing-testimonials"
import { LandingFAQ } from "@/components/sections/landing-faq"
import { HomepageCTA } from "@/components/ui/homepage-cta"

export const metadata: Metadata = generateMetadata({
  title: "Joecalih - Creative Resources Hub",
  description:
    "Discover music, sample packs, vocals, presets, LUTs, and graphic resources. Your one-stop destination for creative content and inspiration.",
  keywords: ["music", "sample packs", "vocals", "presets", "LUTs", "graphic resources", "creative content", "blog"],
  url: "https://joecalih.co.ke",
})

const updatedOrganizationSchema = {
  ...organizationSchema,
  name: "Joecalih",
  url: "https://joecalih.co.ke",
  description: "Creative resources hub for music, visuals, and educational content",
}

const updatedWebsiteSchema = {
  ...websiteSchema,
  name: "Joecalih",
  url: "https://joecalih.co.ke",
  description: "Creative resources hub for music, visuals, and educational content",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main>
        <StructuredData type="Organization" data={updatedOrganizationSchema} />
        <StructuredData type="WebSite" data={updatedWebsiteSchema} />

        <HomeHero />
        <HomeSamplePacks />
        <HomeLUTs />
        <HomeBlog />
        <HomeAlbums />
        <HomeLightroomPresets />
        <LandingTestimonials />
        <LandingFAQ />
        <HomepageCTA />
      </main>
    </div>
  )
}
