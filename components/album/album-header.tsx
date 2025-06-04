import Image from "next/image"

interface AlbumHeaderProps {
  data: {
    title: string
    artist: string
    cover: string
    year: number
    genre: string
  }
}

export function AlbumHeader({ data }: AlbumHeaderProps) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2 w-full max-w-[35%] mx-auto lg:mx-0">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image src={data.cover || "/placeholder.svg"} alt={data.title} fill className="object-cover" priority />
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg">
            By <span className="font-semibold">{data.artist}</span>
          </p>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">{data.year}</span>
            <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">{data.genre}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Keep default export for backward compatibility
export default AlbumHeader
