import React, { useState } from 'react'
import productData from '../../data/products/ewe.json'
import ImageGallery from '../components/ImageGallery'
import VariantButtons from '../components/VariantButtons'
import Accordion from '../components/Accordion'
import QuoteModal from '../components/QuoteModal'
import ModelViewer from '../components/ModelViewer'

export default function ProductPage(){
  const [selectedColor, setSelectedColor] = useState('Green')
  const [showModal, setShowModal] = useState(false)
  const [viewMode, setViewMode] = useState('photo') // 'photo' or '3d'

  const images = productData.images || {}
  const mainImage = images[selectedColor]
  const modelFile = productData.model || null

  return (
    <div className="max-w-6xl w-full grid grid-cols-12 gap-6">
      <div className="col-span-7">
        <div className="bg-white rounded border p-4">
          <div className="flex items-center gap-3 mb-4">
            <button className={`px-3 py-1 rounded ${viewMode==='photo' ? 'bg-green-900 text-white' : 'bg-white border'}`} onClick={()=>setViewMode('photo')}>Photo</button>
            <button className={`px-3 py-1 rounded ${viewMode==='3d' ? 'bg-green-900 text-white' : 'bg-white border'}`} onClick={()=>setViewMode('3d')}>3D view</button>
          </div>

          {viewMode === 'photo' ? (
            <ImageGallery src={`/images/products/ewe/${mainImage}`} alt={`${productData.title} ${selectedColor}`} />
          ) : (
            <ModelViewer src={`/models/${modelFile}`} variantName={selectedColor} />
          )}
        </div>
      </div>

      <aside className="col-span-5">
        <h1 className="text-2xl font-semibold">{productData.title}</h1>
        <p className="text-green-900 font-semibold mt-2">From {productData.price}</p>

        <div className="mt-6">
          <label className="block font-medium mb-2">Color</label>
          <VariantButtons colors={Object.keys(images)} active={selectedColor} onChange={setSelectedColor} />
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-green-900 text-white py-3 rounded font-medium"
            onClick={() => setShowModal(true)}
          >
            Enquire now
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-700">
          <p>{productData.description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <Accordion title="Product Info">
            <p className="text-sm text-gray-700">{productData.productInfo || 'Short product info goes here.'}</p>
          </Accordion>
          <Accordion title="Core Features">
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {productData.coreFeatures.map((f,i)=>(<li key={i}>{f}</li>))}
            </ul>
          </Accordion>
          <Accordion title="Additional Features">
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {productData.additionalFeatures.map((f,i)=>(<li key={i}>{f}</li>))}
            </ul>
          </Accordion>
        </div>
      </aside>

      <QuoteModal open={showModal} onClose={()=>setShowModal(false)} modelKey={productData.modelFormUrlKey} />
    </div>
  )
}
