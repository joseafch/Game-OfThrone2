import React from 'react';
import "./GalleryHouses.scss";

function GalleryHouses({list2}) {
  return (
    <div className='div-padre'>
    {list2.map((houses, index) => (
        <figure className='card' key={index}>
            {houses.image ?<img src={houses.image} alt="houses"/> :<img src='https://cdn-icons-png.flaticon.com/512/1912/1912612.png' alt="houses"/> }
          <div> <p>{houses.name}</p>
           <p>{houses.sigil}</p></div> ; 
        </figure>
    ) )}
    </div>
  )
}

export default GalleryHouses