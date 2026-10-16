import React from 'react'

export default function VariantButtons({colors, active, onChange}){
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((c)=> (
        <button
          key={c}
          onClick={()=>onChange(c)}
          aria-pressed={active===c}
          className={`w-10 h-10 rounded border ${active===c ? 'ring-2 ring-green-700' : ''}`}
          title={c}
        >
          <span className="sr-only">{c}</span>
          <div className={`w-full h-full rounded`} style={{background: getSwatch(c)}} />
        </button>
      ))}
    </div>
  )
}

function getSwatch(name){
  switch(name.toLowerCase()){
    case 'green': return '#1f6f3b'
    case 'black': return '#111827'
    case 'white': return '#f8fafc'
    case 'cream': return '#e9f2e9'
    default: return '#d1d5db'
  }
}
