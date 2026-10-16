import React, { useEffect, useState } from 'react'

const WIX_FORM_URLS = {
  'Ewe.glb': 'https://blacksheepcampers.wixforms.com/f/7516869375056413788',
  'Twin%20Bench.glb': 'https://blacksheepcampers.wixforms.com/f/7516871135326110811',
  'Belted%20Ewe.glb': 'https://blacksheepcampers.wixforms.com/f/7516871286258140321'
}

export default function QuoteModal({open, onClose, modelKey}){
  const [iframeLoaded, setIframeLoaded] = useState(false)
  useEffect(()=>{
    setIframeLoaded(false)
  },[open, modelKey])

  if(!open) return null

  const url = WIX_FORM_URLS[modelKey] || WIX_FORM_URLS['Twin%20Bench.glb']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white max-w-4xl w-[92%] h-[86%] rounded shadow-lg overflow-hidden relative">
        <button className="absolute right-4 top-4 p-2 border rounded" onClick={onClose}>Close</button>
        {!iframeLoaded && <div className="absolute inset-0 flex items-center justify-center bg-white/90">Loading form…</div>}
        <iframe
          title="Quote form"
          src={url}
          className="w-full h-full"
          onLoad={()=>setIframeLoaded(true)}
        />
      </div>
    </div>
  )
}
