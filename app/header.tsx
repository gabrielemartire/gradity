"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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
              Case Protettivo
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-bold uppercase tracking-wide px-2 py-1 transform hover:translate-x-2"
                onClick={closeMenu}
              >
                Galleria
              </Link>
              <Link
                href="/artists"
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-bold uppercase tracking-wide px-2 py-1 transform hover:translate-x-2"
                onClick={closeMenu}
              >
                Artisti
              </Link>
              <Link
                href="/plaque"
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-bold uppercase tracking-wide px-2 py-1 transform hover:translate-x-2"
                onClick={closeMenu}
              >
                Case Protettivo
              </Link>
              <Link
                href="/verify"
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-bold uppercase tracking-wide px-2 py-1 transform hover:translate-x-2"
                onClick={closeMenu}
              >
                Verifica
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-bold uppercase tracking-wide px-2 py-1 transform hover:translate-x-2"
                onClick={closeMenu}
              >
                Chi Siamo
              </Link>
              <Link href="/submit" onClick={closeMenu}>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold uppercase tracking-wide w-full mt-2 transform hover:scale-105 transition-all duration-300">
                  Proponi Opera
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;