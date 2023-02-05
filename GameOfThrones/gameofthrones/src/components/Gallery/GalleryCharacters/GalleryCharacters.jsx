import React from 'react';
import { Link } from 'react-router-dom';
import "./GalleryCharacters.scss";

function GalleryCharacters({list}) {
  return (
    <div className='cards'>
    {list.map((character, index) => (
        <div className='cards__card' key={index}>
          <div className='card-items'>
            <Link to={`/Characters/${character.name}`}><div className='cards__card--img'><img className='img-characters' src={character.image} alt="character"/></div></Link>
            <div className='cards__card--img--p--div'> <p className='cards__card--img--p'>{character.name}</p></div>
          </div>
           
        </div>
    ) )}
    </div>
  )
}

export default GalleryCharacters