import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  QrCode,
  Palette,
  Shield,
  Clock,
  Users,
  Instagram,
  Vault,
  Forward,
  Mail,
  CheckCircle,
  GalleryHorizontalEnd,
  Euro,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const currentCollection = {
    name: "Autunno 2025",
    description: "35 opere esclusive selezionate per la stagione autunnale",
    totalWorks: 8,
    available: 2,
    endDate: "8 Dicembre 2025",
  }

  const featuredWorks = [
    {
      id: "AUT25-001",
      title: "Te Manu o te Rangi",
      artist: "Aroha Te Ao",
      status: "sold",
      price: 45,
      image: "https://images.unsplash.com/photo-1747945872974-4d814f768def?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-007",
      title: "Moana Kōtare",
      artist: "Rongo Pikiatua",
      status: "sold",
      price: 45,
      image: "https://images.unsplash.com/photo-1709805902570-fcb5c9d99d5e?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-012",
      title: "Whakarere Kārearea",
      artist: "Hinemoana Raukura",
      price: 45,
      status: "sold",
      image: "https://images.unsplash.com/photo-1709802191476-5a417cb6b971?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "AUT25-018",
      title: "Tūī Karanga",
      artist: "Te Rerehua Wikitōria",
      price: 45,
      status: "sold",
      image: "https://images.unsplash.com/photo-1709235175253-d6c1892e1d39?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

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
                href="/verify"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Verifica
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Chi Siamo
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 text-lg">
              Collezione {currentCollection.name}
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            ARTE POP
            <br />
            CERTIFICATA
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Opere artistiche pop esclusive, sigillate e certificate. Solo {currentCollection.totalWorks} pezzi per
            collezione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8"
              >
                Esplora Collezione
              </Button>
            </Link>
            <Link href="/verify">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 text-lg px-8 bg-transparent"
              >
                <QrCode className="w-5 h-5 mr-2" />
                Verifica Opera
              </Button>
            </Link>
          </div>

          {/* Collection Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
              <div className="text-3xl font-bold text-pink-600 mb-2">{currentCollection.available}</div>
              <div className="text-gray-600">Opere Disponibili</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {currentCollection.totalWorks - currentCollection.available}
              </div>
              <div className="text-gray-600">Opere Vendute</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                <Clock className="w-8 h-8 inline mr-2" />
              </div>
              <div className="text-gray-600">Fino al {currentCollection.endDate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Opere in Evidenza di precedenti Collezioni
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredWorks.map((work) => (
              <Card
                key={work.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={250}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    {work.status === "available" && (
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-black font-black text-lg">●</span>
                      </div>
                    )}
                    {work.status === "sold" && (
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-black font-black text-lg">○</span>
                      </div>
                    )}
                    {work.status === "auction" && (
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                        <span className="text-black font-black text-lg">◐</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-700 font-mono text-xs">
                      {work.id}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-2">{work.title}</h4>
                  <p className="text-gray-600 mb-4">di {work.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">€{work.price}</span>
                    {work.status === "available" && (
                      <Link href={`/purchase/${work.id}`}>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          Acquista
                        </Button>
                      </Link>
                    )}
                    {work.status === "auction" && (
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-600 bg-transparent">
                        Partecipa
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Perché Gradity?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Certificazione Garantita</h4>
              <p className="text-gray-600">
                Ogni opera è sigillata in placche trasparenti con certificato di autenticità e codice QR verificabile.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Collezioni Esclusive</h4>
              <p className="text-gray-600">
                Solo un numero limitato di opere per stagione, selezionate accuratamente per garantire unicità.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-pink-50 border border-cyan-200">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Verifica Immediata</h4>
              <p className="text-gray-600">
                Sistema di verifica opera tramite codice di autenticità.
              </p>
            </div>
          </div>
        </div>
      </section>

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
