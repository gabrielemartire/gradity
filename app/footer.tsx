import React from 'react';
import Link from 'next/link';
import { CheckCircle, Euro, Forward, GalleryHorizontalEnd, Instagram, Mail, MessageCircleQuestionMark, User, Users, Vault } from 'lucide-react';
import Image from "next/image"

const Header = () => {
  return (
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors font-bold tracking-wide cursor-pointer"
              >
                <Image
                  src="/purple_logo.png"
                  alt="Gradity Logo"
                  width={50}
                  height={50}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  gradity
                </h1>
              </Link>
            </div>
              <p className="text-gray-400">La piattaforma per arte pop certificata e collezionabile.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Ultime Collezioni</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                    <Link href="/gallery?collection=EST-2025" className="group-hover:text-lg transition-all duration-200">
                      Estate 2025
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-red-600"></div>
                    <Link href="/gallery?collection=AUT-2025" className="group-hover:text-lg transition-all duration-200">
                      Autunno 2025
                    </Link>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                    <Link
                      href="/collections#cyberpunk-special"
                      className="group-hover:text-lg transition-all duration-200"
                    >
                      Cyberpunk Special
                    </Link>
                  </div>
                </li>*/}
                <li className="flex items-center justify-between group hover:text-white transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    {/* <Image
                      src="/collection_AUT2025.jpg"
                      alt="AUT25"
                      width={25}
                      height={25}
                      className="object-cover"
                    /> */}
                    <Link href="/gallery?collection=EST-2026" className="group-hover:text-lg transition-all duration-200">
                      Estate 2026
                    </Link>
                  </div>
                </li> 
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Arte</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/gallery" className="group-hover:text-lg transition-all duration-200">
                    Galleria
                  </Link>
                  <GalleryHorizontalEnd className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/artists" className="group-hover:text-lg transition-all duration-200">
                    Artisti
                  </Link>
                  <User className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/verify" className="group-hover:text-lg transition-all duration-200">
                    Verifica
                  </Link>
                  <CheckCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/submit" className="group-hover:text-lg transition-all duration-200">
                    Proponi Opera
                  </Link>
                  <Forward className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/plaque" className="group-hover:text-lg transition-all duration-200">
                    la Placca
                  </Link>
                  <Vault className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Supporto</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="mailto:contatti@gradity.it" className="group-hover:text-lg transition-all duration-200">
                    Contattaci
                  </Link>
                  <Mail className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/faq" className="group-hover:text-lg transition-all duration-200">
                    FAQ
                  </Link>
                  <MessageCircleQuestionMark className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="/about" className="group-hover:text-lg transition-all duration-200">
                    Chi siamo
                  </Link>
                  <Users className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="https://www.vinted.it/member/282943677-gradity" className="group-hover:text-lg transition-all duration-200">
                    Acquista su Vinted
                  </Link>
                  <Euro className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
                <li className="flex items-center justify-start group hover:text-white transition-all duration-200 gap-2">
                  <Link href="https://www.instagram.com/gradity_art/" target="_blank" className="group-hover:text-lg transition-all duration-200">
                    Instagram
                  </Link>
                  <Instagram className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 gradity.it</p>
          </div>
        </div>
      </footer>

  );
};

export default Header;