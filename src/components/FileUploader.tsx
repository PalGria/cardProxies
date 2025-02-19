const FileUploader = ({ onUpload }) => {
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files)
    const newImages = await Promise.all(
      files.map(file => new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve({
          src: e.target.result,
          copies: 1,
          id: Math.random().toString(36).substr(2, 9)
        })
        reader.readAsDataURL(file)
      }))
    )
    onUpload(newImages)
  }

  return (
    <label className="flex-1 cursor-pointer">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-blue-500 transition-colors">
        <span className="text-gray-600">Click to upload images</span>
      </div>
    </label>
  )
}

export default FileUploader