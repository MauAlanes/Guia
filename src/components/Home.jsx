import React from 'react'
import "../styles/Home.css"
import { Cards } from './Cards'

const suchas = [
    {
        id:"1",
        name: "Polera ploma",
        precio: "160 bs",
    },
    {
        id:"2",
        name: "Gorra Under",
        precio: "210 bs",
    },
    {
        id:"3",
        name: "Tennis negro",
        precio: "140 bs",
    },
    {
        id:"4",
        name: "Tennis verde",
        precio: "180 bs",
    }
]

function Home(props) {
    return (
        <section className='section-home'>
            {
                suchas.map(card => (
                    <Cards name={card.name} precio={card.precio} />
                ))
            }
        </section>
    )
}

export {Home}