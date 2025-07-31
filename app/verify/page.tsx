"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/app/header"
import Footer from "@/app/footer"
import artworks_db from "@/db/artworks"


// Define types for better TypeScript support
interface Artwork {
  id: string;
  title: string;
  artist: string;
  collection: string;
  price: number;
  sealDate: string;
  owner: string;
  image: string;
  description: string;
  materials: string;
  dimensions: string;
  edition: string;
}

interface VerificationResult {
  valid: boolean;
  artwork?: Artwork;
  message?: string;
}

export default function VerifyPage() {
  const [searchCode, setSearchCode] = useState("")
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async () => {
  setIsLoading(true)

  setTimeout(() => {
    const artwork = artworks_db.find(art => art.id === searchCode) || null;

    if (artwork) {
      setVerificationResult({
        valid: true,
        artwork: artwork,
      });
    } else {
      setVerificationResult({
        valid: false,
        message: "Codice non trovato o non valido",
      });
    }
    
    setIsLoading(false);
  }, 600);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              VERIFICA OPERA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Inserisci codice opera o scansiona QR code per verificare autenticità
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-gradient-to-r from-dark-100 to-dark-100 p-2">
          <div className="bg-white p-4">
            <CardHeader>
              <CardTitle className="text-2xl text-center mt-2">Inserisci Codice di Verifica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Es: AUT25-001"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                <Button
                  onClick={handleVerify}
                  disabled={!searchCode || isLoading}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 h-12 px-8"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Verifica
                    </>
                  )}
                </Button>
              </div>

              {/* <div className="text-center">
                <div className="inline-flex items-center text-gray-500 mb-4">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="px-4">oppure</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                <Button
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Scansiona QR Code
                </Button>
              </div> */}
            </CardContent>
          </div>
          </div>
          </Card>

          {/* Results Section */}
          {verificationResult && (
            <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
            <div className="bg-white p-4">
              <CardContent className="p-8">
                {verificationResult.valid ? (
                  <div>
                    {/* Success Header */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="flex items-center space-x-3 text-green-600">
                        <CheckCircle className="w-8 h-8" />
                        <span className="text-2xl font-bold">Opera Verificata</span>
                      </div>
                    </div>

                    {/* Artwork Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <Image
                          src={verificationResult.artwork!.image || "/placeholder.svg"}
                          alt={verificationResult.artwork!.title}
                          width={630}
                          height={880}
                          className="rounded-lg shadow-lg object-cover object-center"
                        />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 text-green-600 mb-4">
                            <CheckCircle className="w-5 h-5" />
                            <span>Certificato Autentico</span>
                          </div>
                          <h2 className="text-3xl font-bold mb-2">{verificationResult.artwork!.title}</h2>
                          <p className="text-xl text-gray-600 mb-4">di {verificationResult.artwork!.artist}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-pink-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Codice Opera</div>
                            <div className="font-mono font-bold">{verificationResult.artwork!.id}</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Collezione</div>
                            <div className="font-bold">{verificationResult.artwork!.collection}</div>
                          </div>
                          <div className="bg-cyan-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Prezzo Originale</div>
                            <div className="font-bold">€{verificationResult.artwork!.price}</div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Data Sigillatura</div>
                            <div className="font-bold">{verificationResult.artwork!.sealDate}</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Descrizione</h4>
                            <p className="text-gray-600">{verificationResult.artwork!.description}</p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">Specifiche Tecniche</h4>
                            <ul className="text-gray-600 space-y-1">
                              <li>
                                <strong>Materiali:</strong> {verificationResult.artwork!.materials}
                              </li>
                              <li>
                                <strong>Dimensioni:</strong> {verificationResult.artwork!.dimensions}
                              </li>
                              <li>
                                <strong>Edizione:</strong> {verificationResult.artwork!.edition}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3 text-red-600">
                        <XCircle className="w-8 h-8" />
                        <span className="text-2xl font-bold">Opera Non Trovata</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{verificationResult.message}</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="font-bold text-yellow-800 mb-2">Suggerimenti:</h4>
                      <ul className="text-yellow-700 text-left space-y-1">
                        <li>• Controlla che il codice sia stato inserito correttamente</li>
                        <li>• Verifica che non ci siano spazi extra</li>
                        <li>• Prova a scansionare il QR code direttamente</li>
                        <li>• Contatta il supporto se il problema persiste</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </div>
          </div>
            </Card>
          )}

          {/* Help Section */}
          <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
          <div className="bg-white p-4">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Come Funziona la Verifica</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Trova il Codice</h4>
                  <p className="text-gray-600 text-sm">
                    Ogni opera ha un codice univoco stampato sulla placca sigillata
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Inserisci o Scansiona</h4>
                  <p className="text-gray-600 text-sm">Digita il codice o usa la fotocamera per scansionare il QR</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Verifica Istantanea</h4>
                  <p className="text-gray-600 text-sm">Ottieni immediatamente tutte le informazioni riguardo il prodotto artistico</p>
                </div>
              </div>
            </CardContent>
          </div>
          </div>
          </Card>

{/* Test Codes */}
          <Card className="mt-8 border-0 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4 text-center">Codici di Test</h4>
              <p className="text-center text-gray-600 mb-4">Prova la verifica con questi codici di esempio:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-pink-100"
                  onClick={() => setSearchCode("AUT25-001")}
                >
                  AUT25-001
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-purple-100"
                  onClick={() => setSearchCode("AUT25-007")}
                >
                  AUT25-007
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-cyan-100"
                  onClick={() => setSearchCode("AUT25-012")}
                >
                  AUT25-012
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-orange-100"
                  onClick={() => setSearchCode("AUT25-018")}
                >
                  AUT25-018
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-green-100"
                  onClick={() => setSearchCode("SPR25-001")}
                >
                  SPR25-001
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-100"
                  onClick={() => setSearchCode("SPR25-007")}
                >
                  SPR25-007
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-indigo-100"
                  onClick={() => setSearchCode("SPR25-012")}
                >
                  SPR25-012
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-rose-100"
                  onClick={() => setSearchCode("SPR25-018")}
                >
                  SPR25-018
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
