import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function CollectionsPage() {
  const collections = [
    {
      id: "autunno-2025",
      name: "Autunno 2025",
      description: "35 opere esclusive selezionate per la stagione autunnale",
      totalWorks: 35,
      available: 28,
      sold: 7,
      startDate: "Settembre 2025",
      endDate: "Dicembre 2025",
      status: "current",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "estate-2025",
      name: "Estate 2025",
      description: "Collezione estiva con colori vivaci e energia positiva",
      totalWorks: 30,
      available: 12,
      sold: 18,
      startDate: "Giugno 2025",
      endDate: "Agosto 2025",
      status: "past",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "primavera-2025",
      name: "Primavera 2025",
      description: "Rinascita e creatività in 25 opere uniche",
      totalWorks: 25,
      available: 5,
      sold: 20,
      startDate: "Marzo 2025",
      endDate: "Maggio 2025",
      status: "past",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "cyberpunk-special",
      name: "Cyberpunk Special",
      description: "Collezione speciale dedicata al futuro distopico",
      totalWorks: 20,
      available: 8,
      sold: 12,
      startDate: "Collezione Speciale",
      endDate: "Limitata",
      status: "special",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "usa-special",
      name: "USA Special",
      description: "Omaggio alla cultura pop americana",
      totalWorks: 15,
      available: 3,
      sold: 12,
      startDate: "Collezione Speciale",
      endDate: "Limitata",
      status: "special",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "inverno-2024",
      name: "Inverno 2024",
      description: "La prima collezione gradity",
      totalWorks: 20,
      available: 2,
      sold: 18,
      startDate: "Dicembre 2024",
      endDate: "Febbraio 2025",
      status: "past",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-green-100 text-green-800"
      case "special":
        return "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "current":
        return "ATTUALE"
      case "special":
        return "SPECIALE"
      default:
        return "PASSATA"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header/>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            TUTTE LE
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              COLLEZIONI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Esplora tutte le collezioni gradity, dalle più recenti ai pezzi rari ancora disponibili
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group hover:shadow-2xl transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`font-bold ${getStatusColor(collection.status)}`}>
                    {getStatusText(collection.status)}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-700 font-mono text-xs">
                    {collection.totalWorks} CARTE
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-black mb-3 uppercase">{collection.name}</h3>
                <p className="text-gray-600 mb-4 font-medium">{collection.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold">Disponibili:</span>
                    <span className="text-green-600 font-black">{collection.available}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold">Vendute:</span>
                    <span className="text-red-600 font-black">{collection.sold}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold">Periodo:</span>
                    <span className="font-medium">{collection.startDate}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/gallery?collection=${collection.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase text-sm">
                      Esplora
                    </Button>
                  </Link>
                  {collection.available > 0 && (
                    <Button
                      variant="outline"
                      className="border-2 border-black bg-transparent font-black uppercase text-sm px-4"
                    >
                      {collection.available}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-12">
              <h2 className="text-4xl font-black text-center mb-12 uppercase">Statistiche Globali</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black mb-2">6</div>
                  <div className="font-bold uppercase text-sm">Collezioni Totali</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black mb-2">145</div>
                  <div className="font-bold uppercase text-sm">Carte Totali</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black mb-2">58</div>
                  <div className="font-bold uppercase text-sm">Ancora Disponibili</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black mb-2">87</div>
                  <div className="font-bold uppercase text-sm">Carte Vendute</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
