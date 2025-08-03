import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image"

const Header = () => {
  return (
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
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

            <nav className="hidden md:flex items-center space-x-6">
              {/* <Link href="/gallery">
                <Button
                  variant="outline"
                  className="border-2 border-black bg-transparent font-bold uppercase flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Torna alla Galleria</span>
                </Button>
              </Link> */}
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Galleria
              </Link>
              <Link
                href="/artists"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Artisti
              </Link>
              <Link
                href="/plaque"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                La Placca
              </Link>
              <Link
                href="/verify"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Verifica
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-bold uppercase tracking-wide"
              >
                Chi Siamo
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
  );
};

export default Header;