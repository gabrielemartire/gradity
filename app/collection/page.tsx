"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function JapanCollectionPage() {
  const collectionStartDate = new Date("2025-10-08T00:00:00") // Set your desired launch date here
  const [isComingSoon, setIsComingSoon] = useState(true)

  useEffect(() => {
    const now = new Date()
    if (now >= collectionStartDate) {
      setIsComingSoon(false)
    } else {
      setIsComingSoon(true)
    }
  }, [collectionStartDate])

  const artworks = [
    {
      id: "JAP25-001",
      title: "Tokyo Neon",
      artist: "Kenji Tanaka",
      price: 320,
      status: "available",
      image: "/placeholder.svg?height=300&width=300",
      description: "Luci e ombre della metropoli giapponese in stile pop.",
    },
    {
      id: "JAP25-002",
      title: "Sakura Dreams",
      artist: "Akari Sato",
      price: 280,
      status: "available",
      image: "/placeholder.svg?height=300&width=300",
      description: "La delicatezza dei fiori di ciliegio in un'interpretazione moderna.",
    },
    {
      id: "JAP25-003",
      title: "Samurai Pop",
      artist: "Hiroshi Nakamura",
      price: 400,
      status: "auction",
      image: "/placeholder.svg?height=300&width=300",
      description: "L'antica tradizione samurai rivisitata con un tocco pop.",
    },
    {
      id: "JAP25-004",
      title: "Geisha Glitch",
      artist: "Yuki Kobayashi",
      price: 350,
      status: "sold",
      image: "/placeholder.svg?height=300&width=300",
      description: "Un'icona classica giapponese con un'estetica glitch art.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-gray-600 bg-clip-text text-transparent">
            AUTUNNO 2025
          </h1>
          {/* descrizione di una collezione che parla di autunno */} 
          <p className="text-xl text-gray-600 mb-8">{`l'autunno attraverso opere di artisti esclusivi`}</p>
        </div>

        {isComingSoon ? (
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-red-100 border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase">COLLEZIONE IN ARRIVO!</h3>
              <p className="text-xl text-black-700 mb-6">
                La collezione Giappone sarà disponibile a partire dal{" "}
                <span className="font-bold">
                  {collectionStartDate.toLocaleDateString("it-IT", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                .
              </p>
              <p className="text-lg text-gray-600">Torna a trovarci per scoprire le opere esclusive!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artworks.map((artwork) => (
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
                    <span className="text-2xl font-bold text-red-600">€{artwork.price}</span>
                    {artwork.status === "available" && (
                      <Link href={`/purchase/${artwork.id}`}>
                        <Button size="sm" className="bg-gradient-to-r from-red-500 to-orange-600">
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
        )}
      </div>
      <Footer />
    </div>
  )
}
