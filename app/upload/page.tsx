"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Vault, Info, Eye, CheckCircle, Shield, DollarSign, Truck } from "lucide-react"
import Header from "@/app/header"
import Footer from "@/app/footer"
import Link from "next/link"


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
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2">
          <div className="bg-white p-4">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Dimensioni Opera</h3>
                  <div className="space-y-4">
                    <div className="bg-black text-white p-4">
                      <h4 className="font-black mb-2 uppercase">Dimensioni Fisiche</h4>
                      <p className="text-lg">
                        {cardSpecs.width}mm × {cardSpecs.height}mm
                      </p>
                      <p className="text-sm opacity-80">Identiche alle carte da gioco collezionabili</p>
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
            </div>
            </div>
          </Card>

          {/* Carica la Tua Opera */}
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Google Form Link Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center space-y-6">

                    <div>
                      <h3 className="text-2xl font-black mb-4 uppercase">Proponi la Tua Opera</h3>
                      <p className="text-lg mb-6 opacity-90">
                        Per sottoporre la tua opera alla valutazione del nostro team curatoriale, compila il modulo di
                        candidatura ufficiale poi scorri giù per scoprire i successivi passaggi.
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

        {/* Timeline Process */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-center mb-12 uppercase">Dal Concept alla vendita</h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">1</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <Upload className="w-6 h-6 mr-3 text-purple-600" />
                        <h4 className="text-xl font-black uppercase">Proposta Opera</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">giorno 0</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {`L'artista invia una foto della sua opera (completatta o in progresso) tramite il nostro sistema, compilando tutti i dettagli
                        richiesti: titolo, descrizione, statement artistico e specifiche tecniche. 
                        N.B.: è possibile inserire watermark.`}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">2</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <Eye className="w-6 h-6 mr-3 text-purple-600" />
                        <h4 className="text-xl font-black uppercase">Valutazione Curatoriale</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">giorno 1-3</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Gradity valuta secondo criteri di originalità, qualità tecnica,
                        coerenza stilistica e potenziale commerciale. Feedback dettagliato per ogni proposta.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">3</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <Truck className="w-6 h-6 mr-3 text-purple-600" />
                        <h4 className="text-xl font-black uppercase">Spedizione Opera a Gradity</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">tempo tecnico di spedizione</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Se selezionata, sarà possibile inviare fisicamente il prodotto disegnato e dipinto a Gradity per la certificazione.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">4</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="w-6 h-6 mr-3 text-purple-600" />
                        <h4 className="text-xl font-black uppercase">Certificazione e Sigillatura</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">entro 3 giorni</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        Appena riceviamo la tua opera, essa sarà etichettata con codice univoco, quindi sigillata nella placca
                        trasparente protettiva. In concomitanza avverrà la registrazione nel database di autenticità.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">4</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                        <h4 className="text-xl font-black uppercase">Messa in vendita</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">data apertura della Collezione</Badge>
                      </div>
                      <p className="text-gray-700 font-medium mb-4">
                        Una volta aperte le vendite delle opere, i compratori potrenno acquistare le opere tramite vinted, agli artisti sarà inviato un resoconto dettagliato finale.
                      </p>
                      {/* Financial Breakdown Table */}
                      <div className="bg-gray-50 border-2 border-gray-300 p-4">
                        <h5 className="font-black text-sm uppercase mb-4 text-center">
                          Esempio Calcolo Guadagni (Prezzo Vendita: €100)
                        </h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between py-1 border-b border-gray-200">
                              <span className="font-medium">
                                Spedizione della tua opera a <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span>   
                              </span>
                            <div className="flex items-center">
                                <Link href="https://postedeliveryweb-retail.poste.it/postedeliveryweb/retail">
                                  <Info className="w-4 h-4 mr-2 font-bold text-purple-600" />
                                </Link>
                            <span className="font-bold text-purple-600">da €2</span>
                            </div>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gray-200">
                            <span className="font-medium">Commissioni per la Certificazione (10%)</span>
                            <span className="font-bold text-red-600">-€10</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gray-200">
                            <span className="font-medium">Marketing & Promozione (5%)</span>
                            <span className="font-bold text-red-600">-€5</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gray-200">
                            <span className="font-medium">Costi Commissioni Vinted/ Spedizione</span>
                            <span className="font-bold text-gray-600">a spese del compratore</span>
                          </div>
                          <div className="flex justify-between py-2 bg-gradient-to-r from-purple-100 to-pink-100 px-2 border-2 border-purple-400 font-black text-lg">
                            <span className="uppercase">Il Tuo Guadagno (~85%)</span>
                            <span className="text-purple-600">€85</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">6</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <Truck className="w-6 h-6 mr-3 text-purple-600" />
                        <h4 className="text-xl font-black uppercase">Spedizione verso il compratore</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">1-2 giorni</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {`Gradity si occupa della spedizione sicura dell'opera al compratore, garantendo tracciamento e
                        consegna rapida. Il compratore riceve l'opera con certificato di autenticità incluso.`}
                      </p>
                    </div>
                  </div>

                  {/* Step 7 */}
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-xl">7</span>
                    </div>
                    <div className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                        <h4 className="text-xl font-black uppercase">Royalties e chiusura del contratto</h4>
                        <Badge className="ml-auto bg-pink-100 text-gray-800">il prima possibile</Badge>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {`Una volta completata la vendita, Gradity trasferisce le royalties all'artista e chiude il contratto.
                        L'artista riceve un resoconto dettagliato delle vendite e dei guadagni.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Box */}
              <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <h4 className="text-2xl font-black mb-4 uppercase">Tempo Totale del Processo</h4>
                  <div className="text-4xl font-black mb-4">10 giorni lavorativi</div>
                  <p className="text-lg opacity-90">
                    {`Dall'acquisto della tua opera post apertura della collezione al pubblicio`}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        </div>
      </div>

      <Footer />
      
    </div>
  )
}
