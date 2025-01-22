import { companyDataConstants } from '@/constants/data/companyData.constant'
import { Input } from '@/UI/shadcn/ui/input'
import { Button } from '@/UI/shadcn/ui/button'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export const Contact = () => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="px-4 lg:px-0">
      <div className="h-[30vh] flex  flex-col justify-center items-center gap-8">
        <h1 className="lg:text-5xl text-xl font-bold">
          Let's <span className=" underline">create</span> something together.
        </h1>
        <div className="flex gap-2">
          <Input placeholder="28softwares@gmail.com" />
          <a href={`mailto:${companyDataConstants.email}`}>
            <Button>Send Email</Button>
          </a>
        </div>
      </div>

      {/* PDF Viewer Section */}
      <div className="max-w-4xl mx-auto rounded-md border">
        {/* Header */}
        <div className="p-4 flex items-center justify-center bg-gray-100 border-b rounded-t-md">
          <h2 className="text-lg font-semibold text-gray-700">Proposal</h2>
        </div>

        {/* PDF Viewer */}
        <div
          className="flex flex-col items-center justify-between p-4 overflow-hidden"
          style={{
            height: '600px',
          }}
        >
          <Document
            onLoadSuccess={onDocumentLoadSuccess}
            file="/28Softwares_Proposal_MODIFIED.pdf"
            className="w-full flex justify-center items-center"
          >
            <Page pageNumber={pageNumber} scale={0.7} />
          </Document>
        </div>

        {/* Page Navigation */}
        <div className="flex flex-col items-center justify-center bg-gray-50 px-2 py-2">
          <div className="text-gray-600 text-sm mb-3">
            Page <span className="font-semibold">{pageNumber}</span> of{' '}
            <span className="font-semibold">{numPages || '--'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                pageNumber <= 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`}
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </Button>
            <Button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                pageNumber >= (numPages || 0)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`}
              disabled={pageNumber >= (numPages || 0)}
              onClick={nextPage}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
