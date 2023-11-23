'use client'
import { useEffect, useState } from 'react'

async function getPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  const data = await res.json()

  return data
}
export default function PokeAPI() {
  const [pokemon, setPokemon] = useState<any>([])
  getPokemon()
  return (
    <div className="flex h-screen w-screen  flex-col items-center overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-5 text-zinc-50">
      <div className="mx-auto  h-3/4 w-3/4 flex-col rounded-lg bg-zinc-100/50 p-5 text-zinc-900"></div>
    </div>
  )
}

/* 
https://pokeapi.co/api/v2/pokemon/ditto */
