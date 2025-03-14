'use client'

import { useState } from 'react'

export function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <button 
      onClick={copyEmail}
      className="text-primary dark:text-primary/90 font-bold hover:underline cursor-pointer"
    >
      {email} {copied && <span className="text-green-500 ml-1">(Copied!)</span>}
    </button>
  )
} 