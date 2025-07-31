"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Target } from "lucide-react"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function SubmitPage() {
  const currentSeason = {
    name: "Autunno 2025",
    maxSubmissions: 3,
    userSubmissions: 3,
    deadline: "30 Novembre 2025",
    selectionDate: "8 Dicembre 2025",
  }

  const nextSeason = {
    name: "Primavera 2026",
    opensOn: "24 Maggio 2026",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              PROPONI
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">OPERA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Sottoponi le tue opere per essere selezionato nelle nostre collezioni esclusive
            </p>
          </div>

          {/* Current Season Status */}
          <Card className="mb-20 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2">
          <div className="bg-white p-4">
          {/* <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">
                Stagione Attuale
              </CardTitle>
            </CardHeader> */}
            <CardContent className="p-8">
              {/* <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4">LIMITE RAGGIUNTO</h3>
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    Hai già proposto il numero massimo di opere per questa stagione (
                    <strong>
                      {currentSeason.userSubmissions}/{currentSeason.maxSubmissions}
                    </strong>
                    ).
                  </p>
                  <div className="bg-gray-50 p-6 border-2 border-gray-200">
                    <h4 className="font-black text-lg mb-4 uppercase">Le tue proposte:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-medium">Opera #1: "Neon Reflections"</span>
                        <Badge className="bg-yellow-100 text-yellow-800 font-bold">IN VALUTAZIONE</Badge>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-medium">Opera #2: "Digital Dreams"</span>
                        <Badge className="bg-green-100 text-green-800 font-bold">SELEZIONATA</Badge>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Opera #3: "Urban Pop"</span>
                        <Badge className="bg-red-100 text-red-800 font-bold">NON SELEZIONATA</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 mb-8">
                  <h4 className="text-4xl font-black">{currentSeason.name}</h4>
                </div>
              <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black text-white p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6" />
                    <h4 className="font-black uppercase">Scadenza Proposte</h4>
                  </div>
                  <p className="text-2xl font-black">{currentSeason.deadline}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6" />
                    <h4 className="font-black uppercase">Selezione Finale</h4>
                  </div>
                  <p className="text-2xl font-black">{currentSeason.selectionDate}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-6 mb-6 font-medium">
                Le proposte inviate sono in fase di valutazione. Il nostro team curatoriale esaminerà ogni opera con attenzione.
              </p>
              <div className="text-center">
              <Link href="/upload">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black uppercase tracking-wide text-lg px-12 py-4"
                >
                  Invia la tua Opera
                </Button>
              </Link></div>
            </CardContent>
          </div>
          </div>
          </Card>

          {/* Next Season */}
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6 uppercase">Prossima Stagione</h3>
                <div className="bg-gradient-to-r from-purple-200 border-black to-pink-200 text-black p-8 mb-6">
                  <h4 className="text-4xl font-black mb-4">{nextSeason.name}</h4>
                  <p className="text-xl font-medium">Apertura proposte: {nextSeason.opensOn}</p>
                </div>
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  Le proposte per la prossima stagione apriranno presto. Preparati a sottoporre le tue migliori opere!
                </p>
                <Link href="https://www.instagram.com/gradity_art/" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black uppercase tracking-wide text-lg px-12 py-4"
                  >
                    Resta Aggiornato
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">Linee Guida</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Requisiti Tecnici</h4>
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Risoluzione minima: 300 DPI</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Formato: JPEG, PNG, TIFF</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Dimensioni: Minimo 2000x2000px</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Peso file: Massimo 50MB</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Criteri di Selezione</h4>
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Originalità e creatività</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Qualità tecnica</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Coerenza con lo stile pop</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span>Potenziale commerciale</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 border-2 border-gray-200">
                <h4 className="text-lg font-black mb-4 uppercase flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Processo di Selezione
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xl">
                      1
                    </div>
                    <h5 className="font-black mb-2">PROPOSTA</h5>
                    <p className="text-sm text-gray-600">Sottometti le tue opere entro la scadenza</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xl">
                      2
                    </div>
                    <h5 className="font-black mb-2">VALUTAZIONE</h5>
                    <p className="text-sm text-gray-600">Il nostro team curatoriale valuta ogni opera</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xl">
                      3
                    </div>
                    <h5 className="font-black mb-2">SELEZIONE</h5>
                    <p className="text-sm text-gray-600">Comunicazione dei risultati finali</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>

     <Footer />
    </div>
  )
}
