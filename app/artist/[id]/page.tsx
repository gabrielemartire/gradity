"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Globe, Mail, MapPin, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import artists_db from "@/db/artists"
import artworks_db from "@/db/artworks"
import Header from "@/app/header"
import Footer from "@/app/footer"
import Demo from "@/app/demo"

// Define proper types for the component props
interface PageProps {
  params: Promise<{ id: string }>
}

export default function ArtistPage({ params }: PageProps) {
  const [artistID, setArtistID] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  // Resolve the params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params
      const id = parseInt(resolvedParams.id)
      console.log("URL ID:", resolvedParams.id, "Parsed ID:", id)
      setArtistID(id)
      setIsLoading(false)
    }
    resolveParams()
  }, [params])

  // Show loading state while resolving params
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento artista...</p>
        </div>
      </div>
    )
  }

  // Find artist by ID
  const artist = artists_db.find(a => {
    console.log("Comparing:", a.id, "with", artistID, "Match:", a.id === artistID)
    return a.id === artistID
  })

  console.log("Artist found:", artist)
  console.log("Artists DB:", artists_db)

  // Handle case when artist is not found
  if (!artist) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Artista Non Trovato</h1>
          <p className="text-gray-600 mb-8">Questo artista con ID {artistID} non esiste.</p>
          <p className="text-sm text-gray-500 mb-8">
            IDs disponibili: {artists_db.map(a => a.id).join(", ")}
          </p>
          <Link href="/artists">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              Torna agli Artisti
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Get artist's artworks
  const artistArtworks = artworks_db.filter(artwork => 
    artwork.artist === artist.id
  )

  // Calculate stats from real data
  const stats = {
    totalWorks: artistArtworks.length,
    sold: artistArtworks.filter(artwork => artwork.status === 'sold').length,
    collections: [...new Set(artistArtworks.map(artwork => artwork.collection))].length
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Demo />

      {/* Cover Image */}
      <div className="relative h-64 md:h-96 overflow-hidden border-b-4 border-black">
        <Image src={artist.cover || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Artist Header */}
          <div className="relative -mt-32 mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <div className="relative">
                <Image
                  src={artist.avatar || "/placeholder.svg"}
                  alt={artist.name}
                  width={200}
                  height={200}
                  className="w-48 h-48 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">{artist.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{artist.place}</span>
                      </div>
                      <div className="font-medium">Su gradity dal {artist.date}</div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <Palette className="w-4 h-4" />
                      <span className="font-medium">{artist.materials}</span>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed max-w-2xl">{artist.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {artist.instagram && artist.instagram !== "#" && (
                      <Link href={artist.instagram} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-pink-50"
                        >
                          <Instagram className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.twitter && artist.twitter !== "#" && (
                      <Link href={artist.twitter} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-blue-50"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.website && artist.website !== "#" && (
                      <Link href={artist.website} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black bg-transparent hover:bg-gray-50"
                        >
                          <Globe className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    {artist.email && artist.email !== "#" && (
                      <Link href={`mailto:${artist.email}`}>
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
                <div className="text-3xl font-black mb-2 text-purple-600">{stats.totalWorks}</div>
                <div className="font-bold uppercase text-sm">Opere Totali</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-green-600">{stats.sold}</div>
                <div className="font-bold uppercase text-sm">Vendute</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-black">{stats.collections}</div>
                <div className="font-bold uppercase text-sm">Collezioni</div>
              </CardContent>
            </Card>
            <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-black mb-2 text-pink-600">∞</div>
                <div className="font-bold uppercase text-sm">Talento</div>
              </CardContent>
            </Card>
          </div>

          {/* Artworks */}
          <div>
            <h2 className="text-4xl font-black mb-12 uppercase">Opere Artista</h2>
            {artistArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {artistArtworks.map((artwork) => (
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
                        {artwork.status === "auction" && (
                          <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-black font-black text-lg">⚡</span>
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
                        {artwork.status === "auction" && (
                          <Link href={`/auction/${artwork.id}`}>
                            <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-orange-600">
                              Asta
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-xl">Nessuna opera disponibile per questo artista.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}