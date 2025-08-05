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

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent p-2">IL CASE PROTETTIVO</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Il sistema di certificazione più avanzato per arte contemporanea. Ogni opera è sigillata, protetta e
            verificabile per sempre.
          </p>
        </div>

        {/* Main Visual */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2">
            <div className="bg-white p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-8 uppercase">Tecnologia di Sigillatura</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Materiale Premium</h4>
                        <p className="text-gray-700 font-medium">
                          Plastica trasparente di grado museale, resistente a raggi UV e invecchiamento
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Sigillatura Permanente</h4>
                        <p className="text-gray-700 font-medium">
                          Sistema di sigillatura a caldo che garantisce integrità nel tempo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Visibilità Totale</h4>
                        <p className="text-gray-700 font-medium">
                          Trasparenza cristallina che permette di ammirare opere senza compromessi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gray-100 p-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <img
                      src="twinpeaks.png"
                      alt="CaseTwinPeaks"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 font-black text-sm uppercase tracking-wide">
                    Esempio Reale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Label Reading Guide */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Certificato */}
              <div>
                <div className="bg-gray-50 p-8 border-2 border-gray-200 mb-8">
                  <div className="bg-white p-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-row items-center justify-between">
                    <div>
                      <QrCode className="w-16 h-16 text-black-600 mx-auto" />
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-black mb-2">AUT25-001</div>
                        <div className="text-lg font-bold">TWIN PEAKS</div>
                        <div className="text-gray-600">Dale Cooper</div>
                      </div>
                    </div>
                    <div>
                      <Award className="w-16 h-16 text-black-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">{`L'etichetta del case protettivo`}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Codice Univoco</h4>
                        <p className="text-gray-700 font-medium">
                          Identificativo unico formato da stagione e numero progressivo (es. AUT25-001)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Informazioni Opera</h4>
                        <p className="text-gray-700 font-medium">Titolo, artista e dettagli della collezione</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paper Certificate */}
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                {/* Certificato */}
                <div>
                  <div className="bg-gray-50 p-8 border-2 border-gray-200 mb-8">
                    <div className="bg-white p-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div className="space-y-4 font-mono text-sm">
                        <div className="flex justify-between border-b pb-2">
                          <div className="flex items-center space-x-2">
                            <Award className="w-6 h-6 text-black-600 mx-auto" />
                            <span className="font-bold">gradity</span>
                          </div>
                          <span></span>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black mb-2">AUT25-001</div>
                          <div className="text-lg font-bold">TWIN PEAKS</div>
                          <div className="text-gray-600">Dale Cooper</div>
                        </div>
                        <div className="border-t pt-2 space-y-1 text-xs">
                          <div>Collezione: Autunno 2025</div>
                          <div>Sigillato: 15/10/2025</div>
                          <div>Edizione: 1/1</div>
                        </div>
                        <div className="text-center m-42 pt-2">
                          <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center">
                            {/* <Paperclip className="w-12 h-12 text-white" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 font-black text-sm uppercase tracking-wide">
                  Formato A4
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Certificato di autenticità</h3>
                  <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                    {`Oltre alla placca sigillata, ogni opera d'arte Gradity è accompagnata da un certificato di
                    autenticità cartaceo in formato A4. Questo documento premium è la tua prova tangibile e definitiva
                    dell'originalità e della provenienza dell'opera.`}
                  </p>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    {`Viene stampato su carta di alta qualità e inviato insieme all'opera, garantendo un'esperienza di
                    collezionismo completa e sicura.`}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Cosa Include</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Dettagli Completi Opera</h4>
                        <p className="text-gray-700 font-medium">
                          Titolo, artista, collezione, dimensioni, materiali e numero di edizione.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Numero di Serie Univoco</h4>
                        <p className="text-gray-700 font-medium">
                          Corrisponde al codice sulla placca per una doppia verifica.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Firma Digitale Gradity</h4>
                        <p className="text-gray-700 font-medium">
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
        <Card className="mb-20 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border-2 border-black">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Anti-Contraffazione</h4>
                <p className="text-gray-700 font-medium">
                  Sistema di sicurezza integrato che rende impossibile la falsificazione
                </p>
              </div>
              <div className="text-center p-6 border-2 border-black">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Protezione UV</h4>
                <p className="text-gray-700 font-medium">
                  Materiale speciale che protegge opere dai raggi ultravioletti
                </p>
              </div>
              <div className="text-center p-6 border-2 border-black">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Verifica Istantanea</h4>
                <p className="text-gray-700 font-medium">
                  QR code collegato al database per autenticità opera
                </p>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-black mb-8 uppercase">Verifica Opera</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Hai un Case Protettivo <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span>? Verifica immediatamente la sua autenticità
          </p>
          <Link href="/verify">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black uppercase tracking-wide text-lg px-12 py-4"
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
