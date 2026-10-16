import React, { useRef, useEffect } from 'react'

export default function ModelViewer({src, variantName}){
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    // update src & variantName when props change
    try{
      if(src) el.setAttribute('src', src)
      if(variantName) el.setAttribute('variant-name', variantName)
    }catch(err){ console.warn('model-viewer set attribute error', err) }
  },[src, variantName])

  return (
    <div className="w-full h-[520px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
      <model-viewer
        ref={ref}
        src={src}
        alt="3D model"
        camera-controls
        interaction-prompt="auto"
        exposure="1"
        style={{width:'100%', height:'100%'}}
      ></model-viewer>
    </div>
  )
}
