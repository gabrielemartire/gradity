"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ArrowLeft, Share2, Heart, ShoppingCart, CheckCircle, Tag, Phone, FileText, UserCheck, Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArtworkPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Artworks database
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
      sealDate: "12 Settembre 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["maori", "uccelli", "sacro", "natura", "tradizionale"],
      likes: 89,
      views: 1245,
    },
    {
      id: "AUT25-007",
      title: "Moana Kōtare",
      artist: "Rongo Pikiatua",
      status: "sold",
      price: 45,
      collection: "Autunno 2025",
      description: "Martin pescatore dell'oceano — un tributo all'avifauna costiera delle isole del Pacifico.",
      image: "https://images.unsplash.com/photo-1709805902570-fcb5c9d99d5e?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sealDate: "18 Settembre 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["oceano", "martin pescatore", "pacifico", "costiero", "blu"],
      likes: 156,
      views: 2103,
    },
    {
      id: "AUT25-012",
      title: "Whakarere Kārearea",
      artist: "Teika Moanaroa",
      price: 45,
      collection: "Autunno 2025",
      description: "Il volo del falco della Nuova Zelanda — un'immagine dinamica del kārearea, il falco nativo Aotearoa.",
      status: "sold",
      image: "https://images.unsplash.com/photo-1709802191476-5a417cb6b971?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sealDate: "22 Settembre 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["falco", "volo", "dinamico", "nuova zelanda", "nativo"],
      likes: 203,
      views: 1876,
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
      sealDate: "25 Settembre 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["tui", "canto", "armonioso", "iridescente", "iconico"],
      likes: 134,
      views: 1654,
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
      sealDate: "5 Marzo 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["spirali", "felci", "giardino", "nuova vita", "verde"],
      likes: 178,
      views: 2234,
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
      sealDate: "15 Marzo 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["tane", "foresta", "mitologia", "foglie", "dio"],
      likes: 245,
      views: 2891,
    },
    {
      id: "SPR25-012",
      title: "Puāwai o te Ao",
      artist: "Hinemoana Raukura",
      price: 45,
      collection: "Estate 2025",
      description: "Fioritura del mondo — un'opera che celebra la bellezza delle piante che sbocciano in armonia con la natura.",
      status: "sold",
      image: "https://images.unsplash.com/photo-1590235913215-c52fffb2f3f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sealDate: "20 Marzo 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["fioritura", "mondo", "piante", "armonia", "natura"],
      likes: 167,
      views: 1923,
    },
    {
      id: "SPR25-018",
      title: "Rautipu Aroha",
      artist: "Rongo Pikiatua",
      price: 45,
      collection: "Estate 2025",
      description: "Foglie intrecciate d'amore — ispirato all'arte dell'intreccio con le foglie di harakeke (flax).",
      status: "sold",
      image: "https://images.unsplash.com/photo-1727525895934-ae4350538c59?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sealDate: "28 Marzo 2025",
      materials: "Cartoncino - dipinta a mano",
      dimensions: "63 mm x 88 mm",
      edition: "1/1 - Pezzo Unico",
      tags: ["intreccio", "amore", "harakeke", "flax", "tradizionale"],
      likes: 198,
      views: 2456,
    },
  ]

  // Find artwork by ID
  const artwork = artworks.find(art => art.id === params.id)

  // Handle case when artwork is not found
  if (!artwork) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Opera Non Trovata</h1>
          <p className="text-gray-600 mb-8">Questa opera artistica che stai cercando non esiste.</p>
          <Link href="/gallery">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              Torna alla Galleria
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Create artist object with switch case for avatar URLs
  const getArtistInfo = (artistName: string) => {
    let avatar = ""
    
    switch (artistName) {
      case "Aroha Te Ao":
        avatar = "https://plus.unsplash.com/premium_photo-1675034393635-ae45492f9be6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      case "Rongo Pikiatua":
        avatar = "https://images.unsplash.com/photo-1529758146491-1e11fd721f77?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      case "Teika Moanaroa":
        avatar = "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      case "Te Rerehua Wikitōria":
        avatar = "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      case "Mereana Kauri":
        avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      case "Hinemoana Raukura":
        avatar = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Leave blank for you to populate
        break
      default:
        avatar = "/placeholder.svg?height=100&width=100"
        break
    }

    return {
      id: artistName.toLowerCase().replace(/\s+/g, '-'),
      name: artistName,
      avatar: avatar || "/placeholder.svg?height=100&width=100"
    }
  }

  const artistInfo = getArtistInfo(artwork.artist)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = () => {
    if (!imageRef.current) return
    imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: `Guarda questa opera di ${artwork.artist} su Gradity`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copiato negli appunti!")
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Disponibile'
      case 'sold':
        return 'Venduto'
      case 'auction':
        return 'All\'asta'
      default:
        return 'Non disponibile'
    }
  }

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="border-2 border-black bg-transparent font-bold uppercase flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Torna alla Galleria</span>
                </Button>
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

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Artwork Image with Parallax Effect */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  ref={imageRef}
                  className="transition-transform duration-200 ease-out cursor-pointer"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    width={450}
                    height={630}
                    className="w-full h-96 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white object-cover object-center"
                    priority
                  />
                  {/* Card reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                </div>

                {/* Status indicator */}
                <div className="absolute top-6 right-6">
                  {artwork.status === "available" && (
                    <div className="w-12 h-12 bg-green-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-black font-black text-2xl">●</span>
                    </div>
                  )}
                  {artwork.status === "sold" && (
                    <div className="w-12 h-12 bg-red-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-black font-black text-2xl">○</span>
                    </div>
                  )}
                  {artwork.status === "auction" && (
                    <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-black font-black text-2xl">⚡</span>
                    </div>
                  )}
                </div>

                {/* Code badge */}
                <div className="absolute top-6 left-6">
                  <Badge
                    variant="outline"
                    className="bg-white/95 text-gray-700 font-mono text-lg px-4 py-2 border-2 border-black"
                  >
                    {artwork.id}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Artwork Details */}
            <div className="space-y-8">
              {/* Title and Artist */}
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight">{artwork.title}</h1>
                <Link href={`/artist/${artistInfo.id}`} className="group">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={artistInfo.avatar}
                      alt={artistInfo.name}
                      width={60}
                      height={60}
                      className="border-2 border-black group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                    <div>
                      <p className="text-2xl font-bold group-hover:text-purple-600 transition-colors">
                        {artistInfo.name}
                      </p>
                      <p className="text-gray-600 font-medium">Artista</p>
                    </div>
                  </div>
                </Link>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-4 py-2">
                  {artwork.collection}
                </Badge>
              </div>

              {/* Price and Actions */}
              <div className="bg-gray-50 p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-5xl font-black text-purple-600 mb-6">€{artwork.price}</div>
                <div className="flex gap-4 mb-6">
                  {artwork.status === "available" && (
                    <Link href={`/purchase/${artwork.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase text-lg py-4">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Acquista Ora
                      </Button>
                    </Link>
                  )}
                  {artwork.status === "sold" && (
                    <Button disabled className="flex-1 font-black uppercase text-lg py-4">
                      Venduto
                    </Button>
                  )}
                  {artwork.status === "auction" && (
                    <Link href={`/auction/${artwork.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 font-black uppercase text-lg py-4">
                        <span className="mr-2">⚡</span>
                        Asta
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`border-2 border-black bg-transparent px-6 ${isLiked ? "bg-red-50 text-red-600" : ""}`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" onClick={handleShare} className="border-2 border-black bg-transparent px-6">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{artwork.likes} likes</span>
                  <span>{artwork.views} visualizzazioni</span>
                  <span className="font-bold">{getStatusText(artwork.status)}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase">Descrizione</h3>
                <p className="text-gray-700 font-medium leading-relaxed text-lg">{artwork.description}</p>
              </div>

              {/* Technical Details */}
              <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 uppercase">Dettagli Tecnici</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-bold">Dimensioni:</span>
                      <span className="font-medium">{artwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-bold">Materiali:</span>
                      <span className="font-medium">{artwork.materials}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-bold">Edizione:</span>
                      <span className="font-medium">{artwork.edition}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-bold">Data Sigillatura:</span>
                      <span className="font-medium">{artwork.sealDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase">Tag</h3>
                <div className="flex flex-wrap gap-3">
                  {artwork.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-2 border-black bg-transparent font-bold uppercase px-4 py-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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