import { StructuredData } from "./structured-data"

interface MusicAlbumSchemaProps {
  name: string
  artist: string
  description: string
  image: string
  datePublished: string
  genre: string
  tracks: Array<{
    name: string
    duration: string
    url: string
  }>
  url: string
  streamingLinks?: {
    spotify?: string
    appleMusic?: string
    amazonMusic?: string
    youtubeMusic?: string
    youtube?: string
    soundcloud?: string
    deezer?: string
    tidal?: string
    pandora?: string
    anghami?: string
    shazam?: string
  }
}

interface MusicArtistSchemaProps {
  name: string
  description: string
  image: string
  genre: string[]
  url: string
  sameAs?: string[]
}

export function MusicAlbumSchema({
  name,
  artist,
  description,
  image,
  datePublished,
  genre,
  tracks,
  url,
  streamingLinks,
}: MusicAlbumSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name,
    description,
    image,
    datePublished,
    genre,
    url,
    byArtist: {
      "@type": "MusicGroup",
      name: artist,
    },
    track: tracks.map((track, index) => ({
      "@type": "MusicRecording",
      name: track.name,
      duration: track.duration,
      url: track.url,
      position: index + 1,
      byArtist: {
        "@type": "MusicGroup",
        name: artist,
      },
    })),
    numTracks: tracks.length,
    ...(streamingLinks && {
      sameAs: Object.values(streamingLinks).filter(Boolean),
    }),
  }

  return <StructuredData type="MusicAlbum" data={schema} />
}

export function MusicArtistSchema({ name, description, image, genre, url, sameAs }: MusicArtistSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name,
    description,
    image,
    genre,
    url,
    sameAs,
  }

  return <StructuredData type="MusicGroup" data={schema} />
}

export function MusicRecordingSchema({
  name,
  artist,
  album,
  duration,
  genre,
  datePublished,
  url,
  streamingLinks,
}: {
  name: string
  artist: string
  album: string
  duration: string
  genre: string
  datePublished: string
  url: string
  streamingLinks?: string[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name,
    duration,
    genre,
    datePublished,
    url,
    byArtist: {
      "@type": "MusicGroup",
      name: artist,
    },
    inAlbum: {
      "@type": "MusicAlbum",
      name: album,
    },
    ...(streamingLinks && {
      sameAs: streamingLinks,
    }),
  }

  return <StructuredData type="MusicRecording" data={schema} />
}
