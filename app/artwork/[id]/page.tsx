"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import artworks_db from "@/db/artworks"
import artists_db from "@/db/artists"
import Header from "@/app/header"
import Footer from "@/app/footer"
import Demo from "@/app/demo"

// Define proper types for the component props
interface PageProps {
  params: Promise<{ id: string }>
}

export default function ArtworkPage({ params }: PageProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [artworkId, setArtworkId] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Resolve the params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params
      setArtworkId(resolvedParams.id)
      setIsLoading(false)
    }
    resolveParams()
  }, [params])

  // Artworks database

  const artworks = artworks_db

  // Show loading state while resolving params
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    )
  }

  // Find artwork by ID
  const artwork = artworks.find(art => art.id === artworkId)

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
  const getArtistInfo = (artistID: number) => {
    const artist = artists_db.find(a => a.id == artistID)
    const avatar = artist?.avatar

    return {
      id: artistID,
      name: artist!.name,
      avatar: avatar || "/placeholder.svg?height=100&width=100",
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

  // const getStatusText = (status: string) => {
  //   switch (status) {
  //     case 'available':
  //       return 'Disponibile'
  //     case 'sold':
  //       return 'Venduto'
  //     case 'auction':
  //       return 'All\'asta'
  //     default:
  //       return 'Non disponibile'
  //   }
  // }

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Demo />

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
                    className={`border-2 border-black bg-transparent px-6 bg-red-50 text-red-600"`}
                  >
                    <Heart className={`w-5 h-5 fill-current"`} />
                  </Button>
                  <Button variant="outline" onClick={handleShare} className="border-2 border-black bg-transparent px-6">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  {/* <span>{artwork.likes} likes</span> */}
                  <span>SERIAL: {artwork.serial}</span>
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
     
      <Footer />
    </div>
  )
}