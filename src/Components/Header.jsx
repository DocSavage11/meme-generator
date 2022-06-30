import React from 'react'
import "../App.css"
export const Header = () => {
  return (
    <header>
        <nav className="Nav-Bar">
            <div className="Logo">
                <img id="TrollFace" src={require('../Assests/Images/TrollFace.webp')} alt="" />
                <h1 id="Brand">Meme Generator</h1>
            </div>

            <p id="Project-Definition">React Course - Project 3</p>
        </nav>
  </header>
  )
}
