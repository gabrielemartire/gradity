import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Globe, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function ArtistPage() {
  // Mock artist data
  const artist = {
    id: "marco-rossi",
    name: "Marco Rossi",
    bio: "Artista digitale specializzato in pop art contemporanea. Le mie opere esplorano il rapporto tra tecnologia e umanità attraverso colori vivaci e composizioni dinamiche.",
    location: "Milano, Italia",
    joinDate: "Gennaio 2024",
    image: "/placeholder.svg?height=300&width=300",
    coverImage: "/placeholder.svg?height=400&width=800",
    stats: {
      totalWorks: 12,
      sold: 8,
      collections: 4,
      followers: 1250,
    },
    social: {
      instagram: "https://instagram.com/marcorossi_art",
      twitter: "https://twitter.com/marcorossi_art",
      website: "https://marcorossi.art",
      email: "marco@marcorossi.art",
    },
    artworks: [
      {
        id: "AUT25-001",
        title: "Neon Dreams",
        collection: "Autunno 2025",
        price: 299,
        status: "sold",
        image: "/placeholder.svg?height=400&width=300",
      },
      {
        id: "EST25-003",
        title: "Digital Sunset",
        collection: "Estate 2025",
        price: 350,
        status: "available",
        image: "/placeholder.svg?height=400&width=300",
      },
      {
        id: "CYB-007",
        title: "Neural Network",
        collection: "Cyberpunk Special",
        price: 420,
        status: "sold",
        image: "/placeholder.svg?height=400&width=300",
      },
      {
        id: "PRI25-012",
        title: "Spring Awakening",
        collection: "Primavera 2025",
        price: 280,
        status: "sold",
        image: "/placeholder.svg?height=400&width=300",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Cover Image */}
      <div className="relative h-64 md:h-96 overflow-hidden border-b-4 border-black">
        <Image src={artist.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Artist Header */}
          <div className="relative -mt-32 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <div className="relative">
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  width={200}
                  height={200}
                  className="w-48 h-48 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
                />
              </div>
              <div className="flex-1 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">{artist.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{artist.location}</span>
                      </div>
                      <div className="font-medium">Su gradity dal {artist.joinDate}</div>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed max-w-2xl">{artist.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {artist.social.instagram && (
                      <Link href={artist.social.instagram} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-pink-50"
                        >
                          <Instagram className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.social.twitter && (
                      <Link href={artist.social.twitter} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-blue-50"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.social.website && (
                      <Link href={artist.social.website} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-gray-50"
                        >
                          <Globe className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.social.email && (
                      <Link href={`mailto:${artist.social.email}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-gray-50"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-purple-600">{artist.stats.totalWorks}</div>
                <div className="font-bold uppercase text-sm">Opere Totali</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-green-600">{artist.stats.sold}</div>
                <div className="font-bold uppercase text-sm">Vendute</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-black">{artist.stats.collections}</div>
                <div className="font-bold uppercase text-sm">Collezioni</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-pink-600">{artist.stats.followers}</div>
                <div className="font-bold uppercase text-sm">Followers</div>
              </CardContent>
            </Card>
          </div>

          {/* Artworks */}
          <div>
            <h2 className="text-4xl font-black mb-12 uppercase">Opere Artista</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artist.artworks.map((artwork) => (
                <Card
                  key={artwork.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                >
                  <div className="relative">
                    <Link href={`/artwork/${artwork.id}`}>
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        width={300}
                        height={420}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </Link>
                    <div className="absolute top-4 right-4">
                      {artwork.status === "available" && (
                        <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-black font-black text-lg">●</span>
                        </div>
                      )}
                      {artwork.status === "sold" && (
                        <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-black font-black text-lg">○</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-700 font-mono text-xs">
                        {artwork.id}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-xl mb-2">{artwork.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{artwork.collection}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">€{artwork.price}</span>
                      {artwork.status === "available" && (
                        <Link href={`/purchase/${artwork.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                            Acquista
                          </Button>
                        </Link>
                      )}
                      {artwork.status === "sold" && (
                        <Button size="sm" variant="outline" disabled>
                          Venduto
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
