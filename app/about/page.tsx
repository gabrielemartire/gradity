import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Gabriele Martire",
      role: "Founder & CTO",
      image: "https://images.unsplash.com/photo-1635003913011-95971abba560?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Guida lo sviluppo tecnologico e strategico del progetto, con oltre 10 anni di esperienza nel digitale.",
    },
    {
      name: "Francesco Montini",
      role: "Founder & CPO",
      image: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Responsabile della visione creativa e del prodotto, unisce competenze artistiche e strategia culturale.",
    }
    // {
    //   name: "Alex Chen",
    //   role: "Manager & CMO",
    //         image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    //   bio: "Esperto in sistemi di certificazione e blockchain",
    // },
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
        <div className="text-center mb-20">
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

        {/* Mission */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">La Nostra Missione</CardTitle>
          </CardHeader>
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6 uppercase">Rivoluzionare il Collezionismo</h3>
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
          <CardHeader className="bg-black text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">Il Nostro Team</CardTitle>
          </CardHeader>
          <CardContent className="p-12">
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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">Come Funziona</CardTitle>
          </CardHeader>
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  1
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Selezione Curatoriale</h4>
                <p className="text-gray-700 font-medium">
                  Il nostro team di esperti seleziona le migliori opere pop contemporanee per ogni collezione stagionale
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  2
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Certificazione</h4>
                <p className="text-gray-700 font-medium">
                  Ogni opera viene sigillata in placche trasparenti con certificato di autenticità e codice QR univoco
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-black text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  3
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Collezione Esclusiva</h4>
                <p className="text-gray-700 font-medium">
                  Le opere certificate entrano a far parte di collezioni limitate e numerate, garantendo unicità e
                  valore
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Sei un Artista?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Proponi le tue opere per le prossime collezioni stagionali. Ogni artista selezionato entra a far parte della
            nostra esclusiva community.
          </p>
          <Link href="/submit"
            className="inline-block bg-white text-pink-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Candidati Ora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
