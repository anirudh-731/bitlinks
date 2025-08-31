"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center px-4 text-white relative">
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-6 items-center">
        <Link href="/"><li className="hover:text-gray-200">Home</li></Link>
        <Link href="/about"><li className="hover:text-gray-200">About</li></Link>
        <Link href="/shorten"><li className="hover:text-gray-200">Shorten</li></Link>
        <li className="flex gap-3">
          <a
            href="https://github.com/anirudh-731"
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold">GitHub</button>
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}  
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-700 flex flex-col items-center gap-4 py-4 md:hidden shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}>Shorten</Link>
         
          <a
            href="https://github.com/anirudh-731"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}>
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-1 font-bold">GitHub</button>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
