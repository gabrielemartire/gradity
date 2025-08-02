"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail } from "lucide-react"
import Link from "next/link"
import Footer from "@/app/footer"
import Header from "@/app/header"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <Header />
      {/* Header */}
      <div className="container mx-auto py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FAQ
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Trovate le risposte alle vostre domande più comuni su gradity, le nostre opere e il processo di
            certificazione.
          </p>
        </div>

        {/* FAQ Section */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-gray-200">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline hover:text-purple-600 transition-colors">
                  {`Cos'è gradity?`}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  {`gradity è la prima piattaforma dedicata alla certificazione e conservazione dell'arte pop
                  contemporanea. Offriamo opere esclusive sigillate in placche trasparenti con certificato di
                  autenticità e codice QR verificabile.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-2 border-gray-200">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline hover:text-purple-600 transition-colors">
                  Come funziona la certificazione delle opere?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  {`Ogni opera d'arte selezionata viene stampata su carta fotografica premium, etichettata con un codice
                  univoco e un QR code, e quindi sigillata in una placca trasparente protettiva. Questo processo
                  garantisce l'integrità e l'autenticità dell'opera nel tempo. Puoi verificare un'opera dalla nostra `}
                  <Link href="/verify" className="text-purple-600 hover:underline">
                    pagina di verifica
                  </Link>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-2 border-gray-200">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline hover:text-purple-600 transition-colors">
                  Dove posso esplorare le collezioni di opere?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  Tutte le nostre collezioni sono disponibili nella sezione{" "}
                  <Link href="/gallery" className="text-purple-600 hover:underline">
                    Galleria
                  </Link>
                  . Puoi filtrare per collezione, stato (disponibile, venduta, in asta) e cercare per titolo o artista.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b-2 border-gray-200">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline hover:text-purple-600 transition-colors">
                  {`Posso proporre le mie opere d'arte a gradity?`}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  Sì, accettiamo proposte da artisti contemporanei. Ti invitiamo a leggere le nostre linee guida e
                  sottoporre la tua opera tramite la pagina{" "}
                  <Link href="/submit" className="text-purple-600 hover:underline">
                    Proponi Opera
                  </Link>
                  . Le opere selezionate entreranno nelle nostre esclusive collezioni stagionali.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:no-underline hover:text-purple-600 transition-colors">
                  Quali sono i vantaggi per gli artisti?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  Gli artisti selezionati beneficiano di un processo di certificazione professionale, visibilità sulle
                  nostre piattaforme, inclusione in collezioni limitate e royalties sulle vendite. Il nostro obiettivo è
                  supportare e promuovere la tua arte.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="text-center">
              <h3 className="text-3xl font-black mb-6 uppercase">Non hai trovato la risposta?</h3>
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

      {/* Footer - omitted for brevity, assumes existing footer is consistent */}
        <Footer />
    </div>
  )
}
