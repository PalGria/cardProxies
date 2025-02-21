import { jsPDF } from 'jspdf'
import { Image } from '../types/types'


const sizeMap: { [key: string]: { width: number; height: number } } = {
  '64x89': { width: 64, height: 89 },
  '63x88': { width: 63, height: 88 },
  '70x120': { width: 70, height: 120 }
}

export const generatePDF = (images: Image[], selectedSize: string) => {
  if (!images?.length) return alert('Please upload some images first!')

  const doc = new jsPDF()
  const { width, height } = sizeMap[selectedSize]
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  
  let x = 3, y = 3

  images.forEach(({ src, copies }) => {
    if(!src || typeof src !== 'string') return
    Array.from({ length: copies }).forEach(() => {
      if (x + width > pageWidth) {
        x = 3
        y += height + 3
      }
      
      if (y + height > pageHeight) {
        doc.addPage()
        x = 3
        y = 3
      }

      doc.addImage(src, 'JPEG', x, y, width, height)
      x += width + 3
    })
  })

  doc.save('cards.pdf')
}