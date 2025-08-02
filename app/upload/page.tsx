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
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              INVIA LA TUA
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">OPERA</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Inviaci la foto della tua opera nel formato carta da gioco collezionabile per la valutazione
            </p>
          </div>

          {/* Specifiche Carta Collezionabile */}
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2">
          <div className="bg-white p-4">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase">L'Opera che ci invierai:</h3>
                  <div className="space-y-4">
                    <div className="bg-black text-white p-4">
                      <h4 className="font-black mb-2 uppercase text-sm sm:text-base">Le Dimensioni</h4>
                      <p className="text-base sm:text-lg">{cardSpecs.width}mm × {cardSpecs.height}mm</p>
                      <p className="text-xs sm:text-sm opacity-80">Identiche alle carte da gioco collezionabili</p>
                    </div>
                    <div className="bg-gray-100 p-4 border-2 border-black">
                      <h4 className="font-black mb-2 uppercase text-sm sm:text-base">La "tela"</h4>
                      <p className="text-base sm:text-lg">{`Puoi dipingere su qualsiasi supporto`}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{`tela da pittura, cartoncino, foglio della stampante, carta fotografica`}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 border-2 border-black">
                      <h4 className="font-black mb-2 uppercase text-sm sm:text-base">La tecnica</h4>
                      <p className="text-base sm:text-lg">{`Puoi usare qualsiasi tecnica`}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{`acquerello, inchiostro, matita, pastelli, acrilico, olio, collage, mista`}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-gray-100 p-4 sm:p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div
                      className="bg-white border-2 border-gray-300 mx-auto"
                      style={{
                        width: "120px",
                        height: `${120 / cardSpecs.ratio}px`,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Vault className="w-8 sm:w-12 h-8 sm:h-12" />
                      </div>
                    </div>
                    <p className="mt-4 font-black text-xs sm:text-sm uppercase">Anteprima Formato</p>
                  </div>
                </div>
              </div>
            </CardContent>
            </div>
            </div>
          </Card>

          {/* Carica la Tua Opera */}
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-4 sm:p-8">
              <div className="space-y-8">
                {/* Google Form Link Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-8 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center space-y-6">

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase">Proponi la Tua Opera</h3>
                      <p className="text-base sm:text-lg mb-6 opacity-90">
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
                        className="bg-white text-purple-600 hover:bg-gray-100 font-black uppercase tracking-wide text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                      >
                        Modulo Candidatura
                      </Button>
                    </a>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium">
                        Il modulo include tutti i campi necessari per la valutazione: informazioni riguardo la proposta artistica, upload
                        file, dati artista e dichiarazioni di originalità.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coming Soon Section */}
                <div className="border-4 border-dashed border-gray-400 p-6 sm:p-12 text-center bg-gray-50">
                  <div className="space-y-6">
                    <Upload className="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-gray-400" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase text-gray-600">Upload Diretto</h3>
                      <div className="bg-yellow-100 border-2 border-yellow-400 p-3 sm:p-4 mb-4 inline-block">
                        <span className="text-yellow-800 font-black uppercase text-base sm:text-lg">COMING SOON</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 font-medium">
                        Stiamo sviluppando un sistema di upload diretto che permetterà di caricare le opere direttamente
                        sulla piattaforma con validazione automatica delle specifiche tecniche.
                      </p>
                      <div className="bg-white p-4 border-2 border-gray-300 max-w-md mx-auto">
                        <h4 className="font-black mb-2 uppercase text-xs sm:text-sm">Funzionalità in Arrivo:</h4>
                        <ul className="text-xs sm:text-sm text-gray-600 space-y-1 text-left">
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

        {/* Timeline Process - Mobile Optimized */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-4 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-center mb-8 sm:mb-12 uppercase">Dal Concept alla vendita</h3>

              <div className="relative">
                {/* Desktop Timeline Line */}
                <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                
                {/* Mobile Timeline Line */}
                <div className="sm:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>

                <div className="space-y-6 sm:space-y-12">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">1</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Upload className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Proposta Opera</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">giorno 0</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        {`L'artista invia una foto della sua opera (completatta o in progresso) tramite il nostro sistema, compilando tutti i dettagli
                        richiesti: titolo, descrizione, statement artistico e specifiche tecniche. 
                        N.B.: è possibile inserire watermark.`}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">2</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Eye className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Valutazione Curatoriale</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">giorno 1-3</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Gradity valuta secondo criteri di originalità, qualità tecnica,
                        coerenza stilistica e potenziale commerciale. Feedback dettagliato per ogni proposta.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">3</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Truck className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Spedizione Opera a Gradity</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">tempo tecnico di spedizione</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Se selezionata, sarà possibile inviare fisicamente il prodotto disegnato e dipinto a Gradity per la certificazione.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">4</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Shield className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Certificazione e Sigillatura</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">entro 3 giorni</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Appena riceviamo la tua opera, essa sarà etichettata con codice univoco, quindi sigillata nella placca
                        trasparente protettiva. In concomitanza avverrà la registrazione nel database di autenticità.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">5</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <CheckCircle className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-green-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Messa in vendita</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">data apertura della Collezione</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium mb-4">
                        Una volta aperte le vendite delle opere, i compratori potrenno acquistare le opere tramite vinted, agli artisti sarà inviato un resoconto dettagliato finale.
                      </p>
                      {/* Financial Breakdown Table - Mobile Optimized */}
                      <div className="bg-gray-50 border-2 border-gray-300 p-3 sm:p-4">
                        <h5 className="font-black text-xs sm:text-sm uppercase mb-4 text-center">
                          Esempio Calcolo Guadagni (Prezzo Vendita: €100)
                        </h5>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-200">
                            <span className="font-medium mb-1 sm:mb-0">
                              Spedizione della tua opera a <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span>   
                            </span>
                            <div className="flex items-center">
                              <Link href="https://postedeliveryweb-retail.poste.it/postedeliveryweb/retail">
                                <Info className="w-3 sm:w-4 h-3 sm:h-4 mr-2 font-bold text-purple-600" />
                              </Link>
                              <span className="font-bold text-purple-600">da €2</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-200">
                            <span className="font-medium mb-1 sm:mb-0">Commissioni per la Certificazione (10%)</span>
                            <span className="font-bold text-red-600">-€10</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-200">
                            <span className="font-medium mb-1 sm:mb-0">Marketing & Promozione (5%)</span>
                            <span className="font-bold text-red-600">-€5</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-200">
                            <span className="font-medium mb-1 sm:mb-0">Costi Commissioni Vinted/ Spedizione</span>
                            <span className="font-bold text-gray-600">a spese del compratore</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between py-3 bg-gradient-to-r from-purple-100 to-pink-100 px-3 border-2 border-purple-400 font-black text-base sm:text-lg">
                            <span className="uppercase mb-1 sm:mb-0">Il Tuo Guadagno (~85%)</span>
                            <span className="text-purple-600">€85</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">6</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Truck className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Spedizione verso il compratore</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">1-2 giorni</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        {`Gradity si occupa della spedizione sicura dell'opera al compratore, garantendo tracciamento e
                        consegna rapida. Il compratore riceve l'opera con certificato di autenticità incluso.`}
                      </p>
                    </div>
                  </div>

                  {/* Step 7 */}
                  <div className="flex items-start space-x-4 sm:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-black text-sm sm:text-xl">7</span>
                    </div>
                    <div className="flex-1 bg-white border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <DollarSign className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3 text-green-600" />
                          <h4 className="text-base sm:text-xl font-black uppercase">Royalties e chiusura del contratto</h4>
                        </div>
                        <Badge className="self-start sm:ml-auto bg-pink-100 text-gray-800 text-xs">il prima possibile</Badge>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        {`Una volta completata la vendita, Gradity trasferisce le royalties all'artista e chiude il contratto.
                        L'artista riceve un resoconto dettagliato delle vendite e dei guadagni.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Box - Mobile Optimized */}
              <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-8 text-white border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-black mb-4 uppercase">Tempo Totale del Processo</h4>
                  <div className="text-2xl sm:text-4xl font-black mb-4">10 giorni lavorativi</div>
                  <p className="text-sm sm:text-lg opacity-90">
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