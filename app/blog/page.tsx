import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - Joe Calih | Digital Marketing & Creative Insights",
  description:
    "Discover the latest insights on digital marketing, SEO, content creation, and creative strategies. Expert tips and tutorials from Joe Calih.",
  keywords: ["blog", "digital marketing", "SEO", "content creation", "tutorials", "Joe Calih"],
  openGraph: {
    title: "Blog - Joe Calih | Digital Marketing & Creative Insights",
    description: "Discover the latest insights on digital marketing, SEO, content creation, and creative strategies.",
    type: "website",
    url: "https://joecalih.co.ke/blog",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
