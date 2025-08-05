import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, QrCode, Eye, Lock, Zap, Award, FileText } from "lucide-react"
import Link from "next/link"
import Header from "@/app/header"
import Footer from "@/app/footer"

export default function PlaquePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter px-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">IL CASE PROTETTIVO</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed px-4">
            Il sistema di certificazione più avanzato per arte contemporanea. Ogni opera è sigillata, protetta e
            verificabile per sempre.
          </p>
        </div>

        {/* Main Visual */}
        <Card className="mb-12 md:mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
            <div className="bg-white p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 uppercase">Tecnologia di Sigillatura</h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Materiale Premium</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Plastica trasparente di grado museale, resistente a raggi UV e invecchiamento
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Lock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Sigillatura Permanente</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Sistema di sigillatura a caldo che garantisce integrità nel tempo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Visibilità Totale</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Trasparenza cristallina che permette di ammirare opere senza compromessi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                  <div className="bg-gray-100 p-4 md:p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <img
                      src="twinpeaks.png"
                      alt="CaseTwinPeaks"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 md:p-3 font-black text-xs md:text-sm uppercase tracking-wide">
                    Esempio Reale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Label Reading Guide */}
        <Card className="mb-12 md:mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Etichetta con proporzioni corrette */}
              <div>
                <div className="bg-gray-50 p-4 md:p-8 border-2 border-gray-200 mb-6 md:mb-8">
                  {/* Etichetta rettangolare piccola, proporzione circa 3:1 */}
                  <div className="bg-white p-3 md:p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-w-sm mx-auto">
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex-shrink-0">
                        <QrCode className="w-8 h-8 md:w-12 md:h-12 text-black" />
                      </div>
                      <div className="text-center min-w-0 flex-1">
                        <div className="text-sm md:text-lg font-black mb-1">AUT25-001</div>
                        <div className="text-xs md:text-sm font-bold">TWIN PEAKS</div>
                        <div className="text-xs text-gray-600 truncate">Dale Cooper</div>
                      </div>
                      <div className="flex-shrink-0">
                        <Award className="w-8 h-8 md:w-12 md:h-12 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase">{`L'etichetta del case protettivo`}</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        <Award className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Codice Univoco</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Identificativo unico formato da stagione e numero progressivo (es. AUT25-001)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Informazioni Opera</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">Titolo, artista e dettagli della collezione</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paper Certificate */}
        <Card className="mb-12 md:mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                {/* Certificato A4 con proporzioni corrette (1:1.414) */}
                <div>
                  <div className="bg-gray-50 p-4 md:p-8 border-2 border-gray-200 mb-6 md:mb-8">
                    {/* Container A4 con aspect ratio corretto */}
                    <div className="bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-w-xs mx-auto" style={{ aspectRatio: '1/1.414' }}>
                      <div className="p-4 md:p-6 h-full flex flex-col justify-between font-mono text-xs md:text-sm">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 md:w-6 md:h-6 text-black" />
                            <span className="font-bold text-xs md:text-sm">gradity</span>
                          </div>
                        </div>
                        
                        <div className="text-center flex-1 flex flex-col justify-center space-y-2 md:space-y-3">
                          <div className="text-lg md:text-2xl font-black">AUT25-001</div>
                          <div className="text-sm md:text-lg font-bold">TWIN PEAKS</div>
                          <div className="text-gray-600 text-xs md:text-sm">Dale Cooper</div>
                        </div>
                        
                        <div className="border-t pt-2 space-y-1 text-xs">
                          <div>Collezione: Autunno 2025</div>
                          <div>Sigillato: 15/10/2025</div>
                          <div>Edizione: 1/1</div>
                        </div>
                        
                        <div className="text-center pt-2">
                          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 mx-auto flex items-center justify-center border border-gray-300">
                            <QrCode className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 md:p-3 font-black text-xs md:text-sm uppercase tracking-wide">
                  Formato A4
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase">Certificato di autenticità</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 font-medium leading-relaxed">
                    {`Oltre alla placca sigillata, ogni opera d'arte Gradity è accompagnata da un certificato di
                    autenticità cartaceo in formato A4. Questo documento premium è la tua prova tangibile e definitiva
                    dell'originalità e della provenienza dell'opera.`}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                    {`Viene stampato su carta di alta qualità e inviato insieme all'opera, garantendo un'esperienza di
                    collezionismo completa e sicura.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase">Cosa Include</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Dettagli Completi Opera</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Titolo, artista, collezione, dimensioni, materiali e numero di edizione.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Numero di Serie Univoco</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Corrisponde al codice sulla placca per una doppia verifica.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-lg mb-2 uppercase">Firma Digitale Gradity</h4>
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          Conferma ufficiale della certificazione da parte di Gradity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Features */}
        <Card className="mb-12 md:mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6 border-2 border-black">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase">Anti-Contraffazione</h4>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Sistema di sicurezza integrato che rende impossibile la falsificazione
                </p>
              </div>
              <div className="text-center p-4 md:p-6 border-2 border-black">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase">Protezione UV</h4>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Materiale speciale che protegge opere dai raggi ultravioletti
                </p>
              </div>
              <div className="text-center p-4 md:p-6 border-2 border-black md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <QrCode className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase">Verifica Istantanea</h4>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  QR code collegato al database per autenticità opera
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-20 px-4">
          <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 uppercase">Verifica Opera</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 font-medium">
            Hai un Case Protettivo <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span>? Verifica immediatamente la sua autenticità
          </p>
          <Link href="/verify">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black uppercase tracking-wide text-base md:text-lg px-8 md:px-12 py-3 md:py-4 w-full sm:w-auto"
            >
              Verifica Ora
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}