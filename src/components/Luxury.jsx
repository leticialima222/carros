import iconluxury from "../assets/icon-luxury.svg"

import React from 'react'

export default function Luxury() {
    return (
        <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
        <img src={iconluxury} alt="icone dos carros luxo" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
        <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo" target="_blanck">Ver mais</a>
      </section>
    )
}