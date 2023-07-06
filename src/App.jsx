import {useState} from 'react'
import './App.css'  //se le dice que importe el css para esta App y tiene el mismo nombre
import { TwitterFollowCard } from './TwitterFollowCard.jsx' //importe funcion TwitterFollowCard de archivo jsx del mismo nombre

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App(){ 
    return(
         <section className="App">  
         {
         users.map(user => {
            const {userName, name, isFollowing} = user
            return (
                <TwitterFollowCard  
                 userName={userName}
                 initialisFollowing={isFollowing}>
                {name}
                </TwitterFollowCard>        
                )
            })
        }
        </section>
    )

}