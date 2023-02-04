import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import GalleryHouses from '../../components/Gallery/GalleryHouses/GalleryHouses'
import { useNavigate, useParams } from "react-router-dom"; 
import GalleryCharacterDetail from '../../components/Gallery/GalleryCharacterDetail/GalleryCharacterDetail.jsx'

const CharacterDetail = () => {
  const name = useParams().name
  console.log('hola guapi',name);

  const [Character, setCharacter] = useState([]);
  const DB_URL = `https://api.got.show/api/book/Characters/${name}`;
  const getCharacter = async () => {
    const res = await axios.get(DB_URL);
    console.log('character unico',res.data);
   setCharacter(res.data)
}
useEffect(() => getCharacter, [])

  return (
    <div>
    <GalleryCharacterDetail list5={Character}></GalleryCharacterDetail>
    
    </div>
  )
}

export default CharacterDetail