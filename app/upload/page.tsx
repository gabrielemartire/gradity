"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Palette, Upload, ImageIcon, CheckCircle, AlertCircle, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    artistStatement: "",
  })
  const [validationErrors, setValidationErrors] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  const cardSpecs = {
    width: 63, // mm
    height: 88, // mm
    widthPx: 744, // px at 300 DPI
    heightPx: 1039, // px at 300 DPI
    ratio: 63 / 88,
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file) => {
    const errors = []

    // Check file type
    if (!file.type.startsWith("image/")) {
      errors.push("Il file deve essere un'immagine")
    }

    // Check file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      errors.push("Il file non può superare i 50MB")
    }

    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }

    // Create image to check dimensions
    const img = new window.Image()
    img.onload = () => {
      const dimensionErrors = []

      // Check minimum resolution
      if (img.width < cardSpecs.widthPx || img.height < cardSpecs.heightPx) {
        dimensionErrors.push(`Risoluzione minima richiesta: ${cardSpecs.widthPx}x${cardSpecs.heightPx}px`)
      }

      // Check aspect ratio (with some tolerance)
      const fileRatio = img.width / img.height
      const tolerance = 0.05
      if (Math.abs(fileRatio - cardSpecs.ratio) > tolerance) {
        dimensionErrors.push(
          `Proporzioni richieste: ${cardSpecs.width}x${cardSpecs.height}mm (rapporto ${cardSpecs.ratio.toFixed(2)}:1)`,
        )
      }

      setValidationErrors(dimensionErrors)

      if (dimensionErrors.length === 0) {
        setUploadedFile({
          file,
          preview: URL.createObjectURL(file),
          width: img.width,
          height: img.height,
          size: file.size,
          name: file.name,
        })
      }
    }

    img.src = URL.createObjectURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate upload
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to success page or show success message
      alert("Opera caricata con successo! Riceverai una conferma via email.")
    }, 2000)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

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

          {/* Card Specifications */}
          <Card className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide flex items-center">
                <Info className="w-6 h-6 mr-3" />
                Specifiche Carta Collezionabile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black mb-6 uppercase">Dimensioni Richieste</h3>
                  <div className="space-y-4">
                    <div className="bg-black text-white p-4">
                      <h4 className="font-black mb-2 uppercase">Dimensioni Fisiche</h4>
                      <p className="text-lg">
                        {cardSpecs.width}mm × {cardSpecs.height}mm
                      </p>
                      <p className="text-sm opacity-80">Standard carte da gioco collezionabili</p>
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
                        <ImageIcon className="w-12 h-12" />
                      </div>
                    </div>
                    <p className="mt-4 font-black text-sm uppercase">Anteprima Formato</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upload Section }
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">1. Carica la Tua Opera</CardTitle>
            </CardHeader>
            {/* <CardContent className="p-8">
              <div
                className={`border-4 border-dashed p-12 text-center transition-colors ${
                  dragActive
                    ? "border-purple-600 bg-purple-50"
                    : uploadedFile
                      ? "border-green-600 bg-green-50"
                      : "border-gray-400 bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedFile ? (
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          src={uploadedFile.preview || "/placeholder.svg"}
                          alt="Preview"
                          width={200}
                          height={200 / cardSpecs.ratio}
                          className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 border-2 border-black flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 border-2 border-black">
                      <h4 className="font-black mb-2 uppercase">File Caricato</h4>
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-600">
                        {uploadedFile.width} × {uploadedFile.height}px • {(uploadedFile.size / 1024 / 1024).toFixed(2)}
                        MB
                      </p>
                    </div>
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="border-2 border-black bg-transparent"
                    >
                      Cambia File
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Upload className="w-16 h-16 mx-auto text-gray-400" />
                    <div>
                      <h3 className="text-2xl font-black mb-4 uppercase">Trascina qui la tua opera</h3>
                      <p className="text-gray-600 mb-6">Oppure clicca per selezionare un file</p>
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase tracking-wide"
                      >
                        Seleziona File
                      </Button>
                    </div>
                  </div>
                )}

                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInput} className="hidden" />
              </div>

              {validationErrors.length > 0 && (
                <div className="mt-6 bg-red-50 border-2 border-red-500 p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black text-red-800 mb-2 uppercase">Errori di Validazione</h4>
                      <ul className="space-y-1">
                        {validationErrors.map((error, index) => (
                          <li key={index} className="text-red-700 font-medium">
                            • {error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent> */}

          {/* Upload Section */}
          <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">1. Carica la Tua Opera</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Google Form Link Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-white text-purple-600 mx-auto flex items-center justify-center font-black text-2xl">
                      📝
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-4 uppercase">Proponi la Tua Opera</h3>
                      <p className="text-lg mb-6 opacity-90">
                        Per sottoporre la tua opera alla valutazione del nostro team curatoriale, compila il modulo di
                        candidatura ufficiale.
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
                        ⚡ Il modulo include tutti i campi necessari per la valutazione: informazioni sull'opera, upload
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
                        <span className="text-yellow-800 font-black uppercase text-lg">🚧 COMING SOON 🚧</span>
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

          {/* Form Section */}
          {uploadedFile && validationErrors.length === 0 && (
            <Card className="mb-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="bg-black text-white">
                <CardTitle className="text-2xl font-black uppercase tracking-wide">2. Dettagli dell'Opera</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-black mb-3 uppercase">Titolo dell'Opera *</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Es: Neon Dreams"
                      className="text-lg h-12 border-2 border-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-black mb-3 uppercase">Descrizione *</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Descrivi la tua opera, l'ispirazione e il messaggio che vuoi trasmettere..."
                      className="min-h-32 border-2 border-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-black mb-3 uppercase">Tag / Stile</label>
                    <Input
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                      placeholder="Es: pop art, neon, urbano, digitale"
                      className="text-lg h-12 border-2 border-black"
                    />
                    <p className="text-sm text-gray-600 mt-2">Separa i tag con virgole</p>
                  </div>

                  <div>
                    <label className="block text-lg font-black mb-3 uppercase">Artist Statement</label>
                    <Textarea
                      value={formData.artistStatement}
                      onChange={(e) => handleInputChange("artistStatement", e.target.value)}
                      placeholder="Racconta il tuo processo creativo e cosa rende unica questa opera..."
                      className="min-h-32 border-2 border-black"
                    />
                  </div>

                  <div className="bg-gray-50 p-6 border-2 border-gray-300">
                    <h4 className="font-black mb-4 uppercase flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Termini di Sottomissione
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• L'opera deve essere completamente originale e di tua proprietà</li>
                      <li>• Non deve violare diritti d'autore o marchi registrati</li>
                      <li>• Il processo di selezione può richiedere fino a 30 giorni</li>
                      <li>• Le opere selezionate entreranno nella collezione stagionale</li>
                      <li>• Vault Art si riserva il diritto di utilizzare l'opera per scopi promozionali</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.title || !formData.description}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 font-black uppercase tracking-wide text-lg px-8 py-4 flex-1"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Caricamento...</span>
                        </div>
                      ) : (
                        "Sottoponi Opera"
                      )}
                    </Button>
                    <Link href="/submit">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-2 border-black bg-transparent font-black uppercase tracking-wide text-lg px-8 py-4"
                      >
                        Annulla
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Technical Requirements */}
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl font-black uppercase tracking-wide">Requisiti Tecnici</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Formato File</h4>
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>JPEG (.jpg, .jpeg)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>PNG (.png)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span>TIFF (.tiff, .tif)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-4 uppercase">Qualità</h4>
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Risoluzione: 300 DPI minimo</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>
                        Dimensioni: {cardSpecs.widthPx}×{cardSpecs.heightPx}px
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Peso massimo: 50MB</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      <span>Spazio colore: sRGB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  )
}
