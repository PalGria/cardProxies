import { Image } from '../types/types'

interface ImagePreviewItemProps {
  image: Image
  onCopiesChange: (id: string, copies: number) => void
  onRemove: (id: string) => void
}

const ImagePreviewItem = ({ image, onCopiesChange, onRemove } : ImagePreviewItemProps) => {
  if (!image.src || typeof image.src !== 'string') return null
  return (
  <div className="relative group border rounded-lg overflow-hidden shadow-sm">
    <img
      onClick={() => onCopiesChange(image.id, image.copies + 1)}
      src={image.src}
      alt="Preview"
      className="w-full h-48 object-contain bg-gray-100"
    />
    <button
      onClick={() => onRemove(image.id)}
      className="absolute top-1 right-1 text-white bg-red-500 hover:bg-red-700 p-1 rounded-full"
    >
      &times;
    </button>
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex items-center justify-center">
      <div className="flex items-center">
        <button
          onClick={() => onCopiesChange(image.id, image.copies - 1)}
          className="text-white bg-red-500 hover:bg-red-700 px-5 py-1 font-bold rounded"
        >
          -
        </button>
        <span className="text-white mx-2">{image.copies}</span>
        <button
          onClick={() => onCopiesChange(image.id, image.copies + 1)}
          className="text-white bg-green-500 hover:bg-green-700 px-5 py-1 font-bold rounded"
        >
          +
        </button>
      </div>
    </div>
  </div>
)
}
export default ImagePreviewItem