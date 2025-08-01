"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Instagram, Twitter, Globe, Mail, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import artists_db from "@/db/artists"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLocation, setFilterLocation] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Transform the database structure to match component expectations
  const artists = artists_db.map(artist => ({
    id: artist.id,
    name: artist.name,
    image: artist.avatar,
    location: artist.place,
    bio: artist.bio,
    joinDate: artist.date,
    materials: artist.materials,
    status: artist.status,
    social: {
      instagram: artist.instagram !== "#" ? artist.instagram : null,
      website: artist.website !== "#" ? artist.website : null,
      email: artist.email !== "#" ? artist.email : null,
      twitter: artist.twitter !== "#" ? artist.twitter : null
    },
    stats: {
      // Generate consistent stats based on artist ID for reproducibility
      totalWorks: 20 + (artist.id * 7) % 60,
      sold: 5 + (artist.id * 3) % 40,
      collections: 2 + (artist.id * 2) % 12,
      followers: 500 + (artist.id * 150) % 4000
    }
  }))

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.materials.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLocation = filterLocation === "all" || artist.location.includes(filterLocation)

    return matchesSearch && matchesLocation
  })

  const sortedArtists = [...filteredArtists].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "works":
        return b.stats.totalWorks - a.stats.totalWorks
      case "sold":
        return b.stats.sold - a.stats.sold
      case "followers":
        return b.stats.followers - a.stats.followers
      case "joinDate":
        return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime()
      default:
        return 0
    }
  })

  // Get unique locations for filter dropdown
  const uniqueLocations = [...new Set(artists.map(artist => artist.location))]

  return (
    <div className="min-h-screen bg-white">
        <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            TUTTI GLI
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ARTISTI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Scopri tutti gli artisti della community <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span> e le loro opere esclusive
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Cerca per nome, città o materiali..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-2 border-black"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full lg:w-auto">
                <Select value={filterLocation} onValueChange={setFilterLocation}>
                  <SelectTrigger className="w-full lg:w-40 border-2 border-black">
                    <SelectValue placeholder="Città" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte le Città</SelectItem>
                    {uniqueLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full lg:w-40 border-2 border-black">
                    <SelectValue placeholder="Ordina per" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nome</SelectItem>
                    <SelectItem value="works">Opere Totali</SelectItem>
                    <SelectItem value="sold">Opere Vendute</SelectItem>
                    <SelectItem value="followers">Followers</SelectItem>
                    <SelectItem value="joinDate">Data Iscrizione</SelectItem>
                  </SelectContent>
                </Select>

              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">
            Mostrando {sortedArtists.length} di {artists.length} artisti
          </p>
        </div>

        {/* Artists Grid View */}
        {(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArtists.map((artist) => (
              <Card
                key={artist.id}
                className="group hover:shadow-2xl transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className="relative">
                  <Link href={`/artist/${artist.id}`}>
                    <Image
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <div className="absolute top-4 right-4">
                    <Badge className={artist.status === 'active' ? "bg-green-100 text-green-800 font-bold" : "bg-gray-100 text-gray-800 font-bold"}>
                      {artist.status === 'active' ? 'ATTIVO' : 'INATTIVO'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Link href={`/artist/${artist.id}`}>
                    <h3 className="text-2xl font-black mb-2 uppercase hover:text-purple-600 transition-colors cursor-pointer">
                      {artist.name}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium">{artist.location}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 text-sm leading-relaxed">{artist.bio}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Materiali:</strong> {artist.materials}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {artist.social.instagram && (
                        <Link href={artist.social.instagram} target="_blank">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Instagram className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      )}
                      {artist.social.twitter && (
                        <Link href={artist.social.twitter} target="_blank">
                          <div className="w-6 h-6 bg-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Twitter className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      )}
                      {artist.social.website && (
                        <Link href={artist.social.website} target="_blank">
                          <div className="w-6 h-6 bg-gray-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Globe className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      )}
                      {artist.social.email && (
                        <Link href={`mailto:${artist.social.email}`}>
                          <div className="w-6 h-6 bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Mail className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results State */}
        {sortedArtists.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 border-4 border-black mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nessun artista trovato</h3>
            <p className="text-gray-600 mb-6">Prova a modificare i filtri di ricerca</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setFilterLocation("all")
                setSortBy("name")
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform"
            >
              Mostra Tutti gli Artisti
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}