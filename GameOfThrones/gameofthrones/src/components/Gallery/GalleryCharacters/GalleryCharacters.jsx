import React from 'react';
import "./GalleryCharacters.scss";

function GalleryCharacters({list}) {
  return (
    <div className='cards'>
    {list.map((character, index) => (
        <div className='cards__card' key={index}>
          <div className='card-items'>
            <div className='cards__card--img'><img className='img-characters' src={character.image} alt="character"/></div>
            <div className='cards__card--img--p--div'> <p className='cards__card--img--p'>{character.name}</p></div>
          </div>
           
        </div>
    ) )}
    </div>
  )
}

export default GalleryCharacters