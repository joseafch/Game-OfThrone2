import React, { useContext } from 'react';
import "./GalleryCharacters.scss";
import { Link } from 'react-router-dom';
import { MyLangContext } from '../../../context/myLangContext';


function GalleryCharacters({list}) {
  const {t}=useContext(MyLangContext)
  return (
    <div className='cards'>
    {list.length>0 && list.map((character, index) => (
        <div className='cards__card' key={index}>
        <Link to={`/Characters/${character.name}`} > <div className='card-items'>
        <div className='cards__card--img'><img className='img-characters' src={character.image} alt="character"/></div> 
            <div className='cards__card--img--p--div'> <p className='cards__card--img--p'>{character.name}</p></div>
          </div></Link>
           
        </div>
    ) )}
    </div>
  )
}

export default GalleryCharacters