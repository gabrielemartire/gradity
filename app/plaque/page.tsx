import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Shield, QrCode, Eye, Lock, Zap, CheckCircle, Tag, Phone, UserCheck, Edit, FileText } from "lucide-react"
import Link from "next/link"

export default function PlaquePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-pink-600 transition-colors font-bold tracking-wide"
                >
                gradity
              </Link>
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Galleria
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Chi Siamo
              </Link>
              <Link
                href="/verify"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Verifica
              </Link>
              <Link href="/submit">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold uppercase tracking-wide">
                  Proponi Opera
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            LA
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PLACCA</span>
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
                      src="aa.png"
                      alt="Placca sigillata"
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
          <CardHeader className="bg-black text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">Etichetta, come leggerla?</CardTitle>
          </CardHeader>
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-50 p-8 border-2 border-gray-200 mb-8">
                  <div className="bg-white p-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-bold">gradity</span>
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
                      <div className="text-center pt-2">
                        <div className="w-16 h-16 bg-black mx-auto flex items-center justify-center">
                          <QrCode className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Elementi dell'Etichetta</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        1
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
                        2
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Informazioni Opera</h4>
                        <p className="text-gray-700 font-medium">Titolo, artista e dettagli della collezione</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">Data di Certificazione</h4>
                        <p className="text-gray-700 font-medium">Momento esatto della sigillatura e certificazione</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 uppercase">QR Code di Verifica</h4>
                        <p className="text-gray-700 font-medium">
                          Codice scansionabile per verifica autenticità
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
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">Caratteristiche Speciali</CardTitle>
          </CardHeader>
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

        {/* Process */}
        <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-black text-white">
            <CardTitle className="text-3xl font-black uppercase tracking-wide">Processo di Sigillatura</CardTitle>
          </CardHeader>
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  1
                </div>
                <h4 className="text-lg font-black mb-4 uppercase">Preparazione</h4>
                <p className="text-gray-700 font-medium text-sm">
                  Le opere vengono ispezionate e preparate per la sigillatura
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  2
                </div>
                <h4 className="text-lg font-black mb-4 uppercase">Etichettatura</h4>
                <p className="text-gray-700 font-medium text-sm">
                  Vengono applicate etichetta con codice univoco e QR code
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  3
                </div>
                <h4 className="text-lg font-black mb-4 uppercase">Sigillatura</h4>
                <p className="text-gray-700 font-medium text-sm">
                  Sigillatura a caldo nella placca trasparente protettiva
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                  4
                </div>
                <h4 className="text-lg font-black mb-4 uppercase">Certificazione</h4>
                <p className="text-gray-700 font-medium text-sm">
                  Registrazione nel database e rilascio del certificato digitale
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-black mb-8 uppercase">Verifica una Placca</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Hai una placca <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gradity</span>? Verifica immediatamente la sua autenticità
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

       {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vault Art</span>
              </div>
              <p className="text-gray-400">La piattaforma per arte pop certificata e collezionabile.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Collezioni</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <Link href="/collections#autunno-2025" className="group-hover:text-lg transition-all duration-200">
                      Autunno 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                    <Link href="/collections#estate-2025" className="group-hover:text-lg transition-all duration-200">
                      Estate 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                    <Link
                      href="/collections#cyberpunk-special"
                      className="group-hover:text-lg transition-all duration-200"
                    >
                      Cyberpunk Special
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-red-600"></div>
                    <Link href="/collections#usa-special" className="group-hover:text-lg transition-all duration-200">
                      USA Special
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-500"></div>
                    <Link href="/collections" className="group-hover:text-lg transition-all duration-200">
                      Archivio Completo
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Artisti</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/submit" className="group-hover:text-lg transition-all duration-200">
                    Candidatura
                  </Link>
                  <Edit className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Community
                  </Link>
                  <UserCheck className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    Linee Guida
                  </Link>
                  <FileText className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Supporto</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/verify" className="group-hover:text-lg transition-all duration-200">
                    Verifica Opera
                  </Link>
                  <CheckCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    La Placca
                  </Link>
                  <Tag className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Contatti
                  </Link>
                  <Phone className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vault Art. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
