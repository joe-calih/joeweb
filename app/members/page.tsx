import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { MembersHero } from "@/components/sections/members-hero"
import { MembersDirectory } from "@/components/sections/members-directory"
import { MembersStats } from "@/components/sections/members-stats"
import { MembersTestimonials } from "@/components/sections/members-testimonials"
import { MembersCommunity } from "@/components/sections/members-community"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Artist Members - Connect with the Community",
  description:
    "Discover and connect with talented artists from around the world. Join our vibrant community of musicians, producers, and creators.",
  keywords: ["artist community", "music network", "artist collaboration", "music members"],
  url: "https://artists.apple.com/members",
})

const membersSchema = {
  name: "Artist Members Community",
  description: "A community of artists using Apple Music for Artists platform",
  memberOf: {
    "@type": "Organization",
    name: "Apple Music for Artists",
  },
}

export default function MembersPage() {
  return (
    <>
      <StructuredData type="Organization" data={membersSchema} />

      <main>
        <Breadcrumbs />
        <MembersHero />
        <MembersDirectory />
        <MembersStats />
        <MembersTestimonials />
        <MembersCommunity />
      </main>
    </>
  )
}
