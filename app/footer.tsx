import { Edit, FileText, Link, Palette, UserCheck } from "lucide-react";

return (
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
)