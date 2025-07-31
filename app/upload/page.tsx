"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Vault, Info } from "lucide-react"
import Header from "@/app/header"

export default function UploadPage() {

  const cardSpecs = {
    width: 63, // mm
    height: 88, // mm
    widthPx: 744, // px at 300 DPI
    heightPx: 1039, // px at 300 DPI
    ratio: 63 / 88,
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              INVIA LA TUA
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">OPERA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Inviaci la foto della tua opera nel formato carta da gioco collezionabile per la valutazione
            </p>
          </div>

          {/* Specifiche Carta Collezionabile */}
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide flex items-center">
                <Info className="w-6 h-6 mr-3" />
                Specifiche Carta Collezionabile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Dimensioni Richieste</h3>
                  <div className="space-y-4">
                    <div className="bg-black text-white p-4">
                      <h4 className="font-black mb-2 uppercase">Dimensioni Fisiche</h4>
                      <p className="text-lg">
                        {cardSpecs.width}mm × {cardSpecs.height}mm
                      </p>
                      <p className="text-sm opacity-80">Standard carte da gioco collezionabili</p>
                    </div>
                    <div className="bg-gray-100 p-4 border-2 border-black">
                      <h4 className="font-black mb-2 uppercase">Risoluzione Digitale</h4>
                      <p className="text-lg">
                        {cardSpecs.widthPx} × {cardSpecs.heightPx} pixel
                      </p>
                      <p className="text-sm text-gray-600">300 DPI per stampa di qualità</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-2 border-black">
                      <h4 className="font-black mb-2 uppercase">Rapporto Proporzioni</h4>
                      <p className="text-lg">{cardSpecs.ratio.toFixed(2)}:1</p>
                      <p className="text-sm text-gray-600">Formato verticale</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-gray-100 p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div
                      className="bg-white border-2 border-gray-300 mx-auto"
                      style={{
                        width: "150px",
                        height: `${150 / cardSpecs.ratio}px`,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Vault className="w-12 h-12" />
                      </div>
                    </div>
                    <p className="mt-4 font-black text-sm uppercase">Anteprima Formato</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1. Carica la Tua Opera */}
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">1. Carica la Tua Opera</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Google Form Link Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center space-y-6">

                    <div>
                      <h3 className="text-2xl font-black mb-4 uppercase">Proponi la Tua Opera</h3>
                      <p className="text-lg mb-6 opacity-90">
                        Per sottoporre la tua opera alla valutazione del nostro team curatoriale, compila il modulo di
                        candidatura ufficiale.
                      </p>
                    </div>
                    <a
                      href="https://forms.google.com/vault-art-submission"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button
                        size="lg"
                        className="bg-white text-purple-600 hover:bg-gray-100 font-black uppercase tracking-wide text-lg px-8 py-4"
                      >
                        Apri Modulo di Candidatura
                      </Button>
                    </a>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <p className="text-sm font-medium">
                        Il modulo include tutti i campi necessari per la valutazione: informazioni riguardo la proposta artistica, upload
                        file, dati artista e dichiarazioni di originalità.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coming Soon Section */}
                <div className="border-4 border-dashed border-gray-400 p-12 text-center bg-gray-50">
                  <div className="space-y-6">
                    <Upload className="w-16 h-16 mx-auto text-gray-400" />
                    <div>
                      <h3 className="text-2xl font-black mb-4 uppercase text-gray-600">Upload Diretto</h3>
                      <div className="bg-yellow-100 border-2 border-yellow-400 p-4 mb-4 inline-block">
                        <span className="text-yellow-800 font-black uppercase text-lg">COMING SOON</span>
                      </div>
                      <p className="text-gray-600 mb-6 font-medium">
                        Stiamo sviluppando un sistema di upload diretto che permetterà di caricare le opere direttamente
                        sulla piattaforma con validazione automatica delle specifiche tecniche.
                      </p>
                      <div className="bg-white p-4 border-2 border-gray-300 max-w-md mx-auto">
                        <h4 className="font-black mb-2 uppercase text-sm">Funzionalità in Arrivo:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 text-left">
                          <li>• Validazione automatica dimensioni e risoluzione</li>
                          <li>• Anteprima formato carta in tempo reale</li>
                          <li>• Controllo qualità integrato</li>
                          <li>• Upload multiplo per serie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requisiti Tecnici */}
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">Requisiti Tecnici</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Formato File</h4>
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>JPEG (.jpg, .jpeg)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>PNG (.png)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>TIFF (.tiff, .tif)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Qualità</h4>
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Risoluzione: 300 DPI minimo</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>
                        Dimensioni: {cardSpecs.widthPx}×{cardSpecs.heightPx}px
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Peso massimo: 50MB</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Spazio colore: sRGB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  )
}
