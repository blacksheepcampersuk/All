import React from 'react'

export default function ImageGallery({src, alt}){
  return (
    <div className="w-full h-[520px] flex items-center justify-center bg-green-50 rounded">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  )
}
