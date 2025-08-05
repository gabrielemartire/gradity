import { Palette } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function TeapotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      {/* Header */}
      <Header />


      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
        <Card className="max-w-2xl w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
            <CardTitle className="text-5xl font-black uppercase tracking-wide py-4">ERRORE 418</CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center space-y-6">
            <div className="mx-auto flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1674707429029-9de78da14b6b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A cute teapot"
                width={150}
                height={150}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl font-black text-gray-800 uppercase">I'm a teapot!</h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Questo server è una teiera e si rifiuta di preparare il caffè perché è, permanentemente, una teiera. Forse
              dovresti provare a richiedere del tè invece?
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-black uppercase tracking-wide text-lg px-8 py-4"
              >
                Torna alla Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

    <Footer />
    </div>
  )
}
