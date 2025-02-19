const ImagePreviewItem = ({ image, onCopiesChange }) => (
  <div className="relative group border rounded-lg overflow-hidden shadow-sm">
    <img
      onClick={() => onCopiesChange(image.id, image.copies + 1)}
      src={image.src}
      alt="Preview"
      className="w-full h-48 object-contain bg-gray-100"
    />
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

export default ImagePreviewItem