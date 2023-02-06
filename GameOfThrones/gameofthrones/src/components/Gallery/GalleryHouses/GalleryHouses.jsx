import React from 'react';
import { Link } from 'react-router-dom';
import "./GalleryHouses.scss";
// const button=()=>{
//   <Link to='/Houses/:'+{houses._id} ></Link>
// }
let id='';
function GalleryHouses({list2}) {
  return (
    <div className='div-padre'>
    {list2.map((houses, index) => (
        <figure className='card' key={index}>
        {houses.image ?<Link to={`/Houses/${houses.name}`} > <img className='img-house' src={houses.image} alt="houses"/> </Link>:<img className='img-house'  src='https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f6e1.png' alt="houses"/> }
          <div> <p>{houses.name}</p>
           <p>{houses.sigil}</p></div>  
        </figure>
    ) )}
    </div>
  )
}

export default GalleryHouses
