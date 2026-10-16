import React, { useState } from 'react'

export default function Accordion({title, children}){
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t pt-3">
      <button className="w-full flex items-center justify-between text-sm font-semibold" onClick={()=>setOpen(!open)}>
        <span>{title}</span>
        <span className="text-green-700">{open ? '-' : '+'}</span>
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  )
}
