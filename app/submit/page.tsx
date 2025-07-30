"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Calendar, Users, Target, Edit, UserCheck, FileText, CheckCircle, Tag, Phone, Instagram, Euro, Mail, GalleryHorizontalEnd, Forward, Vault } from "lucide-react"
import Link from "next/link"

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
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">
                Stagione Attuale
              </CardTitle>
            </CardHeader>
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
          </Card>

          {/* Next Season */}
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6 uppercase">Prossima Stagione</h3>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 mb-6">
                  <h4 className="text-4xl font-black mb-4">{nextSeason.name}</h4>
                  <p className="text-xl font-medium">Apertura proposte: {nextSeason.opensOn}</p>
                </div>
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  Le proposte per la prossima stagione apriranno presto. Preparati a sottoporre le tue migliori opere!
                </p>
                <Link href="#">
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

          {/* Guidelines */}
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
          </Card>
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
                <span className="text-xl font-bold">gradity</span>
              </div>
              <p className="text-gray-400">La piattaforma per arte pop certificata e collezionabile.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Ultime Collezioni</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                    <Link href="/gallery?collection=EST-2025" className="group-hover:text-lg transition-all duration-200">
                      Estate 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-red-600"></div>
                    <Link href="/gallery?collection=AUT-2025" className="group-hover:text-lg transition-all duration-200">
                      Autunno 2025
                    </Link>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                    <Link
                      href="/collections#cyberpunk-special"
                      className="group-hover:text-lg transition-all duration-200"
                    >
                      Cyberpunk Special
                    </Link>
                  </div>
                </li>*/}
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <Link href="/gallery?collection=EST-2026" className="group-hover:text-lg transition-all duration-200">
                      Estate 2026
                    </Link>
                  </div>
                </li> 
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Arte</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/gallery" className="group-hover:text-lg transition-all duration-200">
                    Galleria
                  </Link>
                  <GalleryHorizontalEnd className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/verify" className="group-hover:text-lg transition-all duration-200">
                    Verifica
                  </Link>
                  <CheckCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/submit" className="group-hover:text-lg transition-all duration-200">
                    Proponi Opera
                  </Link>
                  <Forward className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    la Placca
                  </Link>
                  <Vault className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Supporto</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="#" className="group-hover:text-lg transition-all duration-200">
                    Contattaci
                  </Link>
                  <Mail className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Chi siamo
                  </Link>
                  <Users className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="#" className="group-hover:text-lg transition-all duration-200">
                    Acquista su Vinted
                  </Link>
                  <Euro className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="https://www.instagram.com/gradity_art/" target="_blank" className="group-hover:text-lg transition-all duration-200">
                    Instagram
                  </Link>
                  <Instagram className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 gradity.it — Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
