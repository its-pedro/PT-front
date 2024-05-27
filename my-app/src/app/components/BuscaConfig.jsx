"use client";
import React from 'react'

const BuscaConfig = () => {
  return (
    <>
    <form action="perfil do professor" method="get" className='px-8'>
        <label for="busca" className='text-1xl'>Buscar:</label>
        <input type="text" id="busca" name="busca"></input>
        <input type="submit" value=""></input>
    </form>
    </>
  )
}

export default BuscaConfig