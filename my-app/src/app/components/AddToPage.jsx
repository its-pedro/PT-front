"use client";
import React from 'react'

const AddToPage = () => {
  return (
    <>
    <button 
    onClick={() => console.log("clicado")}
    className="text-2xl text-white bg-purple-button m-3 px-16 py-2 rounded-full font-mono"
    >Login
    </button>
    </>
  )
}

export default AddToPage