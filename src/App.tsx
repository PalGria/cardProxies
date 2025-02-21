import { useState } from 'react'
import FileUploader from './components/FileUploader'
import SizeSelector from './components/SizeSelector'
import ImagePreviewGrid from './components/ImagePreviewGrid'
import { generatePDF } from './utils/pdfGenerator'
import { Image } from './types/types'
import logo from './assets/logo.svg'
const sizeOptions = [
  { value: '64x89', label: 'Standard TCG (6.4cm x 8.9cm)' },
  { value: '63x88', label: 'Japanese TCG (6.3cm x 8.8cm)' },
  { value: '70x120', label: 'Tarot (7.0cm x 12.0cm)' },
]

export default function App() {
  const [images, setImages] = useState<Image[]>([])
  const [selectedSize, setSelectedSize] = useState('64x89')

  const handleImagesUpload = (newImages: Image[]) => {
    setImages((prev: Image[]) => [...prev, ...newImages])
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8"></div>

        <div className="flex justify-center mb-1">
          <img src={logo} alt="Title Image" className="h-24" />
        </div>
        <h3 className="text-xl font-bold text-gray-500 mb-8 text-center">
          Make your proxies of any card game!
        </h3>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <FileUploader onUpload={handleImagesUpload} />
            <SizeSelector
              options={sizeOptions}
              selectedValue={selectedSize}
              onChange={setSelectedSize}
            />
          </div>

          <button
            onClick={() => generatePDF(images, selectedSize)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Generate PDF
          </button>
        </div>

        <ImagePreviewGrid images={images} setImages={setImages} />

        {
          images.length > 12 &&
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 mt-8">
            <button
              onClick={() => generatePDF(images, selectedSize)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Generate PDF
            </button>
          </div>
          }
      </div>
    </div>
  )
}