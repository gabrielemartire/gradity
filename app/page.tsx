import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  QrCode,
  Shield,
  Brush,
  User,
  GalleryHorizontalEnd,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/app/footer"
import Header from "@/app/header"
import Demo from "@/app/demo"


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
      artist: "Aroha Te",
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
      <Header />
      <Demo />


      {/* Collezione */}
      <section className="pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-xl">Collezione {currentCollection.name} disponibile presto</span> 
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {`L'ARTE POP`}
            <br />
            CERTIFICATA
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {`Opere d'arte esclusice, disegnate a mano, sigillate e certificate.`}
          </p>
          <div className="flex flex-row sm:flex-column gap-2 justify-center mb-12">
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-8 px-12"
              >
                <GalleryHorizontalEnd className="w-5 h-5 mr-2" />Esplora la Galleria
              </Button>
            </Link>

            <Link href="/artists">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-lg py-8 px-12"
              >
                <User className="w-5 h-5 mr-2" />Scopri gli artisti
              </Button>
            </Link>

          </div>

          {/* Collection Stats 
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
          </div>*/}
        </div>
      </section>

     <section className="mb-12 mx-4 md:mx-24 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="p-4 md:p-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Left Half: Special Design */}
            <div className="relative w-64 md:w-96 h-64 md:h-96 flex items-center justify-center overflow-hidden rounded-lg border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
              <Image
                src="/collection_AUT2025.jpg"
                alt="Japanese Pattern"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/60 via-transparent to-orange-400/60 z-10"></div>
            </div>

            {/* Right Half: Collection Name and Button */}
            <div className="w-full md:w-1/2 text-center space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-black italic bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
                AUTUNNO 2025
              </h3>
              <p className="text-base md:text-xl opacity-90 max-w-xl mx-auto px-4 md:px-0">
                {`Un'esplosione di arte ispirata all'autunno, con opere uniche e certificate.`}
              </p>
              <Link href="/collection">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 w-full md:w-auto">
                  Esplora la Nuova Collezione
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </section>


      {/* Featured Works */}
      <section className="pb-16 px-4 pt-2">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Opere di precedenti collezioni
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
                    {/* <span className="text-2xl font-bold text-pink-600">€{work.price}</span> */}
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

        {/* Stats Overview 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-black mb-2 text-purple-600">{artists.length}</div>
              <div className="font-bold uppercase text-sm">Artisti Totali</div>
            </CardContent>
          </Card>
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-black mb-2 text-green-600">
                {artists.reduce((sum, artist) => sum + artist.stats.totalWorks, 0)}
              </div>
              <div className="font-bold uppercase text-sm">Opere Totali</div>
            </CardContent>
          </Card>
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-black mb-2 text-black">
                {artists.reduce((sum, artist) => sum + artist.stats.sold, 0)}
              </div>
              <div className="font-bold uppercase text-sm">Opere Vendute</div>
            </CardContent>
          </Card>
          <Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-black mb-2 text-pink-600">
                {artists.reduce((sum, artist) => sum + artist.stats.followers, 0)}
              </div>
              <div className="font-bold uppercase text-sm">Followers Totali</div>
            </CardContent>
          </Card>
        </div>*/}

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Perché scegliere Gradity?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Certificazione Garantita</h4>
              <p className="text-gray-600">
                Ogni opera è sigillata in placche trasparenti con certificato di autenticità e codice di verifica.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brush className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">{`Opere d'arte create a mano`}</h4>
              <p className="text-gray-600">
                Solo una singola copia, selezionata accuratamente per garantire unicità. Garantiamo che non saranno proposte altre copie identiche.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-pink-50 border border-cyan-200">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Verifica Immediata</h4>
              <p className="text-gray-600">
                {`Sistema di verifica dell'opera tramite codice di autenticità.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-4 py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <QrCode className="w-10 h-10 text-cyan-400 mr-4" />
            <h3 className="text-4xl font-bold text-white">Verifica una tua opera</h3>
          </div>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {`Inserisci il codice di autenticità della tua opera per verificarne l'autenticità e scoprire di più sulla sua storia.`}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 text-lg px-8"
          >
            <Link href="/verify">
              Verifica Opera
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section 4 - Colore più tenue con icona */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-purple-600 mr-4" />
            <h3 className="text-4xl font-bold text-gray-900">la Placca</h3>
          </div>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Il nostro sistema più avanzato di certificazione per arte contemporanea. Ogni opera è sigillata, protetta e verificabile per sempre.
          </p>
          <Link href="/plaque">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8">
            Ecco come proteggiamo le tue opere
          </Button>
          </Link>
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
              Proponi la tua Opera
            </Button>
          </Link>
        </div>
      </section>

      {/* Chi siamo
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-gray-900">Chi siamo</h3>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Gradity è la prima piattaforma che certifica e preserva arte pop attraverso un sistema di sigillatura innovativo e collezioni esclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 text-lg px-8">
              Scopri di più
            </Button>
            </Link>
            <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 text-lg px-8 bg-transparent"
            >
              Contattaci
            </Button>
            </Link>
          </div>
        </div>
      </section> */}
      <Demo />

      <Footer />
    </div>
  )
}
