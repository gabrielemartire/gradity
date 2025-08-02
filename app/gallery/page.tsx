"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Search, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"
import Demo from "@/app/demo"
import artworks_db from "@/db/artworks"

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterCollection, setFilterCollection] = useState("all")

  const artworks = artworks_db

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || artwork.status === filterStatus
    const matchesCollection = filterCollection === "all" || artwork.collection === filterCollection

    return matchesSearch && matchesStatus && matchesCollection
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <Header />
      <Demo />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            GALLERIA
          </h1>
          <p className="text-xl text-gray-600 mb-8">Esplora tutte le opere delle nostre collezioni esclusive</p>
        </div>

        {/* Filters */}
        <Card className="mb-20 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2">
        <div className="bg-white p-4">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <Input
                    placeholder="Cerca per titolo o codice..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full lg:w-auto">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full lg:w-40">
                    <SelectValue placeholder="Stato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutti</SelectItem>
                    <SelectItem value="available">Disponibili</SelectItem>
                    <SelectItem value="sold">Vendute</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterCollection} onValueChange={setFilterCollection}>
                  <SelectTrigger className="w-full lg:w-40">
                    <SelectValue placeholder="Collezione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte</SelectItem>
                    <SelectItem value="Uccelli 2025">Uccelli 2025</SelectItem>
                    <SelectItem value="Natura 2025">Natura 2025</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600" : ""}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600" : ""}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
        </div>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredArtworks.length} di {artworks.length} opere
          </p>
        </div>

        {/* Artworks Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <Link href={`/artwork/${artwork.id}`}>
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      width={300}
                      height={300}
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
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                        <span className="text-black font-black text-lg">◐</span>
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
                  <p className="text-gray-600 mb-2">di {artwork.artist}</p>
                  <p className="text-sm text-gray-500 mb-4">{artwork.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">€{artwork.price}</span>
                    {artwork.status === "available" && (
                      <Link href={`/purchase/${artwork.id}`}>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          Acquista
                        </Button>
                      </Link>
                    )}
                    {artwork.status === "auction" && (
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-600 bg-transparent">
                        Partecipa
                      </Button>
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
        ) : (
          <div className="space-y-4">
            {filteredArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                      <Link href={`/artwork/${artwork.id}`}>
                        <Image
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </Link>
                      <div className="absolute top-2 right-2">
                        {artwork.status === "available" && (
                          <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-black font-black text-sm">●</span>
                          </div>
                        )}
                        {artwork.status === "sold" && (
                          <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-black font-black text-sm">○</span>
                          </div>
                        )}
                        {artwork.status === "auction" && (
                          <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                            <span className="text-black font-black text-sm">◐</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2 font-mono text-xs">
                            {artwork.id}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">{artwork.title}</h3>
                          <p className="text-lg text-gray-600 mb-2">di {artwork.artist}</p>
                          <Badge variant="secondary" className="mb-4">
                            {artwork.collection}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-pink-600 mb-4">€{artwork.price}</div>
                          {artwork.status === "available" && (
                            <Link href={`/purchase/${artwork.id}`}>
                              <Button className="bg-gradient-to-r from-pink-500 to-purple-600">Acquista Ora</Button>
                            </Link>
                          )}
                          {artwork.status === "auction" && (
                            <Button variant="outline" className="border-orange-500 text-orange-600 bg-transparent">
                              Asta
                            </Button>
                          )}
                          {artwork.status === "sold" && (
                            <Button variant="outline" disabled>
                              Venduto
                            </Button>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600">{artwork.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 border-4 border-black mx-auto mb-6 flex items-center justify-center">
              <Palette className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nessuna opera trovata</h3>
            <p className="text-gray-600 mb-6">Prova a modificare i filtri di ricerca o esplora tutte le collezioni</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setFilterStatus("all")
                setFilterCollection("all")
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600"
            >
              Mostra Tutte le Opere
            </Button>
          </div>
        )}
      </div>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Sei un Artista?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Proponi le tue opere per le prossime collezioni stagionali. Ogni artista selezionato entra a far parte della
            nostra esclusiva community.
          </p>
          <Link href="/submit">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
              Proponi la tua Opera
            </Button>
          </Link>
        </div>
      </section>
      <Demo />

      <Footer/>
    </div>
  )
}
