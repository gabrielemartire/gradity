"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Palette, CreditCard, ExternalLink, Shield, Truck, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PurchasePage({ params }: { params: { id: string } }) {
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

  // Mock artwork data
  const artwork = {
    id: "AUT25-001",
    title: "Neon Dreams",
    artist: "Marco Rossi",
    price: 299,
    collection: "Autunno 2025",
    image: "/placeholder.svg?height=400&width=300",
    description: "Opera d'arte pop che rappresenta i sogni al neon della città moderna.",
    dimensions: "63x88mm",
    materials: "Carta fotografica premium sigillata in placca trasparente",
    edition: "1/1 - Pezzo Unico",
    status: "available",
  }

  const handleDirectPurchase = () => {
    // Simulate payment processing
    alert("Pagamento elaborato con successo! Riceverai una conferma via email.")
  }

  const handleVintedRedirect = () => {
    // Redirect to Vinted listing
    window.open("https://vinted.com/listing/vault-art-" + artwork.id, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-black tracking-tight">VAULT ART</h1>
            </Link>
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-2 border-black bg-transparent font-bold uppercase flex items-center space-x-2"
              >
                <span className="opacity-0 hover:opacity-100 transition-opacity">🖼️</span>
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Torna alla Galleria</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Artwork Details */}
            <div>
              <div className="mb-8">
                <Link href={`/artwork/${artwork.id}`}>
                  <div className="relative group cursor-pointer">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      width={400}
                      height={560}
                      className="w-full max-w-md mx-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all"></div>
                  </div>
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4 font-mono text-sm">
                    {artwork.id}
                  </Badge>
                  <h1 className="text-4xl font-black mb-4 uppercase">{artwork.title}</h1>
                  <p className="text-xl text-gray-600 mb-2">di {artwork.artist}</p>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {artwork.collection}
                  </Badge>
                </div>

                <div className="text-4xl font-black text-purple-600">€{artwork.price}</div>

                <p className="text-gray-700 font-medium leading-relaxed">{artwork.description}</p>

                <div className="bg-gray-50 p-6 border-2 border-gray-200">
                  <h3 className="font-black text-lg mb-4 uppercase">Specifiche Carta</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Dimensioni:</span>
                      <span>{artwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Materiali:</span>
                      <span>{artwork.materials}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Edizione:</span>
                      <span>{artwork.edition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-8 uppercase">Scegli Metodo di Acquisto</h2>

                {!purchaseMethod && (
                  <div className="space-y-6">
                    <Card
                      className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      onClick={() => setPurchaseMethod("direct")}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                            <CreditCard className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-black mb-2 uppercase">Acquisto Diretto</h3>
                            <p className="text-gray-600 font-medium">
                              Paga con carta di credito e ricevi la carta certificata a casa
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-purple-600">€{artwork.price}</div>
                            <div className="text-sm text-gray-500">+ spedizione gratuita</div>
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
                            <div className="text-2xl font-black text-black">€{artwork.price}</div>
                            <div className="text-sm text-gray-500">+ commissioni Vinted</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Direct Purchase Form */}
                {purchaseMethod === "direct" && (
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
                            <span>€{artwork.price}</span>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">Spedizione:</span>
                            <span className="text-green-600 font-bold">GRATUITA</span>
                          </div>
                          <Separator className="bg-gray-300 my-4" />
                          <div className="flex justify-between items-center text-xl font-black">
                            <span>TOTALE:</span>
                            <span>€{artwork.price}</span>
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
                {purchaseMethod === "vinted" && (
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
                            Completerai l'acquisto sulla piattaforma Vinted con tutte le protezioni per l'acquirente
                            incluse.
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
                            className="border-2 border-black bg-transparent font-bold uppercase flex-1"
                          >
                            Indietro
                          </Button>
                          <Button
                            onClick={handleVintedRedirect}
                            className="bg-black text-white font-black uppercase flex-1"
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
    </div>
  )
}
