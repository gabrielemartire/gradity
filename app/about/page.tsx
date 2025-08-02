import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Zap, Mail, Instagram, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const team = [
    {
      name: "Gabriele Martire",
      role: "Founder & CTO",
      image: "https://images.unsplash.com/photo-1635003913011-95971abba560?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Guida lo sviluppo tecnologico e strategico del progetto.",
      inst: "gabriele.zip",
      site: "https://gabrielemartire.github.io/",
    },
    {
      name: "Francesco Montini",
      role: "Founder & CPO",
      image: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Responsabile della visione creativa del prodotto e esperto in sistemi di certificazione.",
      inst: "montins__",
      site: "https://www.linkedin.com/in/francesco-montini-44095b97/",
    },
    {
      name: "Giulia Maturani",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Conduce la direzione artistica e cura le collezioni.",
      inst: "#",
      site: "#",
    },
  ]

  const stats = [
    { number: "8", label: "Opere Certificate" },
    { number: "7", label: "Artisti Selezionati" },
    { number: "2", label: "Collezioni Stagionali" },
    { number: "100%", label: "Soddisfazione Cliente" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            CHI
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SIAMO</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span> è la prima piattaforma che certifica e preserva arte pop attraverso un sistema di
            sigillatura innovativo e collezioni esclusive.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="mailto:info@gradity.it" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8"
            >
              Contattaci
            </Button>
          </Link>
          <Link href="https://instagram.com/gradity_art" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 text-lg px-8 bg-transparent"
            >
              <Instagram className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Mission */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
        <div className="bg-white p-6">
          <CardContent className="p-4">
            <div className="text-center">
                <h3 className="text-3xl font-black mb-4 uppercase">La nostra mission</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6 uppercase italic">{`"Rivoluzionare l'arte pop"`}</h3>
                <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                  Crediamo che ogni opera artistica meriti di essere preservata e certificata. Il nostro sistema di
                  sigillatura in placche trasparenti garantisce autenticità e conservazione nel tempo.
                </p>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Selezioniamo solo le migliori opere pop contemporanee, creando collezioni esclusive e limitate che
                  rappresentano il meglio della creatività artistica moderna.
                </p>
              </div>
              <div className="bg-black p-8 text-white">
                <h4 className="text-2xl font-black mb-6 uppercase">I Nostri Valori</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6" />
                    <span className="font-bold">AUTENTICITÀ GARANTITA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6" />
                    <span className="font-bold">QUALITÀ SUPERIORE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6" />
                    <span className="font-bold">COMMUNITY ARTISTICA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6" />
                    <span className="font-bold">INNOVAZIONE CONTINUA</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
        </div>
        </Card>

        {/* Stats */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-wide">I Nostri Numeri</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="font-bold uppercase text-sm tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-12 pt-6">
            <div className="text-center pb-4">
              <h3 className="text-4xl font-black mb-4 uppercase">il Team</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase">{member.name}</h4>
                  <p className="text-lg font-bold text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 font-medium">{member.bio}</p>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3 mt-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Link href={`https://instagram.com/${member.inst.toLowerCase()}`} target="_blank">
                        <Instagram className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                    <div className="w-8 h-8 bg-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Link href={`${member.site.toLowerCase()}`} target="_blank">
                        <Globe className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="contattaci" className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-12 pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-black mb-6 uppercase">Hai Domande?</h3>
              <p className="text-xl text-gray-700 mb-8 font-medium max-w-2xl mx-auto">
                Siamo qui per aiutarti! Contattaci per qualsiasi informazione su gradity, le nostre collezioni o il
                processo di certificazione.
              </p>

              <div className="mb-8">
                <Link href="mailto:contatti@gradity.it" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase text-lg px-12 py-4 mb-6"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Scrivici una Email
                  </Button>
                </Link>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border-4 border-yellow-400 p-8 max-w-3xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="text-left">
                    <h4 className="text-xl font-black mb-3 uppercase text-yellow-800">Importante: Proposte Opere</h4>
                    <p className="text-gray-700 font-medium mb-4">
                      Non inviare le tue opere tramite email! Per proporre opere per le nostre collezioni, utilizza
                      il sistema dedicato che garantisce una valutazione professionale.
                    </p>
                    <Link href="/submit">
                      <Button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 font-black uppercase">
                        Proponi Opera Qui
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>



      <Footer />
    </div>
  )
}
