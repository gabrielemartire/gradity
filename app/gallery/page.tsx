"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Search, Grid, List, CheckCircle, Tag, Phone, FileText, UserCheck, Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterCollection, setFilterCollection] = useState("all")

  const artworks = [
        {
      id: "AUT25-001",
      title: "Te Manu o te Rangi",
      artist: "Aroha Te Ao",
      status: "available",
      price: 45,
      collection: "Autunno 2025",
      description: "'L'uccello del cielo' in maori, evocando un volatile sacro, forse un kererū o un falco nativo.",
      image: "https://images.unsplash.com/photo-1747945872974-4d814f768def?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-007",
      title: "Moana Kōtare",
      artist: "Rongo Pikiatua",
      status: "sold",
      price: 45,
      collection: "Autunno 2025",
      description: "Martin pescatore dell’oceano — un tributo all’avifauna costiera delle isole del Pacifico.",
      image: "https://images.unsplash.com/photo-1709805902570-fcb5c9d99d5e?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-012",
      title: "Whakarere Kārearea",
      artist: "Teika Moanaroa",
      price: 45,
      collection: "Autunno 2025",
      description: "Il volo del falco della Nuova Zelanda — un’immagine dinamica del kārearea, il falco nativo Aotearoa.",
      status: "sold",
      image: "https://images.unsplash.com/photo-1709802191476-5a417cb6b971?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-018",
      title: "Tūī Karanga",
      artist: "Te Rerehua Wikitōria",
      price: 45,
      collection: "Autunno 2025",
      description: "Il canto del tūī — uccello iconico noto per il suo verso armonioso e il piumaggio iridescente.",
      status: "available",
      image: "https://images.unsplash.com/photo-1709235175253-d6c1892e1d39?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
        {
      id: "SPR25-001",
      title: "Piko o te Māra",
      artist: "Mereana Kauri",
      status: "sold",
      price: 45,
      collection: "Estate 2025",
      description: "Spirali del giardino — un riferimento alle felci arrotolate (piko) e alla simbologia della nuova vita.",
      image: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?q=80&w=3158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "SPR25-007",
      title: "Ngā Rau o Tane",
      artist: "Teika Moanaroa",
      status: "sold",
      price: 45,
      collection: "Estate 2025",
      description: "Le foglie di Tāne — Tāne Mahuta è il dio della foresta nella mitologia maori, padre di tutte le piante.",
      image: "https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "SPR25-012",
      title: "Puāwai o te Ao",
      artist: "Hinemoana Raukura",
      price: 45,
      collection: "Estate 2025",
      description: "ioritura del mondo — un'opera che celebra la bellezza delle piante che sbocciano in armonia con la natura.",
      status: "sold",
      image: "https://images.unsplash.com/photo-1590235913215-c52fffb2f3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "SPR25-018",
      title: "Rautipu Aroha",
      artist: "Rongo Pikiatua",
      price: 45,
      collection: "Estate 2025",
      description: "Foglie intrecciate d’amore — ispirato all’arte dell’intreccio con le foglie di harakeke (flax).",
      status: "sold",
      image: "https://images.unsplash.com/photo-1727525895934-ae4350538c59?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || artwork.status === filterStatus
    const matchesCollection = filterCollection === "all" || artwork.collection === filterCollection

    return matchesSearch && matchesStatus && matchesCollection
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-pink-600 transition-colors font-bold tracking-wide"
                >
                gradity
              </Link>
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Galleria
              </Link>
                            <Link
                href="/plaque"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                La Placca
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Chi Siamo
              </Link>
              <Link
                href="/verify"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Verifica
              </Link>
              <Link href="/submit">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold uppercase tracking-wide">
                  Proponi Opera
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            GALLERIA
          </h1>
          <p className="text-xl text-gray-600 mb-8">Esplora tutte le opere delle nostre collezioni esclusive</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Cerca per titolo, artista o codice..."
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
                    <SelectItem value="auction">In Asta</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterCollection} onValueChange={setFilterCollection}>
                  <SelectTrigger className="w-full lg:w-40">
                    <SelectValue placeholder="Collezione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte</SelectItem>
                    <SelectItem value="Autunno 2025">Autunno 2025</SelectItem>
                    <SelectItem value="Estate 2025">Estate 2025</SelectItem>
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
              Candidati Ora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vault Art</span>
              </div>
              <p className="text-gray-400">La piattaforma per arte pop certificata e collezionabile.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Collezioni</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <Link href="/collections#autunno-2025" className="group-hover:text-lg transition-all duration-200">
                      Autunno 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                    <Link href="/collections#estate-2025" className="group-hover:text-lg transition-all duration-200">
                      Estate 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                    <Link
                      href="/collections#cyberpunk-special"
                      className="group-hover:text-lg transition-all duration-200"
                    >
                      Cyberpunk Special
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-red-600"></div>
                    <Link href="/collections#usa-special" className="group-hover:text-lg transition-all duration-200">
                      USA Special
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-500"></div>
                    <Link href="/collections" className="group-hover:text-lg transition-all duration-200">
                      Archivio Completo
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Artisti</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/submit" className="group-hover:text-lg transition-all duration-200">
                    Candidatura
                  </Link>
                  <Edit className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Community
                  </Link>
                  <UserCheck className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    Linee Guida
                  </Link>
                  <FileText className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Supporto</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/verify" className="group-hover:text-lg transition-all duration-200">
                    Verifica Opera
                  </Link>
                  <CheckCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    La Placca
                  </Link>
                  <Tag className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Contatti
                  </Link>
                  <Phone className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vault Art. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
