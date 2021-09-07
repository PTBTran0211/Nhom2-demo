import React from 'react'


import Contact from './components/Contact'
import BoxChat from './components/BoxChat'

function Home() {
    return (
        <div className="layouts">
            <div className="section__sidebar">
            </div>
            <div className="section__contact">
                <Contact />
            </div>
            <div className="section__boxchat">
                <BoxChat />
            </div>
            <div className="section__info">
            </div>
        </div>
    )
}

export default Home
