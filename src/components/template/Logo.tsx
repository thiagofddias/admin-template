import React from 'react'

export default function Logo() {
  return (
    <div className={`
      flex flex-col items-center justify-center
      h-10 w-10 rounded-full
      bg-white 
    `}>
      <img 
      src="/images/jarvis.png" 
      alt="Logo" 
      className="h-20 w-20 rounded-full object-cover" 
      />
    </div>
  )
}
