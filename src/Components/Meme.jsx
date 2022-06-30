import React from 'react'
import '../App.css'
import memeData from '../memeData'

export const Meme = () => {

  const [memeImage, setMemeImage] = React.useState("")

  // function getMemeImage () {
  //   const memesArray = memeData.data.memes
  //   const randomImage = Math.floor(Math.random() * memesArray.length)
  //   setMemeImage(memesArray[randomImage].url)
  // }

  const getMemeImage = () => {
    const memesArray = memeData.data.memes;
    const randomImage = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomImage].url)
  }

  return (
    <main>
        <div className='Form' action="">
            <input className='Form-Input' type="text" placeholder='Top Text' />
            <input className='Form-Input' type="text" placeholder='Bottom Text' />

            <button onClick={getMemeImage} className='Form-Button'>Get Some Meme Emoji</button>

            <img className='meme--image' src={memeImage} alt="" />
        </div>
    </main>
  )
}
