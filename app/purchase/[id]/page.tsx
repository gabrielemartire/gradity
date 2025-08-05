"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Palette, CreditCard, ExternalLink, Shield, Truck, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import artwork from "@/db/artworks" // Adjust the import path as necessary
import artists from "@/db/artists" // Import artists array
import Header from "@/app/header"
import Footer from "@/app/footer"
import Demo from "@/app/demo"

// Define types for better TypeScript support
type Artwork = {
  id: string;
  title: string;
  artist: number;
  price: number;
  owner: string;
  collection: string;
  description: string;
  status: string;
  image: string;
  sealDate: string;
  materials: string;
  dimensions: string;
  edition: string;
  tags: string[];
  serial: number;
  views: number;
  vinted_link: string;
}

type Artist = {
  id: number;
  name: string;
  avatar: string;
  place: string;
  bio: string;
  date: string;
  materials: string;
  status: string;
  instagram: string;
  website: string;
  email: string;
  twitter: string;
  cover: string;
}

export default function PurchasePage() {
  const params = useParams()
  const artworkId = params.id
  
  const [currentArtwork, setCurrentArtwork] = useState<Artwork | null>(null)
  const [currentArtist, setCurrentArtist] = useState<Artist | null>(null)
  const [purchaseMethod, setPurchaseMethod] = useState<"direct" | "vinted" | null>(null)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  })

  // Find artwork and artist based on ID from URL
  useEffect(() => {
    if (artworkId) {
      const foundArtwork = artwork.find((art: Artwork) => art.id === artworkId)
      if (foundArtwork) {
        setCurrentArtwork(foundArtwork)
        // Find the corresponding artist
        const foundArtist = artists.find((artist: Artist) => artist.id === foundArtwork.artist)
        setCurrentArtist(foundArtist || null)
      }
    }
  }, [artworkId])

  const handleDirectPurchase = () => {
    // Simulate payment processing
    alert("Pagamento elaborato con successo! Riceverai una conferma via email.")
  }

  const handleVintedRedirect = () => {
    // Use the vinted_link from the artwork data or construct one
    const vintedUrl = currentArtwork?.vinted_link && currentArtwork.vinted_link !== "#" 
      ? currentArtwork.vinted_link 
      : `https://vinted.com/${currentArtwork?.vinted_link}`
    window.open(vintedUrl, "_blank")
  }

  // Loading state
  if (!currentArtwork) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
            <Palette className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-black">Caricamento...</h2>
        </div>
      </div>
    )
  }

  // If artwork not found
  if (!currentArtwork) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-black mb-4">Opera non trovata</h2>
          <Link href="/gallery">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase">
              Torna alla Galleria
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Demo />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Artwork Details */}
            <div>
              <div className="mb-8">
                <Image
                  src={currentArtwork.image}
                  alt={currentArtwork.title}
                  width={400}
                  height={560}
                  className="w-full max-w-md mx-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:scale-105"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4 font-mono text-sm mr-2">
                    {currentArtwork.id}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {currentArtwork.collection}
                  </Badge>
                  <h1 className="text-4xl font-black mb-4 uppercase">{currentArtwork.title}</h1>
                  <p className="text-xl text-gray-600 mb-2">
                    di {currentArtist ? currentArtist.name : `Artista ${currentArtwork.artist}`}
                  </p>
                </div>

                <p className="text-gray-700 font-medium leading-relaxed">{currentArtwork.description}</p>

                <div className="bg-gray-50 p-6 border-2 border-gray-200">
                  <h3 className="font-black text-lg mb-4 uppercase">Specifiche Opera</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Dimensioni:</span>
                      <span>{currentArtwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Materiali:</span>
                      <span>{currentArtwork.materials}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Edizione:</span>
                      <span>{currentArtwork.edition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Stato:</span>
                      <span className={currentArtwork.status === 'sold' ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>
                        {currentArtwork.status === 'sold' ? 'Venduto' : 'Disponibile'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-8">
              <div>
                <Link href={`/artwork/${currentArtwork.id}`}>
                  <Button
                    variant="outline"
                    className="border-2 border-black bg-transparent font-bold uppercase flex items-center space-x-2 mb-6 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span>Indietro</span>
                  </Button>
                </Link>

                {currentArtwork.status === 'sold' && (
                  <Card className="border-4 border-red-500 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                    <CardContent className="p-8 text-center">
                      <div className="text-red-600 text-2xl font-black mb-4 uppercase">Opera Venduta</div>
                      <p className="text-gray-600 mb-6">Questa opera è già stata venduta e non è più disponibile.</p>
                      <Link href="/gallery">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase">
                          Esplora Altre Opere
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}

                {/* Purchase options - only show if not sold */}
                {currentArtwork.status !== 'sold' && !purchaseMethod && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-black uppercase">Scegli Metodo di Acquisto</h2>
                    <Card
                      className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-50 pointer-events-none"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-600 flex items-center justify-center">
                            <Clock className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-black mb-2 uppercase">Acquisto diretto in piattaforma</h3>
                            <p className="text-gray-600 font-medium">In arrivo</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      onClick={() => setPurchaseMethod("vinted")}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-black flex items-center justify-center">
                            <ExternalLink className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-black mb-2 uppercase">Tramite Vinted</h3>
                            <p className="text-gray-600 font-medium">
                              Acquista tramite Vinted con protezione acquirente integrata
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-black">€{currentArtwork.price}</div>
                            <div className="text-sm text-gray-500">
                              + commissioni Vinted: €{(currentArtwork.price * 0.05 + 0.7).toFixed(2)}
                              <span className="block text-xs">(5% del prezzo + 0,70 €)</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Direct Purchase Form */}
                {purchaseMethod === "direct" && currentArtwork.status !== 'sold' && (
                  <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <CardTitle className="text-2xl font-black uppercase">Acquisto Diretto</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div>
                          <h4 className="font-black text-lg mb-4 uppercase">Informazioni di Pagamento</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block font-bold mb-2 uppercase text-sm">Numero Carta</label>
                              <Input
                                placeholder="1234 5678 9012 3456"
                                value={paymentData.cardNumber}
                                onChange={(e) => setPaymentData((prev) => ({ ...prev, cardNumber: e.target.value }))}
                                className="border-2 border-black"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block font-bold mb-2 uppercase text-sm">Scadenza</label>
                                <Input
                                  placeholder="MM/AA"
                                  value={paymentData.expiryDate}
                                  onChange={(e) => setPaymentData((prev) => ({ ...prev, expiryDate: e.target.value }))}
                                  className="border-2 border-black"
                                />
                              </div>
                              <div>
                                <label className="block font-bold mb-2 uppercase text-sm">CVV</label>
                                <Input
                                  placeholder="123"
                                  value={paymentData.cvv}
                                  onChange={(e) => setPaymentData((prev) => ({ ...prev, cvv: e.target.value }))}
                                  className="border-2 border-black"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block font-bold mb-2 uppercase text-sm">Nome sulla Carta</label>
                              <Input
                                placeholder="Mario Rossi"
                                value={paymentData.name}
                                onChange={(e) => setPaymentData((prev) => ({ ...prev, name: e.target.value }))}
                                className="border-2 border-black"
                              />
                            </div>
                          </div>
                        </div>

                        <Separator className="bg-gray-300" />

                        <div>
                          <h4 className="font-black text-lg mb-4 uppercase">Indirizzo di Spedizione</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block font-bold mb-2 uppercase text-sm">Email</label>
                              <Input
                                type="email"
                                placeholder="mario@email.com"
                                value={paymentData.email}
                                onChange={(e) => setPaymentData((prev) => ({ ...prev, email: e.target.value }))}
                                className="border-2 border-black"
                              />
                            </div>
                            <div>
                              <label className="block font-bold mb-2 uppercase text-sm">Indirizzo</label>
                              <Input
                                placeholder="Via Roma 123"
                                value={paymentData.address}
                                onChange={(e) => setPaymentData((prev) => ({ ...prev, address: e.target.value }))}
                                className="border-2 border-black"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block font-bold mb-2 uppercase text-sm">Città</label>
                                <Input
                                  placeholder="Milano"
                                  value={paymentData.city}
                                  onChange={(e) => setPaymentData((prev) => ({ ...prev, city: e.target.value }))}
                                  className="border-2 border-black"
                                />
                              </div>
                              <div>
                                <label className="block font-bold mb-2 uppercase text-sm">CAP</label>
                                <Input
                                  placeholder="20100"
                                  value={paymentData.zipCode}
                                  onChange={(e) => setPaymentData((prev) => ({ ...prev, zipCode: e.target.value }))}
                                  className="border-2 border-black"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator className="bg-gray-300" />

                        <div className="bg-gray-50 p-6 border-2 border-gray-200">
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">Subtotale:</span>
                            <span>€{currentArtwork.price}</span>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">Spedizione:</span>
                            <span className="text-green-600 font-bold">GRATUITA</span>
                          </div>
                          <Separator className="bg-gray-300 my-4" />
                          <div className="flex justify-between items-center text-xl font-black">
                            <span>TOTALE:</span>
                            <span>€{currentArtwork.price}</span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            onClick={() => setPurchaseMethod(null)}
                            variant="outline"
                            className="border-2 border-black bg-transparent font-bold uppercase flex-1"
                          >
                            Indietro
                          </Button>
                          <Button
                            onClick={handleDirectPurchase}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase flex-1"
                          >
                            Completa Acquisto
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {/* Vinted Purchase */}
                {purchaseMethod === "vinted" && currentArtwork.status !== 'sold' && (
                  <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <CardHeader className="bg-black text-white">
                      <CardTitle className="text-2xl font-black uppercase">Acquisto tramite Vinted</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-black mx-auto flex items-center justify-center">
                          <ExternalLink className="w-12 h-12 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black mb-4 uppercase">Verrai reindirizzato a Vinted</h3>
                          <p className="text-gray-600 font-medium mb-6">
                            Acquista sulla piattaforma Vinted con tutte le protezioni acquisti incluse.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-6 border-2 border-gray-200">
                          <h4 className="font-black mb-4 uppercase">Vantaggi Vinted:</h4>
                          <ul className="space-y-2 text-left">
                            <li className="flex items-center space-x-3">
                              <Shield className="w-5 h-5 text-green-600" />
                              <span>Protezione acquirente garantita</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <Truck className="w-5 h-5 text-green-600" />
                              <span>Spedizione tracciata</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <CreditCard className="w-5 h-5 text-green-600" />
                              <span>Pagamenti sicuri</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex gap-4">
                          <Button
                            onClick={() => setPurchaseMethod(null)}
                            variant="outline"
                            className="cursor-pointer border-2 border-black bg-transparent font-bold uppercase flex-1"
                          >
                            Indietro
                          </Button>
                          <Button
                            onClick={handleVintedRedirect}
                            className="bg-black text-white font-black uppercase flex-1 cursor-pointer"
                          >
                            Vai a Vinted
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}