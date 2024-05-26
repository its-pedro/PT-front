"use client";
import React from 'react'

const BuscaConfig = () => {
  return (
    <>
    <form action="perfil do professor" method="get" className='flex '>
        <label for="busca">Buscar:</label>
        <input type="text" id="busca" name="busca"></input>
        <input type="submit" value=""></input>
    </form>
    </>
  )
}

export default BuscaConfig