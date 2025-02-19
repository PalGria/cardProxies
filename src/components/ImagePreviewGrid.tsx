import ImagePreviewItem from './ImagePreviewItem'

const ImagePreviewGrid = ({ images, setImages }) => {
  const updateCopies = (id, copies) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, copies: Math.max(1, copies) } : img
    ))
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
          />
        ))}
      </div>
    </div>
  )
}

export default ImagePreviewGrid