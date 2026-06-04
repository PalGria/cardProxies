# cardproxi.es

cardproxi.es is a web app for turning card images into clean, print-ready proxy PDFs in a few clicks.

Live product: https://cardproxi.es  
Hosting: Netlify

## What It Does

- Upload one or many card images
- Select target card format:
  - Standard TCG: 64 x 89 mm
  - Japanese TCG: 63 x 88 mm
  - Tarot: 70 x 120 mm
- Set the number of copies per card
- Remove cards from the batch
- Export a multi-page PDF with automatic card placement

## Why This Project Is Valuable

This product demonstrates end-to-end frontend product development:

- Product thinking: practical tool for a real card game workflow
- UI engineering: fast and simple upload-to-export flow
- Browser file handling: image ingestion and state management
- PDF generation logic: custom sizing, spacing, and pagination
- Deployment: production hosting on Netlify with a custom domain

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- jsPDF

## Local Development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Usage

1. Upload card images.
2. Choose card size.
3. Adjust copy counts in preview.
4. Click Generate PDF.
5. Print cards.pdf.

## Architecture Snapshot

```text
src/
  components/
    FileUploader.tsx
    ImagePreviewGrid.tsx
    ImagePreviewItem.tsx
    SizeSelector.tsx
  utils/
    pdfGenerator.tsx
  types/
    types.tsx
  App.tsx
```

## For Hiring Teams

If you are evaluating frontend candidates, this project highlights:

- Clean component decomposition
- Typed React patterns with TypeScript
- Practical UX decisions for throughput workflows
- Utility-focused business logic separated from UI
- Shipping discipline from local development to production deployment

## Contact

You can contact me on: 

- Portfolio: https://palgria.es
- LinkedIn: https://linkedin.com/in/jmpa
- Email: jmpalaualegria@gmail.com
