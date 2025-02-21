import ImagePreviewItem from './ImagePreviewItem'
import { Image } from '../types/types'

interface ImagePreviewGridProps {
  images: Image[]
  setImages: React.Dispatch<React.SetStateAction<Image[]>>; // ✅ Corrected type
}

const ImagePreviewGrid = ({ images, setImages }: ImagePreviewGridProps) => {

  const updateCopies = (id: string, copies: number) => {
    if (copies < 1) { removeImage(id) }
    else {
      setImages((prev: Image[]) =>
        prev.map((img: Image) =>
          img.id === id ? { ...img, copies: Math.max(1, copies) } : img
        )
      )
    }
  }

  const removeImage = (id: string) => {
    setImages((prev: Image[]) => prev.filter((img: Image) => img.id !== id))
  }

  if (!images.length) return null

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Preview</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImagePreviewItem
            key={image.id}
            image={image}
            onCopiesChange={updateCopies}
            onRemove={removeImage}
          />
        ))}
      </div>
    </div>
  )
}

export default ImagePreviewGrid